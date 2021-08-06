<template>
  <div>
    <div  :class="$vuetify.breakpoint.smAndUp ? 'wrapper' : ''">
      <v-row justify="center" class="my-5 mx-3">
        <v-col cols="12" md="6">
          <v-img
            data-aos="zoom-in-right" data-aos-duration="2000"
            contain
            height="400"
            :src="require(`@/assets/Accessories/${accessorie.image}`)"
          ></v-img>
        </v-col>

        <v-col cols="12" md="6" class="pl-15">
          <div class="mt-10">
            <h2 data-aos="fade-down" data-aos-duration="1000" class="my-3 mb-10 red--text" style="font-size: 1.7em">
              {{accessorie.name}}
            </h2>

            <p data-aos="fade-down" data-aos-duration="1000" data-aos-delay="200">
              <b>Reference: </b> {{accessorie.reference}}
            </p>
            <p data-aos="fade-down" data-aos-duration="1000" data-aos-delay="400">
              <b>Condition:</b> {{accessorie.condition}}
            </p>
            <p data-aos="fade-down" data-aos-duration="1000" data-aos-delay="600">
              {{accessorie.info}}
            </p>

          </div>
        </v-col>
      </v-row>

    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      tab: null,
      putanja: this.$route.params.name
    }
  },
  computed: {
    accessorie(){
      return this.$t('accessories.list').find(
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