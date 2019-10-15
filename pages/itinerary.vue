<template>
  <div class="page-container app-width">
    <h1 class="page-header">
      Itinerary
    </h1>
    <h2 class="page-header">
      events around the wedding that all are welcome to join
    </h2>
    <div id="event-list-container">
      <div
        v-for="(event, index) in events"
        :id="'event-' + event.code"
        :key="index"
        class="event-list-item"
        :style="{ background: `url(/images/itinerary/${event.code}.jpg)` }"
      >
        <div class="event-info">
          <h3>{{ event.title }}</h3>
          <p class="event-description">{{ event.description }}</p>
          <p class="text-spaced text-upper event-location">
            {{ event.location }}
          </p>
          <p class="event-datetime">
            {{
              event.noTime
                ? $nuxt.$moment(event.date).format('dddd, Do MMMM')
                : $nuxt.$moment(event.date).format('dddd, Do MMMM, h:mma')
            }}
          </p>
        </div>
        <div class="event-date text-upper">
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
          code: 'stag',
          title: 'Stag',
          description:
            '“The first rule of the stag party, is not to talk about the stag party.”\n' +
            '- Josh',
          location: 'Old Town, Mykanos',
          date: '2020-06-20 19:00'
        },
        {
          code: 'hen',
          title: 'Hen',
          description:
            '“It’s time to drink champagne and dance on the table!”\n' +
            '- Keeley',
          location: 'Old Town, Mykanos',
          date: '2020-06-21 19:00'
        },
        {
          code: 'boat-trip',
          title: 'Boat Trip',
          description:
            'Set sail with us on a traditional Greek Kaiki and explore the secluded coves and pristine beaches of the small Cycladic islands. Dive into the turquoise waters of the Aegean Sea or relax on deck and watch the dolphins swim by, all while enjoying cold refreshments and a selection of local delicacies freshly prepared onboard.',
          location: 'Piso Livadi, Paros',
          date: '2020-06-24 10:00'
        },
        {
          code: 'welcome-drinks',
          title: 'Welcome Drinks',
          description:
            'You’re all here and we couldn’t be happier! Join us for cocktails and canapes on the harbour of this picturesque fishing village, as we watch the sunset on our final night as ‘Mr & Miss’.',
          location: 'Barbarossa Restaurant, Naousa, Paros',
          date: '2020-06-25 18:00'
        },
        {
          code: 'wedding',
          title: 'Wedding',
          description:
            'It’s time for us to say “I do” and for you to #MeetTheMcNamaras!',
          location: 'Private Villa, Paros',
          date: '2020-06-26 17:00'
        },
        {
          code: 'beach-recovery',
          title: 'Beach Recovery',
          description:
            'There’s no better cure for a hangover than a swim in the ocean, or so Josh says?! Let’s hit the beach and find out! We’ll made sure there’s a big lunch and a snoozeworthy sunbed at the water’s edge with your name on it – see you there!',
          location: 'Santa Maria Beach, Paros',
          date: '2020-06-27 12:00'
        },
        {
          code: 'pool-party',
          title: 'Farewell Pool Party',
          description:
            'We’re firing up the BBQ, turning on the tunes and inflating the unicorn to bid farewell to what will have no doubt been our best summer as husband and wife! Clothing optional. Swimwear compulsory. Because it’s not that kind of party.',
          location: 'Private Villa, Paros',
          date: '2020-06-28 11:00'
        },
        {
          code: 'island-hop',
          title: 'Island Hop',
          description:
            'The supermodel of the Greek islands is calling our name – and I think I can hear yours too?! Why not extend your trip for a few days and join us in Santorini before we jet off on our honeymoon? We’ve partied in Paros, now let’s conquer the caldera! No itinerary. No expectations. Just good times.',
          location: 'Santorini',
          date: '2020-06-30 13:00',
          noTime: true
        }
      ]
    }
  },
  methods: {
    momentDate(date) {
      return $nuxt.$moment(date)
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
    align-items: center;
    width: 65%;
    min-height: 260px;
    margin-top: 60px;
    padding: 40px 0;
    background-size: cover !important;
    background-position: center center !important;
    font-size: 21px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    z-index: 0;
    transition: color 0.4s, box-shadow 0.4s;

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

    .event-date {
      min-width: 140px;
      padding: 0 40px;
      letter-spacing: 0.1em;

      &-date {
        font-size: 48px;
      }

      &-month {
        font-size: 16px;
      }
    }

    .event-info {
      flex-grow: 1;
      padding: 0 40px;
      border-right: 1px solid $color-black;
      transition: border-color 0.4s;

      .event-description {
        margin-bottom: 1em;
        white-space: pre-wrap;
      }

      .event-location,
      .event-datetime {
        font-size: 16px;
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
      transition: opacity 0.4s, background-color 0.4s;
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
}
</style>
