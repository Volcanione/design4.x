import { createApp } from 'vue';
import 'ant-design-vue/dist/reset.css';
import YostarDesign from '@yo-star/yostar-design';
import App from './App.vue';
import router from './router';
import './styles/index.less';

createApp(App).use(router).use(YostarDesign).mount('#app');
