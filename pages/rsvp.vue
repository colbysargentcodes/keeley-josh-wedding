<template>
  <div class="page-container app-width">
    <h1 class="page-header">
      R.S.V.P
    </h1>
    <h2 class="page-header">
      We hope you can join us! Let us know if we can also count you ‘in’ for any
      of our pre and post wedding activities.
    </h2>
    <form
      name="rsvp"
      action="/rsvp"
      netlify
      netlify-honeypot="its-a-trap"
      @submit="handleRsvpSubmit"
    >
      <div class="form-border"></div>

      <input name="form-name" type="text" class="hidden" value="rsvp" />
      <input name="its-a-trap" type="text" class="hidden" />

      <div class="form-row form-input-row">
        <div class="form-input-name">
          Name(s)
        </div>
        <div class="form-input-field">
          <input v-model="rsvpResponses.name" name="names" type="text" />
          <span class="focus-bar"></span>
        </div>
      </div>

      <div class="form-row form-input-row">
        <div class="form-input-name">
          Email
        </div>
        <div class="form-input-field">
          <input v-model="rsvpResponses.email" name="email" type="email" />
          <span class="focus-bar"></span>
        </div>
      </div>

      <div class="form-events-group first">
        <div
          class="form-events-group-name font-heading text-spaced text-spaced-correction text-upper"
        >
          <span>Mykonos</span>
        </div>
        <div
          class="form-row form-event-row"
          :class="{ inactive: rsvpResponses.stagDo === 'No' }"
        >
          <div class="form-event-date">20<sup>th</sup></div>
          <div class="form-event-name">
            <img src="/icons/stag.svg" />
            <span>Stag Do</span>
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
                <checkbox
                  :checked="rsvpResponses.stagDo === 'Yes'"
                  class="form-event-checkbox"
                ></checkbox>
                <span>In</span>
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
                <checkbox
                  :checked="rsvpResponses.stagDo === 'No'"
                  class="form-event-checkbox"
                ></checkbox>
                <span>Out</span>
              </label>
            </div>
          </div>
        </div>

        <div
          class="form-row form-event-row"
          :class="{ inactive: rsvpResponses.henParty === 'No' }"
        >
          <div class="form-event-date">21<sup>st</sup></div>
          <div class="form-event-name">
            <img src="/icons/hen.svg" />
            <span>Hen Party</span>
          </div>
          <div class="form-event-field">
            <input
              type="radio"
              name="hen-party"
              value="Hen Party"
              class="hidden"
            />
            <div>
              <label for="hen-party-yes">
                <input
                  id="hen-party-yes"
                  v-model="rsvpResponses.henParty"
                  type="radio"
                  name="hen-party"
                  value="Yes"
                />
                <checkbox
                  :checked="rsvpResponses.henParty === 'Yes'"
                  class="form-event-checkbox"
                ></checkbox>
                <span>In</span>
              </label>
            </div>
            <div>
              <label for="hen-party-no">
                <input
                  id="hen-party-no"
                  v-model="rsvpResponses.henParty"
                  type="radio"
                  name="hen-party"
                  value="No"
                />
                <checkbox
                  :checked="rsvpResponses.henParty === 'No'"
                  class="form-event-checkbox"
                ></checkbox>
                <span>Out</span>
              </label>
            </div>
          </div>
        </div>
      </div>

      <div class="form-events-group">
        <div
          class="form-events-group-name font-heading text-spaced text-spaced-correction text-upper"
        >
          <span>Paros</span>
        </div>
        <div
          class="form-row form-event-row"
          :class="{ inactive: rsvpResponses.boatTrip === 'No' }"
        >
          <div class="form-event-date">24<sup>th</sup></div>
          <div class="form-event-name">
            <img src="/icons/boat-trip.svg" />
            <span>Boat Trip</span>
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
                <checkbox
                  :checked="rsvpResponses.boatTrip === 'Yes'"
                  class="form-event-checkbox"
                ></checkbox>
                <span>In</span>
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
                <checkbox
                  :checked="rsvpResponses.boatTrip === 'No'"
                  class="form-event-checkbox"
                ></checkbox>
                <span>Out</span>
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
            <img src="/icons/welcome-drinks.svg" />
            <span>Welcome Drinks</span>
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
                <checkbox
                  :checked="rsvpResponses.welcomeDrinks === 'Yes'"
                  class="form-event-checkbox"
                ></checkbox>
                <span>In</span>
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
                <checkbox
                  :checked="rsvpResponses.welcomeDrinks === 'No'"
                  class="form-event-checkbox"
                ></checkbox>
                <span>Out</span>
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
            <img src="/icons/wedding.svg" />
            <span>Wedding</span>
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
                <checkbox
                  :checked="rsvpResponses.wedding === 'Yes'"
                  class="form-event-checkbox"
                ></checkbox>
                <span>In</span>
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
                <checkbox
                  :checked="rsvpResponses.wedding === 'No'"
                  class="form-event-checkbox"
                ></checkbox>
                <span>Out</span>
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
            <img src="/icons/beach-recovery.svg" />
            <span>Beach Recovery</span>
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
                <checkbox
                  :checked="rsvpResponses.beachRecovery === 'Yes'"
                  class="form-event-checkbox"
                ></checkbox>
                <span>In</span>
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
                <checkbox
                  :checked="rsvpResponses.beachRecovery === 'No'"
                  class="form-event-checkbox"
                ></checkbox>
                <span>Out</span>
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
            <img src="/icons/pool-party.svg" />
            <span>Pool Party</span>
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
                <checkbox
                  :checked="rsvpResponses.poolParty === 'Yes'"
                  class="form-event-checkbox"
                ></checkbox>
                <span>In</span>
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
                <checkbox
                  :checked="rsvpResponses.poolParty === 'No'"
                  class="form-event-checkbox"
                ></checkbox>
                <span>Out</span>
              </label>
            </div>
          </div>
        </div>
      </div>

      <div class="form-events-group">
        <div
          class="form-events-group-name font-heading text-spaced text-spaced-correction text-upper"
        >
          <span>Santorini</span>
        </div>
        <div
          id="form-event-island-hop"
          class="form-row form-event-row"
          :class="{ inactive: rsvpResponses.islandHop === 'No' }"
        >
          <div class="form-event-date">30<sup>th</sup></div>
          <div class="form-event-name">
            <img src="/icons/island-hop.svg" />
            <span>Island Hop</span>
            <div class="form-event-description">
              If you are considering joining us in Santorini select ‘in’ and
              we’ll keep you updated on our plans
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
                <checkbox
                  :checked="rsvpResponses.islandHop === 'Yes'"
                  class="form-event-checkbox"
                ></checkbox>
                <span>In</span>
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
                <checkbox
                  :checked="rsvpResponses.islandHop === 'No'"
                  class="form-event-checkbox"
                ></checkbox>
                <span>Out</span>
              </label>
            </div>
          </div>
        </div>
      </div>

      <div class="form-row form-input-row">
        <div class="form-input-name">
          Message<br />
          <span class="note">optional</span>
        </div>
        <div class="form-input-field">
          <textarea
            name="message"
            rows="3"
            placeholder="Please let us know of any dietary requirements"
          ></textarea>
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

      <div v-if="rsvpFormSubmitAttempted && !rsvpFormValid" class="error">
        Please fill in all events
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
import Checkbox from '~/components/Checkbox.vue'

