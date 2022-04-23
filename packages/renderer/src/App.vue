<template>
  <n-config-provider :theme="theme" :locale="zhCN" :date-locale="dateZhCN">
    <n-message-provider>
      <router-view v-slot="{ Component }">
        <component :is="Component" />
      </router-view>
    </n-message-provider>
  </n-config-provider>
</template>
<script setup lang="ts">
import { zhCN, dateZhCN, darkTheme, useOsTheme } from 'naive-ui';
import { computed } from 'vue';
const osThemeRef = useOsTheme();
const theme= computed(() => (osThemeRef.value === 'dark' ? darkTheme : null))
</script>
