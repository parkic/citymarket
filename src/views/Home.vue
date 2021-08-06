<template>
  <div>
    <div class="home-bg">
      <div>
        <h1 class="text-h2 text-center font-weight-bold mb-5">
          {{ $t("home.bg.title").toUpperCase() }}
        </h1>
        <p class="text-center my-5">
          {{ $t("home.bg.subtitle").toUpperCase() }}
        </p>
        <v-btn 
          :to="{name: 'Contact'}"
          color="red darken-2" 
          class="pa-6 white--text"
        >
          {{ $t("contact.contactUs").toUpperCase() }}
        </v-btn>
      </div>
    </div>
    
    <div>
      <ThePrinters />
      <TheMedia data-aos="fade-up" data-aos-duration="1500" />
      <TheAccessories />
    </div>
    
  </div>
</template>

<script>
import ThePrinters from '@/components/Home/ThePrinters.vue'
import TheMedia from '@/components/Home/TheMedia.vue'
import TheAccessories from '@/components/Home/TheAccessories.vue'

  export default {
    components: {
      ThePrinters,
      TheMedia,
      TheAccessories
    },
  }
</script>

<style scoped>
.home-bg{
  height: 750px;
  background-image: url("../assets/home/test1.jpg");
  background-size: cover;
  background-position: center center;
  background-attachment: fixed;
  position: relative;
  margin-bottom: 30px;
}

.home-bg>div{
  height: 100%; 
  display:flex; 
  flex-direction: column;
  align-items: center; 
  justify-content: center;
  color: rgb(255, 255, 255);
  background-color: rgb(0,0,0,0.55);
}
</style>
