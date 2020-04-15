<template>
  <v-row class="text-center">
    <v-col cols="6" offset="3">
      <div class="d-flex justify-center">
        <div :class="{spinner: rotating}">
          <v-img
            src="images/spinspr.png" 
            alt="lottery"
            width="330px"
            height="330px"
          />
        </div>
      </div>
    </v-col>
    <v-col cols="12" class="mt-8">
      <v-btn
        outlined
        color="primary"
        v-if="result"
        @click="$router.push({name: 'Survey'})"
      >Continue</v-btn>
    </v-col>
    <v-dialog
      v-model="alertModal" 
      persistent 
      width="300px"
    >
      <v-card>
        <v-card-title>
          Result: No
        </v-card-title>
        <v-divider></v-divider>
        <v-card-text class="pt-4">
          You have {{numberOfTries}} more try.
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn 
            class="text-none" 
            outlined 
            color="primary"
            @click="startRotate"
          >OK, Try Again!</v-btn>
          <v-spacer></v-spacer>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  data: () => ({
    rotating: false,
    numberOfTries: 0,
    alertModal: false,
    result: false,
  }),
  mounted() {
    this.numberOfTries = 2
    this.startRotate()
  },
  methods: {
    startRotate() {
      this.rotating = true
      this.alertModal = false
      this.result = false
      setTimeout(() => {
        this.rotating = false
        this.numberOfTries --
      }, 5000);
    }
  },
  watch: {
    numberOfTries(value) {
      if (value === 1) {
        this.alertModal = true
        this.result = false
      } else if (value === 0) {
        this.result = true
      }
    }
  }
}
</script>

<style> 
.spinner {
  animation-name: spin;
  animation-duration: 5000ms;
  animation-iteration-count: infinite;
  animation-timing-function: ease-out;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>