<template>
  <div>
    <h1 v-if="!ownProfile">Firbidden!</h1>
    <div v-else>
      <h1 v-if="ownProfile">
        Hello, {{ $auth.user.first_name }} {{ $auth.user.last_name }}
      </h1>

      <ul class="data-list">
        <li class="data-list__item">Username: {{ $auth.user.username }}</li>
        <li class="data-list__item">Email: {{ $auth.user.email }}</li>
        <li class="data-list__item">First name: {{ $auth.user.first_name }}</li>
        <li class="data-list__item">Last name: {{ $auth.user.last_name }}</li>
        <li class="data-list__item">Birth Date: {{ $auth.user.birth }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    ownProfile() {
      return this.$route.params.username === this.$auth.user.username;
    }
  }
};
</script>

<style lang="scss" scoped>
.data-list {
  list-style: none;
  margin: 0;
  padding: 0;
  margin-top: 1em;
}

.data-list__item {
  margin-bottom: 0.8em;
}
</style>
