<template>
  <div class="dnp">
    <div style="background-color: #ec1f25">
      <div :class="$vuetify.breakpoint.smAndUp ? 'wrapper px-5' : ''">
        <h2 class="white--text py-5 text-h4 ">
          <!-- {{ $t("dnp.title").toUpperCase() }}{{ $i18n.locale == 'srb' ? '-u' : "" }} -->
          {{ $i18n.locale == 'srb' ? 'O Dai Nippon Printing (DNP)' : 'About Dai Nippon Printing (DNP)' }}
        </h2>
      </div>
    </div>

    <div :class="$vuetify.breakpoint.smAndUp ? 'wrapper px-5 mt-10' : 'mt-10'">
      <div class="box">
        <span style="">
          <p v-for="(elem, idx) in $t('dnp.text')" :key="idx" class="text-justify">
            <v-img
              :style="{width: $vuetify.breakpoint.smAndUp ? '500px' : '100%'}"
              v-if="idx===0"
              class="slika"
              contain
              :src="require(`@/assets/dnp/company.jpg`)"
            ></v-img>
            {{elem}}
          </p>
        </span>
      </div>
    </div>

  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.box {
   display: flex;
   align-items:center;
   line-height: 1.7em;
}
.slika{
  float: right;
  margin-left: 25px;
  padding-top: 10px;
  /* margin-bottom: 20px; */
  /* transform: translateY(-0px); */
}
</style>