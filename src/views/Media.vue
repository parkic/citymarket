<template>
  <div>
      <div class="mb-15" style="background-color: #ec1f25">
        <div :class="$vuetify.breakpoint.smAndUp ? 'wrapper px-5' : ''">
          <h2 class="white--text py-5 text-h4 px-6">
            {{ $t("media.title").toUpperCase() }}
          </h2>
        </div>
      </div>
    <div v-if="$route.name=='Media'">
      <div class="px-5" :class="$vuetify.breakpoint.smAndUp ? 'wrapper' : ''">
        <v-row>
          <v-col cols="12" class="d-flex">
            <v-spacer></v-spacer>
            <div>
              <!-- <div>Filter</div> -->
              <v-select
                :items="printers"
                :label="$t('printers.title')"
                color="rgb(236, 31, 37)"
                item-color="red"
                dense
                @change="setMediaToShow"
                v-model="selectedPrinter"
              ></v-select>
            </div>
          </v-col>
          <v-col 
            v-for="(media, idx) in mediaList"
            :key="idx"
            cols="12" sm="6" md='4' lg="3" 
          >
            <v-card :data-aos="idx%2==0 ? 'flip-right' : 'flip-left'" data-aos-duration="1500" class="mx-auto" color="rgba(236,239,241,0.35)" min-height="410">
              <v-img
                style="background-color: white"
                contain
                :src="require(`@/assets/Media/${media.image}`)"
                height="200px"
              ></v-img>

              <!-- red--text -->
              <v-card-title class="d-flex justify-center  pt-5 pb-8" style="height: 120px">
                <span>{{media.name[0]}}</span>
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
          </v-col>
        </v-row>
      </div>
    </div>
    <div v-else :class="$vuetify.breakpoint.smAndUp ? 'wrapper' : ''">
      <router-view :key="$route.path"></router-view>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      // printers: [this.$i18n.locale == 'srb' ? 'Sva media' : "All media", "DS620", "DS820", "RX1HS", "QW410", "DS40"],
      selectedPrinter: this.$i18n.locale == 'srb' ? 'Sva media' : "All media",
      mediaList: this.$t('media.list')
    }
  },
  computed: {
    printers(){
      return [this.$i18n.locale == 'srb' ? 'Sva media' : "All media", "DS620", "DS820", "RX1HS", "QW410", "DS40"]
    }
  },
  methods: {
    setMediaToShow(){
      if(this.selectedPrinter == 'All media' || this.selectedPrinter == 'Sva media'){
        this.mediaList = this.$t('media.list')
        return
      }
        
      this.mediaList = this.$t('media.list').filter(printer => {
        if(this.selectedPrinter == printer.name[0].split(' ')[0]){
          return printer
        }
      })
    }
  }
}
</script>

<style>

</style>