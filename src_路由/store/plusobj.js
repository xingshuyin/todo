export default {
    namespaced: true,
    state: {
        num: 0,
        name: '刘希',
        age: 16,
        school: '科大',

    },

    getters: {
        bignum(state) {
            return state.num * 10
        }
    },

    actions: {  //this.$store.dispatch触发
        plus(context, value) {  //context上下文,类似一个迷你$store
            context.commit("PLUS", value)
        },
        minus(context, value) {
            context.commit("MINUS", value)
        },
        plus_odd(context, value) {
            if (context.state.num % 2 === 1) {
                context.commit('PLUS_ODD', value)
            }
        },
        plus_after(context, value) {
            setTimeout(() => { context.commit("PLUS_AFTER", value) }, 1000)
        }
    },

    mutations: {  //this.$store.commit触发
        PLUS(state, value) {
            state.num += value
        },
        MINUS(state, value) {
            state.num -= value
        },
        PLUS_ODD(state, value) {
            state.num += value
        },
        PLUS_AFTER(state, value) {
            state.num += value
        }
    }

}