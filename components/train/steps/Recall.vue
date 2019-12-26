<template>
  <div>
    <div class="fields">
      <RecallItem ref="items" v-for="n in len" :key="n" :index="n" />
    </div>
    <div class="controls mt-4">
      <b-button @click="done" size="lg">Continue</b-button>
    </div>
  </div>
</template>

<script>
import RecallItem from '@@/train/RecallItem';

export default {
  components: { RecallItem },
  props: ['len'],
  computed: {
    answers() {
      return this.$refs.items.map(item => item.value);
    }
  },
  methods: {
    done() {
      this.$emit('done', this.answers);
    }
  }
};
</script>

<style lang="scss" scoped></style>

<style lang="scss" scoped>
.controls {
  text-align: center;
}
</style>
