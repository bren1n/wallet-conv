import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        moeda: "",
        receitas: [{quant: 1000}],
        gastos: [{quant: 100}]
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
        }
    }
})
