const useBgColor = () => useState<string>('bgColor', () => '#FFFFFF')
const useBgTrans = () => useState<boolean>('bgTrans', () => true)
const useCanvasCrop = () => useState<boolean>('canvasCrop', () => false)
const useCanvasSize = () => useState<string>('canvasSize', () => '640')
const useFontBold = () => useState<boolean>('fontBold', () => false)
const useFontColor = () => useState<string>('fontColor', () => '#000000')
const useFontPos = () => useState<string>('fontPos', () => 'center')
const useFontSize = () => useState<string>('fontSize', () => '24')
const useGridCount = () => useState<string>('gridCount', () => '1')
const useGridGap = () => useState<string>('gridGap', () => '16')
const useGridPos = () => useState<string>('gridPos', () => 'center')

export {
  useBgColor,
  useBgTrans,
  useCanvasCrop,
  useCanvasSize,
  useFontBold,
  useFontColor,
  useFontPos,
  useFontSize,
  useGridCount,
  useGridGap,
  useGridPos
}
