<template>
  <v-row class="text-center">
    <v-col cols="12" v-if="ready" v-show="!startSurvey">
      <h1>Are you ready?</h1>
      <div class="mt-2">
        <v-btn
          outlined
          color="primary"
          class="text-none mx-2"
          @click="setReady(true)"
        >Yes</v-btn>

        <v-btn
          text
          color="red"
          class="text-none mx-2"
          @click="setReady(false)"
        >No</v-btn>
      </div>
    </v-col>
    <v-col cols="12" v-else>
      {{timeOut}}
    </v-col>
    <v-col cols="6" offset="3" v-if="startSurvey && !finished">
      <v-card outlined>
        <v-card-text>
          <v-stepper
            v-model="surveyStep"
          >
            <v-stepper-items>
              <v-stepper-content
                step="1"
              >
                <p>A or B?</p>
                <v-btn
                  color="primary"
                  outlined
                  @click="surveyStep ++"
                  class="mx-2"
                >Yes</v-btn>
                <v-btn 
                  color="red" 
                  text
                  @click="surveyStep ++"
                  class="mx-2"
                >No</v-btn>
              </v-stepper-content>

              <v-stepper-content
                step="2"
              >
                <p>X or Y?</p>
                <v-btn
                  color="primary"
                  outlined
                  @click="surveyStep ++"
                  class="mx-2"
                >Yes</v-btn>
                <v-btn 
                  color="red" 
                  text
                  @click="surveyStep ++"
                  class="mx-2"
                >No</v-btn>
              </v-stepper-content>

              <v-stepper-content
                step="3"
              >
                <p>0 or 1?</p>
                <v-btn
                  color="primary"
                  outlined
                  @click="finished = true"
                  class="mx-2"
                >Yes</v-btn>
                <v-btn 
                  color="red" 
                  text
                  @click="finished = true"
                  class="mx-2"
                >No</v-btn>
              </v-stepper-content>
            </v-stepper-items>
          </v-stepper>
        </v-card-text>
      </v-card>
    </v-col>
    <v-col cols="12" v-if="finished">
      <h1 class="mb-4">Congratulations, you passed the test!</h1>
      <v-btn
        color="primary"
        outlined
        @click="claimReward"
      >Claim my reward</v-btn>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data: () => ({
    ready: true,
    startSurvey: false,
    timerId: null,
    timeOut: 0,
    surveyStep: 1,
    finished: false,
  }),
  mounted() {
    this.timerId = setInterval(this.onTimer, 1000)
  },
  destroyed() {
    clearInterval(this.timerId)
  },
  methods: {
    setReady(status) {
      this.ready = status
      if (!status) {
        this.timeOut = 30
        this.startSurvey = false
      } else {
        this.startSurvey = true
      }
    },
    onTimer() {
      if (this.timeOut > 0) {
        this.timeOut --
        if (this.timeOut === 0) {
          this.ready = true
        }
      }
    },
    claimReward() {
      window.location.href='https://www.google.com'
    }
  },
}
</script>

<style>

</style>