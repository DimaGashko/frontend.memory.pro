<template>
  <div>
    <Setup v-if="step === 'setup'" @done="setupDone" template="X" />

    <Preparation
      v-else-if="step === 'preparation'"
      :time="preparation"
      @done="step = 'memorization'"
      title="Memorization starts in:"
    />

    <Memorization
      v-else-if="step === 'memorization'"
      :autoNext="autoNext"
      :data="data"
      @done="memorizationDone"
    />

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

import splitAndFormatByTemplate from '@/assets/scripts/splitByTemplate';

export default {
  components: { Setup, Preparation, Memorization, Recall },
  data: () => ({
    data: [],
    ids: [],
    times: [],
    answers: [],
    step: 'setup',
    preparation: 0,
    recallPreparation: 0,
    recallTime: 0,
    autoNext: 2000,
    template: '',
    len: 0,
    itemSize: 0,
    startAt: null
  }),
  created() {
    this.startAt = new Date();
  },
  methods: {
    async setupDone(data) {
      this.len = +data.len;
      this.template = data.template;
      this.autoNext = data.autoNext;
      this.preparation = data.preparation;
      this.recallPreparation = data.recallPreparation;

      await this.fetchData();
      this.step = this.preparation > 0 ? 'preparation' : 'memorization';
    },
    memorizationDone(times) {
      this.step = this.recallPreparation > 0 ? 'recallPreparation' : 'recall';
      this.times = times;
    },
    recallDone(answers, time) {
      this.answers = chunk(answers, this.itemSize);
      this.recallTime = time;

      this.done();
    },
    async fetchData() {
      const rawData = await this.rand(this.len);
      const data = (window.data = rawData.map(w => w.value));
      const ids = rawData.map(w => w.id);
      this.itemSize = this.template.split('X').length - 1;

      this.ids = chunk(ids, this.itemSize);
      this.data = splitAndFormatByTemplate(this.template, data);
    },
    async done() {
      const trainResult = {
        start_at: this.startAt,
        preparation_time: this.preparation,
        recall_preparation_time: this.recallPreparation,
        recall_time: this.recallTime,
        template: this.template,
        items: this.getTrainigDataResult()
      };

      const { id } = await this.save(trainResult);
      this.$router.push(`/results/words/${id}`);
    },
    getTrainigDataResult() {
      return this.ids.map((ids, itemIndex) => {
        return {
          time: this.times[itemIndex],
          data: ids.map((id, dataIndex) => ({
            correct: id,
            actual: this.answers[itemIndex][dataIndex]
          }))
        };
      });
    },
    ...mapActions({
      rand: 'trainingData/randWords',
      save: 'results/saveWordsResult'
    })
  }
};
</script>

<style scoped>
.step {
  flex: 1;
}
</style>
