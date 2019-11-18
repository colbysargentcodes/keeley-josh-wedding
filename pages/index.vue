<template>
  <div
    class="page-container app-width"
    :class="{ 'welcome-page-active': userHasEntered }"
  >
    <div
      id="wedding-countdown"
      class="landing-page-section font-heading text-spaced text-upper"
      :class="{ show: !userHasEntered }"
    >
      <figure @click="enter">
        <img src="/images/jk-monogram-thin.svg" />
        <h2>26.06.20</h2>
        <div id="enter-button">enter</div>
      </figure>
      <div id="countdown-container">
        <template v-if="!countdown.ended">
          <div class="countdown-block">
            <div class="countdown-number">{{ countdown.days }}</div>
            <div class="countdown-label font-script">days</div>
          </div>
          <div class="countdown-block">
            <div class="countdown-number">{{ countdown.hours }}</div>
            <div class="countdown-label font-script">hours</div>
          </div>
          <div class="countdown-block">
            <div class="countdown-number">{{ countdown.minutes }}</div>
            <div class="countdown-label font-script">minutes</div>
          </div>
        </template>
        <div v-if="countdown.ended" class="countdown-ended">
          We're married!
        </div>
      </div>
    </div>
    <div
      id="welcome-message"
      class="landing-page-section"
      :class="{ show: userHasEntered }"
    >
      <div class="font-heading text-upper text-spaced">
        <p>
          We're so excited for you to join us to celebrate our wedding on Paros
          Island in Greece
        </p>
        <p>
          See you there!
        </p>
      </div>
      <p id="sign-off" class="font-script">
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
@import '~/assets/scss/variables';

.page-container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;

  &.welcome-page-active {
    padding-top: 100px;
  }
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

  figure {
    position: relative;
    cursor: pointer;

    img,
    h2 {
      transition: opacity 1s 0.2s;
    }

    img {
      width: auto;
      height: 300px;
    }

    h2 {
      position: absolute;
      bottom: 1em;
      left: 46%;
    }

    #enter-button {
      display: inline-block;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      opacity: 0;
      padding: 0.75em 1em;
      font-size: 28px;
      color: inherit;
      text-decoration: none;
      transition: opacity 1.2s;
    }

    &:hover {
      img,
      h2 {
        opacity: 0.3;
        transition: opacity 1s;
      }

      #enter-button {
        opacity: 1;
      }
    }
  }

  .countdown-block {
    display: inline-block;
    width: 150px;

    .countdown-number {
      font-size: 3.5em;
    }

    .countdown-label {
      color: $color-gold;
      font-size: 18px;
      text-transform: capitalize;
      letter-spacing: 0;
    }
  }
}

#welcome-message {
  width: 56.25%;
  padding-bottom: 50px;
  font-size: 21px;

  p + p {
    margin-top: 0.75em;
  }

  #sign-off {
    margin-top: 1.5em;
    padding-right: 1em;
    font-size: 42px;
    text-align: right;
    transform: rotate(-7deg);

    #sign-off-xoxo {
      position: relative;
      top: -0.35em;
      padding-right: 1em;
    }
  }
}
</style>
