<template>
  <ul class="list">
    <li>
      <b-button @click="prev" variant="primary" tabindex="-1" block size="lg">
        Prev
        <span class="key-hint">(Shif + Space)</span>
      </b-button>
    </li>
    <li>
      <b-button @click="next" variant="primary" tabindex="-1" block size="lg">
        Next
        <span class="key-hint">(Space)</span>
      </b-button>
    </li>
    <li>
      <b-button
        @click="toFirst"
        variant="primary"
        tabindex="-1"
        block
        size="lg"
      >
        First
        <span class="key-hint">(Esc)</span>
      </b-button>
    </li>
    <li>
      <b-button @click="finish" variant="primary" tabindex="-1" block size="lg">
        Finished
        <span class="key-hint">(Shift + Enter)</span>
      </b-button>
    </li>
  </ul>
</template>

<script>
export default {
  props: ['autoNext'],
  data: () => ({
    timer: 0
  }),
  mounted() {
    document.addEventListener('keyup', this.keyEvent);
    this.startAutoNext();
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
    keyEvent(event) {
      const { code, shiftKey } = event;
      let action = null;

      if (code === 'Enter' && shiftKey) action = 'finish';
      else if (code === 'Space' && shiftKey) action = 'prev';
      else if (code === 'Space') action = 'next';
      else if (code === 'Escape') action = 'first';
      else if (code === 'ArrowLeft') action = 'prev';
      else if (code === 'ArrowRight') action = 'next';

      if (!action) {
        return;
      }

      if (action === 'next') this.next();
      else if (action === 'prev') this.prev();
      else if (action === 'first') this.toFirst();
      else if (action === 'finish') this.finish();

      event.preventDefault();
    },
    startAutoNext() {
      if (this.autoNext <= 0) return;
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
