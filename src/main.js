import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import dynamicCacheRouter from 'vue-router-dynamic-cache';
// import store from './store';

const { cacheRouter, store } = dynamicCacheRouter(router);
const app = createApp(App);
// app.use(cacheRouter).use(store);
app.use(router).use(store);
app.mount('#app');
