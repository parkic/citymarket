<template>
  <div>
    <div  :class="$vuetify.breakpoint.smAndUp ? 'wrapper' : ''">
      <v-row justify="center" class="my-5 mx-3">
        <v-col cols="12" md="6">
          <v-img
            data-aos="zoom-in-right" data-aos-duration="2000"
            contain
            height="400"
            :src="require(`@/assets/Media/${media.image}`)"
          ></v-img>
        </v-col>
        <v-col cols="12" md="6" class="pl-15">
          <div class="mt-10">
            <h2 data-aos="fade-down" data-aos-duration="1000"  class="my-3 red--text" style="font-size: 1.7em">
              {{media.name[0]}} {{media.name[1]}}
            </h2>
            <h3 data-aos="fade-down" data-aos-duration="1000" data-aos-delay="200" class="mt-3 mb-5">
              <b>{{ $i18n.locale == 'srb' ? 'Foto papir' : "Photo paper" }}</b>
            </h3>
            <p data-aos="fade-down" data-aos-duration="1000" data-aos-delay="400">
              <b>{{ $i18n.locale == 'srb' ? 'Stanje' : "Condition" }}:</b> 
              {{ $i18n.locale == 'srb' ? 'Nov proizvod' : "New product" }}
            </p>

            <!-- TEMP -->
            <div>
              <p data-aos="fade-down" data-aos-duration="1000" data-aos-delay="600">
                <b>{{ $i18n.locale == 'srb' ? 'Veličina' : "Size" }}: </b>
                {{media.size}}
              </p>
              <p data-aos="fade-down" data-aos-duration="1000" data-aos-delay="800">
                <b>{{ $i18n.locale == 'srb' ? 'Broj slika po rolni' : "Print per roll" }}: </b>
                {{media.printsPerRoll}}
              </p>
              <p data-aos="fade-down" data-aos-duration="1000" data-aos-delay="1000">
                <b>{{ $i18n.locale == 'srb' ? 'Rolne po kutiji' : "Rolls per case" }}: </b>
                {{media.rollsPerCase}}
              </p>
              <p data-aos="fade-down" data-aos-duration="1000" data-aos-delay="1200">
                <b>{{ $i18n.locale == 'srb' ? 'Ukupno slika' : "Total prints" }}: </b>
                {{media.totalPrints}}
              </p>
            </div>
          </div>
        </v-col>
      </v-row>
      
      <!-- SPECIFIKACIJE -->
      <!-- <v-card class="mx-3">
        <v-tabs
          v-model="tab"
          background-color="rgba(244, 67, 54, 0.6)"
          dark
          icons-and-text
        >
          <v-tabs-slider></v-tabs-slider>

          <v-tab href="#tab-1">
            {{$i18n.locale == 'srb' ? 'Detaljnije' : 'More info'}}
            <v-icon>mdi-information-variant</v-icon>
          </v-tab>
        </v-tabs>

        <v-tabs-items v-model="tab">
          <v-tab-item
            v-for="i in 3"
            :key="i"
            :value="'tab-' + i"
          >
            <v-card class="pt-3" flat style="background-color: rgba(0,0,0,0.05)">
              <v-card-text class="black--text px-10">
                <p>
                  <b>Size: </b>
                  {{media.size}}
                </p>
                <p>
                  <b>Print per roll: </b>
                  {{media.printsPerRoll}}
                </p>
                <p>
                  <b>Rolls per case: </b>
                  {{media.rollsPerCase}}
                </p>
                <p>
                  <b>Total prints: </b>
                  {{media.totalPrints}}
                </p>
              </v-card-text>
            </v-card>
          </v-tab-item>
        </v-tabs-items>
      </v-card> -->

    </div>
  </div>
</template>

<script>
// import ThePrednosti from "@/components/DS40/ThePrednosti.vue"
// import TheSpecifikacije from "@/components/DS40/TheSpecifikacije.vue"
export default {
  components: {
    // ThePrednosti,
    // TheSpecifikacije
  },
  data(){
    return{
      tab: null,
      putanja: this.$route.params.name
    }
  },
  computed: {
    media(){
      return this.$t('media.list').find(
        listItem => listItem.path == this.putanja
      )
    }
  }
}
</script>

<style scoped>
p{
  font-size: 1.2em;
}
</style>