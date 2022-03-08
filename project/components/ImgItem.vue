<template>
  <div
    class="imgitem"
    @mouseenter.self="hover(true)"
    @mouseleave.self="hover(false)"
  >
    <div class="img">
      <div
        v-show="isShow"
        class="tools flex nowrap items-center justify-center"
      >
        <TheIcon
          v-show="total !== 1"
          :path="mdiArrowLeftBoldCircleOutline"
          :class="{'isMin': index === 0}"
          size="40px"
          class="btn move"
          @click.stop="$emit('sort', { direc: 'prev', index })"
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
          @click.stop="$emit('sort', { direc: 'next', index })"
        />
      </div>
      <img :src="src">
    </div>
    <div
      class="caption"
      contenteditable="true"
    />
  </div>
</template>

<script setup lang="ts">
import { mdiCloseCircleOutline, mdiArrowRightBoldCircleOutline, mdiArrowLeftBoldCircleOutline } from '@mdi/js'
import TheIcon from '@/components/TheIcon'
withDefaults(defineProps<{
  src: string
  index: number
  total: number
}>(), {
  src: '',
  index: 0,
  total: 1
})
const isShow = ref(false)
const hover = (flg) => {
  isShow.value = flg
}
</script>

<style lang="scss" scoped>
@import "@/assets/main.scss";
.imgitem {
  position: relative;
}
.tools {
  position: absolute;
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
  line-height: 1;
}
</style>
