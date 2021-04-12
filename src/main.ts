import { createApp } from 'vue';
import { AppVue } from './inputs/app';
import router from './routes';

createApp(AppVue)
  .use(router)
  .mount('#app');
