<template>
  <div class="content-box">
    <n-space>
      <n-button @click="hideTray">隐藏托盘图标</n-button>
      <n-button @click="showTray">显示托盘图标</n-button>
      <n-button @click="notification">通知</n-button>
      <n-button @click="handleProgress">Dock进度条</n-button>
      <n-button @click="handleTheme('dark')">深色模式</n-button>
      <n-button @click="handleTheme('light')">浅色模式</n-button>
    </n-space>
  </div>
</template>

<script lang="ts" setup>
import { NativeTheme } from 'electron';
import { electronApi } from '@/utils/electronApi';

const hideTray = () => electronApi.hideTray();
const showTray = () => electronApi.showTray();
const notification = () => {
  const myNotification = new Notification('通知', {
    body: '这是渲染进程发的通知'
  });
  myNotification.onclick = () => {
    console.log('Notification clicked');
  };
};
function handleProgress() {
  electronApi.setProgress(Math.random() * 100);
  setTimeout(() => {
    electronApi.removeProgress()
  }, 5000);
}

function handleTheme(theme: NativeTheme["themeSource"]) {
  electronApi.setTheme(theme);
}
</script>

<style scoped></style>
