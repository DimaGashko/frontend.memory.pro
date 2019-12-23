<template>
  <div>
    <h1 @click="get">Numbers</h1>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  methods: {
    async get() {
      const numbers = await this.rand(100);
      console.log(numbers);
    },
    ...mapActions({
      rand: 'trainingData/randNumbers'
    })
  }
};
</script>

<style></style>
