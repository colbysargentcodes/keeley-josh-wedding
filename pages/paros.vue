<template>
  <div class="page-container app-width">
    <h1 class="page-header">
      Paros
    </h1>
    <h2 class="page-header">
      Where to eat, sleep, drink, repeat
    </h2>
    <p class="page-header">
      A description of paros above the map. It may be quite a long description
      of the island, so what would this look like. A description of paros above
      the map. It may be quite a long description of the island, so what would
      this look like. A description of paros above the map. It may be quite a
      long description of the island, so what would this look like.
    </p>
    <p class="page-header">
      A description of paros above the map. It may be quite a long description
      of the island, so what would this look like. A description of paros above
      the map.
    </p>
    <div id="map-container">
      <figure>
        <img src="/images/paros/map.svg" />
        <div
          v-for="location in locations"
          :key="location.key"
          v-scroll-to="{
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
            {{ location.name }}
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
        <div class="location-close" @click="closeLocation">close</div>
        <h1 class="page-header">{{ location.name }}</h1>
        <h2 class="page-header">{{ location.description }}</h2>

        <div class="location-tabs text-spaced text-upper">
          <span
            v-for="(tab, index) in location.tabs"
            :key="tab.key"
            class="location-tab"
            :class="{ active: activeTab === false || activeTab === index }"
            @click="changeTab(index)"
          >
            {{ tab.name }}
          </span>
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
            <h3 class="text-spaced-correction">{{ item.name }}</h3>
            <p>{{ item.description }}</p>
            <a :href="item.link">more info</a>
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
      activeTab: false
    }
  },
  methods: {
    openLocation(location) {
      this.activeLocation = location
      this.activeTab = false
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
          border: 7px solid $color-pink;
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
          border-top: 16px solid $color-pink;
          z-index: -1;
          transition: border 0.4s;
        }
      }

      &-name {
        font-weight: 600;
        transition: letter-spacing 0.4s;
      }

      &:hover {
        .location-pointer-pin {
          top: -4px;

          &:before {
            border: 5px solid $color-pink;
          }

          &:after {
            border-top-width: 20px;
          }
        }

        .location-pointer-name {
          letter-spacing: 0.4em;
        }
      }
    }
  }
}

.location-container {
  visibility: hidden;
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  padding: 75px 0;
  transition: visibility 0s 0.4s, background-color 0.4s 0.2s;

  .app-width {
    opacity: 0;
    transition: opacity 0.4s;
  }

  .location-close {
    position: absolute;
    top: 50px;
    left: 50px;
    cursor: pointer;
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
    }
  }

  .location-tab-content {
    display: flex;
    justify-content: center;

    .location-item {
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

      h3 {
        line-height: 1;
      }

      p {
        margin: 0.75em 0;
      }

      a {
        color: $color-pink;
        text-decoration: none;
        transition: color 0.4s;

        &:hover {
          color: $color-pink-lighter-2;
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
