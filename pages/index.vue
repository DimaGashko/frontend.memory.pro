<template>
  <div>
    <h1>Welcome to the Memory.pro!</h1>
    <p>Train you memory and become a memory master!</p>

    <h2 class="mb-4">Let's Training</h2>
    <TrainingList only-available="true" />

    <h2 class="mt-5">Last activity</h2>
    <ResultsList limit="3" class="mt-4" />
  </div>
</template>

<script>
import TrainingList from '@@/TrainingList';
import ResultsList from '@@/ResultsList';

export default {
  components: { TrainingList, ResultsList }
};
</script>

<style></style>
