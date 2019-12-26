<template>
  <div>
    <h1>Performance</h1>

    <UserStatistics class="mt-3" />
  </div>
</template>

<script>
import UserStatistics from '@@/UserStatistics';

export default {
  components: { UserStatistics },
  middleware: 'auth'
};
</script>

<style></style>
