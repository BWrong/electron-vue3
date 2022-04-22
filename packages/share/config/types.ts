
export type TThemeName = 'light' | 'dark' | 'system';
export interface ITheme {
  icon: string;
  next: string;
  title: string;
  name: string;
}
export type TThemeList = { [key in TThemeName]: ITheme };
export interface ISetting{
  theme: TThemeName,
  autoUpdate: boolean
}
export interface IAppSetting{
  setting: ISetting,
  deploys: IDeploy[]
}
export interface IDeployMode{
  name: string,
  script?: string,
  host: string,
  port: number,
  username: string,
  password?: string,
  distPath: string,
  webDir: string,
  backupDir?: string
}
export interface IDeploy{
  name: string,
  path: string,
  lastTime?: string,
  id?: number,
  modes: IDeployMode[]
}
