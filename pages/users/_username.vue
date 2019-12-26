<template>
  <div v-if="user.id">
    <h1>
      <span v-if="own">Hello, </span> {{ user.first_name }}
      {{ user.last_name }}
    </h1>

    <ul class="data-list">
      <li class="data-list__item">Username: {{ user.username }}</li>
      <li v-if="user.email" class="data-list__item">Email: {{ user.email }}</li>
      <li class="data-list__item">First name: {{ user.first_name }}</li>
      <li class="data-list__item">Last name: {{ user.last_name }}</li>
      <li v-if="user.birth" class="data-list__item">
        Birth Date: {{ user.birth }}
      </li>
    </ul>

    <h2 class="mt-3">Last activity</h2>
    <ResultsList :user-id="user.id" class="mb-5" limit="3" />
  </div>
</template>

<script>
import { mapActions } from 'vuex';

import ResultsList from '@@/ResultsList';

export default {
  components: { ResultsList },
  data: () => ({
    user: {},
    own: false
  }),
  async created() {
    this.user = await this.loadUser();
  },
  methods: {
    loadUser() {
      this.own = false; // this.$route.params.username === this.$auth.user.username;

      if (this.own) {
        return this.$auth.user;
      }

      return this.fetchUser(this.$route.params.username);
    },
    ...mapActions({
      fetchUser: 'users/fetchUser'
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
