<template>
  <div class="root">
    <div class="title">{{ title }}</div>
    <SimpleTimer :time="time" @done="$emit('done')" class="time" />
    <b-button @click="$emit('done')" class="skip">Skip</b-button>
  </div>
</template>

<script>
import SimpleTimer from '@/components/helpers/SimpleTimer';

export default {
  components: { SimpleTimer },
  props: ['time', 'title']
};
</script>

<style lang="scss" scoped>
.root {
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
}

.title {
  margin-top: 100px;
  font-size: 36px;
}

.time {
  font-size: 150px;
}

.skip {
  position: absolute;
  right: 0;
  top: 0;
}
</style>
