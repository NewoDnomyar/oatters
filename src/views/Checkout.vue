<template>
  <div class="checkout">
    <h2>Checkout</h2>
    <div v-if="cartItems.length">
      <ul>
        <li v-for="item in cartItems" :key="item.id">
          <h3>{{ item.name }}</h3>
          <p>Price: ${{ item.price }}</p>
        </li>
      </ul>
      <p>Total: ${{ totalCartPrice }}</p>
      <button @click="processOrder" class="btn">Complete Purchase</button>
    </div>
    <p v-else>Your cart is empty.</p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'; 
export default {
  computed: {
    ...mapGetters(['cartItems', 'totalCartPrice']),
  },
  methods: {
    processOrder() {
      alert('Purchase completed successfully!');
      // You can also integrate with a payment API like Stripe or PayPal here
    },
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
