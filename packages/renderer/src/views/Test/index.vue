<template>
  <div class="content-box">
    <!-- <a-button @click="sendIpc" type="primary" ghost>发送ipc消息</a-button> -->
    <n-button @click="hideTray">隐藏tray</n-button>
    <n-button @click="showTray">显示tray</n-button>
    <n-button @click="notification">通知</n-button>
    <n-button @click="handleProgress">进度条</n-button>
    <div class="bg-black text-red-100 border-yellow-500 transform-gpu">123</div>
  </div>
</template>

<script lang="ts" setup>
import { ipcRenderer } from 'electron';
// 向主进程发送消息
const sendIpc = () => {
  ipcRenderer.send('message', '我是渲染进程发来的信息');
  ipcRenderer.on('reMessage', (event, data) => {
    // message.destroy();
    // message.info(data);
  });
};
const hideTray = () => ipcRenderer.send('hideTray');
const showTray = () => ipcRenderer.send('showTray');
const notification = () => {
  const myNotification = new Notification('通知', {
    body: '这是渲染进程发的通知'
  });
  myNotification.onclick = () => {
    console.log('Notification clicked');
  };
  setTimeout(() => {
    ipcRenderer.send('show-notification');
  }, 2000);
};
function handleProgress(){
  ipcRenderer.send('set-progress',Math.random()*100);
  setTimeout(() => {
    ipcRenderer.send('remove-progress');
  }, 5000);
}
</script>

<style scoped></style>
