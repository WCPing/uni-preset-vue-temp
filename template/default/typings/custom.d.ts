import Vue from 'vue'

interface HdShowToastOptions {
  /**
   * 提示的内容
   */
  title?: string
  /**
   * 图标
   * - success: 显示成功图标
   * - loading: 显示加载图标
   * - none: 不显示图标
   */
  icon?: 'success' | 'loading' | 'none' | 'warning' | 'error'
  /**
   * 自定义图标的本地路径，image 的优先级高于 icon
   */
  image?: string
  /**
   * 提示的延迟时间，单位毫秒，默认：1500
   */
  duration?: number
  /**
   * 是否显示透明蒙层，防止触摸穿透，默认：false
   */
  mask?: boolean
  /**
   * 接口调用成功的回调函数
   */
  success?: (result: any) => void
  /**
   * 接口调用失败的回调函数
   */
  fail?: (result: any) => void
  /**
   * 接口调用结束的回调函数（调用成功、失败都会执行）
   */
  complete?: (result: any) => void
}

declare module 'vue/types/vue' {
  interface Vue {
    $showModal(options?: any): void

    $showLoading(options?: any): void

    $hideLoading(): void

    $showToast(options?: any): void

    $hideToast(): void

    $showPopup(options?: any): void

    $popupStore: any
  }
}
