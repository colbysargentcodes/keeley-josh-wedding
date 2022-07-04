<template>
  <div class="page-container app-width">
    <h1 class="page-header">
      Itinerary
    </h1>
    <h2 class="page-header">
      Boy, do we have a line up for you...
    </h2>
    <div id="event-list-container">
      <div
        v-for="event in events"
        :id="'event-' + event.key"
        :key="event.key"
        class="event-list-item"
        :style="{ background: `url(/images/itinerary/${event.key}.jpg)` }"
      >
        <div class="event-info">
          <h2>{{ event.title }}</h2>
          <p class="event-description">
            <template v-if="event.quote">
              <span class="event-quote">{{ event.quote }}</span>
              <span class="event-quoted"> - {{ event.quoted }}</span>
            </template>
            <template v-else>
              <span v-html="event.description"></span>
            </template>
          </p>
          <div>
            <p v-if="event.locationPretext" class="event-location-pretext">
              {{ event.locationPretext }}
            </p>
            <p class="event-location font-heading text-spaced text-upper">
              <span>{{ event.location }}</span>
            </p>
            <p class="event-time">
              {{ $nuxt.$moment(event.date).format('h:mma') }}
            </p>
          </div>
        </div>
        <div class="event-date font-heading text-upper">
          <div class="event-date-day">
            {{ $nuxt.$moment(event.date).format('ddd') }}
          </div>
          <div class="event-date-date">
            {{ $nuxt.$moment(event.date).format('D') }}
          </div>
          <div class="event-date-month">
            {{ $nuxt.$moment(event.date).format('MMMM') }}
          </div>
        </div>
        <div class="event-background-fade"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      events: [
        {
          key: 'stag',
          title: "Buck's Party",
          quote:
            "“The first rule of the buck's party, is not to talk about the buck's party.”",
          quoted: 'Josh',
          location: 'Old Town, Mykonos',
          date: '2023-07-15 16:00'
        },
        {
          key: 'hen',
          title: 'Hen Party',
          quote: '“It’s time to drink champagne and dance on the table!”',
          quoted: 'Keeley',
          location: 'Old Town, Mykonos',
          date: '2023-07-16 16:00'
        },
        {
          key: 'boat-trip',
          title: 'Boat Trip',
          description:
            'Set sail with us on a traditional Greek Kaiki and explore the secluded coves and pristine beaches of the small Cycladic islands. Dive into the turquoise waters of the Aegean Sea or relax on deck and watch the dolphins swim by, all while enjoying cold refreshments and a selection of local delicacies freshly prepared onboard.',
          locationPretext: 'departing from',
          location: 'Piso Livadi, Paros',
          date: '2023-07-18 10:00'
        },
        {
          key: 'welcome-drinks',
          title: 'Welcome Drinks',
          description:
            'You’re all here and we couldn’t be happier! Join us for cocktails and canapes on the harbour of this picturesque fishing village, as we watch the sunset on our final night as ‘Mr & Miss’ <em>(kind of)</em>.',
          location: 'Barbarossa Restaurant\n' + 'Naoussa, Paros',
          date: '2023-07-19 18:00'
        },
        {
          key: 'wedding',
          title: 'Wedding',
          description:
            'It’s time for us to say “I do”, and for you to #MeetTheMcNamaras!\n' +
            'Two become one <em>(even though two technically already became three)</em>. All become drunk.',
          locationPretext:
            'transfers will depart from select locations at 4:30pm',
          location: 'Private Villa, Paros',
          date: '2023-07-20 17:30'
        },
        {
          key: 'beach-recovery',
          title: 'Beach Recovery',
          description:
            'Josh always says there’s no better cure for a hangover than a swim in the ocean...so, let’s hit the beach! We’ll make sure there’s a big lunch and a snoozeworthy sunbed at the water’s edge with your name on it – see you there!',
          location: 'Santa Maria Beach Bar\n' + 'Santa Maria Beach, Paros',
          date: '2023-07-21 12:00'
        },
        {
          key: 'pool-party',
          title: 'Farewell Brunch Pool Party',
          description:
            'We’re firing up the BBQ and inflating the unicorn to bid farewell to what will have no doubt been our best summer as husband and wife <em>(bar the first one spent as parents of course)</em>! Clothing optional. Swimwear compulsory. Because it’s not that kind of party.',
          location: 'Private Villa, Paros',
          date: '2023-07-22 11:00'
        },
        {
          key: 'island-hop',
          title: 'Island Hop',
          description:
            'The supermodel of the Greek islands is calling our name – and I think I can hear yours too! Why not extend your trip for a few days and join us in Santorini for our pre-honeymoon? We’ve partied in Paros, now let’s conquer the caldera! No itinerary. No expectations. Just good times.',
          locationPretext: 'ferries depart from Parikia',
          location: 'Santorini',
          date: '2023-07-23 13:00'
        }
      ]
    }
  },
  methods: {
    momentDate(date) {
      return $nuxt.$moment(date)
    }
  },
  head() {
    return {
      title: 'Meet the McNamaras - Itinerary'
    }
  }
}
</script>

