<template>
  <div>
    <div>
      <h2>Numbers Results</h2>
      <b-table
        :items="numbersResults"
        :fields="numbersResultsFields"
        striped
        hover
      >
        <template #cell(id)="{item}">
          <n-link :to="'/results/numbers/' + item.id">{{ item.id }}</n-link>
        </template>
      </b-table>
    </div>

    <div>
      <h2>Words Results</h2>
      <b-table :items="wordsResults" :fields="wordsResultsFields" striped hover>
        <template #cell(id)="{item}">
          <n-link :to="'/results/words/' + item.id">{{ item.id }}</n-link>
        </template>
      </b-table>
    </div>

    <div>
      <h2>Images Results</h2>
      <b-table
        :items="imagesResults"
        :fields="imagesResultsFields"
        striped
        hover
      >
        <template #cell(id)="{item}">
          <n-link :to="'/results/images/' + item.id">{{ item.id }}</n-link>
        </template>
      </b-table>
    </div>
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
    numbersResultsFields: [
      { key: 'id', sortable: true },
      { key: 'start_at', sortable: true },
      { key: 'preparation_time', sortable: true },
      { key: 'recall_preparation_time', sortable: true },
      { key: 'recall_time', sortable: true },
      { key: 'template', sortable: true }
    ],
    wordsResultsFields: [
      { key: 'id', sortable: true },
      { key: 'start_at', sortable: true },
      { key: 'preparation_time', sortable: true },
      { key: 'recall_preparation_time', sortable: true },
      { key: 'recall_time', sortable: true },
      { key: 'item_size', sortable: true }
    ],
    imagesResultsFields: [
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
      this.numbersResults = await this.fetchNumbersResults(this.userId);
      this.wordsResults = await this.fetchWordsResults(this.userId);
      this.imagesResults = await this.fetchImagesResults(this.userId);
    },
    ...mapActions({
      fetchNumbersResults: 'results/userNumbersResults',
      fetchWordsResults: 'results/userWordsResults',
      fetchImagesResults: 'results/userImagesResults'
    })
  }
};
</script>
