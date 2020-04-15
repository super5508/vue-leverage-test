import Vue from 'vue'
import VueRouter from 'vue-router'
import BotDetector from '../views/BotDetector'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'BotDetector',
    component: BotDetector
  },
  {
    path: '/lottery',
    name: 'Lottery',
    component: () => import(/* webpackChunkName: "about" */ '../views/Lottery.vue')
  },
  {
    path: '/Survey',
    name: 'Survey',
    component: () => import(/* webpackChunkName: "about" */ '../views/Survey.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
