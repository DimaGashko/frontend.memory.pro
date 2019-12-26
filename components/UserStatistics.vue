<template>
  <div>
    <h2>Words Results</h2>
    <b-table :items="wordsResults" striped hover></b-table>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  props: ['userId'],
  data: () => ({
    wordsResults: [],
    numbersResults: [],
    imagesResults: []
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
