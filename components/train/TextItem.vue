<template>
  <p
    :class="{ 'word--even': even }"
    :style="{ '--size': (size || 72) + 'px' }"
    class="word"
  >
    {{ value }}
  </p>
</template>

<script>
export default {
  props: ['value', 'even', 'size']
};
</script>

<style lang="scss" scoped>
.word {
  margin: 0;
  padding: 50px 0;

  font-size: var(--size, 72px);
  text-align: center;

  &--even {
    background-color: rgb(240, 240, 240);
  }
}
</style>
