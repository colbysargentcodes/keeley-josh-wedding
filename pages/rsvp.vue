<template>
  <div class="page-container app-width">
    <h1 class="page-header">
      R.S.V.P
    </h1>
    <h2 class="page-header">
      let us know if you can join us and which events you'd like to attend
    </h2>
    <form
      name="rsvp"
      action="/rsvp"
      netlify
      netlify-honeypot="its-a-trap"
      @submit="handleRsvpSubmit"
    >
      <div class="form-border"></div>

      <input name="its-a-trap" type="text" class="hidden" />

      <div class="form-row form-input-row">
        <div class="form-input-name">
          Name(s)
        </div>
        <div class="form-input-field">
          <input name="names" type="text" />
          <span class="focus-bar"></span>
        </div>
      </div>

      <div class="form-row form-input-row">
        <div class="form-input-name">
          Email
        </div>
        <div class="form-input-field">
          <input name="email" type="email" />
          <span class="focus-bar"></span>
        </div>
      </div>

      <div class="form-events-group">
        <div
          class="form-row form-event-row"
          :class="{ inactive: rsvpResponses.stagDo === 'No' }"
        >
          <div class="form-event-date">20<sup>th</sup></div>
          <div class="form-event-name">
            Stag Do
          </div>
          <div class="form-event-field">
            <input type="radio" name="stag-do" value="Stag Do" class="hidden" />
            <div>
              <label for="stag-do-yes">
                <input
                  id="stag-do-yes"
                  v-model="rsvpResponses.stagDo"
                  type="radio"
                  name="stag-do"
                  value="Yes"
                />
                In
              </label>
            </div>
            <div>
              <label for="stag-do-no">
                <input
                  id="stag-do-no"
                  v-model="rsvpResponses.stagDo"
                  type="radio"
                  name="stag-do"
                  value="No"
                />
                Out
              </label>
            </div>
          </div>
        </div>

        <div
          class="form-row form-event-row"
          :class="{ inactive: rsvpResponses.henDo === 'No' }"
        >
          <div class="form-event-date">21<sup>st</sup></div>
          <div class="form-event-name">
            Hen Do
          </div>
          <div class="form-event-field">
            <input type="radio" name="hen-do" value="Hen Do" class="hidden" />
            <div>
              <label for="hen-do-yes">
                <input
                  id="hen-do-yes"
                  v-model="rsvpResponses.henDo"
                  type="radio"
                  name="hen-do"
                  value="Yes"
                />
                In
              </label>
            </div>
            <div>
              <label for="hen-do-no">
                <input
                  id="hen-do-no"
                  v-model="rsvpResponses.henDo"
                  type="radio"
                  name="hen-do"
                  value="No"
                />
                Out
              </label>
            </div>
          </div>
        </div>
      </div>

      <div class="form-events-group">
        <div
          class="form-row form-event-row"
          :class="{ inactive: rsvpResponses.boatTrip === 'No' }"
        >
          <div class="form-event-date">24<sup>th</sup></div>
          <div class="form-event-name">
            Boat Trip
          </div>
          <div class="form-event-field">
            <input
              type="radio"
              name="boat-trip"
              value="Boat Trip"
              class="hidden"
            />
            <div>
              <label for="boat-trip-yes">
                <input
                  id="boat-trip-yes"
                  v-model="rsvpResponses.boatTrip"
                  type="radio"
                  name="boat-trip"
                  value="Yes"
                />
                In
              </label>
            </div>
            <div>
              <label for="boat-trip-no">
                <input
                  id="boat-trip-no"
                  v-model="rsvpResponses.boatTrip"
                  type="radio"
                  name="boat-trip"
                  value="No"
                />
                Out
              </label>
            </div>
          </div>
        </div>

        <div
          class="form-row form-event-row"
          :class="{ inactive: rsvpResponses.welcomeDrinks === 'No' }"
        >
          <div class="form-event-date">25<sup>th</sup></div>
          <div class="form-event-name">
            Welcome Drinks
          </div>
          <div class="form-event-field">
            <input
              type="radio"
              name="welcome-drinks"
              value="Welcome Drinks"
              class="hidden"
            />
            <div>
              <label for="welcome-drinks-yes">
                <input
                  id="welcome-drinks-yes"
                  v-model="rsvpResponses.welcomeDrinks"
                  type="radio"
                  name="welcome-drinks"
                  value="Yes"
                />
                In
              </label>
            </div>
            <div>
              <label for="welcome-drinks-no">
                <input
                  id="welcome-drinks-no"
                  v-model="rsvpResponses.welcomeDrinks"
                  type="radio"
                  name="welcome-drinks"
                  value="No"
                />
                Out
              </label>
            </div>
          </div>
        </div>

        <div
          class="form-row form-event-row"
          :class="{ inactive: rsvpResponses.wedding === 'No' }"
        >
          <div class="form-event-date">26<sup>th</sup></div>
          <div class="form-event-name">
            Wedding
          </div>
          <div class="form-event-field">
            <input type="radio" name="wedding" value="Wedding" class="hidden" />
            <div>
              <label for="wedding-yes">
                <input
                  id="wedding-yes"
                  v-model="rsvpResponses.wedding"
                  type="radio"
                  name="wedding"
                  value="Yes"
                />
                In
              </label>
            </div>
            <div>
              <label for="wedding-no">
                <input
                  id="wedding-no"
                  v-model="rsvpResponses.wedding"
                  type="radio"
                  name="wedding"
                  value="No"
                />
                Out
              </label>
            </div>
          </div>
        </div>

        <div
          class="form-row form-event-row"
          :class="{ inactive: rsvpResponses.beachRecovery === 'No' }"
        >
          <div class="form-event-date">27<sup>th</sup></div>
          <div class="form-event-name">
            Beach Recovery
          </div>
          <div class="form-event-field">
            <input
              type="radio"
              name="beach-recovery"
              value="Beach Recovery"
              class="hidden"
            />
            <div>
              <label for="beach-recovery-yes">
                <input
                  id="beach-recovery-yes"
                  v-model="rsvpResponses.beachRecovery"
                  type="radio"
                  name="beach-recovery"
                  value="Yes"
                />
                In
              </label>
            </div>
            <div>
              <label for="beach-recovery-no">
                <input
                  id="beach-recovery-no"
                  v-model="rsvpResponses.beachRecovery"
                  type="radio"
                  name="beach-recovery"
                  value="No"
                />
                Out
              </label>
            </div>
          </div>
        </div>

        <div
          class="form-row form-event-row"
          :class="{ inactive: rsvpResponses.poolParty === 'No' }"
        >
          <div class="form-event-date">28<sup>th</sup></div>
          <div class="form-event-name">
            Pool Party
          </div>
          <div class="form-event-field">
            <input
              type="radio"
              name="pool-party"
              value="Pool Party"
              class="hidden"
            />
            <div>
              <label for="pool-party-yes">
                <input
                  id="pool-party-yes"
                  v-model="rsvpResponses.poolParty"
                  type="radio"
                  name="pool-party"
                  value="Yes"
                />
                In
              </label>
            </div>
            <div>
              <label for="pool-party-no">
                <input
                  id="pool-party-no"
                  v-model="rsvpResponses.poolParty"
                  type="radio"
                  name="pool-party"
                  value="No"
                />
                Out
              </label>
            </div>
          </div>
        </div>
      </div>

      <div class="form-events-group">
        <div
          class="form-row form-event-row"
          :class="{ inactive: rsvpResponses.islandHop === 'No' }"
        >
          <div class="form-event-date">30<sup>th</sup></div>
          <div class="form-event-name">
            Island Hop
            <div class="form-event-description">
              Are you considering joining us in Santorini?<br />
              (We'll keep you updated on our plans)
            </div>
          </div>
          <div class="form-event-field">
            <input
              type="radio"
              name="island-hop"
              value="Island Hop"
              class="hidden"
            />
            <div>
              <label for="island-hop-yes">
                <input
                  id="island-hop-yes"
                  v-model="rsvpResponses.islandHop"
                  type="radio"
                  name="island-hop"
                  value="Yes"
                />
                In
              </label>
            </div>
            <div>
              <label for="island-hop-no">
                <input
                  id="island-hop-no"
                  v-model="rsvpResponses.islandHop"
                  type="radio"
                  name="island-hop"
                  value="No"
                />
                Out
              </label>
            </div>
          </div>
        </div>
      </div>

      <div class="form-row form-input-row">
        <div class="form-input-name">
          Message
        </div>
        <div class="form-input-field">
          <textarea name="message" rows="3"></textarea>
          <span class="focus-bar"></span>
        </div>
      </div>

      <div class="form-row form-submit-row">
        <input
          type="submit"
          value="Send"
          :disabled="rsvpFormSubmitting || rsvpFormResult.success"
          class="text-spaced text-upper"
        />
      </div>

      <div>
        <span :class="{ error: !rsvpFormResult.success }">
          {{ rsvpFormResult.message }}
        </span>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      rsvpForm: false,
      rsvpResponses: {
        stagDo: null,
        henDo: null,
        boatTrip: null,
        welcomeDrinks: null,
        wedding: null,
        beachRecovery: null,
        poolParty: null,
        islandHop: null
      },
      rsvpFormSubmitting: false,
      rsvpFormResult: {}
    }
  },
  mounted() {
    this.rsvpForm = document.querySelector('form[name=rsvp]')
  },
  methods: {
    handleRsvpSubmit(e) {
      e.preventDefault()
      this.rsvpFormSubmitting = true

      this.sendRsvpSubmit().then((response) => {
        this.rsvpFormSubmitting = false

        // Netlify will return response code 200 on a successful form submission
        if (Number(response.status) !== 200) {
          this.rsvpFormResult = {
            success: false,
            message: 'Sorry, something went wrong, please try again later'
          }
        } else {
          this.rsvpFormResult = {
            success: true,
            message:
              'Thank you, ' +
              (this.rsvpResponses.wedding === 'Yes'
                ? 'we look forward to seeing you.'
                : "we're sorry you can't make it.")
          }
        }
      })
    },
    sendRsvpSubmit() {
      return new Promise((resolve, reject) => {
        fetch(this.rsvpForm.getAttribute('action'), {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          },
          body: window.serialize(this.rsvpForm)
        })
          .then((response) => {
            resolve(response)
          })
          .catch((err) => {
            reject(err)
          })
      })
    }
  },
  head() {
    return {
      title: 'Meet the McNamaras - R.S.V.P'
    }
  }
}
</script>

