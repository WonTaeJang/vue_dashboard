import { createWebHistory, createRouter } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import('@/components/DashBoard.vue'),
  },
  {
    path: "/drag/0",
    component: () => import('@/components/DragDrop/DragDrop.vue'),
  },
  {
    path: "/drag/1",
    component: () => import('@/components/DragDrop/DragDrop2.vue'),
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