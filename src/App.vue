<template>
  <v-app id="inspire">
    <v-navigation-drawer
      :class="$vuetify.breakpoint.smAndUp ? 'wrapper' : ''"
      v-model="drawer"
      app
      temporary
      right
      style="background-color: rgba(255, 255, 255, 1)"
    >
      <div class="py-7">
        <v-img height="70" src="./assets/home/logo.jpg"></v-img>
      </div>

      <v-divider></v-divider>

      <v-list nav dense class="pt-7">
        <v-list-item-group active-class="red--text text--accent-4" >
          <v-list-item to="/" class="py-2">
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>{{$t(`menu[0]`)}}</v-list-item-title>
          </v-list-item>

          <v-list-item 
            v-for="(item, idx) in menuOptionsMobile"
            :key="idx"
            :to="{name: item.name[0].toUpperCase() + item.name.slice(1)}" 
            class="py-2"
          >
            <v-list-item-icon>
              <v-icon>{{item.icon}}</v-icon>
            </v-list-item-icon>
            <v-list-item-title>{{$t(`menu[${idx+1}]`)}}</v-list-item-title>
          </v-list-item>
          
        </v-list-item-group>
      </v-list>

      <v-divider></v-divider>

      <!-- Languages -->
      <v-row justify="center" class="py-8 px-5 text-center">
        <v-col cols="6" class="px-0">
          <span @click="$i18n.locale = 'srb'">
            <v-btn text outlined color="error">
              <v-icon left color="error" v-if="$i18n.locale == 'srb'">mdi-checkbox-marked-circle</v-icon>
              Srpski
            </v-btn>
          </span>
        </v-col>
        <v-col cols="6" class="px-0">
          <span @click="$i18n.locale = 'en'">
            <v-btn text outlined color="primary">
              <v-icon left color="primary" v-if="$i18n.locale == 'en'">mdi-checkbox-marked-circle</v-icon>
              English
            </v-btn>
          </span>
        </v-col>
      </v-row>

      <v-divider></v-divider>

      <div style="text-align: center" class="pt-10">
        <v-btn fab dark color="red" height="40" width="40" @click="drawer = false">
          <v-icon size="40">mdi-close-circle</v-icon>
        </v-btn>
      </div>
    </v-navigation-drawer>

    <!-- Upper heading -->
    <div style="background-color: #272727; color: rgba(255,255,255,0.9)">
      <div :class="$vuetify.breakpoint.smAndUp ? 'wrapper' : 'px-3'">
        
        <v-row class="py-1">
          <v-col class="d-flex align-center py-4" :class="$vuetify.breakpoint.mdAndUp ? '' : 'justify-center'">
            <v-icon left color="white">mdi-phone</v-icon>
            <span v-if="$vuetify.breakpoint.mdAndUp" style="color: grey">{{ $t('contact.contactUs') }}:</span>
            <a :href="'tel:+381646162151'" >
              &nbsp;<span id="topHeadingPhoneNumber" style=" color: rgba(255,255,255,0.9)">+381 64/61-62-151</span>
            </a>
          </v-col>

          <v-col v-if="$vuetify.breakpoint.mdAndUp" style="height: 55px; max-width: 150px" :style="{maxWidth: $vuetify.breakpoint.mdAndUp ? '150px' : '140px'}">
            <v-select
              @change="changeLang"
              :style="{zIndex: $vuetify.breakpoint.mdAndUp ? '12' : '11'}"
              color="rgba(255,255,255,1)"
              item-color="rgb(255,0,0)"
              background-color="transparent"
              flat
              label="Srpski"
              v-model="currentLang"
              :items="langs"
              item-text="name"
              dense
              solo
              dark
            ></v-select>
          </v-col>
        </v-row>
      </div>
    </div>

    <!-- Heading -->
    <v-app-bar flat color="transparent" :style="{zIndex: $vuetify.breakpoint.mdAndUp ? '10' : '0'}" height="72" :class="$vuetify.breakpoint.smAndUp ? 'wrapper' : ''">
      <v-toolbar-title>
        <router-link to="/">
          <v-img width="200" height="70" src="./assets//home/logo.jpg"></v-img>
        </router-link>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <div id="blackLinkTag" v-if="$vuetify.breakpoint.mdAndUp">
        <router-link 
          v-for="(item, idx) in menuOptions"
          :key="idx"
          :to="{name: item.name[0].toUpperCase() + item.name.slice(1)}"
          class="menu-option"
          :class="{activez: $route.path.split('/')[1].toLowerCase() == item.name}"
        >
          <v-icon :color="$route.path.split('/')[1].toLowerCase() == item.name ? 'white' : 'grey'">
            {{item.icon}}
          </v-icon>
          {{$t(`menu[${idx}]`)}}
        </router-link>

      </div>

      <v-icon 
        v-else
        size="40"
        @click="drawer = !drawer"
        color="#ec1f25"
      >
        mdi-menu
      </v-icon>
    </v-app-bar>


    <!-- MAIN -->
    <v-main>
      <router-view :key="$route.path" />
    </v-main>
    
    <!-- BACK TO TOP -->
    <back-to-top bottom="50px" right="20px" visibleoffset="400">
      <v-btn color="red darken-2" fab>
        <v-icon color="white">mdi-arrow-up-bold</v-icon>
      </v-btn>
    </back-to-top>


    <!-- FOOTER -->
    <v-footer dark padless class="mt-15">
      <div class="mx-auto" :class="$vuetify.breakpoint.smAndUp ? 'wrapper' : ''">
        <TheFooter />
      </div>

      <!-- LOGO -->
      <v-col cols="12">
        <v-divider></v-divider>
        <v-row justify="center" align="center" class="mt-10 mb-5">
          <v-col class="d-flex justify-center">
            <router-link to="/">
              <v-img width="200" height="70" src="./assets//home/logo.jpg"></v-img>
            </router-link>
          </v-col>
        </v-row>
      </v-col>

      <v-col class="text-center" cols="12">
        Made with <v-icon small color="error" class="pb-1">mdi-heart</v-icon> by
        <span style="color: #2196f3">crystalnoon</span> ©
        <!-- <br> -->
        {{ new Date().getFullYear() }}
      </v-col>
    </v-footer>
  </v-app>
