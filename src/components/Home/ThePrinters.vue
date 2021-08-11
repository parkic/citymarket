<template>
  <div data-aos="zoom-in" data-aos-duration="1500" :class="$vuetify.breakpoint.smAndUp ? 'wrapper' : 'mx-8'">
    <h2 class="subtitle red--text">
      {{ $t("printers.title").toUpperCase() }}
    </h2>
    <!-- <p>
      <b>Ovde bi valjalo da ide neki tekst, zbog celokupnog vizuelnog izgleda.</b>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt tenetur necessitatibus molestias laboriosam ipsum, aut vero similique facilis asperiores, impedit magni, ut nesciunt architecto et laborum magnam illo atque adipisci!
    </p> -->
    <carousel 
      :perPage="slidesPerPage" 
      navigationEnabled
      loop
      paginationColor="grey"
    >
      <slide
        v-for="(printer, idx) in $t('printers.list')"
        :key="idx"
        style="width: 300px;"
        class="py-5"
      >
        <v-card class="mx-5" >
            <v-img
              contain
              :src="require(`@/assets/printers/${printersImages[idx]}.jpg`)"
              height="200px"
            ></v-img>

            <!-- red--text -->
            <v-card-title class="d-flex justify-center  pt-5 pb-8" style="font-size: 1.5em; background-color: rgba(236,239,241,0.5)">
              {{printer.name}}
            </v-card-title>

            <v-card-actions class="pb-8" style="background-color: rgba(236,239,241,0.5)" >
              <v-spacer></v-spacer>

              <v-btn 
                @click="$router.push({ name: printer.path })"
                outlined
                color="rgb(236, 31, 37)" 
                x-large
              >

                {{$i18n.locale == 'srb' ? 'Saznaj više' : 'More'}}
              </v-btn>

              <v-spacer></v-spacer>
            </v-card-actions>

          </v-card>
      </slide>
    </carousel>

    <div class="d-flex justify-center mt-10">
      <v-btn
        x-large
        text
        outlined
        style="color: white; font-weight: bold; border: 2px solid #EC1F25; background-color: #EC1F25;"
        @click="$router.push({ name: 'Printers' })"
      >
        <span >
          {{$i18n.locale == 'srb' ? 'Pogledaj sve printere' : 'Look all printers'}}
        </span>
      </v-btn>
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

<style>

</style>