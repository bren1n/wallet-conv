import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        moeda: "",
        receita: [{quant: 1000}],
        gasto: [{quant: 100}]
    },
    getters: {
        getReceitaLiquida: (state) => {
            let total;
            
            state.receita.forEach((rec) => total += rec.quant);
            state.gasto.forEach((gas) => total -= gas.quant);

            return total
        },
        getReceitaBruta: (state) => {
            let total;
            
            state.receita.forEach((rec) => total += rec.quant);

            return total
        },
        getGastosTotal: (state) => {
            let total;

            state.gasto.forEach((gas) => total -= gas.quant);

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
