import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/modelselect',
      name: 'ModelSelect',
      component: () => import('@/views/ModelSelect.vue')
    },
    {
      path: '/dataview',
      name: 'DataView',
      component: () => import('@/views/DataView.vue')
    },
    {
      path: '/training',
      name: 'Training',
      component: () => import('@/views/Training.vue')
    },
    {
      path: '/settings',
      name: 'Settings',
      component: () => import('@/views/Settings.vue')
    }
  ]
})

export default router
