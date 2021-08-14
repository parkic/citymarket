<template>
  <div>
    <div v-if="$i18n.locale == 'srb'">
      <h4>Isplativosti</h4>
      <p>Izuzetna mala potrošnja u stanju mirovanja (&lt;0.5W), dok mu ''rewind'' režim omogućava da se potrošni materijali učinkovito troše. Printer istovremeno štedi novac i štampa fotografije ekstra kvaliteta!</p>

      <h4>Pouzdanost</h4>
      <p>Mnogo hiljada DS štampača pouzdano radi na terenu. Printer DS620 ima poboljšani termalni vek trajanja glave. Uvereni smo da ćete uživati u izuzetno izdržljivom proizvodu. Evo dokaza: DNP PIE nudi 2 godine garancije!</p>

      <h4>Inovativnost</h4>
      <p>Sa multi-formatnim izborom, novim formatima kao što je 15x15cm i novim HQL medijima, DS620 postavlja nove standarde. Korisne informacije o štampaču dostupne su direktno iz upravljačkog sistema štampača.</p>

      <h4>Veliki izbor formata</h4>
      <p>Pružajući fleksibilnost u fotografskim formatima, DS620 nudi sve od 5x15cm do 15x23cm. Nova funkcija ''rewind'' omogućava Vam da efikasno štampate više formata iz svih medija.</p>

      <h4>Brzina</h4>
      <p>U režimu sa prioritetom brzine štampe, štampač DS620 proizvodi do 400 fotogorafija po satu. Prva fotografija je odštampana za manje od 10 sekundi; nakon toga štampa prosečeno traje od 8 do 9 sekundi po fotografiji. Sve ove karakteristike čine da DS620 bude vodeći model jedan od najbržih profesionalnih fotoštampača.</p>
    </div>

    <div v-else>
      <h4>Cost effectiveness</h4>
      <p>The standby mode ensures low power consumption (&lt;0.5W), while the rewind mode makes sure your consumables are used up efficiently. Saving money, creating value!</p>

      <h4>Reliability</h4>
      <p>Many thousands of DS printers are performing reliably in the field. The DS620 features enhanced thermal head lifespan. We are confident you will enjoy an extremely durable product. Here’s the proof: DNP PIE offers 2 years warranty!</p>

      <h4>Innovativeness </h4>
      <p>With the multi-format choices, new formats like 15x15cm square print, and with the new HQL media, the DS620 sets new standards. Useful printer information is available directly from the printer driver.</p>

      <h4>Great choice of formats</h4>
      <p>Providing flexibility on photo formats, the DS620 offers anything from 5x15 to 15x23cm. The new rewind function allows you to efficiently offer multiple formats from all media.</p>

      <h4>Speed</h4>
      <p>With a high throughput, the DS620 produces up to 400 prints per hour. The first photo is ready in less than 10 seconds; afterwards it takes approx. 8.9 seconds per picture. This makes DNP’s new flagship model one of the fastest professional photo printers.</p>
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