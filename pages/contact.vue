<template>
  <div class="page-container">
    <h1>
      Contact
    </h1>
    <h2>
      how to get in touch
    </h2>
    <div id="contacts-list-container">
      <div
        v-for="(contact, index) in contacts"
        :key="index"
        class="contacts-list-item"
      >
        <div class="contact-info">
          <p>{{ contact.role }}</p>
          <p>{{ contact.name }}</p>
          <p>{{ contact.phone }}</p>
          <p>{{ contact.email }}</p>
        </div>
      </div>
    </div>
    <div id="emergency-container">
      <h2>Emergency!</h2>
      <h3>112</h3>
      <p>Police: 100</p>
      <p>Fire: 199</p>
      <p>Medical: 166</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      contacts: [
        {
          role: 'Role 1',
          name: 'Name 1',
          phone: '07111 111111',
          email: 'email-one@example.com'
        },
        {
          role: 'Role 2',
          name: 'Name 2',
          phone: '07222 222222',
          email: 'email-two@example.com'
        }
      ]
    }
  }
}
</script>
