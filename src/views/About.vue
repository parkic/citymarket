<template>
  <div class="about">
    <div style="background-color: #ec1f25">
      <div :class="$vuetify.breakpoint.smAndUp ? 'wrapper px-5' : ''">
        <h2 class="white--text py-5 text-h4 px-6">
          {{ $t("about.title").toUpperCase() }}
        </h2>
      </div>
    </div>
    
    <div :class="$vuetify.breakpoint.smAndUp ? 'wrapper px-5' : 'px-5'">
      <div class="py-5 px-6 ">

      </div>
      <p v-for="(elem, idx) in $t('about.text')" :key="idx" class="text-justify" >
        {{ elem }}
      </p>
    </div>
  </div>
</template>