<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="3">
        <v-card color="primary">
          <v-card-title class="text-h6">
            Gastos
          </v-card-title>
          <v-card-text>
            <p class="text-h4">R${{ getGastos.toFixed(2) }}</p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <br><br>
    <v-row justify="center">
      <v-col cols="7">
        <!-- <h3>Lista de gastos</h3><br> -->
        <v-data-table
        :headers="headers"
        :items="gastos"
        :items-per-page="5">
          <template v-slot:[`item.categ`]="{ item }">
            <span :style="{'color': getCategGastosById(item.categ).cor}">{{ getCategGastosById(item.categ).nome }}</span>
          </template>
          <template v-slot:[`item.quant`]="{ item }">
            <span>R${{ item.quant.toFixed(2) }}</span>
          </template>
          <template v-slot:[`item.acoes`]="{ item }">
            <gastos-modal edit :gastoIndex="gastos.indexOf(item)" @updateChart="updateChart"/>
            <v-icon @click="deleteGasto(gastos.indexOf(item))">mdi-delete</v-icon>
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

export default {
  name: 'Gastos',
  components: {
    apexchart: VueApexCharts,
    GastosModal
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
                  showAlways: true
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
      'deleteGasto'
    ]),
    deleteGasto(index) {
      this.$store.commit('deleteGasto', index);
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
      "getGastosValues"
    ]),
  },
  created() {
    this.gastos = this.getGastosList
    this.series = this.getGastosValues
  }
}
</script>