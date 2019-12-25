<template>
  <div>
    <div class="title">Memorization starts in:</div>
    <div class="time">{{ rest | time }}</div>
    <b-button @click="done" class="skip">Skip</b-button>
  </div>
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
  created() {
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
      console.log('hi');

      this.rest = this.time - (Date.now() - this.startAt) / 1000;
      if (this.rest < 0) this.rest = 0;

      if (this.rest === 0) {
        this.done();
      }
    }
  }
};
</script>

<style lang="scss" scoped>
/deep/ {
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
}

.title {
  margin-top: 100px;

  font-size: 36px;
}

.time {
  font-size: 150px;
}

.skip {
  position: absolute;
  right: 0;
  top: 0;
}
</style>
