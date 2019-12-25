<template>
  <div>
    <SimpleDataItem :value="word" :even="even" />
    <Status class="status" cur="43" total="100" />
    <RememberingControlers
      @next="next"
      @prev="prev"
      @first="first"
      @finish="finish"
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
    even: false
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
      this.word = words[i % words.length];
      this.even = i % 2 === 0;
      i++;
    }, 500);
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
  margin-top: 32px;
}
</style>
