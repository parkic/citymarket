<template>
  <div>
    <h1 style="text-align: center">Ovde treba da se ubace slike za DS820. Trenutne slike su za DS620</h1>
    <div v-if="$i18n.locale == 'srb'" class="px-10">
      <v-img src="@/assets/DS620/specif_srb.jpg"></v-img>
    </div>
    <div v-else>
      <v-img src="@/assets/DS620/specif_eng.jpg"></v-img>
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