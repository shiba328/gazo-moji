const useFiles = () => useState<string[]>('files', () => [])
const useIsDialog = () => useState<boolean>('isDialog', () => false)
const useIsHelp = () => useState<boolean>('isHelp', () => false)
const useDownloadImg = () => useState<string>('downloadImage', () => '')
const useImgDom = () => useState<string>('imgDom', () => '')

export {
  useImgDom,
  useFiles,
  useIsDialog,
  useIsHelp,
  useDownloadImg
}
