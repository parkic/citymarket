<template>
  <div>
    <div v-if="$i18n.locale == 'srb'">
      <h4>iSerial</h4>
      <p>Printer DS-RX1HS daje nam na uvid napredne informacije sa drajvera, omogućavajući korisnicima da u bilo kom trenutku provere preostali papir, format papira, status štampača, brojač ukupno odrađenih slika, podatke o kontroli boje, verziju firmvera i serijski broj.</p>

      <h4>Poboljšana brzina štampanja</h4>
      <p>
        Novi DS - RX1HS digitalni foto štampač povećava brzinu štampanja za čak 20%! Ova poboljšana brzina štampanja omogućava Vam da štampate 290 fotografija 4x6"(10x15cm) po satu(štampano u režimu prioriteta brzine štampne na sjajnoj završnoj obradi). Broj odštampanih fotografija se može razlikovati u zavisnosti od rezolucije fotografije, sobne temperature i svih ostalih parametara okruženja.
      </p>
      <h4>Veliki kapacitet štampe</h4>
      <p>
        Sa najvećim kapacitetom medija u svojoj klasi (700 slika formata 4x6''), izdržljivim dizajnom i novim većim brzinama štampanja, printer DS-RX1HS će odgovoriti svim vašim zahtevima u zavisnosti od toga gde je potrebno odraditi fotografije, u radnji ili na terenu. Težak je samo 14 kg.
      </p>

      <!-- <h4>Upotrebljiv za foto-kabine</h4>
      <p>Idealan je za foto-kabine, foto trake u formatu 2x6 inča (5x15cm). Ponudite zabavne fotografije ili fotografije za pasoš u ovom popularnom rasporedu! DS-RX1HS štampač je veoma mali, manji od jednog metra visok (11” H x 12.6” V), i stane u uske prostore.</p> -->

      <h4>Ekološki</h4>
      <p>DS-RX1HS materijali za štampanje fotografija koriste manje plastike nego ikada i dolaze u ambalaži koja se može reciklirati, dok su ribon trake napravljene od recikliranih materijala. I potrošnja energije i medijski otpad su optimizovani. Кoristi 25% manje energije, u režimima najveće potrošnje, mirovanja i ostalim režimima rada.
      </p>
    </div>

    <div v-else>
      <h4>iSerial</h4>
      <p>The DS-RX1HS provides advanced status information from the driver, enabling users at any time to check remaining media, media format, printer status, printer life counter, colour control data, firmware version and serial number.
      </p>

      <h4>Improved print speed</h4>
      <p>DNP’s new DS-RX1HS digital photo printer boosts print speed by as much as 20%! This improved print speed allows you to produce 290 4x6" (10x15cm) prints per hour*. <br />
        *Printed with high speed mode on glossy finish. Throughput number may change depending on image data, room temperature and all other environment.
      </p>

      <h4>Compact yet high print capacity</h4>
      <p>With the largest print capacity in its class (700 4x6’ prints) and rugged, durable design, and new higher speed output, the DS-RX1HS answers all the requirements for outstanding performance for local or remote event photo printing venues.  Aimed at portable Event Photography use, it weighs only 14 kg.
      </p>

      <!-- <h4>Photo booth use</h4>
      <p>For ID photo booths, photo strips in the format 2x6 inch (5x15cm) is ideal. Offer fun or passport photos in this popular layout! The DS-RX1HS printer is very small, less than one foot tall (11”Hx12.6”W), and will fit in tight spaces.
      </p> -->

      <h4>Environmentally friendly</h4>
      <p>The DS-RX1HS photo printing materials use less plastic than ever and come in recyclable packaging, while the ribbon spools are made of recycled materials. Both energy consumption and media waste were further optimized. It utilizes 25% less power, in peak, idle, & running modes.
        They must have the same media size loaded (e.g. 10x15 cm media in both).
      </p>
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