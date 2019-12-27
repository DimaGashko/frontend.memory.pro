<template>
  <div>
    <h1 class="mb-3">Training Setup</h1>

    <b-form @submit.prevent="submit" class="form">
      <b-form-group label="Items to Memorize" label-for="setup-let">
        <b-form-input
          id="setup-len"
          v-model="data.len"
          type="number"
          required
          min="10"
          max="10000"
        ></b-form-input>
      </b-form-group>

      <b-form-group label="template" label-for="setup-template">
        <b-form-input
          id="setup-template"
          v-model="data.template"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group
        label="Auto next:"
        label-for="setup-auto-next"
        description="Enter 0 to disabled"
      >
        <b-form-input
          id="setup-auto-next"
          v-model="data.autoNext"
          type="number"
          step="100"
          min="0"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group
        label="Preparation time:"
        label-for="setup-preparation"
        description="Enter 0 to disabled"
      >
        <b-form-input
          id="setup-preparation"
          v-model="data.preparation"
          type="number"
          min="0"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group
        label="Recall Preparation Time:"
        label-for="setup-recall-preparation"
        description="Enter 0 to disabled"
      >
        <b-form-input
          id="setup-recall-preparation"
          v-model="data.recallPreparation"
          type="number"
          min="0"
          required
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Continue</b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: {
        len: 50,
        template: 'X X X',
        autoNext: 1000,
        preparation: 10,
        recallPreparation: 5
      }
    };
  },
  methods: {
    submit() {
      this.$emit('done', this.data);
    }
  }
};
</script>

<style lang="scss" scoped>
.form {
  max-width: 500px;
}
</style>