export default {
  components: {
    Checkbox
  },
  data() {
    return {
      rsvpForm: false,
      rsvpResponses: {
        name: null,
        email: null,
        stagDo: null,
        henParty: null,
        boatTrip: null,
        welcomeDrinks: null,
        wedding: null,
        beachRecovery: null,
        poolParty: null,
        islandHop: null
      },
      rsvpFormSubmitAttempted: false,
      rsvpFormSubmitting: false,
      rsvpFormResult: {}
    }
  },
  computed: {
    rsvpFormValid() {
      let formValid = true

      for (const response of Object.entries(this.rsvpResponses)) {
        if (!response[1]) formValid = false
      }

      return formValid
    }
  },
  mounted() {
    this.rsvpForm = document.querySelector('form[name=rsvp]')
  },
  methods: {
    handleRsvpSubmit(e) {
      e.preventDefault()
      this.rsvpFormSubmitting = true
      this.rsvpFormSubmitAttempted = true

      if (!this.rsvpFormValid) {
        this.rsvpFormSubmitting = false
        return
      }

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
      vertical-align: top;
    }

    .form-input-name {
      width: 29%;
      @include heading-font;

      .note {
        position: relative;
        top: -10px;
        color: $color-midgrey;
        @include body-font;
        font-size: 12px;
        font-style: italic;
      }
    }

    .form-input-field {
      width: 70%;
      position: relative;
      padding-top: 4px;

      input,
      textarea {
        width: 100%;
        border: 0;
        border-bottom: 1px solid $color-lightgrey;
        padding: 0.1em 0;
        font-family: inherit;
        font-size: 18px;
        color: inherit;
        text-align: center;
        line-height: 1.4;
        vertical-align: bottom;

        + .focus-bar {
          position: absolute;
          left: 51%;
          right: 51%;
          bottom: 0;
          height: 1px;
          background-color: $color-gold;
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

  .form-events-group {
    &.first {
      margin-top: 2em;
    }

    &-name {
      margin-bottom: -12px;
      padding-left: 95px;
      color: $color-gold;
      font-size: 14px;

      > span {
        display: inline-block;
        transform: translateX(-50%);
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
      width: 95px;
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
        border: 2px solid $color-gold;
        background-color: $color-white;
        transition: box-shadow 0.4s;
      }
    }

    .form-event-name {
      position: relative;
      flex-grow: 1;
      @include heading-font;

      img {
        width: 40px;
        margin-right: 6px;
        vertical-align: middle;
      }

      span {
        position: relative;
        top: 3px;
      }

      .form-event-description {
        position: absolute;
        margin-top: 6px;
        @include body-font;
        font-size: 14px;
        color: $color-midgrey;
      }
    }

    .form-event-field {
      width: 200px;
      display: flex;
      justify-content: space-between;

      label {
        font-size: 18px;
        cursor: pointer;

        input {
          display: none;
        }

        .form-event-checkbox {
          display: inline-block;
        }

        span {
          display: inline-block;
          position: relative;
          top: -4px;
        }
      }
    }

    &:not(:last-child) {
      .form-event-date:before {
        content: '';
        position: absolute;
        right: -1px;
        top: 50%;
        width: 2px;
        height: 78px;
        background-color: $color-gold;
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
      border: 1px solid $color-gold;
      padding: 0.75em 1.5em;
      background-color: $color-white;
      @include heading-font;
      font-size: 21px;
      color: inherit;
      text-decoration: none;
      cursor: pointer;
      transition: background-color 0.2s, color 0.2s;

      &:hover {
        background-color: $color-gold;
        color: $color-white;
      }
    }
  }

  #form-event-island-hop {
    margin-bottom: 65px;
  }
}
</style>
