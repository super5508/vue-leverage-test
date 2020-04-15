<template>
  <div>
    <v-btn
      text
      color="#fff"
      @click="botDetected = true"
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
  }
}
</script>

<style>

</style>