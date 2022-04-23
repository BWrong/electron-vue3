<template>
  <div class="content-box">
    <div class="page-title">
      <span>设置</span>
      <n-popover placement="left">
        <template #trigger><IconFont type="setting" class="export-icon" @click="handleExport"></IconFont></template>
        导出配置
      </n-popover>
    </div>
    <n-form label-placement="left">
      <n-grid>
        <n-gi :span="14">
          <n-form-item label="自动更新：">
            <n-switch v-model:value="formData.autoUpdate" />
          </n-form-item>
          <n-form-item label="主题偏好：">
            <n-radio-group v-model:value="formData.theme">
              <n-radio :value="key" v-for="(item, key) in themeList" :key="key"> {{ item }} </n-radio>
            </n-radio-group>
          </n-form-item>
        </n-gi>
        <n-gi :span="24" class="split-line"></n-gi>
        <n-gi :span="12" push="2" class="btn-group">
          <n-button size="small" type="primary" @click="handleSubmit">保存</n-button>
        </n-gi>
      </n-grid>
    </n-form>
  </div>
</template>

<script lang="ts" setup>
import { electronApi } from '@/utils/electronApi';
import { useMessage } from 'naive-ui';
import { reactive, toRaw } from 'vue';
const message = useMessage()
const themeList = {
  system: '跟随系统',
  light: '明亮模式',
  dark: '暗黑模式'
};
const formData = reactive({
  autoUpdate: true,
  theme: 'system'
});
electronApi.getStore().then((res) => Object.assign(formData, res));
function handleSubmit() {
  electronApi.setStore(toRaw(formData));
}
function handleExport() {
  electronApi.saveDialog({
    title: '保存配置',
    defaultPath:'config.json'
  }).then(async res=>{
    if(res.canceled) return;
    const filePath = res.filePath;
    const data = await electronApi.getStore();
    const dataStr = JSON.stringify(data)
    electronApi.writeFile(filePath, dataStr).then(()=>{
      message.success('导出成功');
    }).catch(e=>{
      console.log(e);
      message.error('导出失败');
    })
  })
}
</script>

<style scoped lang="less">
.page-title {
  display: flex;
  justify-content: space-between;
  .export-icon{
    cursor: pointer;
  }
}
.btn-group {
  margin-top: 40px;
}
</style>
