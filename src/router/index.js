import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './router'

// 解决重复点击路由报错的问题
const originalPush = VueRouter.prototype.push

VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'hash',
  routes: routes
})

export default router
