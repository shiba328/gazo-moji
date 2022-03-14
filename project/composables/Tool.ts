import { Ref } from 'vue'
import {
  mdiMoveResize,
  mdiFormatColorFill,
  mdiPalette,
  mdiViewGridPlus,
  mdiArrowExpandHorizontal,
  mdiFormatFontSizeIncrease,
  mdiFormatAlignLeft,
  mdiFormatAlignCenter,
  mdiFormatAlignRight,
  mdiFormatVerticalAlignTop,
  mdiFormatVerticalAlignCenter,
  mdiFormatVerticalAlignBottom,
  mdiFormatBold,
  mdiInvertColorsOff,
  mdiImageSizeSelectLarge
} from '@mdi/js'

import ToolBarToggle from '@/components/ToolBarToggle'
import ToolBarBtn from '@/components/ToolBarBtn'

import {
  useCanvasSize,
  useCanvasCrop,
  useBgColor,
  useGridCount,
  useGridGap,
  useGridPos,
  useFontSize,
  useFontPos,
  useFontBold,
  useFontColor,
  useBgTrans
} from '~~/project/composables/state/Tool'

export interface IFItem {
  value: string
  icon: string
}

export interface IFAttr {
  type: string
  class?: string
  min?: string
  step?: string
  checked?: null | true
  inputmode?: string
}

export type TYPES = 'btn' | 'comp' | 'toggle'

export interface IFTool {
  key: string
  components: object | string
  apply: (e: MouseEvent | Event | string | boolean) => void
  value?: Ref
  attr?: IFAttr
  icon?: string
  state?: Ref
  items?: IFItem[]
  type?: TYPES
  disabled?: Ref
}

export interface IFToolBar {
  key: string
  label: string
  tools: IFTool[]
}

function useToolCanvas (): IFTool[] {
  const canvasSize = useCanvasSize()
  const canvasCrop = useCanvasCrop()
  return [
    {
      key: 'canvasSize',
      icon: mdiMoveResize,
      attr: {
        type: 'number',
        class: 'w4em ml-1',
        min: '0',
        step: '100',
        inputmode: 'numeric'
      },
      components: 'input',
      disabled: canvasCrop,
      value: canvasSize,
      apply: (e: MouseEvent | Event) => {
        canvasSize.value = (e.target as HTMLInputElement).value
      }
    },
    {
      key: 'canvasCrop',
      icon: mdiImageSizeSelectLarge,
      components: ToolBarBtn,
      state: canvasCrop,
      type: 'btn',
      apply: (e: boolean) => {
        canvasCrop.value = e
      }
    }
  ]
}

function useToolBg (): IFTool[] {
  const bgColor = useBgColor()
  const bgTrans = useBgTrans()
  return [
    {
      key: 'bgColor',
      icon: mdiFormatColorFill,
      attr: {
        type: 'color',
        class: 'ml-1'
      },
      components: 'input',
      disabled: bgTrans,
      value: bgColor,
      apply: (e: MouseEvent | Event) => {
        bgColor.value = (e.target as HTMLInputElement).value
      }
    },
    {
      key: 'bgTrans',
      icon: mdiInvertColorsOff,
      components: ToolBarBtn,
      state: bgTrans,
      type: 'btn',
      apply: (e: boolean) => {
        bgTrans.value = e
      }
    }
  ]
}

function useToolReturn (): IFTool[] {
  const gridCount = useGridCount()
  return [
    {
      key: 'gridCount',
      icon: mdiViewGridPlus,
      attr: {
        type: 'number',
        class: 'w3em ml-1',
        min: '1',
        step: '1'
      },
      components: 'input',
      value: gridCount,
      apply: (e: MouseEvent | Event) => {
        gridCount.value = (e.target as HTMLInputElement).value
      }
    }
  ]
}

function useToolGap (): IFTool[] {
  const gridGap = useGridGap()
  return [
    {
      key: 'gridGap',
      icon: mdiArrowExpandHorizontal,
      attr: {
        type: 'number',
        class: 'w3em ml-1',
        min: '0',
        step: '16'
      },
      components: 'input',
      value: gridGap,
      apply: (e: MouseEvent | Event) => {
        gridGap.value = (e.target as HTMLInputElement).value
      }
    }
  ]
}

function useToolPos (): IFTool[] {
  const gridPos = useGridPos()
  return [
    {
      key: 'gridPos',
      components: ToolBarToggle,
      state: gridPos,
      items: [
        {
          value: 'flex-start',
          icon: mdiFormatVerticalAlignTop
        },
        {
          value: 'center',
          icon: mdiFormatVerticalAlignCenter
        },
        {
          value: 'flex-end',
          icon: mdiFormatVerticalAlignBottom
        }
      ],
      type: 'toggle',
      apply: (e: string) => {
        gridPos.value = e
      }
    }
  ]
}

function useToolFont (): IFTool[] {
  const fontPos = useFontPos()
  const fontSize = useFontSize()
  const fontColor = useFontColor()
  const fontBold = useFontBold()
  return [
    {
      key: 'fontSize',
      icon: mdiFormatFontSizeIncrease,
      attr: {
        type: 'number',
        class: 'w3em ml-1',
        min: '10',
        step: '4'
      },
      components: 'input',
      value: fontSize,
      apply: (e: MouseEvent | Event) => {
        fontSize.value = (e.target as HTMLInputElement).value
      }
    },
    {
      key: 'fontBold',
      icon: mdiFormatBold,
      components: ToolBarBtn,
      state: fontBold,
      type: 'btn',
      apply: (e: boolean) => {
        fontBold.value = e
      }
    },
    {
      key: 'fontPos',
      components: ToolBarToggle,
      state: fontPos,
      items: [
        {
          value: 'left',
          icon: mdiFormatAlignLeft
        },
        {
          value: 'center',
          icon: mdiFormatAlignCenter
        },
        {
          value: 'right',
          icon: mdiFormatAlignRight
        }
      ],
      type: 'toggle',
      apply: (e: string) => {
        fontPos.value = e
      }
    },
    {
      key: 'fontColor',
      icon: mdiPalette,
      attr: {
        type: 'color'
      },
      components: 'input',
      value: fontColor,
      apply: (e: MouseEvent | Event) => {
        fontColor.value = (e.target as HTMLInputElement).value
      }
    }
  ]
}

export function useTools (): IFToolBar[] {
  return [
    {
      key: 'canvas',
      label: 'キャンバス',
      tools: useToolCanvas()
    },
    {
      key: 'bgColor',
      label: '背景',
      tools: useToolBg()
    },
    {
      key: 'return',
      label: '折返し',
      tools: useToolReturn()
    },
    {
      key: 'gridGap',
      label: '隙間',
      tools: useToolGap()
    },
    {
      key: 'gridPos',
      label: '配置',
      tools: useToolPos()
    },
    {
      key: 'font',
      label: 'フォント',
      tools: useToolFont()
    }
  ]
}
