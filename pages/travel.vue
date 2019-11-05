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
          v-for="(tab, index) in tabs"
          :key="tab.key"
          class="travel-method-tab"
          :class="{ active: activeTab === false || activeTab === index }"
          @click="changeTab(index)"
        >
          <div><img :src="'/icons/' + tab.key + '.svg'" /></div>
          <div>{{ tab.title }}</div>
        </div>
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
          key: 'fly',
          title: 'Fly',
          content: 'This is how to get there if you fly'
        },
        {
          key: 'sail',
          title: 'Sail',
          content: 'This is how to get there if you sail'
        },
        {
          key: 'drive',
          title: 'Drive',
          content: 'This is how to get there if you drive'
        },
        {
          key: 'swim',
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

      img {
        width: 50px;
      }
    }
  }
}
</style>
