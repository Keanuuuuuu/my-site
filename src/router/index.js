import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'

Vue.use(VueRouter)

const router = new VueRouter({
  routes,
  // 主要是routes这个配置，这个配置的值为一个数组，其中每一个元素对应一个规则
  mode:"history"
})

export default router
