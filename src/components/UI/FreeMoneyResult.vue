<template>
  <div class="free-money">
    <div class="free-money-text">
      Zusätzlich spendest du an uns
      <div class="change-wrapper">
        <b-field class="change-value" label=""> <b-input v-model="donation" type="text"></b-input> </b-field>€
      </div>
    </div>
    <p>Dieses Geld werden wir zu 100% in Öl-Futures investieren</p>
  </div>
</template>

<script>
export default {
  computed: {
    donation: {
      get() {
        return this.$store.getters.getDonation
      },
      set(value) {
        this.$store.dispatch('setDonationAmount', parseFloat(value))
      },
    },
  },
}
</script>
<style scoped>
.free-money {
  text-align: right;
  margin-right: 15px;
}
.free-money-text {
  font-weight: 600;
}
.change-wrapper {
  width: 100%;
  display: flex;
  font-size: 25px;
  justify-content: flex-end;
}
.change-value {
  width: 60px;
  margin-right: 5px
}
</style>
