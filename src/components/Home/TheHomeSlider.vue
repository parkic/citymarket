<template>
  <div :style="{width: $vuetify.breakpoint.smAndUp ? '80%' : '100%', margin: $vuetify.breakpoint.smAndUp ? '0 auto' : ''}">
      <!-- :bullets-outside="$vuetify.breakpoint.mdAndUp ? false : true" -->
      <!-- :arrows="showArrowsValue" -->
    <vueper-slides  
      :fixed-height="$vuetify.breakpoint.mdAndUp ? sliderHeight-132+'px' : sliderHeight-112+'px'"
      :arrowsOutside="$vuetify.breakpoint.mdAndUp"
      autoplay 
      fade 
      :bullets="false"
      :touchable="touchableValue"
      duration="6000"
      :pauseOnHover="pauseOnHoverValue"
    >
      <vueper-slide
        v-for="(slide, i) in 1"
        :key="i"
        :image="require(`@/assets/about/main.jpg`)"
        :title="slide.title"
        :content="slide.content"
      >
      
        <template #content>
          <div class="vueperslide__content-wrapper">
            <div 
              v-if="$vuetify.breakpoint.mdAndUp"
              class="slider-template-background" 
              style="height: 100%; width: 100%" 
              :style="{ backgroundImage: 'url(' + require(`@/assets/home/slider_3_${$i18n.locale}.jpg`) + ')' }"
            >
              <h1 style="color: transparent">City Market DNP printer DS620 DS820</h1>
            </div>
            <div 
              v-else
              class="slider-template-background" 
              style="height: 100%; width: 100%; padding-bottom: 30px" 
              :style="{ backgroundImage: 'url(' + require(`@/assets/home/slider_3_${$i18n.locale}_mob.jpg`) + ')' }"
            >
              <h1 style="color: transparent">City Market DNP printer DS620 DS820</h1>
            </div>
            
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
    },
  }
}
</script>

<style>
.v-window__container {
 height: 0;
}

.vueperslides__arrow {color: red}

.vueperslides__bullet .default {
  background-color: white;
  border: 2px solid rgba(0, 0, 0, 0.3);
  box-shadow: none;
  transition: 0.3s;
  width: 16px;
  height: 16px;
}

.vueperslides__bullet--active .default {
  border: none;
  background-color: red;
}

.slider-template-background{
  background-repeat: no-repeat;
  background-size: 100% 100%;
  position: relative;
  height: 100%; width: 100%
}
</style>