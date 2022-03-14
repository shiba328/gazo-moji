import { useIsPreview, useIsDialog, useDownloadImg } from '@/composables/state/Default'

export function useClose () {
  const isPreview = useIsPreview()
  const isDialog = useIsDialog()

  isPreview.value = false
  isDialog.value = false
}

export function useLoaded (): string {
  const downloadImg = useDownloadImg()
  const img = new Image()
  img.src = downloadImg.value
  const w = img.naturalWidth
  const h = img.naturalHeight

  return `幅:${w}px 高さ:${h}px`
}

export function useDownload () {
  const downloadImg = useDownloadImg()
  const link = document.createElement('a')
  link.download = `compile-image_${new Date().getTime()}.png`
  link.href = downloadImg.value
  link.click()
  return true
}

export function useCopy (): boolean {
  const url = 'https://shiba328.github.io/join-images/'
  navigator.clipboard.writeText(url).then(() => {
    return true
  })
  return true
}
