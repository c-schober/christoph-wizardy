<template>
  <section>
    <cart />
    <free-money-slider />
    <h1 class="title">Bitte gib uns auch so viele persönliche Daten wie möglich</h1>
    <p>*Deine Daten werden verkauft</p>
    <div class="half-width">
      <b-field label="Vorname">
        <b-input @input="setInput($event, 'setFirstName')" :value="firstName" type="text"></b-input>
      </b-field>
    </div>

    <div class="half-width">
      <b-field label="Nachname">
        <b-input @input="setInput($event, 'setLastName')" :value="lastName" type="text"></b-input>
      </b-field>
    </div>

    <div class="half-width">
      <b-field label="E-Mail" validation-message="gib deine echte Mail für Spam! thx">
        <b-input @input="setInput($event, 'setEmail')" :value="email" maxlength="40"> </b-input>
      </b-field>
    </div>

    <div class="half-width">
      <b-field label="Adresse">
        <b-input @input="setInput($event, 'setAddress')" :value="address" type="text"></b-input>
      </b-field>
    </div>

    <div class="half-width">
      <b-field label="PLZ">
        <b-input @input="setInput($event, 'setPostal')" :value="postal" type="postal"></b-input>
      </b-field>
    </div>

    <div class="half-width">
      <b-field label="Stadt">
        <b-input @input="setInput($event, 'setCity')" :value="city" type="city"></b-input>
      </b-field>
    </div>
  </section>
</template>

<script>
import Cart from '../Cart'
import FreeMoneySlider from '../UI/FreeMoneySlider.vue'
export default {
  components: { FreeMoneySlider, Cart },
  data() {
    return {}
  },
  methods: {
    setInput(payload, action) {
      this.$store.dispatch(action, payload)
    },
  },
  computed: {
    firstName() {
      return this.$store.getters.getFirstName
    },
    lastName() {
      return this.$store.getters.getLastName
    },
    email() {
      return this.$store.getters.getEmail
    },
    address() {
      return this.$store.getters.getAddress
    },
    postal() {
      return this.$store.getters.getPostal
    },
    city() {
      return this.$store.getters.getCity
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
</style>
