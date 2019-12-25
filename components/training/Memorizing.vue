<template>
  <div>
    <SimpleDataItem :value="word" :even="even" />
    <RememberingControllers />
  </div>
</template>

<script>
import SimpleDataItem from '@/components/training/SimpleDataItem';
import RememberingControllers from '@/components/training/RememberingControllers';

export default {
  components: { SimpleDataItem, RememberingControllers },
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
  }
};
</script>
