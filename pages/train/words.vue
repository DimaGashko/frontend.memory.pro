<template>
  <div>
    <Preparation v-if="step === 'preparation'" class="step" />
    <Memorizing v-else />
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
    step: 'preparation'
  }),
  computed: {},
  methods: {
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
