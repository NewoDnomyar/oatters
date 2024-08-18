<template>
    <div id="app">
      <Header />
      <Hero />
      <Introduction />
      <GalleryPreview />
      <CTASection />
      <Footer />
    </div>
  </template>
  
  <script>
  import Header from './components/Header.vue';
  import Hero from './components/Hero.vue';
  import Introduction from './components/Introduction.vue';
  import GalleryPreview from './components/GalleryPreview.vue';
  import CTASection from './components/CTASection.vue';
  import Footer from './components/Footer.vue';
  
  export default {
    components: {
      Header,
      Hero,
      Introduction,
      GalleryPreview,
      CTASection,
      Footer
    }
  };
  </script>
  