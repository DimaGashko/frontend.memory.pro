<template>
  <div>
    <SimpleDataItem :value="word" :even="even" />
    <Status :cur="cur" class="status" total="50" />
    <RememberingControlers
      @next="next"
      @prev="prev"
      @first="first"
      @finish="finish"
      auto-next="1000"
      class="controls"
    />
  </div>
</template>

<script>
import SimpleDataItem from '@/components/training/SimpleDataItem';
import RememberingControlers from '@/components/training/RememberingControlers';
import Status from '@/components/training/Status';

export default {
  components: { SimpleDataItem, RememberingControlers, Status },
  data: () => ({
    word: 'Greatness',
    even: false,
    cur: 0
  }),
  created() {
    const words = [
      '43     444    23',
      '11     444    44',
      '33     333    33',
      '23     775    77',
      '33     222    666'
    ];
    let i = 0;
    setInterval(() => {
      this.cur++;
      this.word = words[i % words.length];
      this.even = i % 2 === 0;
      i++;
    }, 1000);
  },
  methods: {
    prev() {
      console.log('prev');
    },
    next() {
      console.log('next');
    },
    first() {
      console.log('first');
    },
    finish() {
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