<style scoped lang="scss">
@import '~/assets/scss/fonts.scss';
@import '~/assets/scss/variables.scss';

.hidden {
  display: none;
}

.error {
  color: red;
}

form {
  position: relative;
  width: 65%;
  margin: 80px auto 0;
  padding: 80px;
  background-color: $color-white;
  font-size: 24px;
  text-align: left;
  letter-spacing: 0.025em;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  z-index: 0;

  .form-border {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    border: 1px solid $color-black;
    margin: 40px;
    z-index: -1;
  }

  > * + * {
    margin-top: 1em;
  }

  .form-input-row {
    .form-input-name,
    .form-input-field {
      display: inline-block;
    }

    .form-input-name {
      width: 29%;
      @include heading-font;
    }

    .form-input-field {
      width: 70%;
      position: relative;

      input,
      textarea {
        width: 100%;
        border: 0;
        border-bottom: 1px solid $color-lightgrey;
        padding: 0.1em 0;
        font-family: inherit;
        font-size: 21px;
        color: inherit;
        text-align: center;
        vertical-align: top;

        + .focus-bar {
          position: absolute;
          left: 51%;
          right: 51%;
          bottom: 0;
          height: 1px;
          background-color: $color-pink;
          transition: left 0.4s, right 0.4s;
        }

        &:focus {
          outline: 0;

          + .focus-bar {
            left: 0;
            right: 0;
          }
        }
      }

      textarea {
        text-align: left;
        resize: vertical;
      }
    }
  }

  .form-row.form-event-row {
    display: flex;
    align-items: center;
    height: 85px;
    transition: opacity 0.4s;

    > div {
      padding: 0 20px;
    }

    .form-event-date {
      width: 15%;
      position: relative;
      @include heading-font;
      font-size: 32px;

      sup {
        font-size: 18px;
      }

      &:after {
        content: '';
        position: absolute;
        right: -7px;
        top: calc(50% - 7px);
        width: 14px;
        height: 14px;
        border-radius: 14px;
        border: 2px solid $color-pink;
        background-color: $color-white;
        transition: box-shadow 0.4s;
      }
    }

    .form-event-name {
      width: 55%;
      @include heading-font;

      .form-event-description {
        @include body-font;
        font-size: 14px;
        color: $color-midgrey;
      }
    }

    .form-event-field {
      width: 30%;
      display: flex;
      justify-content: space-around;
    }

    &:not(:last-child) {
      .form-event-date:before {
        content: '';
        position: absolute;
        right: -1px;
        top: 50%;
        width: 2px;
        height: 78px;
        background-color: $color-pink;
      }
    }

    &.inactive {
      opacity: 0.5;

      .form-event-date:after {
        box-shadow: 0 -7px 7px white;
      }
    }
  }

  .form-row.form-submit-row {
    margin-top: 2em;
    text-align: center;

    input[type='submit'] {
      margin: 0 auto;
      border: 1px solid $color-pink;
      padding: 0.75em 1.5em;
      background-color: $color-white;
      @include heading-font;
      font-size: 21px;
      color: inherit;
      text-decoration: none;
      cursor: pointer;
      transition: background-color 0.2s, color 0.2s;

      &:hover {
        background-color: $color-pink;
        color: $color-white;
      }
    }
  }
}
</style>
