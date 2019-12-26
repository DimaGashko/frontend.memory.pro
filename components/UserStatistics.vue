<template>
  <div>
    {{ wordsResults }}
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
      this.wordsResults = await this.fetchWordsResults();
    },
    ...mapActions({
      fetchWordsResults: 'results/userWordsResults'
    })
  }
};
</script>
