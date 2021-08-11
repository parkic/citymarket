<template>
  <div>
    <!-- TOP RED SVG -->
    <div v-if='$vuetify.breakpoint.mdAndUp' style="height: 150px; overflow: hidden; transform: translate(0, 2px)" >
      <svg viewBox="0 0 500 150" preserveAspectRatio="none" style="height: 100%; width: 100%;">
        <path d="M-64.05,114.95 C47.11,166.28 401.52,120.88 535.83,-28.13 L500.00,150.00 L0.00,150.00 Z" style="stroke: none; fill: #EC1F25;"></path>
      </svg>
    </div>
    <div v-else style="height: 150px; overflow: hidden; transform: translate(0, 2px)" >
      <svg viewBox="0 0 500 150" preserveAspectRatio="none" style="height: 100%; width: 100%;">
        <path d="M-23.98,92.27 C145.31,133.70 536.39,29.11 584.93,65.63 L500.00,150.00 L0.00,150.00 Z" style="stroke: none; fill: #EC1F25;"></path>
      </svg>
    </div>

    <!-- Main thing -->
    <div style="background-color:  #EC1F25;" >
      <div data-aos="zoom-in" data-aos-duration="1500" data-aos-delay="200" :class="$vuetify.breakpoint.smAndUp ? 'wrapper' : 'mx-8'">
        <h2 class="mt-0 pt-10 subtitle white--text">
          {{ $t("media.title").toUpperCase() }}
        </h2>
        <!-- <p style="color: #f5f7f8">
          <b>Ovde bi valjalo da ide neki tekst, zbog celokupnog vizuelnog izgleda.</b>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt tenetur necessitatibus molestias laboriosam ipsum, aut vero similique facilis asperiores, impedit magni, ut nesciunt architecto et laborum magnam illo atque adipisci!
        </p> -->
        <carousel 
          :perPage="slidesPerPage" 
          navigationEnabled
          loop
          paginationActiveColor="white"
          paginationColor="grey"
          :paginationPadding="$vuetify.breakpoint.mdAndUp ? 10 : 8"
          :paginationSize="$vuetify.breakpoint.mdAndUp ? 10 : 9"
        >
          <slide
            v-for="(media, idx) in mediaToShow"
            :key="idx"
            style="width: 300px;"
            class="py-5"
          >
            <v-card class="mx-5" color="rgba(226,229,231)" min-height="400">
              <v-img
                style="background-color: white"
                contain
                :src="require(`@/assets/Media/${media.image}`)"
                height="200px"
              ></v-img>

              <!-- red--text -->
              <v-card-title class="d-flex justify-center  pt-5 pb-8" style="height: 120px">
                <span style="color: #EC1F25" class="font-weight-black">{{media.name[0].split(' ')[0] + ' '}} &nbsp;</span>
                <span>{{media.name[0].split(' ').slice(1)[0]}} &nbsp;</span>
                <span>{{media.name[1]}}</span>
              </v-card-title>

              <v-card-actions class="pb-8">
                <v-spacer></v-spacer>

                <v-btn 
                  @click="$router.push({ name: 'MediaItem', params: {name: media.path} })"
                  outlined
                  color="error" 
                  x-large
                >

                  {{$i18n.locale == 'srb' ? 'Saznaj više' : 'More'}}
                </v-btn>

                <v-spacer></v-spacer>
              </v-card-actions>

            </v-card>
          </slide>
        </carousel>

        <div class="d-flex justify-center mt-10 pb-4">
          <v-btn
            x-large
            text
            outlined
            style="color: #EC1F25; font-weight: bold; border: 2px solid white; background-color: white;"
            @click="$router.push({ name: 'Media' })"
          >
            <span >
              {{$i18n.locale == 'srb' ? 'Pogledaj sve papire' : 'Look all media'}}
            </span>
          </v-btn>
        </div>
      </div>
    </div>

    <!-- BOTTOM RED SVG -->
    <div v-if='$vuetify.breakpoint.mdAndUp' style="height: 150px; overflow: hidden; transform: translate(0, -5px)">
      <svg viewBox="0 0 500 150" preserveAspectRatio="none" style="height: 100%; width: 100%;">
        <path d="M-19.47,71.53 C134.59,131.73 458.52,103.13 553.33,-50.81 L500.00,0.00 L0.00,0.00 Z" style="stroke: none; fill: #EC1F25;"></path>
      </svg>
    </div>
    <div v-else style="height: 150px; overflow: hidden;" >
      <svg viewBox="0 0 500 150" preserveAspectRatio="none" style="height: 100%; width: 100%;">
        <path d="M-20.03,107.06 C148.14,146.53 323.08,69.56 529.06,68.58 L500.00,0.00 L0.00,0.00 Z" style="stroke: none; fill: #EC1F25;"></path>
      </svg>
    </div>

    
  </div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';

export default {
  components: {
    Carousel,
    Slide
  },
  data: () => ({
    slide: 0,
    sliding: null,
    printersImages: [
      "DS620",
      "ds820",
      "RX1HS",
      "QW410",
      "ds40",    
    ]
  }),
  computed: {
    slidesPerPage () {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs': return 1
        case 'sm': return 2
        case 'md': return 3
        case 'lg': return 3
        case 'xl': return 3
        default: return 3
      }
    },
    mediaNumberToShow () {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs': return 10
        case 'sm': return 20
        case 'md': return 30
        case 'lg': return 30
        case 'xl': return 30
        default: return 30
      }
    },
    mediaToShow(){
      return this.$t('media.list').filter((elem, idx) => idx < this.mediaNumberToShow)
    }
  },
  methods: {
    onSlideStart() {
        this.sliding = true
    },
    onSlideEnd() {
        this.sliding = false
    }
  },
}
</script>

<style scoped>
.VueCarousel-navigation-button{
  color: white !important
}
</style>