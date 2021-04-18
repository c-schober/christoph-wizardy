import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export const store = new Vuex.Store({
  plugins: [createPersistedState()],

  state: {
    cart: {
      items: [
        {
          id: 111,
          name: 'Bärle',
          description: 'ein treues Bärle das dich lieb hat',
          img: 'https://media.spielgeschenke.de/media/image/b5/ea/69/12196659de8c701ea17.jpg',
          quantity: 1,
          price: 15,
        },
        {
          id: 222,
          name: 'Lumpen',
          description: 'ein Lumpen zum Dreck wegmachen',
          img: 'https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX5374282.jpg',
          quantity: 1,
          price: 25,
        },
      ],
      total: 40,
    },
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    postal: '',
    city: '',
    donation: { percentage: 10, amount: 4 },
    payment: '',
    ccDetails: { ccNumber: null, ccName: '', ccValidation: null },
    step: 0,
  },
  getters: {
    getItems: (state) => state.cart.items,
    getStepOneFilled: (state) => {
      if (state.firstName && state.lastName && state.email && state.address && state.postal && state.city) {
        return true
      }
      return false
    },
    getStepThreeFilled: (state) => {
      if (state.ccDetails) {
        return true
      }
      return false
    },
    getTotal: (state) => state.cart.total,
    getFirstName: (state) => state.firstName,
    getLastName: (state) => state.lastName,
    getEmail: (state) => state.email,
    getAddress: (state) => state.address,
    getPostal: (state) => state.postal,
    getCity: (state) => state.city,
    getStep: (state) => state.step,
    getDonation: (state) => state.donation.amount,
    getPayment: (state) => state.payment,
    getCcDetails: (state) => state.ccDetails
  },
  mutations: {
    setItem: (state, payload) => {
      let found = state.cart.items.find((el) => el.id === payload.id)
      if (found) {
        found.quantity++
      } else {
        state.cart.items.push(payload)
      }
    },
    setQuantity: (state, payload) => {
      let found = state.cart.items.find((el) => el.id === payload.id)
      found.quantity = payload.quantity
      if (found.quantity < 1) {
        state.cart.items = state.cart.items.filter((el) => el.id != payload.id)
      }
    },
    setTotal: (state) => {
      let sum = 0
      for (let item of state.cart.items) {
        sum = sum + item.quantity * item.price
      }
      state.cart.total = sum
      state.donation.amount = (sum * state.donation.percentage) / 100
    },
    setFirstName: (state, payload) => (state.firstName = payload),
    setLastName: (state, payload) => (state.lastName = payload),
    setEmail: (state, payload) => (state.email = payload),
    setAddress: (state, payload) => (state.address = payload),
    setPostal: (state, payload) => (state.postal = payload),
    setCity: (state, payload) => (state.city = payload),
    setDonation: (state, payload) => {
      state.donation.percentage = payload.percentage
      state.donation.amount = (state.cart.total * payload.percentage) / 100
    },
    setPayment: (state, payload) => (state.payment = payload),
    setCcDetails: (state, payload) => (state.ccDetails = payload),
    setStep: (state, payload) => (state.step = payload),
  },
  actions: {
    setItem: ({ commit }, payload) => {
      commit('setItem', payload)
    },
    setQuantity: ({ commit }, payload) => {
      commit('setQuantity', payload)
    },
    setTotal: ({ commit }) => {
      commit('setTotal')
    },
    setFirstName: ({ commit }, payload) => {
      commit('setFirstName', payload)
    },
    setLastName: ({ commit }, payload) => {
      commit('setLastName', payload)
    },
    setEmail: ({ commit }, payload) => {
      commit('setEmail', payload)
    },
    setAddress: ({ commit }, payload) => {
      commit('setAddress', payload)
    },
    setPostal: ({ commit }, payload) => {
      commit('setPostal', payload)
    },
    setCity: ({ commit }, payload) => {
      commit('setCity', payload)
    },
    setDonation: ({ commit }, payload) => {
      commit('setDonation', payload)
    },
    setPayment: ({ commit }, payload) => {
      commit('setPayment', payload)
    },
    setCcDetails: ({ commit }, payload) => {
      commit('setCcDetails', payload)
    },
    setStep: ({ commit }, payload) => {
      commit('setStep', payload)
    },
  },
})
