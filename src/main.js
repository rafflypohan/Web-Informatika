import Vue from 'vue'
import App from './App.vue'
import router from './router.js'

import Buefy from 'buefy'
import 'buefy/dist/buefy.css'

import './assets/style/_global.scss'
import './assets/style/_navbar.scss'

Vue.use(Buefy,{
  defaultIconPack: 'mdi',
  defaultContainerElement: '#content'
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
