<template>
  <ul class="list">
    <li>
      <b-button block size="lg">Prev (Space)</b-button>
    </li>
    <li>
      <b-button block size="lg">Next (Enter)</b-button>
    </li>
    <li>
      <b-button block size="lg">First (Alt + Space)</b-button>
    </li>
    <li>
      <b-button block size="lg">Finished (Alt + Enter)</b-button>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
.list {
  list-style: none;
  padding: 0;
  margin: 0;

  display: grid;
  grid-template: '1fr 1fr';
  gap: 1em;

  margin-top: 32px;
}
</style>
