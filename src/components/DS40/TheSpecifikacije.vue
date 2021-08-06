<template>
  <div>
    <h3>Print method</h3>
    <p>{{$t('printers.list[4].info.printMethod')}}</p>

    <h3>Print modes</h3>
    <p>{{$t('printers.list[4].info.printModes')}}</p>

    <h3>Print resolution</h3>
    <p>{{$t('printers.list[4].info.printResolution')}}</p>

    <h3>Print sizes</h3>
    <p
      v-for="(item, idx) in $t('printers.list[4].info.printSizes')"
      :key="idx"
    >{{item}}</p>

    <h3>Print numbers</h3>
    <p
      v-for="(item, idx) in $t('printers.list[4].info.printNumbers')"
      :key="idx"
    >{{item}}</p>

    <h3>Print numbers</h3>
    <p
      v-for="(item, idx) in $t('printers.list[4].info.printSpeed')"
      :key="idx"
    >{{item}}</p>

    <h3>Ribbon finish</h3>
    <p>{{$t('printers.list[4].info.ribbonFinish')}}</p>

    <h3>Computer interface</h3>
    <p>{{$t('printers.list[4].info.computerInterface')}}</p>

    <h3>Buffer size</h3>
    <p>{{$t('printers.list[4].info.bufferSize')}}</p>

    <h3>Driver softwere</h3>
    <p>{{$t('printers.list[4].info.driverSoftware')}}</p>

    <h3>External dimension</h3>
    <p>{{$t('printers.list[4].info.externalDimension')}}</p>

    <h3>Approve Weight</h3>
    <p>{{$t('printers.list[4].info.approxWeight')}}</p>

    <h3>Power Supply Voltage</h3>
    <p>{{$t('printers.list[4].info.powerSupplyVoltage')}}</p>

    <h3>Power Consumption</h3>
    <p>{{$t('printers.list[4].info.powerConsumption')}}</p>

    <h3>Accessories</h3>
    <p>{{$t('printers.list[4].info.accessories')}}</p>

    <h3>Options</h3>
    <p
      v-for="(item, idx) in $t('printers.list[4].info.options')"
      :key="idx"
    >{{item}}</p>

    <h3>Product code</h3>
    <p>{{$t('printers.list[4].info.productCode')}}</p>

    <h3>Commodity code</h3>
    <p>{{$t('printers.list[4].info.commodityCode')}}</p>

    

    
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