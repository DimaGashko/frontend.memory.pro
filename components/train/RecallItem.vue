<template>
  <b-card
    :header="'' + index"
    border-variant="primary"
    header-bg-variant="primary"
    header-text-variant="white"
    align="center"
    no-body
  >
    <b-form-input v-model="value" class="text-center" size="lg"></b-form-input>
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
