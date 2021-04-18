<template>
  <section>
    <div class="stepper">
      <b-steps v-model="activeStep">
        <b-step-item step="1" label="YO">
          <first-form />
        </b-step-item>

        <b-step-item step="2" label="LO">
          <second-form />
        </b-step-item>

        <b-step-item step="3" label="SWAG">
          <third-form />
        </b-step-item>

        <b-step-item step="4" label="DONE">
          <fourth-form />
        </b-step-item>

        <template #navigation="{previous, next}">
          <b-button
            outlined
            type="is-danger"
            @input="test"
            :disabled="previous.disabled"
            @click.prevent="previous.action"
          >
            Zurück
          </b-button>
          <b-button
            v-if="activeStep != 3"
            outlined
            type="is-success"
            :disabled="disableNext"
            @click.prevent="next.action"
          >
            Weiter
          </b-button>
        </template>
      </b-steps>
    </div>
  </section>
</template>

<script>
import FirstForm from './forms/FirstForm'
import FourthForm from './forms/FourthForm.vue'
import SecondForm from './forms/SecondForm.vue'
import ThirdForm from './forms/ThirdForm'

export default {
  components: {
    FirstForm,
    SecondForm,
    ThirdForm,
    FourthForm,
  },

  computed: {
    disableNext() {
      return !this.$store.getters.getStepOneFilled && this.activeStep === 0
        ? true
        : !this.$store.getters.getStepThreeFilled && this.activeStep === 2
        ? true
        : false
    },
    activeStep: {
      get() {
        return this.$store.getters.getStep
      },
      set(value) {
        this.$store.dispatch('setStep', value)
      },
    },
  },
  methods: {
    test() {
      console.log('yolo')
    },
  },
}
</script>

<style scoped>
.stepper {
  margin-bottom: 100px !important;
}
</style>
