<template>
      <v-card>
        <v-navigation-drawer
          permanent
          expand-on-hover
          app
          floating
          color="primary"
        >
          <v-list-item class="pa-2">
            <v-img src="../assets/logo_fundo.png" class="rounded-circle"></v-img>
          </v-list-item>
          <v-list
            nav
            dense
          >
            <v-list-item link to="/">
                <v-list-item-icon>
                  <v-icon>mdi-home</v-icon>
                </v-list-item-icon>
                <v-list-item-title>Home</v-list-item-title>
            </v-list-item>
            <v-list-item link to="/gastos">
                <v-list-item-icon>
                  <v-icon>mdi-shopping</v-icon>
                </v-list-item-icon>
                <v-list-item-title>Gastos</v-list-item-title>
            </v-list-item>
            <v-list-item link to="/receitas">
                <v-list-item-icon>
                  <v-icon>mdi-trending-up</v-icon>
                </v-list-item-icon>
                <v-list-item-title>Receitas</v-list-item-title>
            </v-list-item>
            <v-list-item class="mt-7">
              <v-list-item-icon>
                <v-icon>mdi-cash-multiple</v-icon>
              </v-list-item-icon>
              <v-list-item-title>
                Moeda Usada:
                <p>
                  <v-btn 
                  fab 
                  small 
                  color="secondary" 
                  v-for="(moeda, index) in moedas" 
                  :key="index" 
                  :text="moeda.sigla == getMoeda.sigla ? false : true"
                  :class="{'disable-events': moeda.sigla == getMoeda.sigla ? true : false}"
                  @click="changeCurrency(moeda)"
                  >
                    <v-img :src="require(`../assets/${moeda.sigla}.png`)" max-height="20" max-width="30"></v-img>
                  </v-btn>
                </p>
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-navigation-drawer>
      </v-card>
</template>

<script>
  import { mapGetters, mapMutations } from 'vuex'

  export default {
    name: 'Navegacao',

    data: () => ({
      moedas: [
        {nome: "Real", sigla: "BRL", icone: "currency-brl"},
        {nome: "Dólar", sigla: "USD", icone: "currency-usd"},
        {nome: "Euro", sigla: "EUR", icone: "currency-eur"},
        {nome: "Libra", sigla: "GBP", icone: "currency-gbp"},
      ]
    }),

    computed: {
      ...mapGetters([
        "getMoeda"
      ]),
    },

    methods: {
      ...mapMutations([
        "changeMoeda"
      ]),
      changeCurrency(moeda) {
        this.axios.get(`latest/${this.getMoeda.sigla}`).then((response) => {
          this.changeMoeda({taxa: response.data.conversion_rates[moeda.sigla], nova_moeda: moeda})
        })
      }
    }
  }
</script>

<style>
.disable-events {
  pointer-events: none
}
</style>
