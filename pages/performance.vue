<template>
  <div>
    <h1>Performance</h1>

    <ResultsList :user-id="$auth.user.id" limit="20" class="mt-3" />
  </div>
</template>

<script>
import ResultsList from '@@/ResultsList/ResultsList';

export default {
  components: { ResultsList },
  middleware: 'auth'
};
</script>

<style></style>
