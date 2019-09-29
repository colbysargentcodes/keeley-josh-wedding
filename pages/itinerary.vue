<template>
  <div class="page-container">
    <h1>
      Itinerary
    </h1>
    <h2>
      events around the wedding that all are welcome to join
    </h2>
    <div id="event-list-container">
      <div
        v-for="(event, index) in events"
        :key="index"
        class="event-list-item"
      >
        <div class="event-date">
          <span>{{ event.date.getDate() }}</span>
          <span>{{ event.date.getMonth() }}</span>
        </div>
        <div class="event-info">
          <p>{{ event.title }}</p>
          <p>{{ event.description }}</p>
          <p>{{ event.location }}</p>
          <p>
            {{
              event.date.toLocaleDateString() +
                ' ' +
                event.date.toLocaleTimeString()
            }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      events: [
        {
          title: 'Title 1',
          description: 'Description 1',
          location: 'Location 1',
          date: new Date('Jun 20, 2020, 12:00:00')
        },
        {
          title: 'Title 2',
          description: 'Description 2',
          location: 'Location 2',
          date: new Date('Jun 21, 2020, 12:00:00')
        }
      ]
    }
  }
}
</script>
