<template>
  <div>
    <h1>{{ someGetter }}</h1>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['someGetter'])
  }
};
</script>
