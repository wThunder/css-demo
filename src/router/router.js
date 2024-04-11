// 路由懒加载
const components = {
  index: () => import("@/views/index"),
};

const routers = [
  {
    path: "*",
    name: "all",
    redirect: "/index",
  },
  {
    path: "/index",
    name: "index",
    component: components.index,
  },
];
export default routers;
