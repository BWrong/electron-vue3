<template>
  <div class="content-box">
    home
    <img src="/images/node.png" alt="">
    <n-button @click="handleClick">naive-ui</n-button>
  </div>
</template>

<script setup lang="ts">
import { useMessage } from 'naive-ui';
const message = useMessage();
function handleClick() {
  console.log(2);

  message.info('hello');
}
</script>

<style scoped></style>
