<template>
  <div>
    <v-btn
      text
      color="#fff"
      @click="verifyBot"
      id="verify"
    >
      I am here to detect bots.
    </v-btn>
  </div>
</template>

<script>
export default {
  data: () => ({
    botDetected: false
  }),
  mounted() {
    setTimeout(() => {
      if (!this.botDetected) {
        this.$router.push({name: 'Lottery'})
      }
    }, 2000)
  },
  methods: {
    verifyBot(e) {
      if (e.clientX === 0 && e.clientY === 0)
        this.botDetected = true
    }
  }
}
</script>

<style>

</style>