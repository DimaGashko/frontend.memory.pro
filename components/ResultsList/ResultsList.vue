<template>
  <div class="mt-3">
    <NumbersResultsList :userId="userId" :limit="limit" class="item" />
    <WordsResultsList :userId="userId" :limit="limit" class="item" />
    <ImagesResultsList :userId="userId" :limit="limit" class="item" />
  </div>
</template>

<script>
import NumbersResultsList from '@@/ResultsList/NumbersResultsList';
import WordsResultsList from '@@/ResultsList/WordsResultsList';
import ImagesResultsList from '@@/ResultsList/ImagesResultsList';

export default {
  components: { NumbersResultsList, WordsResultsList, ImagesResultsList },
  props: ['userId', 'limit']
};
</script>

<style lang="scss" scoped>
.item {
  margin-bottom: 50px;
}
</style>
