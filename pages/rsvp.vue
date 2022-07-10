<template>
  <div class="page-container app-width">
    <h1 class="page-header">
      R.S.V.P
    </h1>
    <h2 class="page-header">
      We hope you can join us on our new wedding date! Same time. Same place.
      <br>Less to worry about. More to celebrate.
    </h2>
    <form
      name="rsvp"
      action="/rsvp"
      netlify
      netlify-honeypot="its-a-trap"
      :class="{ frozen: rsvpFormResult.success }"
      @submit="handleRsvpSubmit"
    >
      <div class="form-step">
        <div class="form-step-border"></div>

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
            <input v-model="rsvpResponses.email" name="email" type="text" />
            <span class="focus-bar"></span>
          </div>
        </div>

        <div class="form-row form-rsvp-row">
          <div class="form-rsvp-field">
            <input type="radio" name="rsvp" value="RSVP" class="hidden" />
            <label for="rsvp-yes">
              <input
                id="rsvp-yes"
                v-model="rsvpResponses.rsvp"
                type="radio"
                name="rsvp"
                value="Yes"
              />
              <checkbox
                :checked="rsvpResponses.rsvp === 'Yes'"
                class="form-event-checkbox"
              ></checkbox>
              <div>
                <div class="font-script">accepts</div>
                <div
                  class="font-heading text-upper text-spaced text-spaced-correction"
                >
                  With Pleasure
                </div>
              </div>
            </label>

            <label for="rsvp-no">
              <input
                id="rsvp-no"
                v-model="rsvpResponses.rsvp"
                type="radio"
                name="rsvp"
                value="No"
              />
              <checkbox
                :checked="rsvpResponses.rsvp === 'No'"
                class="form-event-checkbox"
              ></checkbox>
              <div>
                <div class="font-script">declines</div>
                <div
                  class="font-heading text-upper text-spaced text-spaced-correction"
                >
                  With Regret
                </div>
              </div>
            </label>
          </div>
        </div>

        <div class="form-hidden-items" :class="{show: rsvpResponses.rsvp === 'Yes'}">
          <div class="form-events-group">
            <div
              class="form-events-group-headings font-heading text-spaced text-spaced-correction text-upper"
            >
              <div class="form-events-group-headings-name">
                <span>Mykonos</span>
              </div>
              <div class="form-events-group-headings-responses">
                <span>Yes</span>
                <span>No</span>
              </div>
            </div>

            <div
              class="form-row form-event-row"
              :class="{ inactive: rsvpResponses.stagDo === 'No' }"
            >
              <div class="form-event-date">15<sup>th</sup></div>
              <div class="form-event-name">
                <img src="/icons/stag.svg" />
                <span>Buck's Party</span>
              </div>
              <div class="form-event-field">
                <input
                  type="radio"
                  name="stag-do"
                  value="Bucks Party"
                  class="hidden"
                />
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
                  </label>
                </div>
              </div>
            </div>

            <div
              class="form-row form-event-row"
              :class="{ inactive: rsvpResponses.henParty === 'No' }"
            >
              <div class="form-event-date">16<sup>th</sup></div>
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
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div class="form-events-group">
            <div
              class="form-events-group-headings font-heading text-spaced text-spaced-correction text-upper"
            >
              <div class="form-events-group-headings-name">
                <span>Paros</span>
              </div>
              <div class="form-events-group-headings-responses">
                <span>Yes</span>
                <span>No</span>
              </div>
            </div>
            <div
              class="form-row form-event-row"
              :class="{ inactive: rsvpResponses.boatTrip === 'No' }"
            >
              <div class="form-event-date">18<sup>th</sup></div>
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
                  </label>
                </div>
              </div>
            </div>

            <div
              class="form-row form-event-row"
              :class="{ inactive: rsvpResponses.welcomeDrinks === 'No' }"
            >
              <div class="form-event-date">19<sup>th</sup></div>
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
                  </label>
                </div>
              </div>
            </div>

            <div
              class="form-row form-event-row"
              :class="{ inactive: rsvpResponses.wedding === 'No' }"
            >
              <div class="form-event-date">20<sup>th</sup></div>
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
                      disabled
                    />
                    <checkbox
                      :checked="rsvpResponses.wedding === 'Yes'"
                      class="form-event-checkbox"
                    ></checkbox>
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
                      disabled
                    />
                    <checkbox
                      :checked="rsvpResponses.wedding === 'No'"
                      class="form-event-checkbox"
                    ></checkbox>
                  </label>
                </div>
              </div>
            </div>

            <div
              class="form-row form-event-row"
              :class="{ inactive: rsvpResponses.beachRecovery === 'No' }"
            >
              <div class="form-event-date">21<sup>st</sup></div>
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
                  </label>
                </div>
              </div>
            </div>

            <div
              class="form-row form-event-row"
              :class="{ inactive: rsvpResponses.poolParty === 'No' }"
            >
              <div class="form-event-date">22<sup>nd</sup></div>
              <div class="form-event-name">
                <img src="/icons/pool-party.svg" />
                <span>Brunch Pool Party</span>
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
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div class="form-events-group">
            <div
              class="form-events-group-headings font-heading text-spaced text-spaced-correction text-upper"
            >
              <div class="form-events-group-headings-name">
                <span>Santorini</span>
              </div>
              <div class="form-events-group-headings-responses">
                <span>Yes</span>
                <span>No</span>
              </div>
            </div>
            <div
              id="form-event-island-hop"
              class="form-row form-event-row"
              :class="{ inactive: rsvpResponses.islandHop === 'No' }"
            >
              <div class="form-event-date">23<sup>rd</sup></div>
              <div class="form-event-name">
                <img src="/icons/island-hop.svg" />
                <span>Island Hop</span>
                <div class="form-event-description">
                  Let us know if you are interested in joining us in Santorini
                  and we’ll keep you updated on our plans.
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
                  </label>
                </div>
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
            <textarea name="message" rows="3"></textarea>
            <span class="focus-bar"></span>
          </div>
        </div>

        <div class="form-row form-submit-row">
          <input
            v-if="rsvpResponses.rsvp === 'Yes' && rsvpFormStep === 1"
            type="button"
            value="Next"
            :disabled="rsvpFormSubmitting || rsvpFormResult.success"
            class="text-spaced text-upper"
            @click="openNextStep"
          />
          <input
            v-if="rsvpResponses.rsvp !== 'Yes'"
            type="submit"
            value="Send"
            :disabled="rsvpFormSubmitting || rsvpFormResult.success"
            class="text-spaced text-upper"
          />
        </div>

        <div
          v-if="rsvpResponses.rsvp !== 'Yes' && rsvpFormSubmitAttempted && rsvpFormErrorMessage"
          class="validation-message error"
        >
          {{ rsvpFormErrorMessage }}
        </div>

        <div
          v-if="rsvpResponses.rsvp === 'No' && rsvpFormResult.message"
          class="feedback-message"
          :class="{ error: !rsvpFormResult.success }"
        >
          {{ rsvpFormResult.message }}
        </div>
      </div>

      <div class="form-step form-hidden-items" :class="{show: rsvpResponses.rsvp === 'Yes' && rsvpFormStep === 2}">
        <div class="form-step-border"></div>

        <h2>Menu options</h2>

        <div class="form-menu-choices">
          <div v-for="choice in menuChoices" class="form-menu-choice" :key="choice.value">
            <div class="form-menu-choice-icon">
              <img :src="`/icons/${choice.value}.svg`" width="70" />
            </div>
            <div class="form-menu-choice-text">
              {{ choice.text }}
            </div>
          </div>
        </div>

        <div class="form-person-group">
          <div
            class="form-person-group-headings font-heading text-spaced text-spaced-correction text-upper"
          >
            <div class="form-person-group-headings-name">
              <span>Name</span>
            </div>
            <div class="form-person-group-headings-responses">
              <span><img src="/icons/pig.svg" width="35" /></span>
              <span><img src="/icons/chicken.svg" width="35" /></span>
              <span><img src="/icons/sheep.svg" width="35" /></span>
              <span><img src="/icons/fish.svg" width="35" /></span>
              <span><img src="/icons/vegetarian.svg" width="35" /></span>
            </div>
          </div>

          <div v-show="peopleCount > 0">
            <div class="form-row form-person-row">
              <div class="form-person-remove">
                <span v-if="peopleCount > 1" @click="removePerson(0)">
                  <i class="material-icons">close</i>
                </span>
              </div>
              <div class="form-person-name">
                <input v-model="peopleResponses[0].name" name="person-1-name" type="text" />
                <span class="focus-bar"></span>
              </div>
              <div class="form-person-field">
                <input
                  type="radio"
                  name="person-1-food"
                  value="Person 1 Food"
                  class="hidden"
                />
                <div>
                  <label for="person-1-pig">
                    <input
                      id="person-1-pig"
                      v-model="peopleResponses[0].food"
                      type="radio"
                      name="person-1-food"
                      value="Pig"
                    />
                    <checkbox
                      :checked="peopleResponses[0].food === 'Pig'"
                      class="form-person-checkbox"
                    ></checkbox>
                  </label>
                </div>
                <div>
                  <label for="person-1-chicken">
                    <input
                      id="person-1-chicken"
                      v-model="peopleResponses[0].food"
                      type="radio"
                      name="person-1-food"
                      value="Chicken"
                    />
                    <checkbox
                      :checked="peopleResponses[0].food === 'Chicken'"
                      class="form-person-checkbox"
                    ></checkbox>
                  </label>
                </div>
                <div>
                  <label for="person-1-sheep">
                    <input
                      id="person-1-sheep"
                      v-model="peopleResponses[0].food"
                      type="radio"
                      name="person-1-food"
                      value="Sheep"
                    />
                    <checkbox
                      :checked="peopleResponses[0].food === 'Sheep'"
                      class="form-person-checkbox"
                    ></checkbox>
                  </label>
                </div>
                <div>
                  <label for="person-1-fish">
                    <input
                      id="person-1-fish"
                      v-model="peopleResponses[0].food"
                      type="radio"
                      name="person-1-food"
                      value="Fish"
                    />
                    <checkbox
                      :checked="peopleResponses[0].food === 'Fish'"
                      class="form-person-checkbox"
                    ></checkbox>
                  </label>
                </div>
                <div>
                  <label for="person-1-vegetarian">
                    <input
                      id="person-1-vegetarian"
                      v-model="peopleResponses[0].food"
                      type="radio"
                      name="person-1-food"
                      value="Vegetarian"
                    />
                    <checkbox
                      :checked="peopleResponses[0].food === 'Vegetarian'"
                      class="form-person-checkbox"
                    ></checkbox>
                  </label>
                </div>
              </div>
            </div>
            <div v-show="peopleResponses[0].food === 'Vegetarian'" class="form-row form-person-row form-person-diet-row">
              <div class="form-person-diet">
                <input
                  v-model="peopleResponses[0].diet"
                  name="person-1-diet-info"
                  type="text"
                  placeholder="Dietary requirements"
                />
                <span class="focus-bar"></span>
              </div>
            </div>
          </div>

          <div v-show="peopleCount > 1">
            <div class="form-row form-person-row">
              <div class="form-person-remove">
                <span @click="removePerson(1)">
                  <i class="material-icons">close</i>
                </span>
              </div>
              <div class="form-person-name">
                <input v-model="peopleResponses[1].name" name="person-2-name" type="text" />
                <span class="focus-bar"></span>
              </div>
              <div class="form-person-field">
                <input
                  type="radio"
                  name="person-2-food"
                  value="Person 2 Food"
                  class="hidden"
                />
                <div>
                  <label for="person-2-pig">
                    <input
                      id="person-2-pig"
                      v-model="peopleResponses[1].food"
                      type="radio"
                      name="person-2-food"
                      value="Pig"
                    />
                    <checkbox
                      :checked="peopleResponses[1].food === 'Pig'"
                      class="form-person-checkbox"
                    ></checkbox>
                  </label>
                </div>
                <div>
                  <label for="person-2-chicken">
                    <input
                      id="person-2-chicken"
                      v-model="peopleResponses[1].food"
                      type="radio"
                      name="person-2-food"
                      value="Chicken"
                    />
                    <checkbox
                      :checked="peopleResponses[1].food === 'Chicken'"
                      class="form-person-checkbox"
                    ></checkbox>
                  </label>
                </div>
                <div>
                  <label for="person-2-sheep">
                    <input
                      id="person-2-sheep"
                      v-model="peopleResponses[1].food"
                      type="radio"
                      name="person-2-food"
                      value="Sheep"
                    />
                    <checkbox
                      :checked="peopleResponses[1].food === 'Sheep'"
                      class="form-person-checkbox"
                    ></checkbox>
                  </label>
                </div>
                <div>
                  <label for="person-2-fish">
                    <input
                      id="person-2-fish"
                      v-model="peopleResponses[1].food"
                      type="radio"
                      name="person-2-food"
                      value="Fish"
                    />
                    <checkbox
                      :checked="peopleResponses[1].food === 'Fish'"
                      class="form-person-checkbox"
                    ></checkbox>
                  </label>
                </div>
                <div>
                  <label for="person-2-vegetarian">
                    <input
                      id="person-2-vegetarian"
                      v-model="peopleResponses[1].food"
                      type="radio"
                      name="person-2-food"
                      value="Vegetarian"
                    />
                    <checkbox
                      :checked="peopleResponses[1].food === 'Vegetarian'"
                      class="form-person-checkbox"
                    ></checkbox>
                  </label>
                </div>
              </div>
            </div>
            <div v-show="peopleResponses[1].food === 'Vegetarian'" class="form-row form-person-row form-person-diet-row">
              <div class="form-person-diet">
                <input
                  v-model="peopleResponses[1].diet"
                  name="person-2-diet-info"
                  type="text"
                  placeholder="Dietary requirements"
                />
                <span class="focus-bar"></span>
              </div>
            </div>
          </div>

          <div v-show="peopleCount > 2">
            <div class="form-row form-person-row">
              <div class="form-person-remove">
                <span @click="removePerson(2)">
                  <i class="material-icons">close</i>
                </span>
              </div>
              <div class="form-person-name">
                <input v-model="peopleResponses[2].name" name="person-3-name" type="text" />
                <span class="focus-bar"></span>
              </div>
              <div class="form-person-field">
                <input
                  type="radio"
                  name="person-3-food"
                  value="Person 3 Food"
                  class="hidden"
                />
                <div>
                  <label for="person-3-pig">
                    <input
                      id="person-3-pig"
                      v-model="peopleResponses[2].food"
                      type="radio"
                      name="person-3-food"
                      value="Pig"
                    />
                    <checkbox
                      :checked="peopleResponses[2].food === 'Pig'"
                      class="form-person-checkbox"
                    ></checkbox>
                  </label>
                </div>
                <div>
                  <label for="person-3-chicken">
                    <input
                      id="person-3-chicken"
                      v-model="peopleResponses[2].food"
                      type="radio"
                      name="person-3-food"
                      value="Chicken"
                    />
                    <checkbox
                      :checked="peopleResponses[2].food === 'Chicken'"
                      class="form-person-checkbox"
                    ></checkbox>
                  </label>
                </div>
                <div>
                  <label for="person-3-sheep">
                    <input
                      id="person-3-sheep"
                      v-model="peopleResponses[2].food"
                      type="radio"
                      name="person-3-food"
                      value="Sheep"
                    />
                    <checkbox
                      :checked="peopleResponses[2].food === 'Sheep'"
                      class="form-person-checkbox"
                    ></checkbox>
                  </label>
                </div>
                <div>
                  <label for="person-3-fish">
                    <input
                      id="person-3-fish"
                      v-model="peopleResponses[2].food"
                      type="radio"
                      name="person-3-food"
                      value="Fish"
                    />
                    <checkbox
                      :checked="peopleResponses[2].food === 'Fish'"
                      class="form-person-checkbox"
                    ></checkbox>
                  </label>
                </div>
                <div>
                  <label for="person-3-vegetarian">
                    <input
                      id="person-3-vegetarian"
                      v-model="peopleResponses[2].food"
                      type="radio"
                      name="person-3-food"
                      value="Vegetarian"
                    />
                    <checkbox
                      :checked="peopleResponses[2].food === 'Vegetarian'"
                      class="form-person-checkbox"
                    ></checkbox>
                  </label>
                </div>
              </div>
            </div>
            <div v-show="peopleResponses[2].food === 'Vegetarian'" class="form-row form-person-row form-person-diet-row">
              <div class="form-person-diet">
                <input
                  v-model="peopleResponses[2].diet"
                  name="person-3-diet-info"
                  type="text"
                  placeholder="Dietary requirements"
                />
                <span class="focus-bar"></span>
              </div>
            </div>
          </div>

          <div v-show="peopleCount > 3">
            <div class="form-row form-person-row">
              <div class="form-person-remove">
                <span @click="removePerson(3)">
                  <i class="material-icons">close</i>
                </span>
              </div>
              <div class="form-person-name">
                <input v-model="peopleResponses[3].name" name="person-4-name" type="text" />
                <span class="focus-bar"></span>
              </div>
              <div class="form-person-field">
                <input
                  type="radio"
                  name="person-4-food"
                  value="Person 4 Food"
                  class="hidden"
                />
                <div>
                  <label for="person-4-pig">
                    <input
                      id="person-4-pig"
                      v-model="peopleResponses[3].food"
                      type="radio"
                      name="person-4-food"
                      value="Pig"
                    />
                    <checkbox
                      :checked="peopleResponses[3].food === 'Pig'"
                      class="form-person-checkbox"
                    ></checkbox>
                  </label>
                </div>
                <div>
                  <label for="person-4-chicken">
                    <input
                      id="person-4-chicken"
                      v-model="peopleResponses[3].food"
                      type="radio"
                      name="person-4-food"
                      value="Chicken"
                    />
                    <checkbox
                      :checked="peopleResponses[3].food === 'Chicken'"
                      class="form-person-checkbox"
                    ></checkbox>
                  </label>
                </div>
                <div>
                  <label for="person-4-sheep">
                    <input
                      id="person-4-sheep"
                      v-model="peopleResponses[3].food"
                      type="radio"
                      name="person-4-food"
                      value="Sheep"
                    />
                    <checkbox
                      :checked="peopleResponses[3].food === 'Sheep'"
                      class="form-person-checkbox"
                    ></checkbox>
                  </label>
                </div>
                <div>
                  <label for="person-4-fish">
                    <input
                      id="person-4-fish"
                      v-model="peopleResponses[3].food"
                      type="radio"
                      name="person-4-food"
                      value="Fish"
                    />
                    <checkbox
                      :checked="peopleResponses[3].food === 'Fish'"
                      class="form-person-checkbox"
                    ></checkbox>
                  </label>
                </div>
                <div>
                  <label for="person-4-vegetarian">
                    <input
                      id="person-4-vegetarian"
                      v-model="peopleResponses[3].food"
                      type="radio"
                      name="person-4-food"
                      value="Vegetarian"
                    />
                    <checkbox
                      :checked="peopleResponses[3].food === 'Vegetarian'"
                      class="form-person-checkbox"
                    ></checkbox>
                  </label>
                </div>
              </div>
            </div>
            <div v-show="peopleResponses[3].food === 'Vegetarian'" class="form-row form-person-row form-person-diet-row">
              <div class="form-person-diet">
                <input
                  v-model="peopleResponses[3].diet"
                  name="person-4-diet-info"
                  type="text"
                  placeholder="Dietary requirements"
                />
                <span class="focus-bar"></span>
              </div>
            </div>
          </div>

          <div v-show="peopleCount > 4">
            <div class="form-row form-person-row">
              <div class="form-person-remove">
                <span @click="removePerson(4)">
                  <i class="material-icons">close</i>
                </span>
              </div>
              <div class="form-person-name">
                <input v-model="peopleResponses[4].name" name="person-5-name" type="text" />
                <span class="focus-bar"></span>
              </div>
              <div class="form-person-field">
                <input
                  type="radio"
                  name="person-5-food"
                  value="Person 5 Food"
                  class="hidden"
                />
                <div>
                  <label for="person-5-pig">
                    <input
                      id="person-5-pig"
                      v-model="peopleResponses[4].food"
                      type="radio"
                      name="person-5-food"
                      value="Pig"
                    />
                    <checkbox
                      :checked="peopleResponses[4].food === 'Pig'"
                      class="form-person-checkbox"
                    ></checkbox>
                  </label>
                </div>
                <div>
                  <label for="person-5-chicken">
                    <input
                      id="person-5-chicken"
                      v-model="peopleResponses[4].food"
                      type="radio"
                      name="person-5-food"
                      value="Chicken"
                    />
                    <checkbox
                      :checked="peopleResponses[4].food === 'Chicken'"
                      class="form-person-checkbox"
                    ></checkbox>
                  </label>
                </div>
                <div>
                  <label for="person-5-sheep">
                    <input
                      id="person-5-sheep"
                      v-model="peopleResponses[4].food"
                      type="radio"
                      name="person-5-food"
                      value="Sheep"
                    />
                    <checkbox
                      :checked="peopleResponses[4].food === 'Sheep'"
                      class="form-person-checkbox"
                    ></checkbox>
                  </label>
                </div>
                <div>
                  <label for="person-5-fish">
                    <input
                      id="person-5-fish"
                      v-model="peopleResponses[4].food"
                      type="radio"
                      name="person-5-food"
                      value="Fish"
                    />
                    <checkbox
                      :checked="peopleResponses[4].food === 'Fish'"
                      class="form-person-checkbox"
                    ></checkbox>
                  </label>
                </div>
                <div>
                  <label for="person-5-vegetarian">
                    <input
                      id="person-5-vegetarian"
                      v-model="peopleResponses[4].food"
                      type="radio"
                      name="person-5-food"
                      value="Vegetarian"
                    />
                    <checkbox
                      :checked="peopleResponses[4].food === 'Vegetarian'"
                      class="form-person-checkbox"
                    ></checkbox>
                  </label>
                </div>
              </div>
            </div>
            <div v-show="peopleResponses[4].food === 'Vegetarian'" class="form-row form-person-row form-person-diet-row">
              <div class="form-person-diet">
                <input
                  v-model="peopleResponses[4].diet"
                  name="person-5-diet-info"
                  type="text"
                  placeholder="Dietary requirements"
                />
                <span class="focus-bar"></span>
              </div>
            </div>
          </div>

          <div v-show="peopleCount > 5">
            <div class="form-row form-person-row">
              <div class="form-person-remove">
                <span @click="removePerson(5)">
                  <i class="material-icons">close</i>
                </span>
              </div>
              <div class="form-person-name">
                <input v-model="peopleResponses[5].name" name="person-6-name" type="text" />
                <span class="focus-bar"></span>
              </div>
              <div class="form-person-field">
                <input
                  type="radio"
                  name="person-6-food"
                  value="Person 6 Food"
                  class="hidden"
                />
                <div>
                  <label for="person-6-pig">
                    <input
                      id="person-6-pig"
                      v-model="peopleResponses[5].food"
                      type="radio"
                      name="person-6-food"
                      value="Pig"
                    />
                    <checkbox
                      :checked="peopleResponses[5].food === 'Pig'"
                      class="form-person-checkbox"
                    ></checkbox>
                  </label>
                </div>
                <div>
                  <label for="person-6-chicken">
                    <input
                      id="person-6-chicken"
                      v-model="peopleResponses[5].food"
                      type="radio"
                      name="person-6-food"
                      value="Chicken"
                    />
                    <checkbox
                      :checked="peopleResponses[5].food === 'Chicken'"
                      class="form-person-checkbox"
                    ></checkbox>
                  </label>
                </div>
                <div>
                  <label for="person-6-sheep">
                    <input
                      id="person-6-sheep"
                      v-model="peopleResponses[5].food"
                      type="radio"
                      name="person-6-food"
                      value="Sheep"
                    />
                    <checkbox
                      :checked="peopleResponses[5].food === 'Sheep'"
                      class="form-person-checkbox"
                    ></checkbox>
                  </label>
                </div>
                <div>
                  <label for="person-6-fish">
                    <input
                      id="person-6-fish"
                      v-model="peopleResponses[5].food"
                      type="radio"
                      name="person-6-food"
                      value="Fish"
                    />
                    <checkbox
                      :checked="peopleResponses[5].food === 'Fish'"
                      class="form-person-checkbox"
                    ></checkbox>
                  </label>
                </div>
                <div>
                  <label for="person-6-vegetarian">
                    <input
                      id="person-6-vegetarian"
                      v-model="peopleResponses[5].food"
                      type="radio"
                      name="person-6-food"
                      value="Vegetarian"
                    />
                    <checkbox
                      :checked="peopleResponses[5].food === 'Vegetarian'"
                      class="form-person-checkbox"
                    ></checkbox>
                  </label>
                </div>
              </div>
            </div>
            <div v-show="peopleResponses[5].food === 'Vegetarian'" class="form-row form-person-row form-person-diet-row">
              <div class="form-person-diet">
                <input
                  v-model="peopleResponses[5].diet"
                  name="person-6-diet-info"
                  type="text"
                  placeholder="Dietary requirements"
                />
                <span class="focus-bar"></span>
              </div>
            </div>
          </div>

          <div v-show="peopleCount > 6">
            <div class="form-row form-person-row">
              <div class="form-person-remove">
                <span @click="removePerson(6)">
                  <i class="material-icons">close</i>
                </span>
              </div>
              <div class="form-person-name">
                <input v-model="peopleResponses[6].name" name="person-7-name" type="text" />
                <span class="focus-bar"></span>
              </div>
              <div class="form-person-field">
                <input
                  type="radio"
                  name="person-7-food"
                  value="Person 7 Food"
                  class="hidden"
                />
                <div>
                  <label for="person-7-pig">
                    <input
                      id="person-7-pig"
                      v-model="peopleResponses[6].food"
                      type="radio"
                      name="person-7-food"
                      value="Pig"
                    />
                    <checkbox
                      :checked="peopleResponses[6].food === 'Pig'"
                      class="form-person-checkbox"
                    ></checkbox>
                  </label>
                </div>
                <div>
                  <label for="person-7-chicken">
                    <input
                      id="person-7-chicken"
                      v-model="peopleResponses[6].food"
                      type="radio"
                      name="person-7-food"
                      value="Chicken"
                    />
                    <checkbox
                      :checked="peopleResponses[6].food === 'Chicken'"
                      class="form-person-checkbox"
                    ></checkbox>
                  </label>
                </div>
                <div>
                  <label for="person-7-sheep">
                    <input
                      id="person-7-sheep"
                      v-model="peopleResponses[6].food"
                      type="radio"
                      name="person-7-food"
                      value="Sheep"
                    />
                    <checkbox
                      :checked="peopleResponses[6].food === 'Sheep'"
                      class="form-person-checkbox"
                    ></checkbox>
                  </label>
                </div>
                <div>
                  <label for="person-7-fish">
                    <input
                      id="person-7-fish"
                      v-model="peopleResponses[6].food"
                      type="radio"
                      name="person-7-food"
                      value="Fish"
                    />
                    <checkbox
                      :checked="peopleResponses[6].food === 'Fish'"
                      class="form-person-checkbox"
                    ></checkbox>
                  </label>
                </div>
                <div>
                  <label for="person-7-vegetarian">
                    <input
                      id="person-7-vegetarian"
                      v-model="peopleResponses[6].food"
                      type="radio"
                      name="person-7-food"
                      value="Vegetarian"
                    />
                    <checkbox
                      :checked="peopleResponses[6].food === 'Vegetarian'"
                      class="form-person-checkbox"
                    ></checkbox>
                  </label>
                </div>
              </div>
            </div>
            <div v-show="peopleResponses[6].food === 'Vegetarian'" class="form-row form-person-row form-person-diet-row">
              <div class="form-person-diet">
                <input
                  v-model="peopleResponses[6].diet"
                  name="person-7-diet-info"
                  type="text"
                  placeholder="Dietary requirements"
                />
                <span class="focus-bar"></span>
              </div>
            </div>
          </div>

          <div v-show="peopleCount > 7">
            <div class="form-row form-person-row">
              <div class="form-person-remove">
                <span @click="removePerson(7)">
                  <i class="material-icons">close</i>
                </span>
              </div>
              <div class="form-person-name">
                <input v-model="peopleResponses[7].name" name="person-8-name" type="text" />
                <span class="focus-bar"></span>
              </div>
              <div class="form-person-field">
                <input
                  type="radio"
                  name="person-8-food"
                  value="Person 8 Food"
                  class="hidden"
                />
                <div>
                  <label for="person-8-pig">
                    <input
                      id="person-8-pig"
                      v-model="peopleResponses[7].food"
                      type="radio"
                      name="person-8-food"
                      value="Pig"
                    />
                    <checkbox
                      :checked="peopleResponses[7].food === 'Pig'"
                      class="form-person-checkbox"
                    ></checkbox>
                  </label>
                </div>
                <div>
                  <label for="person-8-chicken">
                    <input
                      id="person-8-chicken"
                      v-model="peopleResponses[7].food"
                      type="radio"
                      name="person-8-food"
                      value="Chicken"
                    />
                    <checkbox
                      :checked="peopleResponses[7].food === 'Chicken'"
                      class="form-person-checkbox"
                    ></checkbox>
                  </label>
                </div>
                <div>
                  <label for="person-8-sheep">
                    <input
                      id="person-8-sheep"
                      v-model="peopleResponses[7].food"
                      type="radio"
                      name="person-8-food"
                      value="Sheep"
                    />
                    <checkbox
                      :checked="peopleResponses[7].food === 'Sheep'"
                      class="form-person-checkbox"
                    ></checkbox>
                  </label>
                </div>
                <div>
                  <label for="person-8-fish">
                    <input
                      id="person-8-fish"
                      v-model="peopleResponses[7].food"
                      type="radio"
                      name="person-8-food"
                      value="Fish"
                    />
                    <checkbox
                      :checked="peopleResponses[7].food === 'Fish'"
                      class="form-person-checkbox"
                    ></checkbox>
                  </label>
                </div>
                <div>
                  <label for="person-8-vegetarian">
                    <input
                      id="person-8-vegetarian"
                      v-model="peopleResponses[7].food"
                      type="radio"
                      name="person-8-food"
                      value="Vegetarian"
                    />
                    <checkbox
                      :checked="peopleResponses[7].food === 'Vegetarian'"
                      class="form-person-checkbox"
                    ></checkbox>
                  </label>
                </div>
              </div>
            </div>
            <div v-show="peopleResponses[7].food === 'Vegetarian'" class="form-row form-person-row form-person-diet-row">
              <div class="form-person-diet">
                <input
                  v-model="peopleResponses[7].diet"
                  name="person-8-diet-info"
                  type="text"
                  placeholder="Dietary requirements"
                />
                <span class="focus-bar"></span>
              </div>
            </div>
          </div>

          <div v-show="peopleCount > 8">
            <div class="form-row form-person-row">
              <div class="form-person-remove">
                <span @click="removePerson(8)">
                  <i class="material-icons">close</i>
                </span>
              </div>
              <div class="form-person-name">
                <input v-model="peopleResponses[8].name" name="person-9-name" type="text" />
                <span class="focus-bar"></span>
              </div>
              <div class="form-person-field">
                <input
                  type="radio"
                  name="person-9-food"
                  value="Person 9 Food"
                  class="hidden"
                />
                <div>
                  <label for="person-9-pig">
                    <input
                      id="person-9-pig"
                      v-model="peopleResponses[8].food"
                      type="radio"
                      name="person-9-food"
                      value="Pig"
                    />
                    <checkbox
                      :checked="peopleResponses[8].food === 'Pig'"
                      class="form-person-checkbox"
                    ></checkbox>
                  </label>
                </div>
                <div>
                  <label for="person-9-chicken">
                    <input
                      id="person-9-chicken"
                      v-model="peopleResponses[8].food"
                      type="radio"
                      name="person-9-food"
                      value="Chicken"
                    />
                    <checkbox
                      :checked="peopleResponses[8].food === 'Chicken'"
                      class="form-person-checkbox"
                    ></checkbox>
                  </label>
                </div>
                <div>
                  <label for="person-9-sheep">
                    <input
                      id="person-9-sheep"
                      v-model="peopleResponses[8].food"
                      type="radio"
                      name="person-9-food"
                      value="Sheep"
                    />
                    <checkbox
                      :checked="peopleResponses[8].food === 'Sheep'"
                      class="form-person-checkbox"
                    ></checkbox>
                  </label>
                </div>
                <div>
                  <label for="person-9-fish">
                    <input
                      id="person-9-fish"
                      v-model="peopleResponses[8].food"
                      type="radio"
                      name="person-9-food"
                      value="Fish"
                    />
                    <checkbox
                      :checked="peopleResponses[8].food === 'Fish'"
                      class="form-person-checkbox"
                    ></checkbox>
                  </label>
                </div>
                <div>
                  <label for="person-9-vegetarian">
                    <input
                      id="person-9-vegetarian"
                      v-model="peopleResponses[8].food"
                      type="radio"
                      name="person-9-food"
                      value="Vegetarian"
                    />
                    <checkbox
                      :checked="peopleResponses[8].food === 'Vegetarian'"
                      class="form-person-checkbox"
                    ></checkbox>
                  </label>
                </div>
              </div>
            </div>
            <div v-show="peopleResponses[8].food === 'Vegetarian'" class="form-row form-person-row form-person-diet-row">
              <div class="form-person-diet">
                <input
                  v-model="peopleResponses[8].diet"
                  name="person-9-diet-info"
                  type="text"
                  placeholder="Dietary requirements"
                />
                <span class="focus-bar"></span>
              </div>
            </div>
          </div>

          <div v-if="peopleCount < 9" class="form-row form-person-row">
            <div class="form-person-add">
              <span @click="addPerson">
                <i class="material-icons">add</i> Add person
              </span>
            </div>
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

        <div
          v-if="rsvpFormSubmitAttempted && rsvpFormErrorMessage"
          class="validation-message error"
        >
          {{ rsvpFormErrorMessage }}
        </div>

        <div
          v-if="rsvpFormResult.message"
          class="feedback-message"
          :class="{ error: !rsvpFormResult.success }"
        >
          {{ rsvpFormResult.message }}
        </div>
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
        rsvp: null,
        stagDo: null,
        henParty: null,
        boatTrip: null,
        welcomeDrinks: null,
        wedding: null,
        beachRecovery: null,
        poolParty: null,
        islandHop: null
      },
      peopleResponses: [
        {
          name: null,
          food: null,
          diet: null
        },
        {
          name: null,
          food: null,
          diet: null
        },
        {
          name: null,
          food: null,
          diet: null
        },
        {
          name: null,
          food: null,
          diet: null
        },
        {
          name: null,
          food: null,
          diet: null
        },
        {
          name: null,
          food: null,
          diet: null
        },
        {
          name: null,
          food: null,
          diet: null
        },
        {
          name: null,
          food: null,
          diet: null
        },
        {
          name: null,
          food: null,
          diet: null
        },
      ],
      peopleCount: 1,
      rsvpFormStep: 1,
      rsvpFormSubmitAttempted: false,
      rsvpFormSubmitting: false,
      rsvpFormResult: {},
      menuChoices: [
        {
          value: 'pig',
          text: 'Herb roasted pork fillet, served with wild greens, in a lemon sauce with dill and spring onion'
        },
        {
          value: 'chicken',
          text: 'Chicken fillet filled with Parian gruyere, sun dried tomatoes and basil, served with potato puree and sauteed spinach'
        },
        {
          value: 'sheep',
          text: 'Roasted leg of lamb, served with baby potatoes, in gravy sauce with thyme'
        },
        {
          value: 'fish',
          text: 'Grilled sea bass, served with steamed vegetables, in a citrus dressing'
        },
        {
          value: 'vegetarian',
          text: 'We\'ll be in touch shortly to confirm your requirements and offer some suitably delicious options'
        }
      ]
    }
  },
  computed: {
    rsvpFormErrorMessage() {
      const emailTest = /[^@]+@[^.]+\..+/
      let errorMessage = ''

      for (let i = 0; i < this.peopleCount; i++) {
        const response = this.peopleResponses[i]
        console.log(response, response.food === 'Vegetarian', !response.diet)
        if (response.food === 'Vegetarian' && !response.diet) errorMessage = 'Please fill in all persons\' dietary requirements'
      }

      for (let i = 0; i < this.peopleCount; i++) {
        const response = this.peopleResponses[i]
        if (!response.food) errorMessage = 'Please fill in all persons\' food choice'
      }

      for (let i = 0; i < this.peopleCount; i++) {
        const response = this.peopleResponses[i]
        if (!response.name) errorMessage = 'Please fill in all persons\' names'
      }

      for (const response of Object.entries(this.rsvpResponses)) {
        if (!response[1]) errorMessage = 'Please fill in all events'
      }

      if (!emailTest.test(this.rsvpResponses.email)) {
        errorMessage = 'Please enter a valid email address'
      }

      if (!this.rsvpResponses.name) {
        errorMessage = 'Please enter name(s)'
      }

      return errorMessage
    }
  },
  watch: {
    'rsvpResponses.rsvp'(n) {
      if (n === 'Yes') {
        // if RSVP yes - set all events as NULL except for wedding, which should
        // be set as Yes
        this.rsvpResponses.stagDo = null
        this.rsvpResponses.henParty = null
        this.rsvpResponses.boatTrip = null
        this.rsvpResponses.welcomeDrinks = null
        this.rsvpResponses.wedding = 'Yes'
        this.rsvpResponses.beachRecovery = null
        this.rsvpResponses.poolParty = null
        this.rsvpResponses.islandHop = null
      } else {
        // if RSVP no - set all events as No
        this.rsvpResponses.stagDo = 'No'
        this.rsvpResponses.henParty = 'No'
        this.rsvpResponses.boatTrip = 'No'
        this.rsvpResponses.welcomeDrinks = 'No'
        this.rsvpResponses.wedding = 'No'
        this.rsvpResponses.beachRecovery = 'No'
        this.rsvpResponses.poolParty = 'No'
        this.rsvpResponses.islandHop = 'No'
      }
    }
  },
  mounted() {
    this.rsvpForm = document.querySelector('form[name=rsvp]')
  },
  methods: {
    openNextStep() {
      this.rsvpFormStep = 2;
    },
    addPerson() {
      if (this.peopleCount < 9) {
        this.peopleCount++
      }
    },
    removePerson(index) {
      if (this.peopleCount > 1) {
        this.peopleResponses[index].name = null
        this.peopleResponses[index].food = null
        this.peopleResponses[index].diet = null
        this.peopleResponses.push(this.peopleResponses.splice(index, 1)[0])
        this.peopleCount--
      }
    },
    handleRsvpSubmit(e) {
      e.preventDefault()
      this.rsvpFormSubmitting = true
      this.rsvpFormSubmitAttempted = true

      if (this.rsvpFormErrorMessage) {
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
                ? 'we look forward to seeing you!'
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
  color: $color-red;
}

form {
  &.frozen {
    pointer-events: none;
  }

  .form-step {
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

    + .form-step {
      margin-top: 80px;
    }

    &.show {
      padding-top: 80px;
      padding-bottom: 80px;
    }

    &-border {
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

    h2 {
      margin-top: 0;
      font-size: 1.3rem;
      text-align: center;
    }

    .form-row.form-input-row {
      display: flex;

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

    .form-row.form-rsvp-row {
      margin-top: 2em;
      margin-bottom: 2em;

      .form-rsvp-field {
        display: flex;
        justify-content: space-around;
        margin-top: 0.65em;
        text-align: center;

        label {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-size: 14px;
          cursor: pointer;

          input {
            display: none;
          }

          .form-event-checkbox {
            display: inline-block;
            margin-top: 1.25em;
            margin-right: 1em;
          }

          .font-script {
            font-size: 80px;
          }

          .font-heading {
            margin-top: -0.65em;
          }
        }
      }
    }

    .form-events-group {
      &.first {
        margin-top: 2em;
      }

      &-headings {
        display: flex;
        justify-content: space-between;
        margin-bottom: -12px;
        color: $color-gold;
        font-size: 14px;

        &-name {
          padding-left: 95px;

          > span {
            display: inline-block;
            transform: translateX(-50%);
          }
        }

        &-responses {
          display: flex;
          text-align: center;
          width: 200px;
          padding: 0 20px;

          > span {
            display: inline-block;
            width: 50%;
          }
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
        justify-content: space-around;

        label {
          font-size: 18px;
          cursor: pointer;

          input {
            display: none;
          }

          .form-event-checkbox {
            display: inline-block;
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

    .form-menu-choices {
      margin-top: 36px;
      @include heading-font;
      font-size: 16px;
      text-align: center;

      .form-menu-choice {
        display: inline-block;
        vertical-align: top;
        width: 50%;

        &-icon {
          /*text-align: center;*/
        }

        &-text {
          padding: 12px 12px 24px;
        }
      }
    }

    .form-person-group {
      &.first {
        margin-top: 2em;
      }

      &-headings {
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        margin-bottom: -12px;
        color: $color-gold;
        font-size: 14px;

        &-name {
          padding-left: 40px;
        }

        &-responses {
          display: flex;
          text-align: left;
          width: 350px;
          padding: 0 20px;

          > span {
            display: inline-block;
            width: 20%;
            text-align: center;
          }
        }
      }
    }

    .form-row.form-person-row {
      display: flex;
      align-items: center;
      height: 85px;

      &.form-person-diet-row {
        height: auto;
        margin-top: -0.5em;
      }

      > div {
        padding: 0 20px;
      }

      .form-person-remove {
        width: 20px;
        position: relative;
        padding: 0;
        @include heading-font;
        font-size: 18px;

        > span {
          display: flex;
          width: 20px;
          height: 20px;
          color: $color-red;
          cursor: pointer;
          opacity: 0.65;
          transition: opacity 0.3s;

          > i {
            font-size: 20px;
          }

          &:hover {
            opacity: 1;
          }
        }
      }

      .form-person-name,
      .form-person-diet {
        position: relative;
        flex-grow: 1;
        @include heading-font;

        input {
          width: 100%;
          border: 0;
          border-bottom: 1px solid $color-lightgrey;
          padding: 0.1em 0;
          font-family: inherit;
          font-size: 18px;
          color: inherit;
          text-align: left;
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
              left: 20px;
              right: 20px;
            }
          }
        }
      }

      .form-person-field {
        width: 350px;
        display: flex;
        justify-content: space-around;

        label {
          font-size: 18px;
          cursor: pointer;

          input {
            display: none;
          }

          .form-person-checkbox {
            display: inline-block;
          }
        }
      }

      .form-person-diet {
        padding-left: 40px;

        input:focus + .focus-bar {
          left: 40px;
        }
      }

      .form-person-add {
        width: 100%;
        text-align: center;

        > span {
          display: inline-flex;
          align-items: center;
          padding-right: 3px;
          @include heading-font;
          color: $color-green;
          font-size: 18px;
          cursor: pointer;
          opacity: 0.65;
          transition: opacity 0.3s;

          > i {
            font-size: 20px;
            padding-right: 8px;
          }

          &:hover {
            opacity: 1;
          }
        }
      }
    }

    .form-row.form-submit-row {
      margin-top: 2em;
      text-align: center;

      input[type='submit'],
      input[type='button'] {
        margin: 0 auto;
        outline: 0;
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

    .validation-message,
    .feedback-message {
      margin-top: 2em;
      text-align: center;
      font-size: 18px;
    }

    #form-event-island-hop {
      margin-bottom: 65px;
    }

    @media only screen and (max-width: 1200px) {
      width: 90%;
    }

    @media only screen and (max-width: 900px) {
      width: 90%;
      padding: 60px;

      .form-border {
        margin: 20px;
      }

      .form-row.form-rsvp-row .form-rsvp-field label {
        font-size: 11px;

        .font-script {
          font-size: 60px;
        }
      }

      .form-events-group-headings-name {
        padding-left: 70px;
      }

      .form-events-group-headings-responses {
        padding-right: 0;
        width: 140px;
      }

      .form-row.form-event-row {
        .form-event-date {
          width: 70px;
          padding-left: 0;
        }

        .form-event-field {
          padding-right: 0;
          width: 140px;
        }
      }
    }

    @media only screen and (max-width: 750px) {
      width: 100%;
      min-width: 475px;
      padding: 50px;

      .form-row.form-event-row .form-event-name {
        padding-right: 0;

        img {
          display: none;
        }

        span {
          top: 0;
        }
      }
    }
  }

  .form-hidden-items {
    overflow: hidden;
    max-height: 0;
    padding-top: 0;
    padding-bottom: 0;
    transition: max-height 0.9s ease-in-out, padding 0.9s ease-in-out;

    > *:not(.form-step-border) {
      opacity: 0;
      transition: opacity 0.9s 0.3s;
    }

    &.show {
      max-height: 1500px;

      > *:not(.form-step-border) {
        opacity: 1;
      }
    }
  }
}
</style>
