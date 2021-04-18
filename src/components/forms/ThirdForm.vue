<template>
  <section>
    <h1 class="title">Was du kriegst:</h1>
    <cart />
    <free-money-result />
    <payment-selector />
    <cc-details v-if="payment" />
  </section>
</template>

<script>
import Cart from '../Cart'
import CcDetails from '../UI/CcDetails.vue'
import FreeMoneyResult from '../UI/FreeMoneyResult.vue'
import PaymentSelector from '../UI/PaymentSelector.vue'
export default {
  components: { Cart, FreeMoneyResult, PaymentSelector, CcDetails },
  computed: {
    payment() {
      return this.$store.getters.getPayment
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
