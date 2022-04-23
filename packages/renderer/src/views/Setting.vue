<template>
  <div class="content-box">
    <div class="page-title">设置</div>
    <n-form label-placement="left">
      <n-grid>
        <n-gi :span="14">
          <n-form-item label="自动更新">
            <n-switch v-model:value="formData.autoUpdate" />
          </n-form-item>
          <n-form-item label="主题偏好">
            <n-radio-group v-model:value="formData.theme">
              <n-radio :value="key" v-for="(item,key) in themeList" :key="key"> {{ item }} </n-radio>
            </n-radio-group>
          </n-form-item>
        </n-gi>
        <n-gi :span="24" class="split-line"></n-gi>
        <n-gi :span="12" push="2" class="btn-group">
          <n-button type="primary" @click="handleSubmit">保存</n-button>
        </n-gi>
      </n-grid>
    </n-form>
  </div>
</template>

<script lang="ts" setup>
import { electronApi } from '@/utils/electronApi';
import { reactive, toRaw } from 'vue';
const themeList = {
  system:  '跟随系统',
  light:'明亮模式',
  dark:'暗黑模式'
};
const formData = reactive({
  autoUpdate: true,
  theme: 'system'
});
electronApi.getStore().then((res) => Object.assign(formData, res));
function handleSubmit() {
  electronApi.setStore(toRaw(formData))
}
</script>

<style scoped lang="less">
.btn-group {
  margin-top: 40px;
}
</style>
