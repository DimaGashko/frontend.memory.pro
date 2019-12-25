<template>
  <div>{{ rest | time }}</div>
</template>

<script>
export default {
  props: ['time'],
  data: () => ({
    timer: 0,
    rest: 0,
    updateInterval: 250,
    startAt: 0
  }),
  mounted() {
    this.start();
  },
  methods: {
    done() {
      this.stop();
      this.$emit('done');
    },
    start() {
      this.stop();
      this.rest = this.time;
      this.startAt = Date.now();

      this.timer = setInterval(() => {
        this.tik();
      }, this.updateInterval);
    },
    stop() {
      clearInterval(this.timer);
      this.timer = 0;
    },
    tik() {
      this.rest = this.time - (Date.now() - this.startAt) / 1000;
      if (this.rest < 0) this.rest = 0;

      if (this.rest === 0) {
        this.done();
      }
    }
  }
};
</script>
