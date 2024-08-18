<template>
    <div class="cart">
      <h2>Your Cart</h2>
      <ul v-if="cartItems.length">
        <li v-for="item in cartItems" :key="item.id">
          <h3>{{ item.name }}</h3>
          <p>Price: ${{ item.price }}</p>
          <button @click="removeFromCart(item.id)" class="btn">Remove</button>
        </li>
      </ul>
      <p v-else>Your cart is empty.</p>
      <div v-if="cartItems.length" class="cart-footer">
        <p>Total: ${{ totalCartPrice }}</p>
        <router-link to="/checkout" class="btn">Proceed to Checkout</router-link>
      </div>
    </div>
  </template>
  
  <script>
  import { mapGetters, mapActions } from 'Vue';
  
  export default {
    computed: {
      ...mapGetters(['cartItems', 'totalCartPrice']),
    },
    methods: {
      ...mapActions(['removeFromCart']),
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
    margin-right: 10px;
    cursor: pointer;
  }
  .cart-footer {
    margin-top: 20px;
  }
  </style>
  