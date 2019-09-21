<template>
  <div class="page-container">
    <h1>
      R.S.V.P
    </h1>
    <h2>
      let us know if you can join us and which events you'd like to attend
    </h2>
    <form name="rsvp" netlify netlify-honeypot="its-a-trap">
      <input name="its-a-trap" type="text" class="hidden" />

      <div>Names <input name="names" type="text" /></div>

      <div>
        Are you attending?

        <label for="attending-yes">
          <input id="attending-yes" name="attending[]" type="radio" value="Yes" />
          Yes
        </label>

        <label for="attending-no">
          <input id="attending-no" name="attending[]" type="radio" value="No" />
          No
        </label>
      </div>

      <div>
        Which events would you like to join?

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
        <input type="submit" value="Send" />
      </div>
    </form>
  </div>
</template>

<style>
.hidden {
  visibility: hidden;
}
</style>
