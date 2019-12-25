<template>
  <div>
    <TextItem :value="item" :even="even" />
    <Status :cur="index + 1" :total="data.length" class="status" />
    <Control
      ref="control"
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
import Control from '@@/train/Control';
import Status from '@@/train/Status';

export default {
  components: { TextItem, Control, Status },
  props: ['params'],
  data: () => ({
    index: 0,
    cur: 0,
    data: new Array(25).fill(0).map(_ => 10 + Math.round(Math.random() * 90))
  }),
  computed: {
    item() {
      return this.data[this.index];
    },
    even() {
      return this.index % 2 === 0;
    }
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
      console.log('finished');
    },
    onChangeItemManually() {
      this.$refs.control.restartAutoNext();
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
