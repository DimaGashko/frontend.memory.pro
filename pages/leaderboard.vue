<template>
  <div>
    <h1>Leaderboard</h1>

    <ResultsList limit="100" class="mt-3" />
  </div>
</template>

<script>
import ResultsList from '@@/ResultsList';

export default {
  components: { ResultsList },
  middleware: 'auth'
};
</script>

<style></style>
