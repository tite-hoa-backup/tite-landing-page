import Vue from 'vue'
import VueRouter from 'vue-router'
import Meta from 'vue-meta'

import Home from '@/pages/Home'
import About from '@/pages/About'
import Geolocate from '@/pages/tos/Geolocate'
import Privacy from '@/pages/tos/Privacy'
import Terms from '@/pages/tos/Terms'
import RedirectDL from '@/pages/RedirectDL'

Vue.use(VueRouter)
Vue.use(Meta)

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      component: About,
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
    {
      path: '/app',
      component: RedirectDL,
    },
  ]
})
