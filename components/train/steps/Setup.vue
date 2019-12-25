<template>
  <div>Setup</div>
</template>

<script>
export default {
  mounted() {
    setTimeout(() => {
      this.$emit('done');
    }, 2000);
  }
};
</script>
