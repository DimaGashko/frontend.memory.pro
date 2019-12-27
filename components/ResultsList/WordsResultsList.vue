<template>
  <div>
    <h3>Words Results</h3>
    <b-table :items="wordsResults" :fields="wordsResultsFields" striped hover>
      <template #cell(id)="{item}">
        <n-link :to="'/results/words/' + item.id">{{ item.id }}</n-link>
      </template>

      <template #cell(user)="{item: {user}}">
        <n-link :to="'/users/' + (user ? user.username : '')">
          {{ user ? user.username : 'Guest' }}
        </n-link>
      </template>

      <template #cell(preparation_time)="{item}">
        {{ item.preparation_time | time }}
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
    wordsResults: [],
    wordsResultsFields: [
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
    this.fetchWords();
  },
  methods: {
    async fetchWords() {
      this.wordsResults = await this.fetchWordsResults({
        user_id: this.userId,
        limit: this.limit
      });
    },
    ...mapActions({
      fetchWordsResults: 'results/userWordsResults'
    })
  }
};
</script>
