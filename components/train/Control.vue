<template>
  <ul class="list">
    <li>
      <b-button @click="prev" variant="primary" block size="lg">
        Prev
        <span class="key-hint">(Enter)</span>
      </b-button>
    </li>
    <li>
      <b-button @click="next" variant="primary" block size="lg">
        Next
        <span class="key-hint">(Space)</span>
      </b-button>
    </li>
    <li>
      <b-button @click="toFirst" variant="primary" block size="lg">
        First
        <span class="key-hint">(Shift + Enter)</span>
      </b-button>
    </li>
    <li>
      <b-button @click="finish" variant="primary" block size="lg">
        Finished
        <span class="key-hint">(Shift + Space)</span>
      </b-button>
    </li>
  </ul>
</template>

<script>
export default {
  props: ['autoNext'],
  data: () => ({
    KEYS: {
      32: 'next',
      13: 'prev',
      37: 'prev',
      39: 'next'
    },
    timer: 0
  }),
  mounted() {
    document.addEventListener('keyup', this.keyEvent);
    if (this.autoNext > 0) this.startAutoNext();
  },
  destroyed() {
    document.removeEventListener('keyup', this.keyEvent);
    this.stopAutoNext();
  },
  methods: {
    prev() {
      this.$emit('prev');
    },
    next() {
      this.$emit('next');
    },
    toFirst() {
      this.$emit('first');
    },
    finish() {
      this.$emit('finish');
    },
    keyEvent({ keyCode, shiftKey }) {
      const action = this.KEYS[keyCode];

      if (shiftKey) {
        if (action === 'next') this.finish();
        else if (action === 'prev') this.toFirst();
      } else if (action === 'next') this.next();
      else if (action === 'prev') this.prev();
    },
    startAutoNext() {
      this.stopAutoNext();

      this.timer = setInterval(() => {
        this.next();
      }, this.autoNext);
    },
    restartAutoNext() {
      this.startAutoNext();
    },
    stopAutoNext() {
      clearInterval(this.timer);
      this.timer = 0;
    }
  }
};
</script>

<style lang="scss" scoped>
.list {
  list-style: none;
  padding: 0;
  margin: 0;

  display: grid;
  grid-template: '1fr 1fr';
  gap: 1em;
}

.key-hint {
  display: none;

  @media (min-width: 500px) {
    display: inline-block;
  }
}
</style>
