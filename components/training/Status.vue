<template>
  <div class="status">{{ cur }}/{{ total }}</div>
</template>

<script>
export default {
  props: ['cur', 'total']
};
</script>

<style lang="scss" scoped>
.status {
  font-size: 32px;
  text-align: center;
}
</style>
