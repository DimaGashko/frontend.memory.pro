<template>
  <div>
    <h1 @click="get">Words</h1>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import splitAndFormatByTemplate from '../../assets/scripts/splitByTemplate';

export default {
  computed: {},
  methods: {
    async get() {
      const words = await this.rand(100);
      window.w = words;
      console.log(words);
      window.split = splitAndFormatByTemplate;
    },
    ...mapActions({
      rand: 'trainingData/randWords'
    })
  }
};
</script>

<style></style>
