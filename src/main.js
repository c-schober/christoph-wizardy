import Vue from 'vue'
import App from './App.vue'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import { store } from './Store/store'

Vue.use(Buefy, {
  defaultIconPack: 'mdi',
})

Vue.config.productionTip = false

new Vue({
  el: '#app',
  render: (h) => h(App),
  store,
})
