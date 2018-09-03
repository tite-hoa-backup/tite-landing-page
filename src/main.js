import Vue from 'vue'
import axios from 'axios'
import App from '@/App.vue'
import router from '@/router'
import VueI18n from 'vue-i18n'
import VTooltip from 'v-tooltip'
import VueScrollTo from 'vue-scrollto'
import VueProgressBar from 'vue-progressbar'
import VueScrollReveal from 'vue-scroll-reveal'
import {globalVar} from '@/globalVar'

Vue.config.productionTip = false
Vue.prototype.$http = axios

// Kakao.init(process.env.KAKAO_KEY)

Vue.use(VueI18n)
Vue.use(VTooltip)
Vue.use(VueScrollTo)
Vue.use(VueScrollReveal)
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
