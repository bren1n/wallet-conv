import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        moeda: "",
        receitas: [{quant: 1000}],
        gastos: [
            {
              id: 1,
              descricao: 'Gasto 1',
              tipo: 'Tipo 1',
              quantidade: 100.0,
            },
            {
              id: 2,
              descricao: 'Gasto 2',
              tipo: 'Tipo 2',
              quantidade: 100.0,
            },
            {
              id: 3,
              descricao: 'Gasto 3',
              tipo: 'Tipo 3',
              quantidade: 100.0,
            },
            {
              id: 4,
              descricao: 'Gasto 4',
              tipo: 'Tipo 4',
              quantidade: 100.0,
            },
            {
              id: 5,
              descricao: 'Gasto 5',
              tipo: 'Tipo 5',
              quantidade: 100.0,
            }
          ]
    },
    getters: {
        getSaldo: (state) => {
            let total = 0;
            
            state.receitas.forEach((rec) => total += rec.quant);
            state.gastos.forEach((gas) => total -= gas.quant);

            return total
        },
        getReceitas: (state) => {
            let total = 0;
            
            state.receitas.forEach((rec) => total += rec.quant);

            return total
        },
        getGastos: (state) => {
            let total = 0;

            state.gastos.forEach((gas) => total += gas.quant);

            return total
        }
    },
    mutations: {
        addReceita(state, rec) {
            state.receita.push(rec);
        },
        addGasto(state, gas) {
            state.gasto.push(gas);
        },
        editReceita(state, index, rec) {
            state.receita[index] = rec;
        },
        editGasto(state, index, gas) {
            state.gasto[index] = gas;
        },
        deleteGasto(state, index) {
            state.gastos.splice(index, 1);
        }
    }
})
