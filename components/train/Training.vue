<template>
  <div>
    <slot v-if="step === 'setup'" name="setup"></slot>

    <slot v-else-if="step === 'preparation'" name="preparation">
      <Preparation
        :time="preparationTime"
        @done="preparationDone"
        title="Memorization starts in:"
        class="step"
      />
    </slot>

    <slot v-else-if="step === 'memorizing'" name="memorization"></slot>

    <slot v-else-if="step === 'recall-preparation'" name="recall-preparation">
      <Preparation
        :time="recallPreparationTime"
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

    preparationTime: 10,
    recallPreparationTime: 5
  }),
  computed: {},
  mounted() {
    this.initEvents();
  },
  methods: {
    setupDone() {
      this.step = this.preparationTime > 0 ? 'preparation' : 'memorizing';
    },
    preparationDone() {
      this.step = 'memorizing';
    },
    memorizationDone() {
      this.step =
        this.recallPreparationTime > 0 ? 'recall-preparation' : 'recall';
    },
    recallPreparationDone() {
      this.step = 'recall';
    },
    recallDone() {
      this.step = 'results';
    },
    initEvents() {
      this.$on('setupDone', () => this.setupDone());
      this.$on('preparationDone', () => this.preparationDone());
      this.$on('memorizationDone', () => this.memorizationDone());
      this.$on('recallPreparationDone', () => this.recallPreparationDone());
      this.$on('recallDone', () => this.recallDone());
    }
  }
};
</script>
