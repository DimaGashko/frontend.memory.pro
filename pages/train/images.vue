<template>
  <div>
    <h1 @click="get">Images</h1>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  methods: {
    async get() {
      const images = await this.rand(100);
      console.log(images);
    },
    ...mapActions({
      rand: 'trainingData/randImages'
    })
  }
};
</script>

<style></style>
