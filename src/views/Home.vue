<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="3">
        <v-card
          color="primary"
        >
          <v-card-title class="text-h5">
            Saldo
          </v-card-title>
          <v-card-text>
            <p class="text-h3">R${{ getSaldo.toFixed(2) }}</p>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="3">
        <v-card
          color="success"
        >
          <v-card-title class="text-h6">
            Receitas
          </v-card-title>
          <v-card-text>
            <p class="text-h4">R${{ getReceitas.toFixed(2) }}</p>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="3">
        <v-card
          color="error"
        >
          <v-card-title class="text-h6">
            Gastos
          </v-card-title>
          <v-card-text>
            <p class="text-h4">R${{ getGastos.toFixed(2) }}</p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row justify="center">
      
      
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Home',
  data: function() {
    return {
      
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
