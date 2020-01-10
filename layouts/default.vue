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
  mounted() {
    this.checkLogin()
  },
  methods: {
    checkLogin() {
      if ($nuxt.$route.name === 'index') return true

      const lastLogin = localStorage.getItem('lastLogin')
      const loginExpiry = new Date()
      const changedDate = loginExpiry.getDate() - 14
      loginExpiry.setDate(changedDate)

      if (!lastLogin || lastLogin < loginExpiry.getTime()) {
        this.$router.push('/')
      } else {
        localStorage.setItem('lastLogin', Date.now())
        this.$eventBus.$emit('showHeader')
      }
    }
  },
  head() {
    return {
      title: 'Meet the McNamaras'
    }
  }
}
</script>
