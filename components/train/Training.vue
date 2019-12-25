<template>
  <div>
    <slot :done="() => setupDone()" v-if="step === 'setup'" name="setup"></slot>

    <slot
      :done="preparationDone"
      v-else-if="step === 'preparation'"
      name="preparation"
    >
      <Preparation
        :time="preparationTime"
        @done="preparationDone"
        title="Memorization starts in:"
        class="step"
      />
    </slot>

    <slot
      :done="memorizationDone"
      v-else-if="step === 'memorizing'"
      name="memorization"
    ></slot>

    <slot
      :done="recallPreparationDone"
      v-else-if="step === 'recall-preparation'"
      name="recall-preparation"
    >
      <Preparation
        :time="recallPreparationTime"
        @done="preparationDone"
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
  components: { Preparation },
  data: () => ({
    step: 'setup',

    preparationTime: 90,
    recallPreparationTime: 30
  }),
  computed: {},
  methods: {
    setupDone() {
      // this.step = this.preparationTime > 0 ? 'preparation' : 'memorizing';
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
    }
  }
};
</script>
