import ProductService from '@/services/ProductService';

export default new Vue.Store({
  // ...
  actions: {
    async fetchProducts({ commit }) {
      try {
        const response = await ProductService.getProducts();
        commit('SET_PRODUCTS', response.data);
      } catch (error) {
        console.error('Failed to fetch products:', error);
      }
    },
    // ...
  }
});
