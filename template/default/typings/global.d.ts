declare type Nullable<T> = T | null

declare namespace dd {
  function showLoading(options: any): void
  function hideLoading(): void
  function showToast(options: any): void
}

declare module 'lodash/debounce.js'

interface Number {
  scale(n: number): number
}
