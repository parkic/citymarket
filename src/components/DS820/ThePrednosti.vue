<template>
  <div v-if="$i18n.locale == 'srb'">
    <h4>Ekskluzivne završne obrade - sjajni, mat, fini mat i sjaj</h4>
    <p>Pored klasičnih završnih obrada fotografija, mat i sjajnih, DS820 nudi „Fine mat“ i „Luster“. Pored toga, štampač poseduje izuzetnu novinu: delimično premazivanje, koje fotografima omogućava veliku kreativnost.</p>

    <h4>Dva tipa potrošnog materijala - Pure Premium i Digital</h4>
    <p>Dostupna su dva tipa medija: Pure Premium Digital i Standard Digital. <br />
      Sa poboljšanim nivoom sjaja i visokom gustinom ispisa, Pure Premium Digital proizvodi slike visokog kvaliteta kako bi zadovoljili tržišne zahteve studijskih fotografa. Standard Digital je isplativiji, a zadržava visok kvalitet.<br />
    </p>

    <h4>Veliki izbor formata - uključujući panoramske ispise </h4>
    <p>Novi panoramski format (sa SDK) do 8x32'', savršen za predstavljanje fotografija pejzaža!</p>

    <h4>Produktivnost i profitabilnost</h4>
    <p>Nova funkcija premotavanja omogućava najefikasniju potrošnju potrošnog materijala.<br/>
      U režimu mirovanja, štampač ima racionalnu potrošnju energije (&lt;0,5 W).
    </p>
  </div>
  <div v-else>
    <h4>Exclusive finishes – Glossy, Matte, Fine Matte and Luster</h4>
    <p>In addition to the classic photo finishes, matte and glossy, the DS820 offers « Fine matte » and « Luster » finishes. In addition, the printer features an exceptional novelty: the partial coating, allowing great creativity for the photographers.</p>

    <h4>Two types of consumables – Pure Premium and Digital</h4>
    <p>Two types of media are available: Pure Premium Digital and Standard Digital. <br />
        With the improved gloss level and the high density output, Pure Premium Digital produces prints of the high quality to meet the market demand of studio photographers. Standard Digital is more cost effective yet keeps high quality.
    </p>

    <h4>A large choice of formats – including panoramic prints</h4>
    <p>The new panoramic format (with SDK) up to 8x32’’, perfect to showcase the landscapes photos!</p>

    <h4>Productivity and profitability</h4>
    <p>The new rewind function enables the most efficient consumption of consumables and a limitation of media stock keeping units. <br />
      With the standby mode, the printer makes the most efficient use of energy (&lt;0.5W), keeping the electricity bill low at the end of the year. All these new features will benefit the operator with increased profitability.
    </p>
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