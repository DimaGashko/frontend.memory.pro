<template>
  <div>
    <h1 class="mb-4">Solo Training</h1>

    <ul class="list">
      <li v-for="item in types" :key="item.path" class="item">
        <TrainingPreviewCard v-bind:data="item" />
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import TrainingPreviewCard from '@/components/TrainingPreviewCard';

export default {
  components: { TrainingPreviewCard },
  computed: {
    ...mapState({
      types: state => state.local.trainingTypes
    })
  }
};
</script>

<style scoped>
.list {
  list-style: none;
  margin: 0px;
  padding: 0px;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}

.item {
  margin-right: 2em;
  margin-bottom: 2em;
}
</style>
