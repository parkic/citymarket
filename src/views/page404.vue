<template>
  <div style="text-align: center">
    <div :class="$vuetify.breakpoint.smAndUp ? 'wrapper' : ''" v-if="$i18n.locale == 'en'">
      <h2 class="text-display-3 error--text" style="font-size: 2.5em">Ooops! That page couldn't be found.</h2>
      <h3 style=" font-size: 2em;" class="error--text">Go to <router-link to="/" style="color: blue; text-decoration: underline">HOME</router-link> page</h3>
    </div>
    <div :class="$vuetify.breakpoint.smAndUp ? 'wrapper' : ''" v-else>
      <h2 class="text-display-3 error--text" style="font-size: 2.5em">Ooups! Ova strana ne postoji.</h2>
      <h3 style=" font-size: 2em;" class="error--text">Vratite se na <router-link to="/" style="color: blue; text-decoration: underline">POČETNU</router-link> stranu</h3>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>