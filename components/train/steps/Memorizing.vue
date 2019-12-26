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
    pervIndex: 0,
    cur: 0,
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
    prev() {
      if (this.index > 0) this.index--;
      this.onChangeItemManually();
    },
    next() {
      if (this.index >= this.data.length - 1) {
        this.done();
        return;
      }

      this.index++;
      this.onChangeItemManually();
    },
    first() {
      this.index = 0;
      this.onChangeItemManually();
    },
    done() {
      this.index = this.data.length - 1;
      console.log('finished');
    },
    onChangeItemManually() {
      this.$refs.controls.restartAutoNext();
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
