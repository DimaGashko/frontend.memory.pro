<template>
  <div>
    <Setup v-if="step === 'setup'" @done="setupDone" />

    <Preparation
      v-else-if="step === 'preparation'"
      :time="preparation"
      @done="step = 'memorization'"
      title="Memorization starts in:"
    />

    <Memorization
      v-else-if="step === 'memorization'"
      :autoNext="autoNext"
      :data="words"
      @done="memorizationDone"
    >
      <template #item="{item, even}">
        <TextItem :value="item" :even="even" />
      </template>
    </Memorization>

    <Preparation
      v-else-if="step === 'recallPreparation'"
      :time="recallPreparation"
      @done="step = 'recall'"
      title="Recall starts in:"
      class="step"
    />

    <Recall v-else-if="step === 'recall'" @done="recallDone" />
  </div>
</template>

<script>
import { mapActions } from 'vuex';

import Setup from '@@/train/steps/Setup';
import Preparation from '@@/train/steps/Preparation';
import Memorization from '@@/train/steps/Memorization';
import Recall from '@@/train/steps/Recall';

import TextItem from '@@/train/TextItem';

export default {
  components: { Setup, Preparation, Memorization, Recall, TextItem },
  data: () => ({
    words: [],
    step: 'setup',
    preparation: 10,
    recallPreparation: 5,
    autoNext: 2000
  }),
  async created() {
    this.words = await this.rand(25);
  },
  methods: {
    setupDone() {
      this.step = this.preparation > 0 ? 'preparation' : 'memorization';
    },
    memorizationDone(times) {
      this.step = this.recallPreparation > 0 ? 'recallPreparation' : 'recall';
    },
    recallDone(answers) {
      this.step = 'results';
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
