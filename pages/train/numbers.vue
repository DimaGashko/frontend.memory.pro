<template>
  <div>
    <h1 @click="get">Numbers</h1>
  </div>
</template>

<script>
export default {
  methods: {
    get() {
      const words = this.rand(100);
      console.log(words);
    },
    rand(number) {
      return new Array(number).fill(0).map(this.randDigit);
    },
    randDigit() {
      return Math.round(Math.random() * 9);
    }
  }
};
</script>

<style></style>
