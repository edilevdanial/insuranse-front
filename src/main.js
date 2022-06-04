import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import './quasar'
import axios from 'axios'

Vue.config.productionTip = false

const config = {
  headers: {
    'Content-Type': 'application/json',
  }
}

Vue.prototype.$http = axios.create(config)

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
