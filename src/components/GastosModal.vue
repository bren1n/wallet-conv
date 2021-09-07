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
          @click="setAddGasto()"
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
          @click="setEditGasto()"
          icon
          small
          v-if="edit"
        >
          <v-icon color="white">mdi-pencil</v-icon>
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="text-h5 error--text" v-if="add">Adicionar Gasto</span>
          <span class="text-h5 error--text" v-if="edit">Editar Gasto</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row justify="center" class="mt-2">
                <v-col
                cols="5"
                >
                    <v-text-field 
                    v-model.number="gasto.quant" 
                    label="Quantidade" 
                    outlined 
                    hide-details 
                    prefix="R$" 
                    color="error"
                    autofocus
                    >
                    </v-text-field>
                </v-col>
                <v-col cols="5">
                    <v-select
                    v-model="gasto.categ"
                    :items="getCategGastos"
                    item-text="nome"
                    item-value="id"
                    label="Categoria"
                    outlined
                    color="error"
                    >
                        <template v-slot:prepend-inner>
                            <v-icon :color="getCategGastosById(gasto.categ).cor">mdi-checkbox-blank-circle</v-icon>
                        </template>
                    </v-select>
                </v-col>
            </v-row>
            <v-row justify="center">
                <v-col cols="10">
                    <v-textarea
                    v-model="gasto.desc"
                    color="error"
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
        name: 'GastosModal',

        props: {
            edit: Boolean,
            add: Boolean,
            gastoIndex: Number
        },

        data: function() {
            return {
                dialog: false,
                gasto: {
                    quant: 0,
                    categ: 1,
                    desc: ""
                }
            }
        },

        computed: {
            ...mapGetters([
                "getCategGastos",
                "getCategGastosById",
                "getGastoByIndex"
            ]),
        },

        methods: {
          ...mapMutations([
            "addGasto",
            "editGasto"
          ]),

          callMutation() {
            if (this.add) {
              this.addGasto(this.gasto);
            } else if(this.edit) {
              this.editGasto({'index': this.gastoIndex, 'gas': this.gasto});
            }
            this.dialog = false;
            this.$emit('updateChart')
          },
          setEditGasto() {
            let gas_obj = this.getGastoByIndex(this.gastoIndex);
            this.gasto = {quant: gas_obj.quant, categ: gas_obj.categ, desc: gas_obj.desc};
          },
          setAddGasto() {
            this.gasto = {quant: 0, categ: 1, desc: ""};
          }
        }
    }
</script>