<template>
    <div class="product-list">
      <h2>Products</h2>
      <ul>
        <li v-for="product in allProducts" :key="product.id">
          <h3>{{ product.name }}</h3>
          <p>Price: ${{ product.price }}</p>
          <router-link :to="`/product/${product.id}`" class="btn">View Details</router-link>
          <button @click="addToCart(product)" class="btn">Add to Cart</button>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import { mapGetters, mapActions } from 'Vue';
  
  export default {
    computed: {
      ...mapGetters(['allProducts']),
    },
    methods: {
      ...mapActions(['addToCart']),
    },
    created() {
      this.$store.dispatch('fetchProducts');
    },
  };
  </script>
  
  <style scoped>
  .product-list ul {
    list-style-type: none;
    padding: 0;
  }
  
  .product-list li {
    margin-bottom: 20px;
    border-bottom: 1px solid #ccc;
    padding-bottom: 10px;
  }
  .btn {
    background-color: #c75233;
    color: #fff;
    padding: 10px;
    text-decoration: none;
    border-radius: 5px;
    margin-right: 10px;
    cursor: pointer;
  }
  </style>
  