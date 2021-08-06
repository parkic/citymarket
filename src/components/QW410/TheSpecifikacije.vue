<template>
  <div>
    <h3>General features</h3>
    <p>{{$t('printers.list[3].info.generalFeatures')}}</p>


    <h3>Photo size</h3>
    <p
      v-for="(item, idx) in $t('printers.list[3].info.photoSize')"
      :key="idx"
    >
      {{item}}
    </p>

    <h3>Consumables</h3>
    <p
      v-for="(item, idx) in $t('printers.list[3].info.consumables')"
      :key="idx"
    >
      {{item}}
    </p>

    <h3>Print trendy sizes</h3>
    <p
      v-for="(item, idx) in $t('printers.list[3].info.printTrendySizes')"
      :key="idx"
    >
      {{item}}
    </p>

    <h3>Square size</h3>
    <p
      v-for="(item, idx) in $t('printers.list[3].info.squareSize')"
      :key="idx"
    >
      {{item}}
    </p>

    <h3>Resolution</h3>
    <p>{{$t('printers.list[3].info.resolution')}}</p>
    

    <h3>Computer interface</h3>
    <p>{{$t('printers.list[3].info.computerInterface')}}</p>
    
    <h3>Dimensions (WxDxH)</h3>
    <p>{{$t('printers.list[3].info.dimensionsWxDxH')}}</p>

    <h3>Approx weight</h3>
    <p>{{$t('printers.list[3].info.approxWeight')}}</p>

    <h3>Warranty</h3>
    <p>{{$t('printers.list[3].info.warranty')}}</p>
    

    
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
h3{
  font-size: 1.2em;
  padding-top: 15px
}
</style>