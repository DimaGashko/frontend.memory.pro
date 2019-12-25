<template>
  <Training ref="train">
    <template #setup>
      <Setup @done="$refs.train.$emit('setupDone')" />
    </template>

    <template #memorization>
      <Memorizing @done="$refs.train.$emit('memorizationDone')" />
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

import splitAndFormatByTemplate from '@/assets/scripts/splitByTemplate';

export default {
  components: { Memorizing, Recall, Setup, Results, Training },
  data: () => ({}),
  computed: {},
  methods: {
    ram() {
      console.log('his');
      // $parent.$emit('setupDone')
      console.log(this.$parent);

      this.$parent.$emit('test');
    },
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
