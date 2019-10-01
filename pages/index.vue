<template>
  <div class="page-container">
    <div class="landing-page-section" :class="{ show: !userHasEntered }">
      <h1>
        JK
      </h1>
      <h2>
        26.06.20
      </h2>
      <div id="countdown-container">
        <div v-if="!countdown.ended" class="countdown-block">
          <span class="countdown-number">{{ this.countdown.days }}</span>
          <span class="countdown-label">days</span>
        </div>
        <div v-if="!countdown.ended" class="countdown-block">
          <span class="countdown-number">{{ this.countdown.hours }}</span>
          <span class="countdown-label">hours</span>
        </div>
        <div v-if="!countdown.ended" class="countdown-block">
          <span class="countdown-number">{{ this.countdown.minutes }}</span>
          <span class="countdown-label">minutes</span>
        </div>
        <div v-if="countdown.ended" class="countdown-ended">
          We're married!
        </div>
      </div>
      <span @click="enter">enter</span>
    </div>
    <div class="landing-page-section" :class="{ show: userHasEntered }">
      <p>
        We're so excited for you to join us to celebrate our wedding on Paros
        Island in Greece
      </p>
      <p>
        See you there!
        <br />
        Keeley & Josh xoxo
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      countdown: {
        days: 0,
        hours: 0,
        minutes: 0,
        ended: false
      },
      userHasEntered: false
    }
  },
  mounted() {
    this.startCountdown()
  },
  methods: {
    startCountdown() {
      const self = this
      const countdownDate = new Date('Jun 26, 2020 12:00:00').getTime()

      const countdownInterval = setInterval(function() {
        const now = new Date().getTime()
        const countdownAmount = countdownDate - now

        // check if countdown has less than 1 minute left
        if (countdownAmount < 1000 * 60) {
          self.countdown.ended = true
          clearInterval(countdownInterval)
          return
        }

        self.countdown.days = Math.floor(
          (countdownAmount % (1000 * 60 * 60 * 24 * 365)) /
            (1000 * 60 * 60 * 24)
        )
        self.countdown.hours = Math.floor(
          (countdownAmount % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        )
        self.countdown.minutes = Math.floor(
          (countdownAmount % (1000 * 60 * 60)) / (1000 * 60)
        )
      }, 1000)
    },
    enter() {
      this.userHasEntered = true
      this.$eventBus.$emit('showHeader')
    }
  }
}
</script>

<style lang="scss">
.landing-page-section {
  display: none;

  &.show {
    display: initial;
  }
}
</style>
