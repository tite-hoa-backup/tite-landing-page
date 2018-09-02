import Vue from 'vue'
import VueRouter from 'vue-router'
import Meta from 'vue-meta'

import Home from '@/pages/Home'
import Geolocate from '@/components/tos/Geolocate'
import Privacy from '@/components/tos/Privacy'
import Terms from '@/components/tos/Terms'

Vue.use(VueRouter)
Vue.use(Meta)

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '*',
      redirect: '/'
    },
    {
      path: '/tos/geolocate',
      name: 'geolocate',
      component: Geolocate
    },
    {
      path: '/tos/privacy',
      name: 'privacy',
      component: Privacy
    },
    {
      path: '/tos/terms',
      name: 'terms',
      component: Terms
    },
  ]
})

export default router
