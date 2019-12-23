<template>
  <div>
    <h1 v-on:click="login">Welcome to the Memory.pro!</h1>

    {{ $auth.loggedIn }}
    <div v-if="$auth.loggedIn">
      <h2>Hi, {{ $auth.user }}</h2>
    </div>
    <div v-else>Oh no 😢</div>
  </div>
</template>

<script>
export default {
  methods: {
    login() {
      // this.$auth.fetchUser();
      this.$auth.loginWith('laravel.passport');
    }
  }
};
</script>

<style></style>
