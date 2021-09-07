<template>
    <v-card
        color="error"
    >
        <v-card-title class="text-h6">
        Gastos
        </v-card-title>
        <v-card-text>
        <p class="text-h4">R${{ getGastos.toFixed(2) }} <gastos-modal add @updateChart="$emit('updateChart')" /></p>
        </v-card-text>
    </v-card>
</template>

<script>
import { mapGetters } from 'vuex'
import GastosModal from '@/components/GastosModal.vue'

export default {
  name: 'GastosCard',
  components: {
    GastosModal
  },
  computed: {
    ...mapGetters([
      "getGastos"
    ]),
  },
}
</script>