import { createApp } from 'vue';
import router from './routes';
import { AppVue } from './inputs/app';

createApp(AppVue)
  .use(router)
  .mount('#app');
