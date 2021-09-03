<template>
  <div data-aos="zoom-in" data-aos-duration="1500" :class="$vuetify.breakpoint.smAndUp ? 'wrapper' : 'mx-8'">
    <h2 class="subtitle red--text">
      {{ $t("accessories.title").toUpperCase() }}
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
        v-for="(item, idx) in $t('accessories.list')"
        :key="idx"
        style="width: 300px;"
        class="py-5"
      >
        <v-card class="mx-5" color="rgba(236,239,241, 0.6)" min-height="410">
          <v-img
            style="background-color: white"
            contain
            :src="require(`@/assets/Accessories/${item.image}`)"
            height="200px"
          ></v-img>

          <v-card-title class="d-flex justify-center pt-5 pb-8" style="height: 120px">
            <div> {{item.name[0]}} &nbsp; </div>
            <div> {{item.name[1]}} </div>
          </v-card-title>

          <v-card-actions class="pb-8">
            <v-spacer></v-spacer>

            <v-btn 
              @click="$router.push({ name: 'AccessoriesItem', params: {name: item.path} })"
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

    <div class="d-flex justify-center mt-10">
      <v-btn
        x-large
        text
        outlined
        style="color: white; font-weight: bold; border: 2px solid #EC1F25; background-color: #EC1F25;"
        @click="$router.push({ name: 'Accessories' })"
      >
        <span >
          {{$i18n.locale == 'srb' ? 'Pogledaj sav pribor' : 'Look all accessories'}}
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
    sliding: null
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