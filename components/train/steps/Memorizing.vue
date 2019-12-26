<template>
  <div>
    <slot :item="item" :even="even" name="item">
      <TextItem :value="item" :even="even" />
    </slot>
    <Status :cur="index + 1" :total="data.length" class="status" />
    <Controls
      ref="controls"
      @next="next"
      @prev="prev"
      @first="first"
      @finish="done"
      :auto-next="params.autoNext"
      class="controls"
    />
  </div>
</template>

<script>
import TextItem from '@@/train/TextItem';
import Controls from '@@/train/Controls';
import Status from '@@/train/Status';

export default {
  components: { TextItem, Controls, Status },
  props: ['params', 'data'],
  data: () => ({
    index: 0,
    startedAt: null,
    times: []
  }),
  computed: {
    item() {
      return this.data[this.index];
    },
    even() {
      return this.index % 2 === 0;
    }
  },
  mounted() {
    this.showAt = Date.now();
    this.times = this.data.map(_ => 0);
  },
  methods: {
    done() {
      this.$emit('done', this.times);
    },
    prev() {
      this.setIndex(this.index - 1);
    },
    next() {
      this.setIndex(this.index + 1);
    },
    first() {
      this.setIndex(0);
    },
    finish() {
      // Last index + 1 (go outside)
      this.setIndex(this.data.length);
    },
    setIndex(value) {
      if (value < 0) value = 0;

      if (value === this.index) {
        return;
      }

      const now = Date.now();
      const diff = now - this.showAt;

      this.times[this.index] += diff;

      this.showAt = now;
      this.index = value;

      this.$refs.controls.restartAutoNext();

      if (value > this.data.length - 1) {
        value = this.data.length - 1;
        // this.done();
      }
    }
  }
};
</script>

.<style lang="scss" scoped>
.controls,
.status {
  margin-top: 24px;
}
</style>
