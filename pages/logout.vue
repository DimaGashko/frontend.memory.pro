<template>
  <div>
    <h1>Logout</h1>
    <p>What to leave? Click the button to logout</p>
    <b-button v-on:click="logout" variant="primary">Logout</b-button>
  </div>
</template>

<script>
export default {
  middleware: 'auth',
  methods: {
    logout() {
      this.$auth.logout();
    }
  }
};
</script>

<style></style>
