<template>
  <div>
      <TheHomeSlider />
      <ThePrinters />
      <TheMedia data-aos="fade-up" data-aos-duration="1500" />
      <TheAccessories />    
  </div>
</template>

<script>
import TheHomeSlider from '@/components/Home/TheHomeSlider'
import ThePrinters from '@/components/Home/ThePrinters.vue'
import TheMedia from '@/components/Home/TheMedia.vue'
import TheAccessories from '@/components/Home/TheAccessories.vue'

  export default {
    components: {
      TheHomeSlider,
      ThePrinters,
      TheMedia,
      TheAccessories,
    },
  }
</script>

<style scoped>
</style>
