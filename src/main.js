import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import './quasar'
import axios from 'axios';
import Cookies from "js-cookie";

Vue.config.productionTip = false
const token = Cookies.get('token')
const config = {
    headers: {
        'Content-Type': 'application/json',
    }
}
if (token) {
    config.headers.Authorization = `Bearer ${token}`
}

axios.
Vue.prototype.$axios = axios.create(config)

new Vue({
    render: h => h(App),
    router,
    store
}).$mount('#app')
