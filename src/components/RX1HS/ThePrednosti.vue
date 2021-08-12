<template>
  <div>
    <div v-if="$i18n.locale == 'srb'">
      <h4>iSerial</h4>
      <p>DS-RКS1HS obezbeđuje napredne informacije o statusu od vozača, omogućavajući korisnicima da u bilo kom trenutku provere preostale medije, format medija, status štampača, brojač životnog veka štampača, podatke o kontroli boje, verziju firmvera i serijski broj.</p>

      <h4>Poboljšana brzina štampanja</h4>
      <p>
        Novi DSP RКS1HS digitalni foto štampač povećava brzinu štampanja za čak 20%! Ova poboljšana brzina štampanja omogućava vam da štampate 290 4x6" (10x15cm) otisaka po satu *.
        * Štampano sa režimom velike brzine na sjajnoj završnoj obradi. Broj protoka se može promeniti u zavisnosti od podataka o slici, sobne temperature i svih ostalih okruženja.
        Кompaktan, ali visok kapacitet štampanja <br />
      </p>
      <h4>Veliki kapacitet štampe</h4>
      <p>
        Sa najvećim kapacitetom štampe u svojoj klasi (otisci od 700 4x6) i robusnim, izdržljivim dizajnom i novim izlazom veće brzine, DS-RКS1HS odgovara svim zahtevima za izvanredne performanse za lokalna ili udaljena mesta za štampanje fotografija događaja. Namenjen za upotrebu portala Event Photographi, težak je samo 14 kg.
      </p>

      <h4>Upotreba foto štandova</h4>
      <p>Idealne su za foto-štandove, foto trake u formatu 2x6 inča (5x15cm). Ponudite zabavne ili fotografije za pasoš u ovom popularnom rasporedu! DS-RКS1HS štampač je veoma mali, manji od jednog metra visok (11” H x 12.6” V), i stane u uske prostore.</p>

      <h4>Ekološki</h4>
      <p>DS-RКS1HS materijali za štampanje fotografija koriste manje plastike nego ikada i dolaze u ambalaži koja se može reciklirati, dok su trake za ribanje napravljene od recikliranih materijala. I potrošnja energije i medijski otpad su dalje optimizovani. Кoristi 25% manje energije, u režimima vršnog, praznog i rada. <br />
  Moraju imati istu veličinu medija (npr. 10x15 cm medijum u oba).
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

      <h4>Photo booth use</h4>
      <p>For ID photo booths, photo strips in the format 2x6 inch (5x15cm) is ideal. Offer fun or passport photos in this popular layout! The DS-RX1HS printer is very small, less than one foot tall (11”Hx12.6”W), and will fit in tight spaces.
      </p>

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