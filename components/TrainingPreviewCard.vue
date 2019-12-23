<template>
  <b-card
    :title="data.name"
    :img-alt="data.name"
    :img-src="data.image"
    :class="{ 'card--disabled': data.disabled }"
    img-top
    tag="article"
    style="max-width: 20rem;"
    class="card mb-2"
  >
    <b-card-text>{{ data.description }}</b-card-text>

    <b-button :to="data.path" :disabled="data.disabled" variant="primary"
      >Start training</b-button
    >
  </b-card>
</template>

<script>
export default {
  props: ['data']
};
</script>

<style lang="scss" scoped>
.card {
  height: 100%;
  display: flex;
  flex-direction: column;

  &--disabled {
    opacity: 0.5;
  }
}
</style>

<style lang="scss">
.card {
  .card-img-top {
    flex: 500;
  }
}
</style>
