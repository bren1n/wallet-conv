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
          <template v-slot:[`item.quantidade`]="{ item }">
            <span>R${{ item.quantidade.toFixed(2) }}</span>
          </template>
          <template v-slot:[`item.acoes`]="{ item }">
            <v-icon @click="deleteGasto(gastos.indexOf(item))">mdi-delete</v-icon>
            <!-- {{ items.indexOf(item) }} -->
          </template>
        </v-data-table>
      </v-col>
      <v-spacer></v-spacer>
      <v-col>
        <template>
          <div>
            <apexchart width="385" type="donut" :options="options" :series="series"></apexchart>
          </div>
        </template>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import VueApexCharts from 'vue-apexcharts'
import { mapGetters, mapMutations } from 'vuex'

export default {
  name: 'Gastos',
  components: {
    apexchart: VueApexCharts
  },
  data: function() {
    return {
      headers: [
        {text: 'Descrição', value: 'descricao', sortable: true},
        {text: 'Tipo', value: 'tipo', sortable: false},
        {text: 'Quatidade', value: 'quantidade', sortable: true},
        {text: 'Ações', value: 'acoes', sortable: false},
      ],
      gastos: this.$store.state.gastos,
      series: [60, 55, 41, 17, 15],
      options: {
        legend: {
          show: false
        },
        theme: {
          monochrome: {
            enabled: true,
            color: '#3F51B5',
            shadeTo: 'light',
            shadeIntensity: 0.65
          }
        }
      }
    }
  },
  methods: {
    ...mapMutations([
      'deleteGasto'
    ]),
    deleteGasto(index) {
      return this.$store.commit('deleteGasto', index);
    }
  },
  computed: {
    ...mapGetters([
      "getReceitas",
      "getSaldo",
      "getGastos"
    ]),
  },
  created() {
  }
}
</script>