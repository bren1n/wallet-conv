<template>
    <v-dialog
      v-model="dialog"
      persistent
      max-width="600px"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="black"
          dark
          v-bind="attrs"
          v-on="on"
          v-if="add"
          fab
          outlined
          small
        >
          <v-icon>mdi-plus</v-icon>
        </v-btn>
        <v-btn
          color="secondary"
          dark
          v-bind="attrs"
          v-on="on"
          fab
          small
          v-if="edit"
        >
          <v-icon color="black">mdi-pencil</v-icon>
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="text-h5 success--text" v-if="add">Adicionar Receita</span>
          <span class="text-h5 success--text" v-if="edit">Editar Receita</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row justify="center" class="mt-2">
                <v-col
                cols="5"
                >
                    <v-text-field 
                    v-model.number="receita.quant" 
                    label="Quantidade" 
                    outlined 
                    hide-details 
                    prefix="R$" 
                    color="success"
                    >
                    </v-text-field>
                </v-col>
                <v-col cols="5">
                    <v-select
                    v-model="receita.categ"
                    :items="getCategReceitas"
                    item-text="nome"
                    item-value="id"
                    label="Categoria"
                    outlined
                    color="success"
                    >
                        <template v-slot:prepend-inner>
                            <v-icon :color="getCategReceitasById(receita.categ).cor">mdi-checkbox-blank-circle</v-icon>
                        </template>
                    </v-select>
                </v-col>
            </v-row>
            <v-row justify="center">
                <v-col cols="10">
                    <v-textarea
                    v-model="receita.desc"
                    color="success"
                    label="Descrição"
                    counter
                    maxlength="120"
                    auto-grow
                    rows="2"
                    ></v-textarea>
                </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-btn
            color="error"
            @click="dialog = false"
            outlined
          >
            <v-icon>mdi-close</v-icon> Cancelar
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn
            color="success"
            @click="callMutation()"
            outlined
          >
            <v-icon>mdi-check</v-icon> Confirmar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
</template>

<script>
    import { mapGetters, mapMutations } from 'vuex'

    export default {
        name: 'ReceitasModal',

        props: {
            edit: Boolean,
            add: Boolean,
            receitaIndex: Number
        },

        data: function() {
            return {
                dialog: false,
                receita: {
                    quant: 0,
                    categ: 1,
                    desc: ""
                }
            }
        },

        computed: {
            ...mapGetters([
                "getCategReceitas",
                "getCategReceitasById",
                "getReceitaByIndex"
            ]),
        },

        created() {
          if (this.edit) {
            this.receita = this.getReceitaByIndex(this.receitaIndex);
          }
        },

        methods: {
          ...mapMutations([
            "addReceita",
            "editReceita"
          ]),

          callMutation() {
            if (this.add) {
              this.addReceita(this.receita);
              this.receita = {quant: 0, categ: 1, desc: ""};
              this.dialog = false;
            } else if(this.edit) {
              this.addReceita(this.receitaIndex, this.receita);
              this.receita = {quant: 0, categ: 1, desc: ""};
              this.dialog = false;
            } else {
              this.receita = {quant: 0, categ: 1, desc: ""};
              this.dialog = false;
            }
          }
        }
    }
</script>