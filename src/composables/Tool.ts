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
  mdiInvertColorsOff
} from '@mdi/js'

import ToolBarToggle from '@/components/ToolBarToggle'
import ToolBarFont from '@/components/ToolBarFont'
import ToolBarBg from '@/components/ToolBarBg'
import ToolBarBtn from '@/components/ToolBarBtn'

import {
  useCanvasSize,
  useBgColor,
  useGridCount,
  useGridGap,
  useGridPos,
  useFontSize,
  useFontPos,
  useFontBold,
  useFontColor,
  useBgTrans
} from '@/composables/State'

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
}

export interface IFTool {
  key: string
  label?: string
  components: object | string
  icon?: string
  attr?: IFAttr
  value?: string
  state?: Ref
  apply?: (e: MouseEvent | Event | string | boolean) => void
  update?: () => void
  items?: IFItem[]
  type?: string
}

export function useToolFont (): IFTool[] {
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
      value: fontSize.value,
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
      value: fontColor.value,
      apply: (e: MouseEvent | Event) => {
        fontColor.value = (e.target as HTMLInputElement).value
      }
    }
  ]
}

export function useToolBg (): IFTool[] {
  const bgColor = useBgColor()
  const bgTrans = useBgTrans()
  return [
    {
      key: 'bgColor',
      label: '背景',
      icon: mdiFormatColorFill,
      attr: {
        type: 'color',
        class: 'ml-1'
      },
      components: 'input',
      value: bgColor.value,
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

export function useTools (): IFTool[] {
  const canvasSize = useCanvasSize()
  const gridCount = useGridCount()
  const gridGap = useGridGap()
  const gridPos = useGridPos()

  return [
    {
      key: 'canvasSize',
      label: '幅',
      icon: mdiMoveResize,
      attr: {
        type: 'number',
        class: 'w4em ml-1',
        min: '0',
        step: '100'
      },
      components: 'input',
      value: canvasSize.value,
      apply: (e: MouseEvent | Event) => {
        canvasSize.value = (e.target as HTMLInputElement).value
      }
    },
    {
      key: 'bgColor',
      label: '背景',
      components: ToolBarBg,
      type: 'comp'
    },
    {
      key: 'gridCount',
      label: '折返し',
      icon: mdiViewGridPlus,
      attr: {
        type: 'number',
        class: 'w3em ml-1',
        min: '1',
        step: '1'
      },
      components: 'input',
      value: gridCount.value,
      apply: (e: MouseEvent | Event) => {
        gridCount.value = (e.target as HTMLInputElement).value
      }
    },
    {
      key: 'gridGap',
      label: '隙間',
      icon: mdiArrowExpandHorizontal,
      attr: {
        type: 'number',
        class: 'w3em ml-1',
        min: '0',
        step: '16'
      },
      components: 'input',
      value: gridGap.value,
      apply: (e: MouseEvent | Event) => {
        gridGap.value = (e.target as HTMLInputElement).value
      }
    },
    {
      key: 'gridPos',
      label: '配置',
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
    },
    {
      key: 'font',
      label: 'フォント',
      components: ToolBarFont,
      type: 'comp'
    }
  ]
}
