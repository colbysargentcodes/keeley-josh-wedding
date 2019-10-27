<template>
  <div class="page-container app-width">
    <div
      id="wedding-countdown"
      class="landing-page-section text-spaced text-upper"
      :class="{ show: !userHasEntered }"
    >
      <h1>
        JK
      </h1>
      <h2>
        26.06.20
      </h2>
      <div id="countdown-container">
        <template v-if="!countdown.ended">
          <div class="countdown-block">
            <div class="countdown-number">{{ countdown.days }}</div>
            <div class="countdown-label">days</div>
          </div>
          <div class="countdown-block">
            <div class="countdown-number">{{ countdown.hours }}</div>
            <div class="countdown-label">hours</div>
          </div>
          <div class="countdown-block">
            <div class="countdown-number">{{ countdown.minutes }}</div>
            <div class="countdown-label">minutes</div>
          </div>
        </template>
        <div v-if="countdown.ended" class="countdown-ended">
          We're married!
        </div>
      </div>
      <div id="enter-button" @click="enter">enter</div>
    </div>
    <div
      id="welcome-message"
      class="landing-page-section"
      :class="{ show: userHasEntered }"
    >
      <p>
        We're so excited for you to join us to celebrate our wedding on Paros
        Island in Greece
      </p>
      <p>
        See you there!
      </p>
      <p id="sign-off">
        Keeley & Josh
        <br />
        <span id="sign-off-xoxo">xoxo</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      countdown: {
        date: new Date('Jun 26, 2020 17:00:00').getTime(),
        interval: false,
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
      this.countdown.interval = setInterval(this.iterateCountdown, 20000)
      this.iterateCountdown()
    },
    iterateCountdown() {
      const now = new Date().getTime()
      const countdownAmount = this.countdown.date - now

      // check if countdown has less than 1 minute left
      if (countdownAmount < 1000 * 60) {
        this.countdown.ended = true
        clearInterval(this.countdown.interval)
        return
      }

      this.countdown.days = Math.floor(
        (countdownAmount % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24)
      )
      this.countdown.hours = Math.floor(
        (countdownAmount % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      )
      this.countdown.minutes = Math.floor(
        (countdownAmount % (1000 * 60 * 60)) / (1000 * 60)
      )
    },
    enter() {
      this.userHasEntered = true
      this.$eventBus.$emit('showHeader')
    }
  }
}
</script>

<style scoped lang="scss">
@import '~/assets/scss/fonts';
@import '~/assets/scss/variables';

.page-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.landing-page-section {
  display: none;

  &.show {
    display: initial;
  }
}

#wedding-countdown {
  > * {
    margin-top: 1rem;
  }

  .countdown-block {
    display: inline-block;
    width: 150px;

    .countdown-number {
      font-size: 4em;
    }

    .countdown-label {
      @include script-font;
      text-transform: capitalize;
      letter-spacing: 0;
      font-size: 1.2em;
      font-weight: 600;
      color: $color-pink;
    }
  }

  #enter-button {
    display: inline-block;
    position: relative;
    margin-top: 4em;
    padding: 0.75em 1em;
    font-size: 21px;
    color: inherit;
    text-decoration: none;
    cursor: pointer;

    &:after {
      content: '';
      position: absolute;
      bottom: 0.55em;
      left: 51%;
      right: calc(51% + 4px);
      height: 1px;
      background-color: $color-pink;
      transition: left 0.4s, right 0.4s, background-color 0.2s;
    }

    &:hover:after {
      left: 2em;
      right: calc(2em + 4px); // adjust for text-spacing
    }
  }
}

#welcome-message {
  width: 56.25%;
  @include script-font;
  font-size: 28px;

  p + p {
    margin-top: 0.75em;
  }

  #sign-off {
    padding-right: 1em;
    font-size: 36px;
    text-align: right;

    #sign-off-xoxo {
      position: relative;
      top: -0.35em;
      padding-right: 1em;
      color: $color-gold;
    }
  }
}
</style>
