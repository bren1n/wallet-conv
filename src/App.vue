<template>
  <v-app>
    <navegacao />
    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
import Navegacao from '@/components/Navegacao.vue'

export default {
  name: 'App',
  components: {
    Navegacao
  }
}
</script>
