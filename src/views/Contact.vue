<template>
  <div >
    <div style="background-color: #ec1f25">
      <div :class="$vuetify.breakpoint.smAndUp ? 'wrapper px-5' : ''">
        <h2 class="white--text py-5 text-h4 px-6">
          {{ $t("contact.title").toUpperCase() }}
        </h2>
      </div>
    </div>

    <v-row class="mx-5">
      <!-- Contact Information -->
      <v-col cols="12" md="6" order="1">
        <v-col cols="12"  class="py-0">
          <h3 class="subtitle text-center mb-7">
            {{ $t("contact.contactInfo") }}
          </h3>
        </v-col>

        <v-row class="mb-5 mt-5">
          <v-col cols="12" class="d-flex justify-center">
            <v-card
              flat
              class="text-center d-flex flex-column align-center justify-center"
            >
              <div>
                <v-icon color="red" large>mdi-clock</v-icon>
                <p class="mb-0 mt-2">
                  {{ $t("contact.workTime[0]") }}: 09:00 - 17:00
                </p>
                <p>{{ $t("contact.workTime[1]") }}</p>
              </div>
            </v-card>
          </v-col>

          <v-col cols="12" class="text-center px-0 pb-0">
              <p class="mb-0">
                {{ $t("contact.mobile") }}:
                <a :href="'tel:+381646162151'">
                  <span class="primary--text">+381 64/61-62-151</span>
                </a>
              </p>
          </v-col>

          <v-col cols="12" class="text-center px-0 pb-0">
              <p class="mb-0">
                {{ $t("contact.phone") }}:
                <a :href="'tel:+38137492902'">
                  <span class="primary--text">+381 37/492-902</span>
                </a>
              </p>
          </v-col>

          <v-col cols="12" class="text-center px-0">
              <p class="mb-0">Email: 
                <a :href="'mailto:info@citymarket.rs'">
                  <span class="primary--text">info@citymarket.rs</span>
                </a>
              </p>
          </v-col>

          <v-col cols="12" class="d-flex justify-center">
            <v-card
              flat
              class="text-center d-flex flex-column align-center justify-center"
            >
              <div>
                <v-icon color="red" large>mdi-map-marker</v-icon>
                <p class="mb-0 mt-2">{{ $t("contact.street") }},</p>
                <p class="mb-0">{{ $t("contact.city") }},</p>
                <p>{{ $t("contact.country") }}</p>
              </div>
            </v-card>
          </v-col>

        </v-row>
      </v-col>

      <v-col cols="12" md="6" class="px-0 d-flex justify-center" :order="$vuetify.breakpoint.smAndUp ? 3 : 2">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2890.5605106402695!2d21.34314401572106!3d43.57404006556352!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475687ce915bdbcf%3A0xd64440fc96bdfd1e!2sCity%20Market%20d.o.o.%20Kru%C5%A1evac!5e0!3m2!1sen!2srs!4v1632178123236!5m2!1sen!2srs" :style="{width: $vuetify.breakpoint.smAndUp ? '600px' : '100%'}" height="400" style="border: 2px solid #ccc; transform: translateY(-50px)" allowfullscreen="" loading="lazy"></iframe>
      </v-col>

      <v-col cols="12" offset-sm="1" sm="10" offset-md="0" md="6" lg="5" :order="$vuetify.breakpoint.smAndUp ? 2 : 3">
        <!-- Write us -->
        <v-row>
          <v-col cols="12">
            <h3 class="subtitle text-center mb-7">{{ $t("contact.writeUs") }}</h3>
          </v-col>
          <v-col cols="12">
            <p class="text-center">{{ $t("contact.writeUsText") }}</p>
          </v-col>

          <!-- CONTACT FORM -->
          <v-form ref="contactForm" style="width: 100%">
            <v-row class="mx-0">
              <v-col cols="12" sm="6" class="py-0">
                <v-text-field
                  prepend-inner-icon="mdi-account"
                  :label="$t('contact.writeUsForm.name')"
                  outlined
                  v-model="name"
                  :rules="[rules.required]"
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" class="py-0">
                <v-text-field
                  prepend-inner-icon="mdi-email"
                  :label="$t('contact.writeUsForm.email')"
                  outlined
                  v-model="email"
                  :rules="[rules.email]"
                ></v-text-field>
              </v-col>
              <v-col cols="12" class="py-0">
                <v-text-field
                  prepend-inner-icon="mdi-format-title"
                  :label="$t('contact.writeUsForm.title')"
                  outlined
                  v-model="message.title"
                  :rules="[rules.required]"
                ></v-text-field>
              </v-col>
              <v-col cols="12" class="py-0">
                <v-textarea
                  outlined
                  auto-grow
                  :label="$t('contact.writeUsForm.message')"
                  rows="6"
                  v-model="message.text"
                  :rules="[rules.required]"
                ></v-textarea>
              </v-col>
              <v-col offset="1" cols="10" style="text-align: center" class="pt-0">
                <span class="error--text"><b>{{ errMsg }}</b></span>
                <span class="green--text"><b>{{ validMsg }}</b></span>
              </v-col>
              <v-col offset="1" cols="10" offset-sm="3" sm="6" class="py-0">
                <v-btn @click="sendMessage" block dark large color="#ec1f25">{{ $t("contact.writeUsForm.send") }}</v-btn>
              </v-col>
            </v-row>
          </v-form>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data () {
    return {
      message: {
        title: '',
        text: '',
      },
      name: '',
      email: '',
      rules: {
        required: value => !!value || 'Required.',
        counter: value => value.length <= 20 || 'Max 20 characters',
        email: value => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          return pattern.test(value) || 'Invalid e-mail.'
        },
      },
      validMsg: '',
      errMsg: ''
    }
  },
  methods: {
    async sendMessage(){
      if(this.name && this.email && this.message.title && this.message.text){
        let message = {
          name: this.name,
          email: this.email,
          title: this.message.title,
          message: this.message.text,
        }
  
        let res = await axios.post('https://citymarket.rs/mail.php', message)

        if(res.data.res == 'ok'){
          this.validMsg = this.$i18n.locale == 'srb' ? 'Poruka poslata' : 'Message has been sent'
          this.errMsg =  ''
          this.$refs.contactForm.reset();
          
          setTimeout(()=>{
            this.validMsg = ''
          }, 5000)

        }
        else{
          this.validMsg = ''
          this.errMsg = this.$i18n.locale == 'srb' ? 'Unesite podatke' : 'Invalid parameters' 
        }  
      }
      else{
        this.validMsg = ''
        this.errMsg = this.$i18n.locale == 'srb' ? 'Unesite podatke' : 'Invalid parameters' 
      }
    }
  }
}
</script>

<style scoped>
a:hover span {
  text-decoration: underline;
}
</style>