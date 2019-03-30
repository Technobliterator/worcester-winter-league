import Vue from 'vue'
import App from './App.vue'

import vueScrollTo from 'vue-scrollto'
Vue.use(vueScrollTo)

new Vue({
  el: '#app',
  render: h => h(App)
})