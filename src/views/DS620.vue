<template>
  <div>
    <div  :class="$vuetify.breakpoint.smAndUp ? 'wrapper' : ''">
      <h2 class="my-3 red--text text-center" style="font-size: 3em">{{$t('printers.list[0].title')}}</h2>
      <v-row justify="center" class="my-5 mx-3">
        <v-col cols="12" md="6">
          <v-carousel
            :height="$vuetify.breakpoint.lgAndUp ? '400px' : '300px'"
            :hide-delimiters="$vuetify.breakpoint.mdAndUp"
          >
            <v-carousel-item
              v-for="i in 7"
              :key="i"
              reverse-transition="fade-transition"
              transition="fade-transition"
            >
              <v-img
                contain
                :src="require(`@/assets/DS620/${i}.jpg`)"
              ></v-img>
            </v-carousel-item>
          </v-carousel>
        </v-col>
        <v-col cols="12" md="6">
          
          <div class="mt-10">
            <h3 class="my-3">6-INČA FOTO ŠTAMPAČ</h3>
            <p><b>Reference:</b> {{$t('printers.list[0].reference')}}</p>
            <p><b>Condition:</b> {{$t('printers.list[0].condition')}}</p>
            <p class="my-3">The new DS620 allows you to offer even more photo formats, including the popular  formats from the same media (e.g. 15x20 and 15x10, and even photo strips in 5x15cm)</p>
          </div>
        </v-col>
      </v-row>
      
      <!-- SPECIFIKACIJE -->
      <v-card class="mx-3">
        <v-tabs
          v-model="tab"
          background-color="rgba(244, 67, 54, 0.6)"
          dark
          icons-and-text
        >
          <v-tabs-slider></v-tabs-slider>

          <v-tab href="#tab-1">
            Prednosti
            <v-icon>mdi-filter-variant</v-icon>
          </v-tab>

          <v-tab href="#tab-2">
            Specifikacije
            <v-icon>mdi-information-variant</v-icon>
          </v-tab>
        </v-tabs>

        <v-tabs-items v-model="tab">
          <v-tab-item
            v-for="i in 3"
            :key="i"
            :value="'tab-' + i"
          >
            <v-card flat style="background-color: rgba(0,0,0,0.05)">
              <v-card-text class="black--text px-10">
                <ThePrednosti v-if="tab == 'tab-1'" />
                <TheSpecifikacije v-if="tab == 'tab-2'" />
              </v-card-text>
            </v-card>
          </v-tab-item>
        </v-tabs-items>
      </v-card>

      <!-- BROSURA -->
      <v-row class="mx-4">
        <v-col class="mt-10">
          <v-btn 
            class="ma-2 pa-6" 
            outlined 
            href="http://localhost:8080/DNP_brochure_DS620.pdf"
            download
            color="red"
          >
            <v-icon left size="25" dark>mdi-download</v-icon>
            Preuzmi PDF boršuru
          </v-btn>
        </v-col>
      </v-row>
    </div>

    <!-- GALERIJA -->
    <!-- <div class="px-3" style="background-color: rgba(0,0,0,0.1); margin-bottom: -60px;">
      <div class="mt-15 py-10 pt-15" :class="$vuetify.breakpoint.smAndUp ? 'wrapper' : ''">
        <h2 class="mb-10 px-3 red--text" style="font-size: 2em">Galerija</h2>
        <vueper-slides
          class="mb-5"
          ref="vueperslides1"
          :touchable="!$vuetify.breakpoint.lgAndUp"
          fade
          :autoplay="false"
          :bullets="false"
          @slide="$refs.vueperslides2.goToSlide($event.currentSlide.index, { emit: false })"
          :fixed-height="$vuetify.breakpoint.lgAndUp ? '800px' : '300px'"
          >
          <vueper-slide
            v-for="i in 7"
            :key="i"
            :image="require(`@/assets/DS620/${i}.jpg`)">
          </vueper-slide>
        </vueper-slides>

        <vueper-slides
          class="no-shadow thumbnails"
          ref="vueperslides2"
          @slide="$refs.vueperslides1.goToSlide($event.currentSlide.index, { emit: false })"
          :visible-slides="7"
          fixed-height="105px"
          :bullets="false"
          :touchable="false"
          :gap="2.5"
          :arrows="false"
          :breakpoints="breakpoints"
          >
          
          <vueper-slide
            v-for="i in 7"
            :key="i"
            :image="require(`@/assets/DS620/${i}.jpg`)"
            @click.native="$refs.vueperslides2.goToSlide(i)">
          </vueper-slide>
        </vueper-slides>
      </div>
    </div> -->
  </div>
</template>

<script>
import ThePrednosti from "@/components/DS620/ThePrednosti.vue"
import TheSpecifikacije from "@/components/DS620/TheSpecifikacije.vue"
// import { VueperSlides, VueperSlide } from 'vueperslides'
// import 'vueperslides/dist/vueperslides.css'
export default {
  components: {
    // VueperSlides, 
    // VueperSlide, 
    ThePrednosti,
    TheSpecifikacije
  },
  data () {
    return {
      tab: null,
      breakpoints: {
        1200: {
          visibleSlides: 1 / 5
        },
        900: {
          visibleSlides: 1 / 3
        },
        600: {
          visibleSlides: 2,
          touchable: true
        },
        1100: {
          visibleSlides: 1 / 4
        }
      },
    }
  },
}
</script>

<style>
</style>