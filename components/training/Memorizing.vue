<template>
  <div>
    <SimpleDataItem :value="word" :even="even" />
    <RememberingControlers
      @next="next"
      @prev="prev"
      @first="first"
      @finish="finish"
    />
  </div>
</template>

<script>
import SimpleDataItem from '@/components/training/SimpleDataItem';
import RememberingControlers from '@/components/training/RememberingControlers';

export default {
  components: { SimpleDataItem, RememberingControlers },
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
