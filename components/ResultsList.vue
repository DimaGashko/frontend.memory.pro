<template>
  <div class="root">
    <div class="group">
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

    <div class="group">
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

    <div class="group">
      <h3>Images Results</h3>
      <b-table
        :items="imagesResults"
        :fields="imagesResultsFields"
        striped
        hover
      >
        <template #cell(id)="{item}">
          <n-link :to="'/results/images/' + item.id">{{ item.id }}</n-link>
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
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  props: ['userId', 'limit'],
  data: () => ({
    wordsResults: [],
    numbersResults: [],
    imagesResults: [],
    numbersResultsFields: [
      { key: 'id', sortable: true },
      { key: 'user', sortable: true },
      { key: 'start_at', sortable: true },
      { key: 'preparation_time', sortable: true },
      { key: 'recall_preparation_time', sortable: true },
      { key: 'recall_time', sortable: true },
      { key: 'template', sortable: true },
      { key: 'grade', sortable: true }
    ],
    wordsResultsFields: [
      { key: 'id', sortable: true },
      { key: 'user', sortable: true },
      { key: 'start_at', sortable: true },
      { key: 'preparation_time', sortable: true },
      { key: 'recall_preparation_time', sortable: true },
      { key: 'recall_time', sortable: true },
      { key: 'template', sortable: true },
      { key: 'grade', sortable: true }
    ],
    imagesResultsFields: [
      { key: 'id', sortable: true },
      { key: 'user', sortable: true },
      { key: 'start_at', sortable: true },
      { key: 'preparation_time', sortable: true },
      { key: 'recall_preparation_time', sortable: true },
      { key: 'recall_time', sortable: true },
      { key: 'items_size', sortable: true },
      { key: 'grade', sortable: true }
    ]
  }),
  created() {
    this.fetchNumbers();
    this.fetchWords();
    this.fetchImages();
  },
  methods: {
    async fetchNumbers() {
      this.numbersResults = await this.fetchNumbersResults({
        user_id: this.userId,
        limit: this.limit
      });
    },
    async fetchWords() {
      this.wordsResults = await this.fetchWordsResults({
        user_id: this.userId,
        limit: this.limit
      });
    },
    async fetchImages() {
      this.imagesResults = await this.fetchImagesResults({
        user_id: this.userId,
        limit: this.limit
      });
    },
    ...mapActions({
      fetchNumbersResults: 'results/userNumbersResults',
      fetchWordsResults: 'results/userWordsResults',
      fetchImagesResults: 'results/userImagesResults'
    })
  }
};
</script>

<style lang="scss" scoped>
.root {
  margin-bottom: 64px;
}

.group {
  margin-top: 20px;
}
</style>
