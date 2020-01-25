<template>
  <div class="page-container app-width">
    <h1 class="page-header">
      Travel
    </h1>
    <h2 class="page-header">
      Wish you could just teleport straight to the beach? Us to. Here are the
      next best options.
    </h2>
    <div id="travel-methods-container">
      <div id="travel-methods-tabs" class="text-spaced text-upper">
        <div
          v-for="tab in tabs"
          :key="tab.key"
          class="travel-method-tab"
          :class="{ active: activeTab === false || activeTab === tab.key }"
          @click="changeTab(tab.key)"
        >
          <div><img :src="'/icons/' + tab.key + '.svg'" /></div>
          <div class="text-spaced-correction">{{ tab.title }}</div>
        </div>
      </div>
      <div v-if="activeTab === 'fly'" class="travel-method-content">
        <h3>
          Athens International Airport (ATH)
        </h3>
        <p>
          Those travelling from outside Europe can fly to/from Mykonos or Paros
          via Athens International Airport.
        </p>
        <h3>
          Mykonos Airport (JMK)
        </h3>
        <p>
          Those travelling from select countries inside Europe can fly directly
          to/from Mykonos Airport. Paros can then be reached by ferry (1 hr).
        </p>
        <p class="note">
          *A taxi between Mykonos Airport and Mykonos (New) Ferry Port takes
          15-20 mins.
        </p>
        <h3>
          New Paros Airport (PAS)
        </h3>
        <p>
          Those travelling via Athens can fly to/from Paros Airport.
        </p>
        <p class="note">
          *A taxi between Paros Airport and Naoussa takes 25 mins/Santa Maria
          takes 35mins.
        </p>
        <p class="spaced-links">
          <strong>Compare flights times and prices at:</strong><br />
          <a href="https://www.skyscanner.com" target="_blank">
            www.skyscanner.com
          </a>
          <br />
          <a href="https://www.expedia.com" target="_blank">www.expedia.com</a>
        </p>
        <p class="note">
          *we’d recommend booking your flights ASAP!
        </p>
      </div>
      <div v-if="activeTab === 'sail'" class="travel-method-content">
        <h3>
          ATHENS (PIRAEUS) HARBOUR – MYKONOS (NEW) PORT / PAROS (PARIKIA)
          TERMINAL
        </h3>
        <p>
          There are 4-5 ferries per day between Athens and Mykonos/Paros, with a
          journey time of approx. 4-5 hours.
          <br />
          Costs vary between €30-60 dependent upon ferry operator and duration.
        </p>
        <p class="note">
          *A taxi between Athens Airport and Athens (Piraeus) Harbour takes 1
          hour. Travel is also possible by bus, with a journey time of 1.5hours.
        </p>
        <h3>
          MYKONOS (NEW) PORT – PAROS (PARIKIA) TERMINAL
        </h3>
        <p>
          There are 3-5 ferries per day between Mykonos and Paros, with a
          journey time of approx. 1 hour.
          <br />
          Costs vary between €20-40 dependant on ferry operator.
        </p>
        <p class="note">
          *A taxi between Mykonos Airport and Mykonos New Port takes 15-20 mins.
        </p>
        <p class="spaced-links">
          <strong>View ferry timetables and book tickets online at:</strong>
          <br />
          <a href="https://www.ferryhopper.com" target="_blank">
            www.ferryhopper.com
          </a>
          <br />
          <a href="https://www.letsferry.gr" target="_blank">
            www.letsferry.gr
          </a>
          <br />
          <a href="https://www.ferries.gr" target="_blank">www.ferries.gr</a>
          <br />
          <a href="https://www.go-ferry.com" target="_blank">
            www.go-ferry.com
          </a>
        </p>
        <p class="note">
          *we’d recommend booking your ferry tickets online 1-2 months in
          advance (full timetables are not yet released for June 2020).
        </p>
      </div>
      <div v-if="activeTab === 'drive'" class="travel-method-content">
        <p>
          Car rental is available in Athens, Mykonos and Paros.
          <br />
          For guidance on travelling via car between these locations, please see
          the ‘sail’ tab for ferry information.
        </p>
        <p>
          <strong>Compare local car rental providers and prices at:</strong>
          <br />
          <a href="https://www.rentalcars.com" target="_blank">
            www.rentalcars.com
          </a>
          <br />
          <a href="https://www.autoeurope.com" target="_blank">
            www.autoeurope.com
          </a>
          <br />
          <a href="https://www.greececar.com" target="_blank">
            www.greececar.com
          </a>
        </p>
        <p class="note">
          *we’d recommend booking your rental car 1-2 months in advance.
        </p>
      </div>
      <div v-if="activeTab === 'swim'" class="travel-method-content">
        <p>
          Rather you than us. Good luck!
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tabs: [
        {
          key: 'fly',
          title: 'Fly'
        },
        {
          key: 'sail',
          title: 'Sail'
        },
        {
          key: 'drive',
          title: 'Drive'
        },
        {
          key: 'swim',
          title: 'Swim'
        }
      ],
      activeTab: 0
    }
  },
  methods: {
    changeTab(key) {
      this.activeTab = key
    }
  },
  head() {
    return {
      title: 'Meet the McNamaras - Travel'
    }
  }
}
</script>

<style scoped lang="scss">
@import '~/assets/scss/variables';

#travel-methods-container {
  width: 65%;
  margin: 0 auto;

  #travel-methods-tabs {
    display: flex;
    justify-content: space-around;
    margin: 75px 0 75px;

    .travel-method-tab {
      flex: 0 0 1;
      opacity: 0.5;
      cursor: pointer;
      transition: opacity 0.4s;

      &.active {
        opacity: 1;
      }

      img {
        width: 50px;
        margin-bottom: 12px;
      }
    }
  }

  .travel-method-content {
    font-size: 16px;

    > h3:not(:first-child) {
      margin-top: 2em;
    }

    > p:not(:first-child) {
      margin-top: 0.65em;

      &.spaced-links {
        margin-top: 3.65em;
      }
    }

    a {
      color: $color-gold;
      transition: color 0.4s;

      &:hover {
        color: $color-gold-lighter-2;
      }
    }

    .note {
      font-size: 12px;
      color: $color-midgrey;
      font-style: italic;
    }
  }
}
</style>
