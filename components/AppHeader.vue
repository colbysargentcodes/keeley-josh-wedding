<template>
  <header :class="{ show: headerActive }">
    <nuxt-link to="/">
      <h1>KJ</h1>
    </nuxt-link>
    <nav>
      <nuxt-link to="/itinerary">Itinerary</nuxt-link>
      <nuxt-link to="/paros">Paros</nuxt-link>
      <nuxt-link to="/travel">Travel</nuxt-link>
      <nuxt-link to="/contact">Contact</nuxt-link>
      <nuxt-link to="/rsvp">R.S.V.P</nuxt-link>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      headerActive: false
    }
  },
  mounted() {
    this.$eventBus.$on('showHeader', this.showHeader)
    this.$eventBus.$on('hideHeader', this.hideHeader)

    // eslint-disable-next-line no-undef
    if ($nuxt.$route.name !== 'index') this.showHeader()
  },
  methods: {
    showHeader() {
      this.headerActive = true
    },
    hideHeader() {
      this.headerActive = true
    }
  }
}
</script>

<style>
header {
  display: none;
}

header.show {
  display: initial;
}
</style>
