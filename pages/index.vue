<template>
  <div>
    <h1 v-on:click="login">Welcome to the Memory.pro!</h1>
  </div>
</template>

<script>
export default {
  methods: {
    login() {
      this.$auth.loginWith('laravel.passport');
    }
  }
};
</script>

<style></style>
