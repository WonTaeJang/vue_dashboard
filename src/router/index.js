import { createWebHistory, createRouter } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import('@/components/DashBoard.vue'),
  },
  
  {
    path: "/bind/0",
    component: () => import('@/components/StoreBind/StoreBinding.vue'),
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
    path: "/drag/2",
    component: () => import('@/components/DragDrop/DragDrop3.vue'),
  },
  {
    path: "/drag/3",
    component: () => import('@/components/DragDrop/SortSave.vue'),
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