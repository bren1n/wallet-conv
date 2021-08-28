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
            <v-img src="../assets/logo_fundo.png"></v-img>
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
          </v-list>
        </v-navigation-drawer>
      </v-card>
</template>

<script>
  export default {
    name: 'Navegacao',

    data: () => ({}),
  }
</script>
