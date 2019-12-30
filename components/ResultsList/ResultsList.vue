<template>
  <div class="mt-3">
    <NumbersResultsList :userId="userId" :limit="limit" class="item" />
    <WordsResultsList :userId="userId" :limit="limit" class="item" />
  </div>
</template>

<script>
import NumbersResultsList from '@@/ResultsList/NumbersResultsList';
import WordsResultsList from '@@/ResultsList/WordsResultsList';

export default {
  components: { NumbersResultsList, WordsResultsList },
  props: ['userId', 'limit']
};
</script>

<style lang="scss" scoped>
.item {
  margin-bottom: 50px;
}
</style>
