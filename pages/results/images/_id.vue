<template>
  <div>
    <pre>{{ data }}</pre>
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
      fetch: 'results/getImagesResult'
    })
  }
};
</script>
