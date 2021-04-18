<template>
  <section>
    <h1 class="title has-text-centered">Vielen Dank für deinen Einkauf beim ÖKOFUCHS</h1>
    <p class="title has-text-centered">Die Marke, der du wirklich vertrauen kannst</p>

    <img
      class="trash"
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Stoned_Fox.jpg/1200px-Stoned_Fox.jpg"
      alt="plastik"
      width="200px"
      height="250px"
    />
    <div class="button-wrapper">
      <b-button class="button is_centered" @click.prevent="resetApp" type="is-primary">App zurücksetzen</b-button>
    </div>
  </section>
</template>

<script>
export default {
  methods: {
    resetApp() {
      window.localStorage.removeItem('vuex')
      window.location.reload()
    },
  },
}
</script>
<style scoped>
.trash {
  display: block;
  margin: 25px auto;
}
.button-wrapper {
  text-align: center;
}
.button {
  margin: 15px;
}
</style>
