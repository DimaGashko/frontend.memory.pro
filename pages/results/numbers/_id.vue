<template>
  <div>
    <pre class="code">{{ data }}</pre>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  data: () => ({
    data: null
  }),
  async created() {
    this.data = await this.fetch(this.$route.params.id);
  },
  methods: {
    ...mapActions({
      fetch: 'results/getNumbersResult'
    })
  }
};
</script>

<style lang="scss" scoped>
pre {
  color: var(--primary);
}
</style>
