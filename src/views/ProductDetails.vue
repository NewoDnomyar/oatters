<template>
    <div class="product-details">
      <h2>{{ product.name }}</h2>
      <p>Price: ${{ product.price }}</p>
      <p>{{ product.description }}</p>
      <button @click="addToCart(product)" class="btn">Add to Cart</button>
    </div>
  </template>
  
  <script>
  import { mapActions, mapGetters } from '';
  Vue
  export default {
    data() {
      return {
        product: {},
      };
    },
    computed: {
      ...mapGetters(['allProducts']),
    },
    methods: {
      ...mapActions(['addToCart']),
      fetchProduct() {
        const productId = this.$route.params.id;
        this.product = this.allProducts.find((p) => p.id == productId);
      },
    },
    created() {
      this.fetchProduct();
    },
  };
  </script>
  
  <style scoped>
  .btn {
    background-color: #c75233;
    color: #fff;
    padding: 10px;
    text-decoration: none;
    border-radius: 5px;
    cursor: pointer;
  }
  </style>
  