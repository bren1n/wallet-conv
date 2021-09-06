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
            {id: 2, nome: "Pagamentos", cor: "#d1d134"},
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
        },
        getGastosValues: (state) => {
            let gastosValues = [];
            for (let i = 0; i < state.categGastos.length; i++) {
                let total = 0;
                for (let j = 0; j < state.gastos.length; j++) {
                    if (state.gastos[j].categ === state.categGastos[i].id)
                        total++;
                }
                gastosValues.push(total);
            }
            return gastosValues;
        },
        getReceitasValues: (state) => {
            let receitasValues = [];
            for (let i = 0; i < state.categReceitas.length; i++) {
                let total = 0;
                for (let j = 0; j < state.receitas.length; j++) {
                    if (state.receitas[j].categ === state.categReceitas[i].id)
                        total++;
                }
                receitasValues.push(total);
            }
            return receitasValues;
        },
        getGastosList: (state) => {
            return state.gastos;
        },
        getReceitasList: (state) => {
            return state.receitas;
        }
    },
    mutations: {
        addReceita(state, rec) {
            state.receitas.push(rec);
        },
        editReceita(state, obj) {
            state.receitas[obj.index] = obj.rec;
        },
        addGasto(state, gas) {
            state.gastos.push(gas);
        },
        editGasto(state, obj) {
            state.gastos[obj.index] = obj.gas;
        },
        deleteGasto(state, index) {
            state.gastos.splice(index, 1);
        },
        deleteReceita(state, index) {
            state.receitas.splice(index, 1);
        }
    }
})
