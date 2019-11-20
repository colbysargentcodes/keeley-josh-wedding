<template>
  <div class="page-container app-width">
    <h1 class="page-header">
      Place
    </h1>
    <h2 class="page-header">
      Where to eat, sleep, drink, repeat.
    </h2>
    <p class="page-header">
      Pristine beaches, crystal clear turquoise waters, Byzantine footpaths
      leading to traditional white-washed villages and breath-taking natural
      landscapes are just a few of the many reasons we decided to celebrate our
      wedding on this beautiful little island, at the heart of the Cyclades.
    </p>
    <p class="page-header">
      Paros suits the taste of every traveller, whether you’re looking to chill
      on the beach (or hit the waves), hike mountain trails, visit
      archaeological sites and museums, or shop ‘til you drop - and let’s not
      forget about the fun to be had after the sun goes down! Use the
      interactive map below to explore our recommended areas.
    </p>
    <div id="map-container">
      <figure>
        <img src="/images/paros/map.svg" />
        <div
          v-for="location in locations"
          :id="'location-pointer-' + location.key"
          :key="location.key"
          v-scroll-to="{
            container: '#app-container',
            el: '#map-container',
            offset: 10
          }"
          class="location-pointer font-heading"
          :style="{ top: location.position.top, left: location.position.left }"
          @click="openLocation(location.key)"
        >
          <div class="location-pointer-pin"></div>
          <div
            class="location-pointer-name text-spaced text-spaced-correction text-upper"
          >
            <span>{{ location.name }}</span>
          </div>
        </div>
      </figure>
    </div>
    <div
      v-for="location in locations"
      :key="location.key"
      class="location-container"
      :class="{ open: activeLocation === location.key }"
    >
      <div class="app-width">
        <div class="location-close" @click="closeLocation">
          <img src="/icons/close.svg" />
        </div>
        <h1 class="page-header">{{ location.name }}</h1>
        <p class="page-header">{{ location.description }}</p>

        <div class="location-tabs text-spaced text-upper">
          <div
            v-for="(tab, index) in location.tabs"
            :key="tab.key"
            class="location-tab"
            :class="{ active: activeTab === false || activeTab === index }"
            @click="changeTab(index)"
          >
            <div><img :src="'/icons/' + tab.key + '.svg'" /></div>
            <div class="text-spaced-correction">{{ tab.name }}</div>
          </div>
        </div>
        <div v-if="activeTab !== false" class="location-tab-content">
          <div
            v-for="item in location.tabs[activeTab].content"
            :key="item.key"
            class="location-item"
          >
            <div
              class="location-item-image"
              :style="{ 'background-image': 'url(/images/itinerary/stag.jpg)' }"
            ></div>
            <div class="location-item-info">
              <h3 class="text-spaced-correction">{{ item.name }}</h3>
              <p>{{ item.description }}</p>
              <a :href="item.link">more info</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import locationsData from '~/assets/json/paros-locations'

export default {
  data() {
    return {
      locations: locationsData,
      activeLocation: false,
      activeTab: 0
    }
  },
  methods: {
    openLocation(location) {
      this.activeLocation = location
      this.activeTab = 0
    },
    closeLocation() {
      this.activeLocation = false
    },
    changeTab(index) {
      this.activeTab = index
    }
  },
  head() {
    return {
      title: 'Meet the McNamaras - Paros'
    }
  }
}
</script>

<style scoped lang="scss">
@import '~/assets/scss/variables';

.page-container {
  padding-bottom: 0;
}

p.page-header {
  margin-top: 1em;
  font-size: 18px;
  line-height: 1.4;

  a {
    color: $color-gold;
    transition: color 0.4s;

    &:hover {
      color: $color-gold-lighter-2;
    }
  }
}

#map-container {
  display: flex;
  justify-content: center;

  figure {
    position: relative;
    margin: 10vh 0;

    img {
      height: 80vh;
    }

    .location-pointer {
      position: absolute;
      transform: translate(-50%, -50%);
      cursor: pointer;
      top: 0;
      width: 200px;

      &-pin {
        display: inline-block;
        position: relative;
        top: 0;
        padding-bottom: 10px;
        transition: top 0.4s;

        &:before {
          content: '';
          display: block;
          width: 20px;
          height: 20px;
          border: 7px solid $color-gold;
          border-radius: 20px;
          background-color: $color-white;
          transition: border 0.4s;
        }

        &:after {
          content: '';
          position: absolute;
          top: 14px;
          left: 1px;
          width: 0;
          height: 0;
          border: 9px solid transparent;
          border-bottom: 0;
          border-top: 16px solid $color-gold;
          z-index: -1;
          transition: border 0.4s;
        }
      }

      &-name {
        font-weight: 600;
        transition: letter-spacing 0.4s;
      }

      &#location-pointer-santa-maria {
        width: 250px;
        text-align: left;
        transform: translate(0, -50%);

        .location-pointer-name {
          display: inline-block;
          position: relative;
          top: -9px;
          margin-left: 6px;
        }
      }

      &:hover {
        .location-pointer-pin {
          top: -4px;

          &:before {
            border: 5px solid $color-gold;
          }

          &:after {
            border-top-width: 20px;
          }
        }

        .location-pointer-name {
          letter-spacing: 0.33em;
        }
      }
    }
  }
}

.location-container {
  visibility: hidden;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow-y: scroll;
  padding: 75px 0;
  transition: visibility 0s 0.4s, background-color 0.4s 0.2s;

  .app-width {
    opacity: 0;
    transition: opacity 0.4s;
  }

  .location-close {
    position: fixed;
    top: 50px;
    left: 50px;
    padding: 10px;
    cursor: pointer;

    img {
      width: 25px;
    }
  }

  .location-tabs {
    display: flex;
    justify-content: space-around;
    margin: 75px 0 75px;

    .location-tab {
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

  .location-tab-content {
    display: flex;
    justify-content: center;

    .location-item {
      display: flex;
      flex-direction: column;
      width: 22%;
      padding: 20px;
      background-color: $color-white;
      box-shadow: 0 7px 20px rgba(0, 0, 0, 0.1);

      + .location-item {
        margin-left: 4%;
      }

      &-image {
        box-sizing: content-box;
        margin: -20px -20px 20px;
        padding: 0 20px 75%;
        background-size: cover;
        background-position: center center;
      }

      &-info {
        display: flex;
        flex-direction: column;
        flex-grow: 1;

        h3 {
          line-height: 1;
        }

        p {
          margin: 0.75em 0;
        }

        a {
          margin-top: auto;
          color: $color-gold;
          text-decoration: none;
          transition: color 0.4s;

          &:hover {
            color: $color-gold-lighter-2;
          }
        }
      }
    }
  }

  &.open {
    visibility: visible;
    background-color: rgba(255, 255, 255, 0.9);
    transition: visibility 0s, background-color 0.4s;

    .app-width {
      opacity: 1;
      transition: opacity 0.4s 0.2s;
    }
  }
}
</style>
