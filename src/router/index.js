import VueRouter from 'vue-router'
import page1 from '../pages/page1.vue'
import page2 from '../pages/page2.vue'
import message1 from '../pages/message/message1.vue'
import message2 from '../pages/message/message2.vue'
import detail from '../pages/message/detail.vue'
// 创建并暴露路由器
// 切换掉的组件默认会被销毁
// 每个组件都会添加router和route属性,router都一样,route不一样
const r = new VueRouter({
    mode: 'hash', //路由模式默认hash, #分隔路径;  history
    routes: [
        {
            path: '/page1',
            name: 'page1',
            component: page1,
            children: [  //子路由
                {
                    path: 'message1',  //无斜杠
                    component: message1,
                    children: [
                        {
                            name: 'detail',
                            path: 'detail/:id',  // :id为展位参数-> detail/1 ->  console.log(this.$route.params.id)
                            component: detail,
                            // props: true, // 把所有接到的params参数传给props, 再组件中可以直接使用id的props等参数
                            props({ query, params }) {  //直接把query和params传给props
                                return { ...query, ...params }
                            },
                            meta: { auth: true, title: 'detail1' },
                            // 单个路由的路由守卫,只有前置
                            beforeEnter(to, from, next) {
                                console.log(to, from)
                                next()
                            }
                        }
                    ]
                },
                {
                    path: 'message2',
                    component: message2
                }
            ]
        },
        {
            path: '/page2',
            component: page2
        }
    ]
})

//路由守卫
r.beforeEach(function (to, from, next) {  //每次路由切换之前调用
    //to 点击的路由, from当前路由

    if (to.meta.auth) {
        console.log(to, to.path)
    }
    next()  //这句话之后才会访问对应路由
})
r.afterEach(function (to, from) {  //路由访问之后调用
    document.title = to.query.id2 || 'todo'
})
export default r
