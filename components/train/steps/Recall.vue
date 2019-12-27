<template>
  <div>
    <div class="items-container">
      <RecallItem ref="items" v-for="n in len" :key="n" :index="n" />
    </div>
    <div class="controls mt-5 mb-5">
      <b-button @click="done" variant="primary" size="lg">Continue</b-button>
    </div>
  </div>
</template>

<script>
import RecallItem from '@@/train/RecallItem';

export default {
  components: { RecallItem },
  props: ['len'],
  data: () => ({
    startAt: 0
  }),
  computed: {
    answers() {
      return this.$refs.items.map(item => item.value);
    }
  },
  created() {
    this.startAt = Date.now();
  },
  methods: {
    done() {
      const time = (Date.now() - this.startAt) / 1000;
      this.$emit('done', this.answers, time);
    }
  }
};
</script>

<style lang="scss" scoped></style>

<style lang="scss" scoped>
.controls {
  text-align: center;
}

.items-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  grid-auto-flow: dense;
  gap: 1em;
}
</style>
