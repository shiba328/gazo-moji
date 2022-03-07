<template>
  <div
    class="preview dialog"
    @click.self="close()"
  >
    <div class="card flex column justify-center">
      <div class="card-header flex justify-end">
        <TheIcon
          :path="mdiCloseCircleOutline"
          size="40px"
          color="#fff"
          @click.stop="close()"
        />
      </div>
      <div class="card-text pa-3 text-center">
        <img id="img" :src="downloadImg" @load="loaded">
      </div>
      <div class="card-action flex">
        <div class="bg flex items-center px-2">
          サイズ: {{ imgDom }}
        </div>
        <div class="bg ml-auto pa-1">
          <TheButton class="btn" @click.stop="download">
            <TheIcon :path="mdiDownload" />
            <span>保存</span>
          </TheButton>
        </div>
      </div>
      <div
        v-if="isSave"
        class="save flex justify-center items-center"
      >
        <div class="inner">
          <div>
            \ 保存したらSNSで紹介してください /
          </div>
          <p>
            <span>「画像結合」を</span>
            <span>ぜひシェアお願いします。</span>
          </p>
          <div class="flex justify-center items-center">
            <TheButton class="button btn mr-2" @click.stop="copy">
              <a class="flex link items-center" href="https://twitter.com/intent/tweet?text=&amp;hashtags=画像くっつけたー&amp;url=https://shiba328.github.io/join-images/&amp;screen_name=pictcolla" target="_blank">
                <TheIcon :path="mdiTwitter" class="mr-1" />
                <span>シェア</span>
              </a>
            </TheButton>
            <TheButton class="btn" @click.stop="copy">
              <span>URLコピー</span>
            </TheButton>
          </div>
          <div
            v-if="isCopy"
            class="mt-2"
          >
            クリップボードにコピーしました。
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { mdiCloseCircleOutline, mdiDownload, mdiTwitter } from '@mdi/js'
import TheButton from './TheButton.vue'
import TheIcon from '@/components/TheIcon'
import { useDownloadImg } from '@/composables/state/Default'

import { useClose, useLoaded, useCopy } from '@/composables/Preview'

const downloadImg = useDownloadImg()
const imgDom = ref('')
const isSave = ref(false)
const isCopy = ref(false)

const close = () => useClose()
const loaded = () => { imgDom.value = useLoaded() }
const download = () => { isSave.value = useDownload() }
const copy = () => { isCopy.value = useCopy() }
</script>

<style lang="scss" scoped>
@import "@/assets/main.scss";
.card {
  position: relative;
  max-width: 500px;
  min-width: 350px;
  & > * {
    margin: 16px;
    filter: drop-shadow(0 0 20px $barShadowColor);
  }
  & .bg {
    background: #fff;
    border-radius: 6px;
  }
  &-text {
    border: 1px solid #fff;
    border-radius: 6px;
    max-height: 50vh;
    overflow-y: auto;
  }
}
img {
  max-width: 100%;
  height: auto;
}
.btn {
  cursor: pointer;
  border-radius: 4px;

  .link {
    color: currentColor;
    text-decoration: none;
  }
}
.save {
  position: absolute;
  top: 70px;
  left: 0;
  // height: 100%;
  width: 100%;
  margin: 0;

  .inner {
    width: 100%;
    padding: 2em 0;
    text-align: center;
    background: rgb(255 255 255 / 85%);
  }
}
</style>
