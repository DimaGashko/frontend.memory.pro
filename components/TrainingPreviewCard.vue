<template>
  <n-link
    :to="path"
    :title="title"
    :aria-label="title"
    :class="{ 'training-card--disabled': !data.available }"
    class="training-card"
  >
    <b-card
      :title="data.name"
      :img-alt="data.name"
      :img-src="data.image"
      img-top
      tag="article"
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
      return this.data.available ? this.data.description : 'Not available';
    },
    path() {
      return this.data.available ? this.data.path : '/train';
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

  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.08);

  text-decoration: none;
  outline: none;

  transition: transform 0.3s, box-shadow 0.3s;

  &--disabled {
    opacity: 0.5;
  }

  &:not(.training-card--disabled) {
    &:hover,
    &:focus {
      transform: translateY(-6px);
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    }
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
    width: 100%;
    object-fit: cover;
    border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  }
}
</style>
