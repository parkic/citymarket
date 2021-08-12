<template>
  <div>
    <div v-if="$i18n.locale == 'srb'">
      <h4>Brzo</h4>
      <p>DS40 isporučuje 10x15cm fotografije za samo 8 sekundi.</p>

      <h4>Pouzdanost</h4>
      <p>Više hiljado štampača pouzdano radi na terenu već duži niz godina.</p>

      <h4>Visokokvalitetna mat završna obrada </h4>
      <p>Na istom foto papiru, DS40 proizvodi medije u sjajnoj ili mat boji u skladu sa vašim potrebama.</p>

      <h4>Format 15x23cm (6x9 inča)</h4>
      <p>Dajući fleksibilnost fotografskim formatima, DS40 nudi sve od 10x15 do 15x23cm (4x6 do 6x9 inch).</p>

      <h4>Foto trake 2x6" za ID foto kabine</h4>
      <p>Idealne su za foto kabine, foto trake u formatu 2x6 inča (5x15cm). Ponudite zabavne ili fotografije za pasoš u ovom popularnom formatu!</p>
    </div>

    <div v-else>
      <h4>Fast</h4>
      <p>The DS40 delivers 10x15cm photos in just 8 seconds.</p>

      <h4>Reliable</h4>
      <p>Many thousands of printers are performing reliably in the field for a number of years.</p>

      <h4>High-quality matte finish</h4>
      <p>On the same photo paper, the DS40 produces media in glossy or matte according to your requirements.</p>

      <h4>15x23cm (6x9 inch) format</h4>
      <p>Giving flexibility on photo formats, the DS40 offers anything from 10x15 to 15x23cm (4x6  to 6x9 inch).</p>

      <h4>Photo strips 2x6" for ID photo booths</h4>
      <p>For ID photo booths, photo strips in the format 2x6 inch (5x15cm) is ideal. Offer fun or passport photos in this popular layout!* <br />
        * Make sure that the last firmware version is installed. Possibly a retrofit of a cutter unit is required.
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