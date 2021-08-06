<template>
  <div class="about">
    <div style="background-color: #ec1f25">
      <div :class="$vuetify.breakpoint.smAndUp ? 'wrapper px-5' : ''">
        <h2 class="white--text py-5 text-h4 px-6">
          {{ $t("about.title").toUpperCase() }}
        </h2>
      </div>
    </div>
    
    <div :class="$vuetify.breakpoint.smAndUp ? 'wrapper px-5' : ''">
      <p class="py-5 px-6 text-justify">
        {{ $t("about.text") }}
      </p>
    </div>

    <v-row justify="center" class="mx-4">
      <v-col class="text-center">
        <p class="ma-0" v-for="(elem, idx) in $t('about.info')" :key="idx">
          {{ elem }}
        </p>   
      </v-col>
    </v-row>
  </div>
</template>