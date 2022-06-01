import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import '@/assets/style/index.scss';
import App from './App.vue'
import router from '@/router/index';

const app = createApp(App);

app.use(router).use(ElementPlus).mount('#app')