<template>
  <div
    class="imgitem"
    @mouseenter.self="onHover(true)"
    @mouseleave.self="onHover(false)"
    @click="onHover(!isShow)"
  >
    <div class="img">
      <div
        v-show="isShow"
        class="tools"
      >
        {{ index + 1 }}.
        <TheIcon
          v-show="total !== 1"
          :path="mdiArrowLeftBoldCircleOutline"
          :class="{'isMin': index === 0}"
          size="40px"
          class="btn move"
          @click.stop="onClick('prev')"
        />
        <TheIcon
          :path="mdiCloseCircleOutline"
          size="40px"
          class="btn remove"
          @click.stop="$emit('remove', index)"
        />
        <TheIcon
          v-show="total !== 1"
          :path="mdiArrowRightBoldCircleOutline"
          :class="{'isMax': index === total - 1}"
          size="40px"
          class="btn move"
          @click.stop="onClick('next')"
        />
      </div>
      <img :src="src">
    </div>
    <div
      :class="{'hover': isShow}"
      class="caption"
      contenteditable="true"
    />
  </div>
</template>

<script setup lang="ts">
import { mdiCloseCircleOutline, mdiArrowRightBoldCircleOutline, mdiArrowLeftBoldCircleOutline } from '@mdi/js'
import TheIcon from '@/components/TheIcon'
import { DIRECS } from '@/composables/Item'

const props = withDefaults(defineProps<{
  src: string
  index: number
  total: number
}>(), {
  src: '',
  index: 0,
  total: 1
})
const emit = defineEmits(['sort', 'remove'])

const createItem = useItem({ props, emit })
const isShow = createItem.isShow
const onHover = (flg: boolean) => createItem.onHover(flg)
const onClick = (direc: DIRECS) => createItem.onClick(direc)
</script>

<style lang="scss" scoped>
@import "@/assets/main.scss";
.imgitem {
  position: relative;
}
.tools {
  position: absolute;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  top: 50%;
  z-index: 2;
  margin-top: -20px;
  width: 100%;
  filter: drop-shadow(0 0 10px $barShadowColor);
}
.btn {
  background-color: #fff;
  border-radius: 50%;
  cursor: pointer;
  line-height: 1;
}
.isMax,
.isMin {
  opacity: 0.3;
  cursor: unset;
}
.img {
  position: relative;
  img {
    display: block;
    line-height: 0;
    margin: auto;
  }
  &::after {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
  &:hover::after {
    border: 3px dashed #fff;
  }
  &:hover{
    filter: drop-shadow(0 0 20px $barShadowColor);
  }
}
.caption {

  &.hover {
    outline: -webkit-focus-ring-color auto 1px;
  }
}
</style>
