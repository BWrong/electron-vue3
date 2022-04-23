<template>
  <div class="content-box">
    <div class="about">
      <img class="logo" src="../assets/images/logo.png" />
      <div class="appname">{{ appName }}</div>
      <div class="slogan"></div>
      <ul class="txt">
        <li>
          软件版本：<span>{{ versions.appVersion }}</span>
        </li>
        <li>
          Electron：<span>{{ versions.electron }}</span>
        </li>
        <li>
          Chrome：<span>{{ versions.chrome }}</span>
        </li>
        <li>
          NodeJs：<span>{{ versions.node }}</span>
        </li>
        <li>
          V8：<span>{{ versions.v8 }}</span>
        </li>
      </ul>
      <div class="btn">
        <a @click="update">检测更新</a>
        <a @click="openLog">更新日志</a>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { reactive, ref } from 'vue';
import { electronApi } from '@/utils/electronApi';
const appName = ref('');
let versions = reactive<any>({});
electronApi.getAppInfo().then((info:any) => {
  appName.value = info.name;
  Object.assign(versions, info.versions);
})
 const openLog = () => {
  electronApi.openUrlWithBrowser('https://www.bwrong.co');
};
const update = () => {
  electronApi.checkUpdate();
};
</script>
<style lang="less" scoped>
.about {
  padding-top: 4%;
  text-align: center;
  position: relative;
  height: calc(100vh - 4%);
  overflow: hidden;
  .logo {
    margin: 30px auto 10px;
    width: 100px;
    display: block;
  }
  .appname {
    color: #999;
    font-size: 14px;
    margin-bottom: 20px;
  }
  ul {
    padding: 0;
    margin: 0 auto;
    list-style: none;
    li {
      font-size: 12px;
      line-height: 2;
      color: #777;
    }
  }
  .btn {
    margin-top: 20px;
    a {
      display: inline-block;
      color: @primary-color;
      cursor: pointer;
      font-size: 14px;
      margin: 0 10px;
    }
  }
}
</style>
