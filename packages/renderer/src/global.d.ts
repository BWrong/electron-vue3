
export { }

declare global {
  interface Window {
    readonly electronApi: Readonly<typeof import('../../preload/index').exportApis>;
  }
}
