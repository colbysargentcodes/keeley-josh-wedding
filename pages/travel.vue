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
        <span
          v-for="(tab, index) in tabs"
          :key="index"
          class="travel-method-tab"
          :class="{ active: activeTab === false || activeTab === index }"
          @click="changeTab(index)"
        >
          {{ tab.title }}
        </span>
      </div>
      <div v-if="activeTab !== false" id="travel-methods-content">
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
  },
  head() {
    return {
      title: 'Meet the McNamaras - Travel'
    }
  }
}
</script>

<style scoped lang="scss">
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
    }
  }
}
</style>
