<template>
  <b-card
    :header="'' + index"
    border-variant="primary"
    header-bg-variant="primary"
    header-text-variant="white"
    header-class="header"
    align="center"
    no-body
  >
    <b-form-input v-model="value" class="text-center"></b-form-input>
  </b-card>
</template>

<script>
export default {
  props: ['index'],
  data: () => ({
    value: ''
  })
};
</script>

<style lang="scss" scoped>
.header {
  padding: 0.2rem 0.2rem !important;
}
</style>
