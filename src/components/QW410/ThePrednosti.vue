<template>
  <div class="py-8" style="background-color: #fff" :class="$vuetify.breakpoint.lgAndUp ? 'px-15' : 'px-2'">
    <div v-if="$i18n.locale == 'srb'" >
      <v-img src="@/assets/QW410/benefits_srb.jpg"></v-img>
    </div>
    <div v-else>
      <v-img src="@/assets/QW410/benefits_eng.jpg"></v-img>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
p{
  margin: 18px 0;
  font-size: 1.2em
}
h4{
  font-size: 1.2em;
  padding-top: 15px
}
</style>