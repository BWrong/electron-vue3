<template>
  <div class="sider">
    <img class="logo" src="../assets/images/logo.png" alt="" />
    <div class="menu">
      <router-link class="menu-item" v-for="(item, index) in menu" :key="index" :to="item.link">
        <IconFont :type="item.icon" fontSize="16px"></IconFont>
        <span class="title">{{ item.title }}</span>
      </router-link>
    </div>
    <div class="setting-bar">
      <IconFont type="setting" @click="handleSetting"></IconFont>
      <IconFont type="website" @click="handleWebsit"></IconFont>
      <IconFont type="github" @click="handleGithub"></IconFont>
      <n-popover>
        <template #trigger>
          <IconFont :type="themeObj.icon" @click="handleTheme" />
        </template>
        <span>{{ themeObj.title }}</span>
      </n-popover>
    </div>
  </div>
</template>
<script lang="tsx" setup>
import { electronApi } from '@/utils/electronApi';
import { computed, ref } from '@vue/reactivity';
import { NativeTheme } from 'electron';
import { useRouter } from 'vue-router';

const menu = [
  {
    title: '主页',
    link: '/home',
    icon: 'home'
  },
  {
    title: '关于',
    link: '/about',
    icon: 'about'
  }
];
const router = useRouter();
const handleSetting = () => router.push('/setting');
const handleWebsit = () => electronApi.openUrlWithBrowser('https://www.brwong.co');
const handleGithub = () => electronApi.openUrlWithBrowser('https://github.com/BWrong/electron-vue3');
const themeList = {
  system: {
    icon: 'system',
    next: 'light',
    title: '跟随系统',
    name: 'system'
  },
  light: {
    icon: 'light',
    next: 'dark',
    title: '明亮模式',
    name: 'light'
  },
  dark: {
    icon: 'dark',
    next: 'system',
    title: '暗黑模式',
    name: 'dark'
  }
};
let theme = ref<NativeTheme['themeSource']>('system');
const themeObj = computed(() => themeList[theme.value]);
electronApi.getTheme().then((name: NativeTheme['themeSource']) => {
  theme.value = name;
});
function handleTheme() {
  electronApi.setTheme(themeObj.value.next as NativeTheme['themeSource']).then((res) => {
    theme.value = res.themeSource;
  });
}
</script>
<style lang="less" scoped>
@sider-bg: #f0f0f0;
.sider {
  width: 200px;
  flex: 0 0 200px;
  overflow-y: auto;
  padding: 12px;
  background-color: @sider-bg;
  position: relative;
  box-sizing: border-box;
  .logo {
    width: 80px;
    display: block;
    margin: 40px auto;
  }
}
.menu {
  .menu-item {
    display: flex;
    text-align: left;
    line-height: 2.4;
    font-size: 13px;
    color: @text-color;
    margin: 10px auto;
    border-radius: 6px;
    outline: none;
    text-decoration: none;
    align-items: center;
    justify-content: flex-start;
    padding-left: 2em;
    font-weight: bold;
    &.router-link-active {
      background: linear-gradient(120deg, @primary-secondary-color, @primary-color);
      color: #eee !important;
    }
    &:hover {
      color: @primary-color;
    }
    .title {
      width: 5em;
      display: inline-block;
      // text-align-last: justify;
      margin-left: 1em;
      letter-spacing: 3px;
      // margin-left: 8px;
    }
  }
}
.setting-bar {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
  font-size: 16px;
  border-top: 1px solid rgba(#999, 0.2);

  & > span {
    margin: 8px;
    cursor: pointer;
    color: #999;
    transition: color 0.5s ease;
    &:hover {
      color: @primary-color;
    }
  }
}
@media (prefers-color-scheme: dark) {
  .sider {
    background-color: #171718;
  }

  .menu {
    .menu-item {
      color: #aaa;
    }
  }
}
</style>
