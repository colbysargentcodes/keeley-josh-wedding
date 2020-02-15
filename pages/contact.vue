<template>
  <div class="page-container app-width">
    <h1 class="page-header">
      Contact
    </h1>
    <h2 class="page-header">
      Got a question, or just want to say hi?<br />
      Get in touch!
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
            <p class="contact-person-name font-script">{{ contact.name }}</p>
          </div>
        </div>
        <div class="contact-info">
          <p>
            <img src="/icons/phone.svg" />
            <a :href="'tel:' + contact.phone">{{ contact.phone }}</a>
          </p>
          <p>
            <img src="/icons/email.svg" />
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
          <div><img src="/icons/police.svg" /></div>
          <div class="text-upper">Police</div>
          <div>
            <h2><a href="tel:100">100</a></h2>
          </div>
        </div>
        <div class="emergency-number">
          <div><img src="/icons/fire.svg" /></div>
          <div class="text-upper">Fire</div>
          <div>
            <h2><a href="tel:199">199</a></h2>
          </div>
        </div>
        <div class="emergency-number">
          <div><img src="/icons/medical.svg" /></div>
          <div class="text-upper">Medical</div>
          <div>
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
          email: 'keeleydee2003@yahoo.co.uk'
        },
        {
          key: 'josh',
          role: 'Groom',
          name: 'Josh',
          phone: '+852 9132 0398',
          email: 'joshmcnamara@hotmail.com'
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
  margin: 60px auto;
  text-align: left;

  .contacts-list-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 1.5em;

    .contact-person {
      display: flex;
      align-items: center;

      .contact-person-info {
        line-height: 1;

        .contact-person-role {
          color: $color-midgrey;
        }

        .contact-person-name {
          margin-top: 5px;
          font-size: 36px;
        }
      }

      img {
        width: 100px;
        height: 100px;
        border-radius: 150px;
        margin-right: 25px;
      }
    }

    .contact-info {
      min-width: 360px;
      font-size: 18px;

      p + p {
        margin-top: 12px;
      }

      img,
      a {
        vertical-align: middle;
      }

      img {
        width: 25px;
        margin-right: 6px;
      }
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

      img {
        width: 50px;
        margin-bottom: 5px;
      }
    }
  }
}
</style>
