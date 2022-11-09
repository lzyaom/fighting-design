import type { ExtractPropTypes, PropType } from 'vue'
import { TabsPaneName, TabsPosition, TabsType } from './interface'

export const Props = {
  /**
   * nav所在位置
   */
  position: {
    type: String as PropType<TabsPosition>,
    default: 'top'
  },
  /**
   * 活跃的name
   */
  modelValue: [String, Number] as PropType<TabsPaneName>,
  /**
   * 样式风格
   */
  type: {
    type: String as PropType<TabsType>,
    default: 'line'
  }
} as const

export const Emits = {
  'update:modelValue': (val: String | Number):typeof val => val
} as const

export type TabsPropsType = ExtractPropTypes<typeof Props>

export const TabsProvideKey = Symbol('f-tabs')