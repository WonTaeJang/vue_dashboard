import { createWebHistory, createRouter } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import('@/components/DashBoard.vue'),
  },
  {
    path: "/drag",
    component: () => import('@/components/DragDrop.vue'),
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