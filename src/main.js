import 'babel-polyfill'
import 'event-source-polyfill'
import 'es6-promise/auto'

import Vue from 'vue'
import axios from 'axios'
import App from '@/App.vue'
import router from '@/routes'
import VueI18n from 'vue-i18n'
import VTooltip from 'v-tooltip'
import VueRippler from 'vue-rippler'
import VueScrollTo from 'vue-scrollto'
import VueProgressBar from 'vue-progressbar'
import {globalVar} from '@/globalVar'

Vue.config.productionTip = false
Vue.prototype.$http = axios

Kakao.init(process.env.KAKAO_KEY)

Vue.use(VueI18n)
Vue.use(VTooltip)
Vue.use(VueRippler)
Vue.use(VueScrollTo)

Vue.use(VueProgressBar, {
  color: '#17C060',
  height: '2px'
})

import {messages} from './added'
window.i18n = new VueI18n({
  locale: 'ko',
  messages
})

new Vue({
  el: '#app',
  i18n,
  router,
  render: h => h(App)
})
