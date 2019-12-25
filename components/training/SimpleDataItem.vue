<template>
  <pre :class="{ 'word--eve': even }" class="word">{{ value }}</pre>
</template>

<script>
export default {
  props: ['value', 'even']
};
</script>

<style lang="scss" scoped>
.word {
  margin: 0;
  padding: 1em 0;

  font-size: 72px;
  text-align: center;

  &--even {
    background-color: rgb(240, 240, 240);
  }
}
</style>
