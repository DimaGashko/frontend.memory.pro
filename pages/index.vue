<template>
  <div>
    <h1>Welcome to the Memory.pro!</h1>
    <p>Train you memory and become a memory master!</p>

    <h2 class="mb-3">Availabe trainings</h2>
    <TrainingList />

    {{ $auth.loggedIn }}
    <div v-if="$auth.loggedIn">
      <h2>Hi, {{ $auth.user }}</h2>
    </div>
    <div v-else>Oh no 😢</div>
  </div>
</template>

<script>
import TrainingList from '@/components/TrainingList';

export default {
  components: { TrainingList }
};
</script>

<style></style>
