<template>
  <div>
    <Preparation
      :time="time"
      v-if="step === 'preparation'"
      @done="preparationDone"
      title="Memorization starts in:"
      class="step"
    />

    <Memorizing v-else-if="step === 'memorizing'" class="step" />

    <Preparation
      :time="time"
      v-if="step === 'recall-preparation'"
      @done="preparationDone"
      title="Recall starts in:"
      class="step"
    />

    <Remembering v-else-if="step === 'rememmbering'" class="step" />
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import splitAndFormatByTemplate from '../../assets/scripts/splitByTemplate';

import Preparation from '@/components/training/Preparation';
import Memorizing from '@/components/training/Memorizing';
import Remembering from '@/components/training/Remembering';

export default {
  components: { Preparation, Memorizing, Remembering },
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
