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
                ? $nuxt.$moment(event.date).format('dddd, MMMM Do')
                : $nuxt.$moment(event.date).format('dddd, MMMM Do, h:mma')
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
            'A celebration held for a man who is about to get married, attended only by men',
          location: 'Mykanos',
          date: '2020-06-20 19:00'
        },
        {
          code: 'hen',
          title: 'Hen',
          description:
            'A celebration held for a woman who is about to get married, attended only by women',
          location: 'Mykanos',
          date: '2020-06-21 16:00'
        },
        {
          code: 'boat-trip',
          title: 'Boat Trip',
          description: 'A celebration held on a boat, attended only by anyone',
          location: 'Paros',
          date: '2020-06-24 10:00'
        },
        {
          code: 'welcome-drinks',
          title: 'Welcome Drinks',
          description:
            'A celebration held at a welcoming, attended only by attendees',
          location: 'Paros',
          date: '2020-06-25 18:30'
        },
        {
          code: 'wedding',
          title: 'Wedding',
          description:
            'A celebration held people getting married, attended only by everyone',
          location: 'Noussa, Paros',
          date: '2020-06-26 17:00'
        },
        {
          code: 'beach-recovery',
          title: 'Beach Recovery',
          description:
            'A celebration held on a beach, attended only by people with hangovers',
          location: 'Santa Maria, Paros',
          date: '2020-06-27 14:00'
        },
        {
          code: 'pool-party',
          title: 'Pool Party',
          description:
            'A celebration held in and around a swimming pool, attended only by swimmers',
          location: 'Private Villa',
          date: '2020-06-28 11:00'
        },
        {
          code: 'island-hop',
          title: 'Island Hop',
          description:
            'A celebration held for more holiday time, attended only by people with a lot of spare holidays',
          location: 'Santorini',
          date: '2020-06-30',
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
    min-height: 250px;
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
        opacity: 0.6;
        background-color: $color-gold;
      }
    }
  }
}
</style>
