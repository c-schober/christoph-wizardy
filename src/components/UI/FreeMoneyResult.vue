<template>
  <div class="free-money">
    <p class="free-money-text">Zusätzlich spendest du an uns {{ donation }} €</p>
    <p>Dieses Geld werden wir zu 100% in Öl-Futures investieren</p>
  </div>
</template>

<script>
export default {
  computed: {
    donation() {
      return this.$store.getters.getDonation
    },
  },
}
</script>
<style scoped>
.free-money {
  text-align: right;
  margin-right:15px
}
.free-money-text {
    font-weight: 600
}
</style>
