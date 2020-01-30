<template>
  <header :class="{ show: headerActive }">
    <div class="app-width">
      <div id="app-logo">
        <img src="/images/jk-monogram-thick.svg" />
      </div>
      <div
        id="nav-overlay"
        :class="{ show: menuOpen }"
        @click="menuOpen = false"
      ></div>
      <nav
        class="font-heading text-spaced text-upper"
        :class="{ open: menuOpen }"
      >
        <a class="close-button" @click="menuOpen = false">close</a>
        <nuxt-link
          v-for="(page, index) in pages"
          :key="index"
          :to="page.path"
          :class="{
            'feature-button': page.feature
          }"
          @click="menuOpen = false"
        >
          {{ page.name }}
        </nuxt-link>
      </nav>
      <div id="menu-trigger" @click="menuOpen = true">
        <span id="menu-icon"></span>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      headerActive: false,
      menuOpen: false,
      pages: [
        {
          name: 'Itinerary',
          path: '/itinerary'
        },
        {
          name: 'Place',
          path: '/place'
        },
        {
          name: 'Travel',
          path: '/travel'
        },
        {
          name: 'Contact',
          path: '/contact'
        },
        {
          name: 'R.S.V.P',
          path: '/rsvp',
          feature: true
        }
      ]
    }
  },
  mounted() {
    this.$eventBus.$on('showHeader', this.showHeader)
    this.$eventBus.$on('hideHeader', this.hideHeader)
  },
  methods: {
    showHeader() {
      this.headerActive = true
    },
    hideHeader() {
      this.headerActive = false
    }
  }
}
</script>

<style lang="scss">
@import '~/assets/scss/variables';

header {
  display: none;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 100px;

  &.show {
    display: block;
  }

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid $color-black;
    height: 100%;
  }

  #app-logo {
    text-align: left;

    img {
      width: auto;
      height: 70px;
    }
  }

  #nav-overlay {
    display: none;
  }

  nav {
    flex-grow: 1;
    text-align: right;

    a {
      display: inline-block;
      position: relative;
      padding: 0.75em 1em;
      color: inherit;
      text-decoration: none;
      transition: background-color 0.2s, color 0.2s;

      &:after {
        content: '';
        position: absolute;
        bottom: 0.55em;
        left: 51%;
        right: calc(51% + 4px);
        height: 1px;
        background-color: $color-gold;
        transition: left 0.4s, right 0.4s, background-color 0.2s;
      }

      &:hover {
        color: $color-gold;
      }

      &.nuxt-link-active {
        &:after {
          left: 2em;
          right: calc(2em + 4px); // adjust for text-spacing
        }
      }

      &.close-button {
        display: none;
      }

      &.feature-button {
        border: 1px solid $color-gold;

        &:not(:first-child) {
          margin-left: 1em;
        }

        &:not(:last-child) {
          margin-right: 1em;
        }

        &:hover {
          background-color: $color-gold;
          color: $color-white;

          &:after {
            background-color: $color-white;
          }
        }
      }
    }
  }

  #menu-trigger {
    display: none;
  }
}

@media only screen and (max-width: 800px) {
  header {
    #nav-overlay {
      position: fixed;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      display: block;
      background: rgba(255, 255, 255, 0.75);
      opacity: 0;
      pointer-events: none;
      z-index: 998;
      transition: opacity 0.3s;

      &.show {
        opacity: 1;
        pointer-events: auto;
      }
    }

    nav {
      position: fixed;
      top: 0;
      bottom: 0;
      left: 100%;
      width: 65%;
      display: flex;
      flex-direction: column;
      align-items: center;
      background-color: $color-white;
      box-shadow: 0 0 0 rgba(0, 0, 0, 00);
      z-index: 999;
      transition: left 0.3s, box-shadow 0.3s;

      &.open {
        left: 35%;
        box-shadow: 0 0 40px rgba(0, 0, 0, 0.25);
      }

      a {
        margin-top: 2em;

        &.close-button {
          display: inline-block;
          color: $color-gold;
          font-size: 12px;
          font-weight: bold;
          cursor: pointer;
        }

        &.feature-button:not(:first-child) {
          margin-left: 0;
        }
      }
    }

    #menu-trigger {
      display: block;
      padding: 13px 3px;

      #menu-icon {
        position: relative;
        display: inline-block;
        width: 40px;
        height: 20px;
        border-top: 2px solid $color-gold;
        border-bottom: 2px solid $color-gold;
        cursor: pointer;

        &:after {
          content: '';
          position: absolute;
          top: 50%;
          right: 0;
          left: 0;
          height: 2px;
          transform: translateY(-50%);
          background-color: $color-gold;
        }
      }
    }
  }
}
</style>
