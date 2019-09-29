<template>
  <div class="page-container">
    <h1>
      Travel
    </h1>
    <h2>
      travelling to Paros as well as getting around while you're there
    </h2>
    <div id="travel-methods-container">
      <div id="travel-methods-tabs">
        <span
          v-for="(tab, index) in tabs"
          :key="index"
          class="travel-method-tab"
          @click="changeTab(index)"
        >
          {{ tab.title }}
        </span>
      </div>
      <div id="travel-methods-content">
        <span>{{ tabs[activeTab].content }}</span>
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
          title: 'Fly',
          content: 'This is how to get there if you fly'
        },
        {
          title: 'Sail',
          content: 'This is how to get there if you sail'
        },
        {
          title: 'Drive',
          content: 'This is how to get there if you drive'
        },
        {
          title: 'Swim',
          content: 'This is how to get there if you swim'
        }
      ],
      activeTab: 0
    }
  },
  methods: {
    changeTab(index) {
      this.activeTab = index
    }
  }
}
</script>
