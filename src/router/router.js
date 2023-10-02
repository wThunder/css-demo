// 路由懒加载
const components = {
  index: () => import('@/views/index'),
  live1: () => import('@/views/Live1.vue'),
  live2: () => import('@/views/Live2.vue'),
}

const routers = [
  {
    path: '*',
    name: 'all',
    redirect: '/index'
  },
  {
    path: '/index',
    name: 'index',
    component: components.index,
    redirect: '/live1',
    children: [
      {
        path: '/Live1',
        name: 'live1',
        component: components.live1
      },
      {
        path: '/Live2',
        name: 'live2',
        component: components.live2
      }
    ]
  }
]
export default routers
