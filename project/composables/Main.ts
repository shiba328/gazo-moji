import * as htmlToImage from 'html-to-image'
import { useFiles, useIsPreview, useDownloadImg } from '@/composables/state/Default'

export function useDrag (dragover) {
  return (flg: boolean) => {
    dragover.value = flg
  }
}

export function useDrop () {
  const files = useFiles()
  return (e) => {
    const tmpfiles = e.dataTransfer ? e.dataTransfer.files : e.target.files
    files.value.push(...getFiles(tmpfiles))
  }
}

export function getFiles (files:FileList): string[] {
  return Array.from(files).map(file => URL.createObjectURL(file))
}

export function getPreviewImg () {
  const downloadImg = useDownloadImg()
  const isPreview = useIsPreview()
  isPreview.value = !isPreview.value
  const node = document.getElementById('canvas')

  if (node) {
    return htmlToImage.toPng(node, { pixelRatio: 1 })
      .then((dataUrl) => {
        downloadImg.value = dataUrl
        return {
          code: '200',
          data: 'success'
        }
      })
      .catch((error) => {
        return {
          code: '403',
          data: error
        }
      })
  } else {
    return {
      code: '404',
      data: 'not find'
    }
  }
}
