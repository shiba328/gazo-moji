const useFiles = () => useState<string[]>('files', () => [])
const useIsPreview = () => useState<boolean>('preview', () => false)
const useIsDialog = () => useState<boolean>('isDialog', () => false)
const useIsHelp = () => useState<boolean>('isHelp', () => false)
const useDownloadImg = () => useState<string>('downloadImage', () => '')
const useImgDom = () => useState<string>('imgDom', () => '')

export {
  useImgDom,
  useFiles,
  useIsPreview,
  useIsDialog,
  useIsHelp,
  useDownloadImg
}
