import { defineStore } from 'pinia';

// import type { MenuTheme } from 'ant-design-vue';
interface IUserInfo {
  username: string;
}
export const useRootStore = defineStore('root', {
  state: () => ({
    theme: 'dark',
    userinfo: {} as IUserInfo
  }),
  getters: {

  },
  actions: {
    setTheme(theme: string) {
      this.theme = theme;
    },
    // 更新用户信息
    setUserinfo(data: IUserInfo) {
      this.userinfo = data;

    },
    getUserinfo() {
      this.setUserinfo({
        username: 'admin'
      });
    }
  }
});
export const resetRootStore = useRootStore().$reset();
