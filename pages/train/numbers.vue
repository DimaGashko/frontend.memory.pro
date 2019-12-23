<template>
  <div>
    <h1 @click="get">Numbers</h1>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import splitAndFormatByTemplate from '../../assets/scripts/splitByTemplate';

export default {
  methods: {
    async get() {
      const numbers = await this.rand(100);
      console.log(numbers);

      window.n = numbers;
      window.split = splitAndFormatByTemplate;
    },
    ...mapActions({
      rand: 'trainingData/randNumbers'
    })
  }
};
</script>

<style></style>
