import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes = [
  {
    path: '/auth/register',
    name: 'Register',
    component: () => import('@/views/auth/Register')//对应视图组件
  }
]

const router = new Router({
  mode: 'history',//完成加载利用historyAPI实现跳转
  routes
})

export default router