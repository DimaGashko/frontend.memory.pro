<template>
  <div>
    <h1>Welcome to the Memory.pro!</h1>
    <p>Train you memory and become a memory master!</p>

    <h2 class="mb-4">Let's Training</h2>
    <TrainingList available="true" />
  </div>
</template>

<script>
import TrainingList from '@@/TrainingList';

export default {
  components: { TrainingList }
};
</script>

<style></style>
