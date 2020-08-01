import Vue from 'vue'
import Router from 'vue-router'
import Login from '../components/login/login.vue'
import Home from '../components/home/home.vue'

Vue.use(Router)

const router = new Router({
  routes: [
    { path: '/login', component: Login },
    { path: '/', redirect: '/login' },
    { path: '/home', component: Home }
  ]
})

// 挂载路由导航守卫，保障访问权限
router.beforeEach((to, from, next) => {
  // to将要访问的路径
  // from跳转到什么路径
  // next是一个函数，表示放行，通过
  // next()放行，next('login')强制跳转
  // 如果用户访问的就是/login这个路径的话，那就可以直接放行
  if (to.path === '/login') return next()
  // 如果token中有数值的话，那就可以直接放行，获取到token中的数值
  const tokenStr = window.sessionStorage.getItem('token')
  if (!tokenStr) return next('/login')
  next()
})

export default router
