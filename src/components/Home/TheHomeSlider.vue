<template>
  <div>
    <vueper-slides  
      :fixed-height="sliderHeight-112+'px'"
      autoplay 
      fade 
      :touchable="touchableValue"
      duration="2500"
      :pauseOnHover="pauseOnHoverValue"
      :arrows="showArrowsValue"
    >
      <vueper-slide
        v-for="(slide, i) in slides"
        :key="i"
        :image="slide.image"
        :title="slide.title"
        :content="slide.content"
      >
      
        <template #content v-if="i === 0">
          <!-- :style="'background-color: ' + ['#ff5252', '#42b983'][i % 2]" -->
          <div class="vueperslide__content-wrapper">
            <v-overlay absolute >
              <div class="vueperslide__title">
                <h1 class="text-h2 white--text text-center font-weight-bold mb-5">
                  {{ $t("home.bg.title").toUpperCase() }}
                </h1>
                <!-- <p class="text-center white--text my-5">
                  {{ $t("home.bg.subtitle").toUpperCase() }}
                </p> -->
                <v-btn 
                  :to="{name: 'Contact'}"
                  color="red darken-2" 
                  class="pa-6 white--text"
                >
                  {{ $t("contact.contactUs").toUpperCase() }}
                </v-btn>
              </div>  
            </v-overlay>
          </div>
        </template>
      </vueper-slide>
    </vueper-slides>
    
    
  </div>
</template>

<script>
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'

  export default {
    components: { VueperSlides, VueperSlide },
    data () {
      return {
        pauseOnHoverValue: true,
        slides: [
          {
            image: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
          },
          {
            image: 'https://www.shaadidukaan.com/vogue/wp-content/uploads/2019/08/hug-kiss-images.jpg',
          },
          {
            image: 'https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg',
          },
        ],
      }
    },
    computed: {
      sliderHeight(){
        return Math.round(window.innerHeight)
      },
      showArrowsValue(){
        return this.$vuetify.breakpoint.smAndUp
      },
      touchableValue(){
         return !this.$vuetify.breakpoint.smAndUp
      }
    }
  }
</script>

<style scoped>
.v-window__container {
 height: 0;
}
</style>