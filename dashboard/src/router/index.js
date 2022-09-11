// import { defineAsyncComponent } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home/HomeView.vue')
  },
  {
    path: '/feedbacks',
    name: 'Feedbacks',
    component: () => import('@/views/Feedbacks/FeedbacksView.vue')
    // meta: {
    //   hasAuth: true
    // }
  },
  {
    path: '/credentials',
    name: 'Credentials',
    component: () => import('@/views/Credentials/CredentialsView.vue'),
    meta: {
      hasAuth: true
    }
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: { name: 'Home' }
  }
]

const router = createRouter({
  history: createWebHistory('/'),
  routes
})

export default router
