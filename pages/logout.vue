<template>
  <div>
    <h1>Logout</h1>
    <p>Wait a moment...</p>
  </div>
</template>

<script>
export default {
  middleware: 'auth',
  created() {
    setTimeout(() => this.$auth.logout(), 1000);
  }
};
</script>

<style></style>
