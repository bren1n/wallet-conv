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
            <!-- <template v-slot:append> -->
              <v-list-item class="mt-5">
                <v-list-item-icon>
                  <v-icon>mdi-cash-multiple</v-icon>
                </v-list-item-icon>
                <v-list-item-title>
                  <p>Moeda</p>
                  <p>
                    <v-btn small icon class="ma-1">
                      <v-img src="../assets/br.png" max-height="20" max-width="30"></v-img>
                    </v-btn>
                    <v-btn small icon class="ma-1">
                      <v-img src="../assets/eua.png" max-height="20" max-width="30"></v-img>
                    </v-btn>
                    <v-btn small icon class="ma-1">
                      <v-img src="../assets/gbr.png" max-height="20" max-width="30"></v-img>
                    </v-btn>
                    <v-btn small icon class="ma-1">
                      <v-img src="../assets/ue.png" max-height="20" max-width="30"></v-img>
                    </v-btn>
                  </p>
                </v-list-item-title>
              </v-list-item>
            <!-- </template> -->
          </v-list>
          <!-- <template v-slot:append>
            <div class="pa-2">
              <v-select
                :items="moedas"
                label="Outlined style"
                item-text="nome"
                outlined
                min-width="100"
              ></v-select>
            </div>
          </template> -->
        </v-navigation-drawer>
      </v-card>
</template>

<script>
  export default {
    name: 'Navegacao',

    data: () => ({
      moedas: [
        {nome: "Real", sigla: "BRL"},
        {nome: "Dólar", sigla: "USD"},
        {nome: "Euro", sigla: "EUR"},
        {nome: "Libra", sigla: "GBP"},
      ]
    }),
  }
</script>
