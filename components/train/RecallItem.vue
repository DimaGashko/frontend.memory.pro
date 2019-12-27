<template>
  <div class="item">
    <div class="item__index">{{ index }}</div>
    <input ref="inp" type="text" class="item__inp" autocomplete="off" />
  </div>
</template>

<script>
export default {
  props: ['index'],
  computed: {
    value() {
      return this.$refs.inp.value.trim();
    }
  }
};
</script>

<style lang="scss" scoped></style>
