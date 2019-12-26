<template>
  <div class="container">
    <h1 class="mb-3">Users</h1>

    <b-table :items="users" :fields="fields" class="mb-5" striped hover>
      <template #cell(username)="{item: {username}}">
        <n-link :to="'/users/' + username"> {{ username }} </n-link>
      </template>
    </b-table>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  data: () => ({
    users: [],
    fields: [
      { key: 'id', sortable: true },
      { key: 'username', sortable: true },
      { key: 'first_name', sortable: true },
      { key: 'last_name', sortable: true }
    ]
  }),
  async created() {
    this.users = await this.fetchUsers();
  },
  methods: {
    ...mapActions({
      fetchUsers: 'users/fetchAllUsers'
    })
  }
};
</script>

<style></style>
