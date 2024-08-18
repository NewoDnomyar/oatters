<template>
    <header>
      <nav>
        <div class="menu-icon" @click="toggleMenu">☰</div>
        <ul class="nav-links" :class="{ show: isMenuOpen }">
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/gallery">Gallery</router-link></li>
          <li><router-link to="/designer">Design Your Roseta</router-link></li>
          <li><router-link to="/checkout">Checkout</router-link></li>
        </ul>
      </nav>
    </header>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isMenuOpen: false
      };
    },
    methods: {
      toggleMenu() {
        this.isMenuOpen = !this.isMenuOpen;
      }
    }
  };
  </script>
  
  <style scoped>
  /* Your header styles here */
  </style>
  