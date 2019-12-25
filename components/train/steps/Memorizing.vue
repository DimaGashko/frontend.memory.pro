<template>
  <div>
    <SimpleDataItem :value="item" :even="even" />
    <Status :cur="index + 1" :total="data.length" class="status" />
    <Controlers
      @next="next"
      @prev="prev"
      @first="first"
      @finish="done"
      :auto-next="params.autoNext"
      class="controls"
    />

    <p>{{ params }}</p>
  </div>
</template>

<script>
import SimpleDataItem from '@@/train/SimpleDataItem';
import Controlers from '@@/train/Controlers';
import Status from '@@/train/Status';

export default {
  components: { SimpleDataItem, Controlers, Status },
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
    },
    next() {
      if (this.index >= this.data.length - 1) {
        this.done();
        return;
      }

      this.index++;
    },
    first() {
      this.index = 0;
    },
    done() {
      console.log('finished');
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
