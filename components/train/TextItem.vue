<template>
  <p
    :class="{ 'word--even': even }"
    :style="{ '--size': size + 'px' }"
    class="word"
  >
    {{ value }}
  </p>
</template>

<script>
export default {
  props: ['value', 'even'],
  data: () => ({
    size: 72
  }),
  created() {
    this.size = this.calculateSize();
  },
  methods: {
    calculateSize(value) {
      const len = ('' + this.value).length;

      if (len < 3) return 200;
      if (len < 10) return 150;
      if (len < 20) return 72;

      return 50;
    }
  }
};
</script>

<style lang="scss" scoped>
.word {
  margin: 0;
  padding: 35px 0;

  font-size: var(--size, 72px);
  text-align: center;

  &--even {
    background-color: rgb(240, 240, 240);
  }
}
</style>
