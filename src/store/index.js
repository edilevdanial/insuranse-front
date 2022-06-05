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
    getters: {
        getProfile: (state) => state.profile
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
                Cookies.set('token', data.accessToken)
                Cookies.set('token', data.refreshToken)
                commit('setProfile', data.user)
                commit('setToken', data.accessToken)
            })
        },
        async login({commit}, {user, callback}) {
            await axios.post('/api/login', user).then(({data}) => {
                Cookies.set('token', data.accessToken)
                Cookies.set('refreshToken', data.refreshToken)
                commit('setProfile', data.user)
                commit('setToken', data.accessToken)
                axios.defaults.headers.common = {'Authorization': `Bearer ${data.accessToken}`}
                callback()
            }).catch(e => {
                console.log(e)
            })
        },
        async profile({commit}) {
            await axios.get('/api/profile').then(({data}) => {
                commit('setProfile', data)
                commit('setToken', Cookies.get('token'))
            })
        }
    },
})

export default store