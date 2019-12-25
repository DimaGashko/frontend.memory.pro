<template>
  <p :class="{ 'word--even': even }" class="word">{{ value }}</p>
</template>

<script>
export default {
  props: ['value', 'even']
};
</script>

<style lang="scss" scoped>
.word {
  margin: 0;
  padding: 1.5em 0;

  font-size: 72px;
  text-align: center;

  &--even {
    background-color: rgb(240, 240, 240);
  }
}
</style>
