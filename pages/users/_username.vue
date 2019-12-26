<template>
  <div>
    <h1>
      <span v-if="own">Hello, </span> {{ $auth.user.first_name }}
      {{ $auth.user.last_name }}
    </h1>

    <ul class="data-list">
      <li class="data-list__item">Username: {{ user.username || '...' }}</li>
      <li class="data-list__item">Email: {{ user.email || '...' }}</li>
      <li class="data-list__item">
        First name: {{ user.first_name || '...' }}
      </li>
      <li class="data-list__item">Last name: {{ user.last_name || '...' }}</li>
      <li class="data-list__item">Birth Date: {{ user.birth || '...' }}</li>
    </ul>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  data: () => ({
    user: {},
    own: false
  }),
  mounted() {
    this.user = this.loadUser();
  },
  methods: {
    loadUser() {
      this.own = this.$route.params.username === this.$auth.user.username;

      if (this.own) {
        return this.$auth.user;
      }

      return this.fetchUser(this.$root.params.username);
    },
    ...mapActions({
      fetchUser: 'users/fetcdhUser'
    })
  }
};
</script>

<style lang="scss" scoped>
.data-list {
  margin-top: 1em;
}

.data-list__item {
  margin-bottom: 0.8em;
}
</style>
