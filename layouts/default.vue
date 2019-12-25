<template>
  <div class="app">
    <header class="app__header">
      <AppNavbar></AppNavbar>
    </header>
    <b-container class="app__container">
      <nuxt class="app__content" />
    </b-container>
  </div>
</template>

<script>
import AppNavbar from '@@/AppNavbar';

export default {
  components: {
    AppNavbar
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

  display: flex;
  flex-direction: column;
}

.app__content {
  flex: 1;

  display: flex;
  flex-direction: column;

  margin-top: 1rem;
}
</style>
