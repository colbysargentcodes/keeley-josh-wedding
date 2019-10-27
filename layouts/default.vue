<template>
  <div id="app-container">
    <div id="background"></div>
    <app-header />
    <main>
      <nuxt />
    </main>
  </div>
</template>

<script>
import AppHeader from '~/components/AppHeader.vue'

export default {
  components: {
    AppHeader
  },
  head() {
    return {
      title: 'Meet the McNamaras'
    }
  }
}
</script>
