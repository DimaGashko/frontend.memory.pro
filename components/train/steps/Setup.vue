<template>
  <div>Setup</div>
</template>

<script>
export default {
  mounted() {
    setTimeout(() => {
      this.$emit('done');
      console.log('done (setup)');
    }, 2000);
  }
};
</script>
