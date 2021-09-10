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
            <p class="text-h3"><v-icon large>mdi-{{ getMoeda.icone }}</v-icon>{{ getSaldo.toFixed(2) }}</p>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="3">
        <receitas-card />
      </v-col>
      <v-col cols="3">
        <gastos-card />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'
import ReceitasCard from '../components/ReceitasCard.vue'
import GastosCard from '../components/GastosCard.vue'

export default {
  name: 'Home',
  components: {
    ReceitasCard,
    GastosCard
  },
  computed: {
    ...mapGetters([
      "getSaldo",
      "getMoeda"
    ]),
  }
}
</script>
