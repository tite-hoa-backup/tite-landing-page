import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router'
import VTooltip from 'v-tooltip'
import {globalVar} from '@/globalVar'

import '@/style/style.scss'

Vue.use(VTooltip)

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
