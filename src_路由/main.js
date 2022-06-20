import Vue from 'vue'
import App from './App.vue'
import store from './store'  //引入文件夹会默认引入文件夹里的index文件
import router from './router'
import VueRouter from 'vue-router'
Vue.config.productionTip = false
Vue.use(VueRouter)  //使用router插件
new Vue({
  render: h => h(App),
  store: store,
  router: router,  // 添加router
  beforeCreate() {
    // 全局事件总线就是给全局的Vue对象绑定一个属性值为Vue组件自己, 所有的全局事件都绑定到他的身上,一供其他组件调用,从而实现组件间数据传输
    Vue.prototype.$bus = this // 创建全局事件总线
  }
}).$mount('#app')
