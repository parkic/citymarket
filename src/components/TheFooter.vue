<template>
  <div class="mt-15 mb-5 mx-3">
    <v-row style="color: rgba(255,255,255, 0.9); text-align: center;">
      <v-col cols="12" md="4">
        <h4>Informacije</h4>
        <p>City Market d.o.o. Kruševac</p>
        <p>Aleksandra Fleminga 41</p>
        <p>37000 Kruševac</p>
        <p>Republika Srbija</p>
      </v-col>
      <v-col cols="12" md="4">
        <h4>Delatnost</h4>
        <p>Matični broj: 20183497</p>
        <p>Delatnost:4690</p>
        <p>Nespecijalizovana trgovina na veliko</p>
        <p>PIB: 104535909</p>
      </v-col>
      <v-col cols="12" md="4">
        <h4>Kontakt</h4>
        <p >
          {{ $t("contact.phone") }}:
          <a :href="'tel:+381646162151'">
            <span class="red--text text--lighten-2">064/61-62-151</span>
          </a>
        </p>
        <p>
          {{ $t("contact.phone") }}:
          <a :href="'tel:+38137492902'">
            <span class="red--text text--lighten-2">037/492-902</span>
          </a>
        </p>
        <p>Email: 
          <a :href="'mailto:info@citymarket.rs'">
            <span class="red--text text--lighten-2">info@citymarket.rs</span>
          </a>
        </p>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
h4{
  margin: 15px 0;
  font-weight: 7000;
  font-size: 1.5em;
}

a:hover span {
  text-decoration: underline;
}
</style>