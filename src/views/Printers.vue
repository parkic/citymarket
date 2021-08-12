<template>
  <div>
    <div class="mb-15" style="background-color: rgb(236, 31, 37)">
      <div :class="$vuetify.breakpoint.smAndUp ? 'wrapper px-5' : ''">
        <h2 class="white--text py-5 text-h4 px-6">
          {{ $t("printers.title").toUpperCase() }}
        </h2>
      </div>
    </div>
    <div class="px-5" v-if="$route.name == 'Printers'" :class="$vuetify.breakpoint.smAndUp ? 'wrapper' : ''">

      <v-row>
        <v-col 
          v-for="(printer, idx) in $t('printers.list')"
          :key="idx"
          cols="12" md='4' 
        >
          <v-card :data-aos="idx%2==0 ? 'flip-right' : 'flip-left'" data-aos-duration="1500" class="mx-auto" >
            <v-img
              contain
              @click="openMediaWindow(printer.path)"
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
        </v-col>
      </v-row>
    </div>
    <div v-else>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    printersImages: [
      "DS620",
      "ds820",
      "RX1HS",
      "QW410",
      "ds40",    
    ]
  }),
  methods: {
    openMediaWindow(routeParam){
      if(this.$vuetify.breakpoint.smAndDown){
        this.$router.push({ name: routeParam })
      }
    },
  }
}
</script>

<style>

</style>