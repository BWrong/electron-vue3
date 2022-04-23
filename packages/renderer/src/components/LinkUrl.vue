<template>
  <span @click="openUrl(props.url)">
    <slot></slot>
  </span>
</template>

<script lang="ts" setup>
import { electronApi } from '../utils/electronApi';

interface IProps {
  url: string;
}
const props = defineProps<IProps>();
const openUrl = (url: string) => electronApi.openUrlWithBrowser(url);
</script>
