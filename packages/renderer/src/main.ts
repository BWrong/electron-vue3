import { createApp } from 'vue'
import { createPinia } from 'pinia';
import '@/assets/styles/common.less';
import router from './router';
import App from './App.vue'
const app = createApp(App);
app.use(router);
app.use(createPinia());
app.mount('#app').$nextTick(window?.electronApi?.removeLoading)
