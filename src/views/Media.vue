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
        <!-- v-if="$route.name == 'Media'" -->
      <div class="px-5" :class="$vuetify.breakpoint.smAndUp ? 'wrapper' : ''">
        <v-row>
          <v-col 
            v-for="(media, idx) in $t('media.list')"
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
      <!-- <div v-else>
        <router-view></router-view>
      </div> -->
    </div>
    <div v-else :class="$vuetify.breakpoint.smAndUp ? 'wrapper' : ''">
      <router-view :key="$route.path"></router-view>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style>

</style>