import { createWebHistory, createRouter } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import('@/components/HelloWorld.vue'),
  },
  {
    path: "/board",
    component: () => import('@/components/DashBoard.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; 