</template>

<script>
import BackToTop from "vue-backtotop";
import TheFooter from "@/components/TheFooter.vue"

export default {
  components: {
    BackToTop,
    TheFooter
  },
  data: () => ({
    langs: [
      {
        name: 'Srpski',
        path: 'srb',
      },
      {
        name: 'English',
        path: 'en',
      }
    ],
    currentLang: 'Srpski',
    test: false,
    drawer: null,
    menuOptions: [
      { name: "home", icon: "mdi-home" },
      // { name: 'dnp', icon: "mdi-domain"},
      { name: 'dnp', icon: "mdi-office-building"},
      { name: "printers", icon: "mdi-printer" },
      { name: "media", icon: "mdi-database" },
      { name: "accessories", icon: "mdi-camera" },
      { name: "about", icon: "mdi-information" },
      { name: "contact", icon: "mdi-phone" },
    ],
    menuOptionsMobile: [
      { name: 'dnp', icon: "mdi-domain"},
      { name: "printers", icon: "mdi-printer" },
      { name: "media", icon: "mdi-database" },
      { name: "accessories", icon: "mdi-camera" },
      { name: "about", icon: "mdi-information" },
      { name: "contact", icon: "mdi-phone" },
    ],
  }),
  methods:{
    changeLang(){
      this.$i18n.locale = this.currentLanguage
    }
  },
  computed:{
    currentLanguage(){
      return this.currentLang == 'Srpski' ? 'srb' : 'en'
    }
  }
  
};
</script>

<style>
a{
  text-decoration: none;
  color: rgba(0, 0, 0, 0.9);
}

ul{
list-style: none;
padding: 0 !important;
margin: 0;
}

li{
  width: 180px;
  padding: 12px 20px;
}

.subtitle {
  font-size: 2.5em;
  text-align: center;
  margin: 1.5em 0;
  color: rgba(0, 0, 0, 0.7);
}

.wrapper{
  width: 1100px;
  margin: 0 auto;
}

@media screen and (max-width: 1264px) {
  .wrapper{
      width: 900px;
    }
}
@media screen and (max-width: 960px) {
  .wrapper{
      width: 95%;
    }
}

.menu-option{
  cursor: pointer;
  padding: 27px 10px;
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  transform: translate(-12px, 20px);
  background-color: white;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

.dropdown:hover .dropdown-content {
  display: block;
}

#blackLinkTag > a{
  color: black ;
}

.activez {
  color: white !important;
  background-color: rgb(236, 31, 37);
}

#topHeadingPhoneNumber:hover{
  text-decoration: underline;
}

</style>