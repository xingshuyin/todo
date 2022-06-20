export default {  //模块化
    namespaced: true,
    state: {
        students: [],
    },
    getters: {
        getCount(state) {
            return state.students.length
        }
    },
    actions: {
        addstu(context, value) {
            context.commit('ADDSTU', value)
        }
    },
    mutations: {
        ADDSTU(state, value) {
            state.students.push(value)
        }
    }
}