<template>
  <header :class="{ show: headerActive }">
    <div class="app-width">
      <div id="app-logo">
        <img src="/images/jk-monogram-thick.svg" />
      </div>
      <nav class="font-heading text-spaced text-upper">
        <nuxt-link
          v-for="(page, index) in pages"
          :key="index"
          :to="page.path"
          :class="{
            'feature-button': page.feature
          }"
          >{{ page.name }}</nuxt-link
        >
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      headerActive: false,
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

    if ($nuxt.$route.name !== 'index') this.showHeader()
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
}
</style>
