<template>
    <v-card
        color="success"
    >
        <v-card-title class="text-h6">
        Receitas
        </v-card-title>
        <v-card-text>
        <p class="text-h4">R${{ getReceitas.toFixed(2) }} <receitas-modal add @updateChart="$emit('updateChart')"/> </p>
        </v-card-text>
    </v-card>
</template>

<script>
import { mapGetters } from 'vuex'
import ReceitasModal from '@/components/ReceitasModal.vue'

export default {
  name: 'ReceitasCard',
  components: {
    ReceitasModal
  },
  computed: {
    ...mapGetters([
      "getReceitas"
    ]),
  },
}
</script>