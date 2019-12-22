<template>
  <div>
    <header>
      <AppNavbar></AppNavbar>
    </header>
    <b-container>
      <nuxt />
    </b-container>
  </div>
</template>

<script>
import AppNavbar from '@/components/AppNavbar';

export default {
  components: {
    AppNavbar
  }
};
</script>

<style></style>
