<template>
  <div>
    <slot v-if="step === 'setup'" name="setup"></slot>

    <slot v-else-if="step === 'preparation'" name="preparation">
      <Preparation
        :time="params.preparationTime"
        @done="preparationDone"
        title="Memorization starts in:"
        class="step"
      />
    </slot>

    <slot
      :params="params"
      v-else-if="step === 'memorizing'"
      name="memorization"
    ></slot>

    <slot v-else-if="step === 'recall-preparation'" name="recall-preparation">
      <Preparation
        :time="params.recallPreparationTime"
        @done="recallPreparationDone"
        title="Recall starts in:"
        class="step"
      />
    </slot>

    <slot :done="recallDone" v-else-if="step === 'recall'" name="recall"></slot>

    <slot v-else-if="step === 'results'" name="results"></slot>
  </div>
</template>

<script>
import Preparation from '@@/train/steps/Preparation';

export default {
  name: 'Training',
  components: { Preparation },
  data: () => ({
    step: 'setup',

    defaultParams: {
      preparationTime: 10,
      recallPreparationTime: 5,
      autoNext: 2000,
      item: 0
    },

    params: {}
  }),
  computed: {},
  mounted() {
    this.params = { ...this.defaultParams };
    this.initEvents();
  },
  methods: {
    setupDone(params) {
      this.params = { ...this.defaultParams, ...params };
      this.step = this.preparationTime > 0 ? 'preparation' : 'memorizing';
    },
    preparationDone() {
      this.step = 'memorizing';
    },
    memorizationDone() {
      // this.step =
      //   this.recallPreparationTime > 0 ? 'recall-preparation' : 'recall';
    },
    recallPreparationDone() {
      this.step = 'recall';
    },
    recallDone() {
      this.step = 'results';
    },
    initEvents() {
      this.$on('setupDone', (...args) => this.setupDone(...args));
      this.$on('preparationDone', (...args) => this.preparationDone(...args));
      this.$on('memorizationDone', (...args) => this.memorizationDone(...args));
      this.$on('recallPreparationDone', (...args) => {
        this.recallPreparationDone(...args);
      });
      this.$on('recallDone', (...args) => this.recallDone());
    }
  }
};
</script>
