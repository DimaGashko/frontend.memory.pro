<template>
  <div class="app">
    <header class="app__header">
      <AppNavbar></AppNavbar>
    </header>
    <b-container class="app__container">
      <nuxt />
    </b-container>
  </div>
</template>

<script>
import AppNavbar from '@/components/AppNavbar';

export default {
  components: {
    AppNavbar
  },
  async fetch({ store }) {
    console.log('hi');

    await store.user.dispatch('loadUsser');
  }
};
</script>

<style>
.app {
  display: flex;
  flex-direction: column;

  height: 100vh;
}

.app__container {
  flex: 1;

  padding-top: 1rem;
}
</style>
