import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';
import Cookies from "js-cookie";

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        token: null,
        profile: null
    },
    mutations: {
        setToken: (state, payload) => {
            state.token = payload
        },
        setProfile: (state, payload) => {
            state.profile = payload
        }
    },
    actions: {
        async registration({commit}, user) {
            console.log(user)
            await axios.post('/api/registration', user).then(({data}) => {
                Cookies.set('Authorization', data.accessToken)
                Cookies.set('refreshToken', data.refreshToken)
                commit('setProfile', data.user)
                commit('setToken', data.accessToken)
            })
        },
        async login({commit}, user) {
            await axios.post('/api/login', user).then(({data}) => {
                Cookies.set('token', data.accessToken)
                Cookies.set('refreshToken', data.refreshToken)
                commit('setProfile', data.user)
                commit('setToken', data.accessToken)
                axios.defaults.headers.common = {'Authorization': `Bearer ${data.accessToken}`}
            })
        },
        async profile({commit}) {
            console.log("from vuex")
            await axios.get('/api/profile').then(({data}) => {
                commit('setProfile', data.user)
            })
        }
    }
})

export default store