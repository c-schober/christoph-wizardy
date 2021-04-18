<template>
  <section class="cart">
    <b-table :data="data">
      <b-table-column v-slot="props" field="del" label="" width="40">
        <a @click.prevent="changeQuantity({ quantity: 0, id: props.row.id })">X</a>
      </b-table-column>

      <b-table-column field="image" label="" v-slot="props">
        <img class="image" width="30px" height="30px" :src="props.row.img" :alt="props.row.img" />
      </b-table-column>

      <b-table-column field="title" label="Produkt:" v-slot="props">
        <p class="product-name">{{ props.row.name }}</p>
        <p>{{ props.row.description }}</p>
      </b-table-column>

      <b-table-column field="quantity" label="Menge:" v-slot="props">
        <b-field>
          <b-numberinput
            @input="changeQuantity({ quantity: $event, id: props.row.id })"
            :value="props.row.quantity"
            min="0"
            max="20"
            controls-alignment="right"
            controls-position="compact"
            controls-rounded
          ></b-numberinput>
        </b-field>
      </b-table-column>

      <b-table-column label="Einzelpreis:" v-slot="props">
        <div class="price">{{ props.row.price }} €</div>
      </b-table-column>

      <b-table-column label="Summe:" v-slot="props">
        <div class="price">{{ props.row.price * props.row.quantity }} €</div></b-table-column
      >

      <template #empty>
        <div class="empty-cart">
          <p>Jetzt kriegst du halt gar nix :P</p>
          <b-button @click.prevent="resetApp" type="is-primary">App zurücksetzen / Clear States</b-button>
        </div>
      </template>
    </b-table>
    <div class="total">Gesamt: {{ total }} €</div>
  </section>
</template>

<script>
export default {
  computed: {
    data() {
      return this.$store.getters.getItems
    },
    total() {
      return this.$store.getters.getTotal
    },
  },
  methods: {
    changeQuantity(payload) {
      this.$store.dispatch('setQuantity', payload)
      this.$store.dispatch('setTotal')
    },
    resetApp() {
      window.localStorage.removeItem('vuex')
      window.location.reload()
    },
  },
}
</script>

<style scoped>
.product-name {
  font-weight: 600;
}
.price {
  font-size: 18px;
  font-weight: 500;
}
.total {
  float: right;
  margin-right: 30px;
}
.cart {
  padding-top: 35px;
  padding-bottom: 50px !important;
}
.empty-cart {
  text-align: center;
  font-size: 25px;
  font-weight: 600;
  margin: 25px;
}

.image {
  width: 30px;
  height: 30px;
}
</style>
