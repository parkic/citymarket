<template>
  <div>
    <div v-if="$i18n.locale == 'srb'" class="px-10">
      <v-img src="@/assets/QW410/specif_srb.jpg"></v-img>
    </div>
    <div v-else class="px-15 py-10">
      <v-img src="@/assets/QW410/specif_eng.jpg"></v-img>
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
h3{
  font-size: 1.2em;
  padding-top: 15px
}
</style>