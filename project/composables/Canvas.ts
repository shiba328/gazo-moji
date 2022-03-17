import { Ref } from 'vue'
import {
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
} from '@/composables/state/Tool'
import { useFiles } from '@/composables/state/Default'

export const useCanvas = () => {
  const files: Ref<string[]> = useFiles()

  const useSort = ({ direc, index }: {
    direc: string,
    index: number
  }) => {
    const file = files.value
    if (direc === 'prev') {
      file.splice(index - 1, 2, file[index], file[index - 1])
    }
    if (direc === 'next') {
      file.splice(index, 2, file[index + 1], file[index])
    }
  }

  const useRemove = (index: number) => {
    const file = files.value
    file.splice(index, 1)
  }

  const canvasStyle = () => {
    return {
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
  }

  return {
    useSort,
    useRemove,
    files,
    canvasStyle
  }
}
