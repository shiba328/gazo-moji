const useCanvasSize = () => useState<string>('canvasSize', () => '640')
const useCanvasCrop = () => useState<boolean>('canvasCrop', () => true)
const useGridCount = () => useState<string>('gridCount', () => '1')
const useGridGap = () => useState<string>('gridGap', () => '16')
const useGridPos = () => useState<string>('gridPos', () => 'center')
const useFontSize = () => useState<string>('fontSize', () => '24')
const useFontBold = () => useState<boolean>('fontBold', () => false)
const useFontPos = () => useState<string>('fontPos', () => 'center')
const useBgColor = () => useState<string>('bgColor', () => '#FFFFFF')
const useFontColor = () => useState<string>('fontColor', () => '#000000')
const useFiles = () => useState<string[]>('files', () => [])
const useIsPreview = () => useState<boolean>('preview', () => false)
const useDownloadImg = () => useState<string>('downloadImage', () => '')
const useImgDom = () => useState<string>('imgDom', () => '')
const useBgTrans = () => useState<boolean>('bgTrans', () => false)
const useIsHelp = () => useState<boolean>('isHelp', () => false)
const useIsDialog = () => useState<boolean>('isDialog', () => false)

export {
  useCanvasSize,
  useCanvasCrop,
  useGridCount,
  useGridGap,
  useGridPos,
  useFontSize,
  useFontBold,
  useFontPos,
  useBgColor,
  useFontColor,
  useFiles,
  useIsPreview,
  useDownloadImg,
  useImgDom,
  useBgTrans,
  useIsHelp,
  useIsDialog
}
