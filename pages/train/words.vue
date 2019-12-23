<template>
  <div>
    <h1 @click="get">Words</h1>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  computed: {},
  methods: {
    get() {
      const words = this.rand(25);
      console.log(words);
    },
    ...mapActions({
      rand: 'trainingData/randWords'
    })
  }
};
</script>

<style></style>