<style scoped lang="scss">
@import '~/assets/scss/variables';

#event-list-container {
  .event-list-item {
    position: relative;
    display: inline-flex;
    align-items: stretch;
    width: 67%;
    min-height: 255px;
    margin-top: 60px;
    padding: 40px 0;
    background-size: cover !important;
    background-position: center center !important;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    z-index: 0;
    transition: color 0.4s, box-shadow 0.4s, text-shadow 0.4s;

    &:nth-child(odd) {
      margin-left: 140px;
    }

    &:nth-child(even) {
      margin-right: 140px;

      .event-date {
        order: -1;
      }

      .event-info {
        border-right: 0;
        border-left: 1px solid $color-black;
      }
    }

    .event-date,
    .event-info {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    .event-date {
      min-width: 140px;
      padding: 0 40px;
      letter-spacing: 0.1em;

      &-date {
        margin-bottom: 4px;
        font-size: 48px;
        line-height: 1;
      }

      &-day,
      &-month {
        font-size: 16px;
      }
    }

    .event-info {
      flex-grow: 1;
      padding: 0 40px;
      border-right: 1px solid $color-black;
      transition: border-color 0.4s;
      justify-content: space-between;

      .event-description {
        margin: 0.3em 0 0.5em;
        white-space: pre-wrap;

        .event-quote {
          font-style: italic;
        }

        .event-quoted {
          display: block;
          font-weight: bold;
          margin-top: 0.35em;
        }
      }

      .event-location-pretext {
        font-size: 14px;
        font-style: italic;
      }

      .event-location {
        font-size: 16px;
        white-space: pre-wrap;
      }

      .event-time {
        font-size: 14px;
      }
    }

    .event-background-fade {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background-color: $color-white;
      opacity: 0.9;
      z-index: -1;
      transition: opacity 0.4s;
    }

    &:hover {
      color: $color-white;
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.25);
      text-shadow: 0px 2px 6px rgba(0, 0, 0, 0.65);

      .event-info {
        border-color: $color-white;
      }

      .event-background-fade {
        opacity: 0;
      }
    }
  }

  @media only screen and (max-width: 950px) {
    .event-list-item {
      width: 80%;

      &:nth-child(odd) {
        margin-left: 20%;
      }

      &:nth-child(even) {
        margin-right: 20%;
      }
    }
  }

  @media only screen and (max-width: 800px) {
    .event-list-item {
      width: 100%;

      &:nth-child(odd) {
        margin-left: 0;
      }

      &:nth-child(even) {
        margin-right: 0;
      }
    }
  }

  @media only screen and (max-width: 600px) {
    .event-list-item {
      flex-direction: column;
      padding: 30px 0;

      &:nth-child(even),
      &:nth-child(odd) {
        .event-info {
          border: 0;
        }
      }

      .event-date {
        order: -1;
        min-width: auto;
        margin: 0 35%;
        border-bottom: 1px solid $color-black;
        padding: 0 0 20px;
      }

      .event-info {
        padding: 20px 20px 0;
      }
    }
  }
}
</style>
