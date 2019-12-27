<template>
  <div>
    <h3>Numbers Results</h3>
    <b-table
      :items="numbersResults"
      :fields="numbersResultsFields"
      striped
      hover
    >
      <template #cell(id)="{item}">
        <n-link :to="'/results/numbers/' + item.id">{{ item.id }}</n-link>
      </template>

      <template #cell(user)="{item: {user}}">
        <n-link :to="'/users/' + (user ? user.username : '')">
          {{ user ? user.username : 'Guest' }}
        </n-link>
      </template>

      <template #cell(preparation_time)="{item: {preparation_time}}">
        {{ preparation_time | time }}
      </template>

      <template #cell(recall_preparation_time)="{item}">
        {{ item.recall_preparation_time | time }}
      </template>

      <template #cell(recall_time)="{item}">
        {{ item.recall_time | time }}
      </template>
    </b-table>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  props: ['userId', 'limit'],
  data: () => ({
    numbersResults: [],
    numbersResultsFields: [
      { key: 'id', sortable: true },
      { key: 'user', sortable: true },
      { key: 'start_at', sortable: true },
      { key: 'preparation_time', sortable: true },
      { key: 'recall_preparation_time', sortable: true },
      { key: 'recall_time', sortable: true },
      { key: 'template', sortable: true },
      { key: 'grade', sortable: true }
    ]
  }),
  created() {
    this.fetchNumbers();
  },
  methods: {
    async fetchNumbers() {
      this.numbersResults = await this.fetchNumbersResults({
        user_id: this.userId,
        limit: this.limit
      });
    },
    ...mapActions({
      fetchNumbersResults: 'results/userNumbersResults'
    })
  }
};
</script>
