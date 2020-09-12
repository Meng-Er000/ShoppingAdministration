import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
// 安装vue-table-with-tree-grid插件
import ZkTable from 'vue-table-with-tree-grid'
// 导入vue-quill-editor依赖
import VueQuillEditor from 'vue-quill-editor'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
// 导入全局样式表
import './assets/css/global.css'
import axios from 'axios'
// 引入echarts
import echarts from 'echarts'
Vue.use(VueQuillEditor)
Vue.prototype.$echarts = echarts
// 配置请求的跟路径
axios.defaults.baseURL = 'http://127.0.0.1:8888/api/private/v1/'
// 通过axios的请求拦截器来添加token，保证拥有获取数据的权限
// 在请求头中添加一个Authorrization，来保存token的数值
axios.interceptors.request.use(config => {
  config.headers.Authorization = window.sessionStorage.getItem('token')
  // 必须要return config才行。这是固定的写法
  return config
})
Vue.prototype.$http = axios

Vue.config.productionTip = false
Vue.component('tree-table', ZkTable)

// 定义一个全局的时间过滤器
Vue.filter('dataFormat', (origin) => {
  const data = new Date(origin)
  // 然后再进行时分秒的转换
  const y = data.getFullYear()
  const m = (data.getMonth() + 1 + '').padStart(2, '0')
  const d = (data.getDate() + '').padStart(2, '0')
  const hh = (data.getHours() + '').padStart(2, '0')
  const mm = (data.getMinutes() + '').padStart(2, '0')
  const ss = (data.getSeconds() + '').padStart(2, '0')
  return `${y}-${m}-${d} ${hh}:${mm}:${ss}`
})
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
