import VueRouter from 'vue-router'
import page1 from '../pages/page1.vue'
import page2 from '../pages/page2.vue'
import message1 from '../pages/message/message1.vue'
import message2 from '../pages/message/message2.vue'
import detail from '../pages/message/detail.vue'
// 创建并暴露路由器
// 切换掉的组件默认会被销毁
// 每个组件都会添加router和route属性,router都一样,route不一样
export default new VueRouter({
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


