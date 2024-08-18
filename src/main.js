import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';  // Import store if using Vuex

createApp(App)
  .use(router)
  .use(store)  // Add this if using Vuex
  .mount('#app');
