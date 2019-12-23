<template>
  <n-link
    :to="data.path"
    :title="title"
    :aria-label="title"
    :class="{ 'training-card--disabled': data.disabled }"
    class="training-card"
  >
    <b-card
      :title="data.name"
      :img-alt="data.name"
      :img-src="data.image"
      img-top
      tag="article"
      style="max-width: 20rem;"
      class="training-card__card mb-2"
    >
      <b-card-text>{{ data.description }}</b-card-text>
    </b-card>
  </n-link>
</template>

<script>
export default {
  props: ['data'],
  computed: {
    title() {
      return this.data.disabled ? 'Not available' : '';
    }
  }
};
</script>

<style lang="scss" scoped>
.training-card {
  display: block;

  will-change: transform;
  position: relative;

  height: 100%;

  transition: transform 0.3s;
  text-decoration: none;

  &--disabled {
    opacity: 0.5;
  }

  &:not(.training-card--disabled):hover {
    transform: translateY(-6px);
  }
}

.training-card__card {
  height: 100%;
  display: flex;
  flex-direction: column;
}
</style>

<style lang="scss">
.training-card__card {
  .card-img-top {
    flex: 500;
    object-fit: cover;
  }
}
</style>
