<template>
  <div>
    <Preparation
      :time="time"
      v-if="step === 'preparation'"
      @done="preparationDone"
      class="step"
    />
    <Memorizing v-else-if="step === 'memorizing'" />
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import splitAndFormatByTemplate from '../../assets/scripts/splitByTemplate';

import Preparation from '@/components/training/Preparation';
import Memorizing from '@/components/training/Memorizing';

export default {
  components: { Preparation, Memorizing },
  data: () => ({
    step: 'preparation',
    time: 2500
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
