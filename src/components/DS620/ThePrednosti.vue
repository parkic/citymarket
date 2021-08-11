<template>
  <div>
    <div v-if="$i18n.locale == 'srb'">
      <h4>Isplativosti</h4>
      <p>Režim mirovanja osigurava malu potrošnju energije (&lt;0.5V), dok se režimom premotavanja osigurava da se potrošni materijali učinkovito troše. Ušteda novca, stvaranje vrednosti!</p>

      <h4>Pouzdanost</h4>
      <p>Mnogo hiljada DS štampača pouzdano radi na terenu. DS620 ima poboljšani termalni vijek trajanja glave. Uvereni smo da ćete uživati u izuzetno izdržljivom proizvodu. Evo dokaza: DNP PIE nudi 2 godine garancije!</p>

      <h4>Inovativnost </h4>
      <p>Sa multi-formatnim izborom, novim formatima kao što su 15k15cm kvadratni otisak i novim HKL medijima, DS620 postavlja nove standarde. Korisne informacije o štampaču dostupne su direktno iz upravljačkog programa štampača.</p>

      <h4>Veliki izbor formata</h4>
      <p>Pružajući fleksibilnost u fotografskim formatima, DS620 nudi sve od 5k15 do 15k23cm. Nova funkcija premotavanja omogućava vam da efikasno ponudite više formata iz svih medija.</p>

      <h4>Brzina</h4>
      <p>Sa visokom propusnošću, DS620 proizvodi do 400 otisaka na sat. Prva fotografija je spremna za manje od 10 sekundi; nakon toga traje cca. 8,9 sekundi po slici. Ovo čini DNP novi vodeći model jednim od najbržih profesionalnih foto štampača.</p>
    </div>

    <div v-else>
      <h4>Cost effectiveness</h4>
      <p>The standby mode ensures low power consumption (&lt;0.5W), while the rewind mode makes sure your consumables are used up efficiently. Saving money, creating value!</p>

      <h4>Reliability</h4>
      <p>Many thousands of DS printers are performing reliably in the field. The DS620 features enhanced thermal head lifespan. We are confident you will enjoy an extremely durable product. Here’s the proof: DNP PIE offers 2 years warranty!</p>

      <h4>Innovativeness </h4>
      <p>With the multi-format choices, new formats like 15x15cm square print, and with the new HQL media, the DS620 sets new standards. Useful printer information is available directly from the printer driver.  </p>

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