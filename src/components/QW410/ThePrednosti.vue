<template>
  <div class="px-15 py-8" style="background-color: #fff">
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