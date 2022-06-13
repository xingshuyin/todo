import Vue from 'vue'
import vuex from 'vuex'
import person from './person'
import plusobj from './plusobj'
Vue.use(vuex)








export default new vuex.Store({
    modules: {
        plusobj,
        person
    }
})
