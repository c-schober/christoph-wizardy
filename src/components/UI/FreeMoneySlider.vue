<template>
  <div class="slider">
    <b-field
      class="label"
      label="Spende mindestens 10% deines Bestellwertes oder wir werfen sehr viele Plastikflaschen ins Meer."
    >
      <b-slider
        v-model="freeMoney"
        :custom-formatter="(val) => val + '%'"
        :tooltip="false"
        indicator
        :max="30"
        class="slider"
        tooltip-always
      >
      </b-slider>
    </b-field>
  </div>
</template>

<script>
export default {
  name: 'FreeMoneySlider',
  computed: {
    freeMoney: {
      get() {
        return this.$store.state.donation.percentage
      },
      set(value) {
        this.$store.dispatch('setDonation', { percentage: value })
      },
    },
  },
}
</script>

<style scoped>
.slider {
  padding-bottom: 30px;
  width: 500px;
  display: block;
  max-width: 90%;
}
</style>
