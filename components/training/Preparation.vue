<template>
  <div>
    <div class="title">Memorization starts in:</div>
    <div class="time">11:11</div>
    <b-button class="skip">Skip</b-button>
  </div>
</template>

<script>
export default {};
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
