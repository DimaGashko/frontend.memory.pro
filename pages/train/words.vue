<template>
  <Training ref="train">
    <template #setup>
      <Setup @done="$refs.train.$emit('setupDone')" />
    </template>

    <template #memorization="{params}">
      <Memorizing
        :params="params"
        :data="words"
        @done="$refs.train.$emit('memorizationDone')"
      >
        <template #item="{item, even}">
          <TextItem :value="item" :even="even" size="72" />
        </template>
      </Memorizing>
    </template>

    <template #recall>
      <Recall @done="$refs.train.$emit('recallDone')" />
    </template>

    <template #results>
      <Results />
    </template>
  </Training>
</template>

<script>
import { mapActions } from 'vuex';

import Training from '@@/train/Training';

import Setup from '@@/train/steps/Setup';
import Memorizing from '@@/train/steps/Memorizing';
import Recall from '@@/train/steps/Recall';
import Results from '@@/train/steps/Results';

import TextItem from '@@/train/TextItem';

export default {
  components: { Memorizing, Recall, Setup, Results, Training, TextItem },
  data: () => ({
    words: []
  }),
  async created() {
    this.words = (await this.get(25)).map(w => w.value);
  },
  methods: {
    get(n) {
      return this.rand(n);
    },
    ...mapActions({
      rand: 'trainingData/randWords'
    })
  }
};
</script>

<style scoped>
.step {
  flex: 1;
}
</style>
