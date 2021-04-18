<template>
  <section>
    <div class="pay-question">Wie möchtest du das Zeug zahlen?</div>

    <b-field class="button-wrapper">
      <b-radio-button class="pay-button" v-model="payment" native-value="paypal" type="is-primary is-outlined">
        <b-icon icon="credit-card-outline"></b-icon>
        <span>Paypal</span>
      </b-radio-button>

      <b-radio-button class="pay-button" v-model="payment" native-value="amazon" type="is-primary is-outlined">
        <b-icon icon="amazon"></b-icon>
        <span>Amazon Pay</span>
      </b-radio-button>
    </b-field>
    <div class="clearfix"></div>
  </section>
</template>

<script>
export default {
  computed: {
    payment: {
      get() {
        return this.$store.state.getPayment
      },
      set(value) {
        console.log(value)
        this.$store.dispatch('setPayment', value)
      },
    },
  },
}
</script>

<style scoped>
.pay-button {
  width: 180px;
  margin: 5px;
}

.button-wrapper {
  text-align: right;
  float: right;
}

.pay-question {
  text-align: right;
  margin-right: 15px;
}

.clearfix {
  clear: both;
}
</style>
