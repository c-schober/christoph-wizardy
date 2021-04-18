<template>
  <section>
    <div class="cc-wrapper">
      <div class="half-width">
        <b-field label="Kreditkartennummer">
          <b-input @input="setCcDetails($event, 'setCcDetails')" :value="ccDetails" type="number"></b-input>
        </b-field>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  methods: {
    setCcDetails(payload, action) {
      this.$store.dispatch(action, payload)
    },
  },
  computed: {
    ccDetails() {
      return this.$store.getters.getCcDetails
    },
  },
}
</script>

<style scoped>
.half-width {
  width: 50%;
  display: inline-block;
  padding: 15px;
}
.cc-wrapper {
  text-align: right;
}
</style>
