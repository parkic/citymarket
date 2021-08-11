<template>
  <div class="mt-15 mb-5 mx-3">
    <v-row style="color: rgba(255,255,255, 0.9); text-align: center;">
      <v-col cols="12" md="4">
        <h4> {{ $i18n.locale == 'srb' ? 'Informacije' : "Information" }} </h4>
        <p>{{ $i18n.locale == 'srb' ? 'City Market d.o.o. Kruševac' : "City Market d.o.o. Krusevac" }}</p>
        <p>Aleksandra Fleminga 41</p>
        <p>{{ $i18n.locale == 'srb' ? '37000 Kruševac' : "37000 Krusevac" }}</p>
        <p>{{ $i18n.locale == 'srb' ? 'Republika Srbija' : "Republic of Serbia" }}</p>
      </v-col>
      <v-col cols="12" md="4">
        <h4>{{ $i18n.locale == 'srb' ? 'Delatnost' : "Activity" }}</h4>
        <p>{{ $i18n.locale == 'srb' ? 'Matični broj: ' : "Company number: " }}20183497</p>
        <p>{{ $i18n.locale == 'srb' ? 'Šifra delatnosti: ' : "Activity code: " }}4690</p>
        <p>{{ $i18n.locale == 'srb' ? 'Nespecijalizovana trgovina na veliko' : "Non-specialized wholesale trade" }}</p>
        <p>PIB: 104535909</p>
      </v-col>
      <v-col cols="12" md="4">
        <h4>{{ $t('contact.title') }}</h4>
        <p >
          {{ $t("contact.mobile") }}:
          <a :href="'tel:+381646162151'">
            <span class="red--text text--lighten-2">+381 64/61-62-151</span>
          </a>
        </p>
        <p>
          {{ $t("contact.phone") }}:
          <a :href="'tel:+38137492902'">
            <span class="red--text text--lighten-2">+381 37/492-902</span>
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