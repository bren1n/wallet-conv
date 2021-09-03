import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        moeda: "",
        receitas: [],
        gastos: [],
        categReceitas: [
            {id: 1, nome: "Salário", cor: "#5E35B1"},
            {id: 2, nome: "Investimento", cor: "#FF1744"},
            {id: 3, nome: "Presente", cor: "#2196F3"},
            {id: 4, nome: "Outros", cor: "#CDDC39"}
        ],
        categGastos: [
            {id: 1, nome: "Alimentação", cor: "#FF5722"},
            {id: 2, nome: "Pagamentos", cor: "#FFFF00"},
            {id: 3, nome: "Roupas", cor: "#263238"},
            {id: 4, nome: "Transporte", cor: "#4CAF50"},
            {id: 5, nome: "Outros", cor: "#01579B"}
        ],
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
        },
        getCategReceitas: (state) => {
            return state.categReceitas
        },
        getReceitaByIndex: (state) => (index) => {
            return state.receitas[index]
        },
        getCategGastos: (state) => {
            return state.categGastos
        },
        getGastosByIndex: (state) => (index) => {
            return state.gastos[index]
        },
        getCategReceitasById: (state) => (id) => {
            return state.categReceitas.find((categ) => categ.id === id)
        },
        getCategGastosById: (state) => (id) => {
            return state.categGastos.find((categ) => categ.id === id)
        }
    },
    mutations: {
        addReceita(state, rec) {
            state.receitas.push(rec);
        },
        editReceita(state, index, rec) {
            state.receitas[index] = rec;
        },
        addGasto(state, gas) {
            state.gastos.push(gas);
        },
        editGasto(state, index, gas) {
            state.gastos[index] = gas;
        }
    }
})
