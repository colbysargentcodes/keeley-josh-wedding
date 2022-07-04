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
      <figure @click="openLogin">
        <img src="/images/jk-monogram-thin.svg" />
        <h2>20.07.23</h2>
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
    <div id="login" :class="{ show: loginOpen }">
      <div>
        <h2>Please enter the password</h2>
      </div>
      <div>
        <input
          id="login-password"
          ref="passwordField"
          v-model="enteredPassword"
          type="password"
          @keyup="attemptLogin"
        />
      </div>
      <div>
        <div
          id="login-button"
          class="font-heading text-spaced text-upper"
          @click="attemptLogin"
        >
          login
        </div>
      </div>
      <div>
        <span id="login-error" :class="{ show: incorrectPassword }">
          Incorrect password, please try again
        </span>
      </div>
    </div>
    <div
      id="welcome-message"
      class="landing-page-section"
      :class="{ show: userHasEntered }"
    >
      <div class="font-heading text-upper text-spaced">
        <p>
          Three years, one elopement and a baby later, it still seems like such
          a shame to let a good wedding (and party) go to waste - so let’s hope
          the third time’s a charm!
        </p>
        <p>
          We’re looking forward to <i>finally</i> getting to celebrate our love,
          and our new family, with you all on the beautiful Paros Island in
          Greece in 2023.
        </p>
        <p>Good things come to those who wait...<br>a <em>really</em> long time.</p>
        <p>
          SEE YOU THERE!
        </p>
      </div>
      <p id="sign-off" class="font-script">
        Keeley, Josh & Bear
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
        date: new Date(Date.UTC(2023, 6, 20, 15)).getTime(),
        interval: false,
        days: 0,
        hours: 0,
        minutes: 0,
        ended: false
      },
      loginOpen: false,
      incorrectPassword: false,
      enteredPassword: '',
      correctPassword: 'keeleyandjosh',
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

      this.countdown.days = Math.floor(countdownAmount / (1000 * 60 * 60 * 24))
      this.countdown.hours = Math.floor(
        (countdownAmount % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      )
      this.countdown.minutes = Math.floor(
        (countdownAmount % (1000 * 60 * 60)) / (1000 * 60)
      )
    },
    openLogin() {
      if (this.checkLogin()) this.successfulLogin()
      else {
        this.loginOpen = true
        this.$refs.passwordField.focus()
      }
    },
    checkLogin() {
      const lastLogin = localStorage.getItem('lastLogin')
      const loginExpiry = new Date()
      const changedDate = loginExpiry.getDate() - 14
      loginExpiry.setDate(changedDate)

      return !(!lastLogin || lastLogin < loginExpiry.getTime())
    },
    attemptLogin(e) {
      if (e.keyCode && e.keyCode !== 13) return false
      this.incorrectPassword = false
      if (this.enteredPassword === this.correctPassword) {
        this.successfulLogin()
      } else {
        this.incorrectPassword = true
      }
    },
    successfulLogin() {
      this.loginOpen = false
      this.userHasEntered = true
      this.$eventBus.$emit('showHeader')
      localStorage.setItem('lastLogin', Date.now())
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
      font-size: 21px;
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

#login {
  opacity: 0;
  pointer-events: none;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.9);
  transition: opacity 0.4s;

  > div {
    opacity: 0;
    transition: opacity 0.4s 0.2s;

    + div {
      margin-top: 3em;
    }
  }

  #login-password {
    outline: none;
    width: 300px;
    border: 1px solid $color-gold;
    padding: 1em 1em 1em 1.5em;
    text-align: center;
    font-family: inherit;
    font-size: inherit;
    letter-spacing: 0.5em;
  }

  #login-button {
    display: inline-block;
    position: relative;
    margin-top: -3em;
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
      background-color: $color-gold;
      transition: left 0.4s, right 0.4s, background-color 0.2s;
    }

    &:hover:after {
      left: 2em;
      right: calc(2em + 4px); // adjust for text-spacing
    }
  }

  #login-error {
    opacity: 0;
    color: #e84a4a;
    transition: none;

    &.show {
      opacity: 1;
      transition: opacity 0.4s;
    }
  }

  &.show {
    opacity: 1;
    pointer-events: auto;

    > div {
      opacity: 1;
    }
  }
}

#welcome-message {
  width: 56.25%;
  padding-bottom: 50px;
  font-size: 18px;

  p + p {
    margin-top: 0.75em;
  }

  #sign-off {
    margin-top: 1.5em;
    padding-right: 1em;
    font-size: 42px;
    text-align: right;
    transform: rotate(-2deg) skew(0deg, -7deg);

    #sign-off-xoxo {
      position: relative;
      top: -0.35em;
      padding-right: 1em;
    }
  }
}

@media only screen and (max-width: 800px) {
  #welcome-message {
    width: 75%;
  }
}

@media only screen and (max-width: 600px) {
  #wedding-countdown {
    figure {
      img {
        height: 250px;
      }

      h2 {
        bottom: 1.5em;
        font-size: 1.05em;
      }
    }

    .countdown-block {
      width: 90px;

      .countdown-number {
        font-size: 2.625em;
      }
    }
  }

  #welcome-message {
    width: 100%;
    font-size: 16px;

    #sign-off {
      padding-right: 0.75em;
      font-size: 32px;
    }
  }
}
</style>
