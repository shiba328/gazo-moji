
import { useFiles } from '@/composables/state/Default'
import {
  useCanvasCrop,
  useCanvasSize
} from '@/composables/state/Tool'

export const useMain = () => {
  //
  const dragover = ref(false)
  const isPreview = ref(false)
  //
  const onDrag = () => useDrag(dragover)
  const onDrop = () => useUpload()
  const onChange = (e: Event) => useUpload()(e)
  const onTogglePreview = () => {
    isPreview.value = !isPreview.value
    useMeta({
      bodyAttrs: { class: isPreview.value ? 'isDialog' : '' }
    })
  }

  const canvasCrop = useCanvasCrop()
  const canvasSize = useCanvasSize()

  const getCanvasWidth = () => canvasCrop.value ? canvasSize.value + 'px' : 'auto'

  const useUpload = () => {
    const files = useFiles()
    return (e) => {
      const tmpfiles = e.dataTransfer ? e.dataTransfer.files : e.target.files
      const res: File[] = Array.from(tmpfiles).filter((v:File) => v.type.match(/image/)) as File[]
      files.value.push(...getFiles(res))
    }
  }

  const useDrag = (dragover) => {
    return (flg: boolean) => {
      dragover.value = flg
    }
  }

  const getFiles = (files:File[]): string[] => {
    return files.map(file => URL.createObjectURL(file))
  }

  return {
    onDrag,
    onDrop,
    onChange,
    onTogglePreview,
    dragover,
    isPreview,
    getCanvasWidth
  }
}
