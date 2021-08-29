<template>
  <v-container>
    <v-row>
      <v-col></v-col>
      <v-col>
        <h2 class="text-center">Balanço</h2>
        {{ this.getReceitaLiquida }}
        <apexchart type="donut" width="380" :options="chartOptions" :series="series"></apexchart>
      </v-col>
      <v-col></v-col>
    </v-row>
  </v-container>
</template>

<script>
import VueApexCharts from 'vue-apexcharts'
import { mapGetters } from 'vuex'

export default {
  name: 'Home',
  components: {
    apexchart: VueApexCharts
  },
  data: function() {
    return {
      series: [44, 55, 13],
      chartOptions: {
        chart: {
          width: 380,
          type: 'donut',
        },
        dataLabels: {
          enabled: false
        },
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              show: false
            }
          }
        }],
        legend: {
          show: false,
        }
      },
    }
  },
  computed: {
    ...mapGetters([
      "getReceitaLiquida",
      "getReceitaBruta",
      "getGastosTotal"
    ]),
    // series: [this.receitaLiquida, this.receitaBruta, this.gastosTotal]
  }
}
</script>
