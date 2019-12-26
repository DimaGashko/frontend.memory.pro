<template>
  <div>
    <h2>Words Results</h2>
    <b-table
      :items="wordsResults"
      :fields="wordsResultsFields"
      striped
      hover
    ></b-table>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  props: ['userId'],
  data: () => ({
    wordsResults: [],
    numbersResults: [],
    imagesResults: [],
    wordsResultsFields: [
      { key: 'id', sortable: true },
      { key: 'start_at', sortable: true },
      { key: 'preparation_time', sortable: true },
      { key: 'recall_preparation_time', sortable: true },
      { key: 'recall_time', sortable: true },
      { key: 'template', sortable: true }
    ]
  }),
  created() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      this.wordsResults = await this.fetchWordsResults(this.userId);
    },
    ...mapActions({
      fetchWordsResults: 'results/userWordsResults'
    })
  }
};
</script>
