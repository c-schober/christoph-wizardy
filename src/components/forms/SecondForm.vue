<template>
  <section>
    <h1 class="title has-text-centered">Möchtest du zu deiner Bestellung 1kg Wegwerf-Plastik hinzufügen ?</h1>
    <img
      class="trash"
      src="https://cdn.prod.www.spiegel.de/images/7f48778b-0001-0004-0000-000001167366_w996_r1.77_fpx64.18_fpy55.01.jpg"
      alt="plastik"
      width="400px"
    />
    <div class="button-wrapper">
      <b-button class="button" @click.prevent="addPlastic" type="is-primary">Klar gerne!</b-button
      ><b-button blass="button" @click.prevent="confirm" type="is-primary">Lieber nicht!</b-button>
    </div>
  </section>
</template>

<script>
export default {
  computed: {
    firstName: {
      get() {
        return this.$store.state.lastName
      },
      set(value) {
        this.$store.dispatch('lastName', { lastName: value })
      },
    },
  },
  methods: {
    confirm() {
      this.$buefy.dialog.confirm({
        message: 'Wir fügen dir das Plastik trotzdem hinzu',
        cancelText: 'Abbrechen',
        onConfirm: () => this.addPlastic(),
      })
    },
    addPlastic() {
      this.$store.dispatch('setItem', {
        id: 333,
        name: '1kg Plastik',
        description: 'dreckiges Plastik zum saubermachen mit dem Lumpen',
        img:
          'https://cdn.prod.www.spiegel.de/images/7f48778b-0001-0004-0000-000001167366_w996_r1.77_fpx64.18_fpy55.01.jpg',
        quantity: 1,
        price: 79,
      })
      this.$store.dispatch('setStep', 2)
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
