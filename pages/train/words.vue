<template>
  <Training>
    <template #setup>
      <Setup @done="$parent.setupDone" />
    </template>

    <template #memorization>
      <Memorizing @done="done" />
    </template>

    <template #recall>
      <Recall @done="done" />
    </template>

    <template #results>
      <Results @done="done" />
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

import splitAndFormatByTemplate from '@/assets/scripts/splitByTemplate';

export default {
  components: { Memorizing, Recall, Setup, Results, Training },
  data: () => ({}),
  computed: {},
  methods: {
    preparationDone() {
      this.step = 'memorizing';
    },
    async get() {
      const words = await this.rand(100);
      window.w = words;
      console.log(
        splitAndFormatByTemplate(
          'X X X',
          words.map(w => w.value)
        )
      );
      window.split = splitAndFormatByTemplate;
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
