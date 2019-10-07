<template>
  <div class="page-container">
    <h1>
      R.S.V.P
    </h1>
    <h2>
      let us know if you can join us and which events you'd like to attend
    </h2>
    <form
      name="rsvp"
      action=""
      netlify
      netlify-honeypot="its-a-trap"
      @submit="handleRsvpSubmit"
    >
      <input name="its-a-trap" type="text" class="hidden" />

      <div>Names <input name="names" type="text" /></div>

      <div>
        Are you attending?

        <!-- Netlify isn't very smart at guessing key/names for checkboxes and radios in forms, this will trick Netlify to use this value as the label for the field -->
        <input name="attending" type="radio" value="R.S.V.P" class="hidden" />

        <label for="attending-yes">
          <input
            id="attending-yes"
            v-model="rsvpFormAttending"
            name="attending"
            type="radio"
            value="Yes"
          />
          Yes
        </label>

        <label for="attending-no">
          <input
            id="attending-no"
            v-model="rsvpFormAttending"
            name="attending"
            type="radio"
            value="No"
          />
          No
        </label>
      </div>

      <div>
        Which events would you like to join?

        <!-- Netlify isn't very smart at guessing key/names for checkboxes and radios in forms, this will trick Netlify to use this value as the label for the field -->
        <input name="events[]" type="checkbox" value="Events" class="hidden" />

        <label for="events-pool-party">
          <input
            id="events-pool-party"
            name="events[]"
            type="checkbox"
            value="Pool Party"
          />
          Pool Party
        </label>

        <label for="events-jet-ski-ing">
          <input
            id="events-jet-ski-ing"
            name="events[]"
            type="checkbox"
            value="Jet Ski-ing"
          />
          Jet Ski-ing
        </label>

        <label for="events-boat-party">
          <input
            id="events-boat-party"
            name="events[]"
            type="checkbox"
            value="Boat Party"
          />
          Boat Party
        </label>

        <label for="events-stag-hen">
          <input
            id="events-stag-hen"
            name="events[]"
            type="checkbox"
            value="Stag/Hen"
          />
          Stag/Hen
        </label>
      </div>

      <div>
        <input
          type="submit"
          value="Send"
          :disabled="rsvpFormSubmitting || rsvpFormResult.success"
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
      rsvpFormAttending: null,
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
              (this.rsvpFormAttending === 'Yes'
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
  }
}
</script>

<style lang="scss">
.hidden {
  display: none;
}

.error {
  color: red;
}
</style>
