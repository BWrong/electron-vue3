<template>
  <n-config-provider :theme="darkTheme" :locale="zhCN" :date-locale="dateZhCN">
    <n-message-provider>
      <router-view v-slot="{ Component }">
        <component :is="Component" />
      </router-view>
    </n-message-provider>
  </n-config-provider>
</template>
<script setup lang="ts">
import { zhCN, dateZhCN, darkTheme } from 'naive-ui';


</script>
