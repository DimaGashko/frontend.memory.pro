<template>
  <div>
    <div :style="{ '--status-value': progress }" class="bar"></div>
    <div class="status">{{ cur }}/{{ total }}</div>
  </div>
</template>

<script>
export default {
  props: ['cur', 'total'],
  computed: {
    progress() {
      return (this.cur / this.total) * 100 + '%';
    }
  }
};
</script>

<style lang="scss" scoped>
.status {
  font-size: 32px;
  text-align: center;
}

.bar {
  --status-value: 0;

  position: relative;

  height: 5px;
  margin-bottom: 8px;

  background-color: rgba(0, 0, 0, 0.1);

  &:before {
    content: '';
    position: absolute;

    top: 0;
    bottom: 0;
    left: 0;

    max-width: 100%;

    width: var(--status-value);
    background-color: var(--primary);

    transition: width 0.3s;
  }
}
</style>
