<template>
  <div class="about">
    <div style="background-color: #ec1f25">
      <div :class="$vuetify.breakpoint.smAndUp ? 'wrapper px-5' : ''">
        <h2 class="white--text py-5 text-h4 px-6">
          {{ $t("about.title").toUpperCase() }}
        </h2>
      </div>
    </div>
    
    <div :class="$vuetify.breakpoint.smAndUp ? 'wrapper px-5 mt-10' : 'px-5 mt-10'">
      <v-row :class="$vuetify.breakpoint.smAndUp ? '' : 'flex-column-reverse' ">
        <v-col cols="12" md="7">
          <p v-for="(elem, idx) in $t('about.text')" :key="idx" class="text-justify">
            <b v-if="idx === $t('about.text').length-1">{{elem}}</b>
            <span v-else>{{elem}}</span>
          </p>
        </v-col>
        <v-col cols="12" md="5">
          <v-img
            :style="{width: $vuetify.breakpoint.smAndUp ? '500px' : '100%'}"
            class="slika"
            contain
            :src="require(`@/assets/about/main.jpg`)"
          ></v-img>
        </v-col>
      </v-row>
    </div>
  </div>
</template>