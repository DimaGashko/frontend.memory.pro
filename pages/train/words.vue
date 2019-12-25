<template>
  <div>
    <Setup v-if="step === 'setup'" />

    <Preparation
      :time="time"
      v-else-if="step === 'preparation'"
      @done="preparationDone"
      title="Memorization starts in:"
      class="step"
    />

    <Memorizing v-else-if="step === 'memorizing'" class="step" />

    <Preparation
      :time="time"
      v-else-if="step === 'recall-preparation'"
      @done="preparationDone"
      title="Recall starts in:"
      class="step"
    />

    <Remembering v-else-if="step === 'rememmbering'" class="step" />

    <Result v-else-if="step === 'result'" />
  </div>
</template>

<script>
import { mapActions } from 'vuex';

import Setup from '@@/train/steps/Setup';
import Preparation from '@@/train/steps/Preparation';
import Memorizing from '@@/train/steps/Memorizing';
import Remembering from '@@/train/steps/Remembering';

import splitAndFormatByTemplate from '@/assets/scripts/splitByTemplate';

export default {
  components: { Preparation, Memorizing, Remembering, Setup },
  data: () => ({
    step: 'setup',
    preparationTime: 90,
    recallPreparationTime: 30
  }),
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
