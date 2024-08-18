import { createStore } from 'vuex';

export default createStore({
  state: {
    // Your state properties here
  },
  getters: {
    cartItems: state => state.cart.items,  // Example getter
    totalCartPrice: state => state.cart.items.reduce((total, item) => total + item.price, 0),
  },
  mutations: {
    // Your mutations here
  },
  actions: {
    // Your actions here
  },
  modules: {
    // Your modules here
  }
});
