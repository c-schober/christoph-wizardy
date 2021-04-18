<template>
  <div class="container is-max-widescreen" id="app">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@mdi/font@5.8.55/css/materialdesignicons.min.css" />
    <stepper />
  </div>
</template>

<script>
import Stepper from './components/Stepper.vue'
export default {
  name: 'App',
  components: {
    Stepper,
  },
  data() {
    return {}
  },
  computed: {},
  methods: {},
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}

.button.is-success {
  margin-right: 30px;
  float: right;
  width: 150px;
}

.button.is-danger {
  margin-left: 30px;
  float: left;
  width: 150px;
}

h1 {
  font-size: 18px !important;
  margin-bottom: 5px !important;
}
</style>
