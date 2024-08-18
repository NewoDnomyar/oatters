import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import OattersDesigner from '../components/layout/OattersDesigner.vue';
import Checkout from '../views/Checkout.vue';
import Gallery from '../views/Gallery.vue'; // Make sure this import exists

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/designer', name: 'Designer', component: OattersDesigner },
  { path: '/checkout', name: 'Checkout', component: Checkout },
  { path: '/gallery', name: 'Gallery', component: Gallery } // Ensure this route is defined
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
