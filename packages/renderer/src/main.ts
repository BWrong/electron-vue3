import { createApp } from 'vue'
import { createPinia } from 'pinia';
import '@/assets/styles/common.less';
import router from './router';
import App from './App.vue'
import { electronApi } from './utils/electronApi';
const app = createApp(App);
app.use(router);
app.use(createPinia());
app.mount('#app').$nextTick(electronApi?.removeLoading)
