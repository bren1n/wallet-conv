<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="3">
        <v-card color="primary">
          <v-card-title class="text-h6">
            Receitas
          </v-card-title>
          <v-card-text>
            <p class="text-h4">R${{ getReceitas.toFixed(2) }}</p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <br><br>
    <v-row justify="center">
      <v-col cols="7">
        <v-data-table
        :headers="headers"
        :items="receitas"
        :items-per-page="5">
          <template v-slot:[`item.categ`]="{ item }">
            <span :style="{'color': getCategReceitasById(item.categ).cor}">{{ getCategReceitasById(item.categ).nome }}</span>
          </template>
          <template v-slot:[`item.quant`]="{ item }">
            <span>R${{ item.quant.toFixed(2) }}</span>
          </template>
          <template v-slot:[`item.acoes`]="{ item }">
            <receitas-modal edit :receitaIndex="receitas.indexOf(item)" @updateChart="updateChart"/>
            <v-icon @click="deleteReceita(receitas.indexOf(item))">mdi-delete</v-icon>
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
import ReceitasModal from '@/components/ReceitasModal.vue'

export default {
  name: 'Receitas',
  components: {
    apexchart: VueApexCharts,
    ReceitasModal
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
        colors: ['#5E35B1', '#FF1744', '#2196F3', '#CDDC39'],
        labels: ['Salário', 'Investimento', 'Presente', 'Outros'],
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
      }
    }
  },
  methods: {
    ...mapMutations([
      'deleteReceita'
    ]),
    deleteReceita(index) {
      this.$store.commit('deleteReceita', index);
      this.updateChart()
    },
    updateChart() {
      this.$refs.chart.updateSeries(this.getReceitasValues)
    }
  },
  computed: {
    ...mapGetters([
      "getReceitas",
      "getReceitasList",
      "getCategReceitasById",
      "getReceitasValues"
    ]),
  },
  created() {
    this.receitas = this.getReceitasList
    this.series = this.getReceitasValues
  }
}
</script>