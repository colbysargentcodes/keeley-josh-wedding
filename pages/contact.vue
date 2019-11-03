<template>
  <div class="page-container app-width">
    <h1 class="page-header">
      Contact
    </h1>
    <h2 class="page-header">
      how to get in touch
    </h2>
    <div id="contacts-list-container">
      <div
        v-for="(contact, index) in contacts"
        :key="index"
        class="contacts-list-item"
      >
        <div class="contact-person">
          <div class="contact-person-image">
            <img :src="'/images/contact/' + contact.key + '.jpg'" />
          </div>
          <div class="contact-person-info">
            <p class="contact-person-role font-heading text-spaced text-upper">
              {{ contact.role }}
            </p>
            <p class="contact-person-name">{{ contact.name }}</p>
          </div>
        </div>
        <div class="contact-info">
          <p>
            <a :href="'tel:' + contact.phone">{{ contact.phone }}</a>
          </p>
          <p>
            <a :href="'mailto:' + contact.email">{{ contact.email }}</a>
          </p>
        </div>
      </div>
    </div>
    <div id="emergency-container">
      <h2>Emergency!</h2>
      <h1><a href="tel:112">112</a></h1>
      <div id="emergency-numbers">
        <div class="emergency-number">
          <div class="emergency-number-name text-upper">Police</div>
          <div class="emergency-number-number">
            <h2><a href="tel:100">100</a></h2>
          </div>
        </div>
        <div class="emergency-number">
          <div class="emergency-number-name text-upper">Fire</div>
          <div class="emergency-number-number">
            <h2><a href="tel:199">199</a></h2>
          </div>
        </div>
        <div class="emergency-number">
          <div class="emergency-number-name text-upper">Medical</div>
          <div class="emergency-number-number">
            <h2><a href="tel:166">166</a></h2>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      contacts: [
        {
          key: 'keeley',
          role: 'Bride',
          name: 'Keeley',
          phone: '+852 9686 1722',
          email: 'keeley@keeley.com'
        },
        {
          key: 'josh',
          role: 'Groom',
          name: 'Josh',
          phone: '+852 9132 0398',
          email: 'josh@josh.com'
        },
        {
          key: 'katerina',
          role: 'Planner',
          name: 'Katerina',
          phone: '+000 0000 0000',
          email: 'kat@kat.com'
        }
      ]
    }
  },
  head() {
    return {
      title: 'Meet the McNamaras - Contact'
    }
  }
}
</script>

<style scoped lang="scss">
@import '~/assets/scss/variables.scss';

a {
  color: inherit;
  text-decoration: none;
  transition: color 0.4s;

  &:hover {
    color: $color-gold;
  }
}

#contacts-list-container {
  width: 60%;
  margin: 75px auto;
  font-size: 28px;
  text-align: left;

  .contacts-list-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 1.25em;

    .contact-person {
      display: flex;
      align-items: center;

      .contact-person-info {
        line-height: 1;

        .contact-person-role {
          font-size: 18px;
          color: $color-midgrey;
        }

        .contact-person-name {
          font-size: 36px;
        }
      }

      img {
        width: 150px;
        height: 150px;
        border-radius: 150px;
        margin-right: 25px;
      }
    }

    .contact-info {
      min-width: 200px;
      font-size: 21px;
    }
  }
}

#emergency-container {
  h2 {
    font-size: 32px;
    margin-right: -0.125em;
  }

  #emergency-numbers {
    display: flex;
    justify-content: center;
    margin-top: 25px;

    .emergency-number {
      margin: 0 50px;
    }
  }
}
</style>
