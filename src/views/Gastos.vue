<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="3">
        <gastos-card @updateChart="updateChart"/>
      </v-col>
    </v-row>
    <br><br>
    <v-row justify="center">
      <v-col cols="7">
        <v-data-table
        :headers="headers"
        :items="gastos"
        :items-per-page="5">
          <template v-slot:[`item.categ`]="{ item }">
            <span :style="{'color': getCategGastosById(item.categ).cor}">{{ getCategGastosById(item.categ).nome }}</span>
          </template>
          <template v-slot:[`item.quant`]="{ item }">
            <span><v-icon small>mdi-{{ getMoeda.icone }}</v-icon>{{ item.quant.toFixed(2) }}</span>
          </template>
          <template v-slot:[`item.acoes`]="{ item }">
            <gastos-modal edit :gastoIndex="gastos.indexOf(item)" @updateChart="updateChart"/>
            <v-icon @click="deleteGasto(gastos.indexOf(item))" color="error">mdi-delete</v-icon>
          </template>
        </v-data-table>
      </v-col>
      <v-spacer></v-spacer>
      <v-col>
        <template>
          <div>
            <apexchart ref="chart" width="385" type="donut" :options="options" :series="series"></apexchart>
          </div>
        </template>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import VueApexCharts from 'vue-apexcharts'
import { mapGetters, mapMutations } from 'vuex'
import GastosModal from '@/components/GastosModal.vue'
import GastosCard from '../components/GastosCard.vue'

export default {
  name: 'Gastos',
  components: {
    apexchart: VueApexCharts,
    GastosModal,
    GastosCard
  },
  data: function() {
    return {
      headers: [
        {text: 'Descrição', value: 'desc', sortable: true},
        {text: 'Categoria', value: 'categ', sortable: false},
        {text: 'Quatidade', value: 'quant', sortable: true},
        {text: 'Ações', value: 'acoes', sortable: false},
      ],
      gastos: [],
      series: [],
      options: {
        legend: {
          show: false
        },
        colors: ['#FF5722', '#d1d134', '#263238', '#4CAF50', '#01579B'],
        labels: ['Alimentação', 'Pagamentos', 'Roupas', 'Transporte', 'Outros'],
        plotOptions: {
          pie: {
            donut: {
              labels: {
                show: true,
                total: {
                  show: true,
                  color: '#ffffff',
                  showAlways: true,
                  formatter: function (w) {
                    let total = 0;
                    w.globals.seriesTotals.forEach(element => {
                      total += element;
                    });
                    return total.toFixed(2)
                  },
                }
              }
            }
          }
        }
      },
    }
  },
  methods: {
    ...mapMutations([
      'deletarGasto'
    ]),
    deleteGasto(index) {
      this.deletarGasto(index);
      this.updateChart()
    },
    updateChart() {
      this.$refs.chart.updateSeries(this.getGastosValues)
    }
  },
  computed: {
    ...mapGetters([
      "getGastos",
      "getGastosList",
      "getCategGastosById",
      "getGastosValues",
      "getMoeda"
    ]),
  },
  created() {
    this.gastos = this.getGastosList
    this.series = this.getGastosValues
  }
}
</script>