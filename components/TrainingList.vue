<template>
  <ul class="list">
    <li v-for="item in types" :key="item.path">
      <TrainingPreviewCard v-bind:data="item" />
    </li>
  </ul>
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

<style lang="scss" scoped>
.list {
  list-style: none;
  margin: 0px;
  padding: 0px;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5vw;
  align-content: center;
}
</style>
