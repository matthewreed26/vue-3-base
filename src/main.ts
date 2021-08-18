import { createApp } from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import router from './routes';
import { AppVue } from './inputs/app';

createApp(AppVue)
  .use(VueAxios, axios)
  .use(router)
  .mount('#app');
