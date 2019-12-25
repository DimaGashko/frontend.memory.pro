<template>
  <div>
    <div class="fields">
      f1 f2 f3...
    </div>
    <div class="controls mt-4">
      <b-button size="lg">Continue</b-button>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    data: []
  })
};
</script>

<style lang="scss" scoped>
.controls {
  text-align: center;
}
</style>
