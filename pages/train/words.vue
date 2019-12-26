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

    <Recall :len="len" v-else-if="step === 'recall'" @done="recallDone" />
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import chunk from 'lodash/chunk';

import Setup from '@@/train/steps/Setup';
import Preparation from '@@/train/steps/Preparation';
import Memorization from '@@/train/steps/Memorization';
import Recall from '@@/train/steps/Recall';

import TextItem from '@@/train/TextItem';

import splitAndFormatByTemplate from '../../assets/scripts/splitByTemplate';

export default {
  components: { Setup, Preparation, Memorization, Recall, TextItem },
  data: () => ({
    words: [],
    ids: [],
    times: [],
    answers: [],
    step: 'setup',
    preparation: 10,
    recallPreparation: 5,
    autoNext: 2000,
    template: '',
    len: 0,
    itemSize: 0
  }),
  methods: {
    async setupDone({
      len,
      template,
      autoNext,
      preparation,
      recallPreparation
    }) {
      this.len = len;
      this.template = template;
      this.autoNext = autoNext;
      this.preparation = preparation;
      this.recallPreparation = recallPreparation;

      await this.fetchData();
      this.step = this.preparation > 0 ? 'preparation' : 'memorization';
    },
    memorizationDone(times) {
      this.step = this.recallPreparation > 0 ? 'recallPreparation' : 'recall';
      this.times = times;
    },
    recallDone(answers) {
      this.step = 'results';
      this.answers = chunk(answers, this.itemSize);

      this.done();
    },
    async fetchData() {
      const rawWords = await this.rand(this.len);
      const words = rawWords.map(w => w.value);
      const ids = rawWords.map(w => w.id);
      this.itemSize = this.template.split('X').length - 1;

      this.ids = chunk(ids, this.itemSize);
      this.words = splitAndFormatByTemplate(this.template, words);
    },
    done() {
      const resultsData = this.ids.map((ids, itemIndex) => {
        return {
          time: this.times[itemIndex],
          data: ids.map((id, dataIndex) => ({
            correct: id,
            actual: this.answers[itemIndex][dataIndex]
          }))
        };
      });

      console.log(resultsData);
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
