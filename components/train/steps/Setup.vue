<template>
  <div>
    <b-form @submit.prevent="submit" class="form">
      <b-form-group label="Items to Memorize" label-for="setup-let">
        <b-form-input
          id="setup-len"
          v-model="data.number"
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

      <b-form-group label="Auto next:" label-for="setup-auto-next">
        <b-form-input
          id="setup-auto-next"
          v-model="data.preparation"
          required
          description="Enter 0 to disabled"
        ></b-form-input>
      </b-form-group>

      <b-form-group label="Preparation time:" label-for="setup-preparation">
        <b-form-input
          id="setup-preparation"
          v-model="data.preparation"
          required
          description="Enter 0 to disabled"
        ></b-form-input>
      </b-form-group>

      <b-form-group
        label="Preparation time:"
        label-for="setup-recall-preparation"
      >
        <b-form-input
          id="setup-recall-preparation"
          v-model="data.preparation"
          required
          description="Enter 0 to disabled"
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
      form: {
        number: 50,
        template: 'XX  XXX  XX',
        autoNext: 1000,
        preparation: 10,
        recallPreparation: 5
      }
    };
  },
  methods: {
    submit() {
      this.$emit('done', this.form);
    }
  }
};
</script>

<style lang="scss" scoped>
.form {
  max-width: 500px;
}
</style>
