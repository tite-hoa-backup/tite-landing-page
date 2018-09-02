import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router'
import VTooltip from 'v-tooltip'
import VueScrollTo from 'vue-scrollto'
import VueProgressBar from 'vue-progressbar'
import VueScrollReveal from 'vue-scroll-reveal';
import {globalVar} from '@/globalVar'

import '@/style/style.scss'

Vue.use(VTooltip)
Vue.use(VueScrollTo)
Vue.use(VueScrollReveal)
Vue.use(VueProgressBar, {
  color: '#17C060',
  failedColor: 'red',
  height: '2px'
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
