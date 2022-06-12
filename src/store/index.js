import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';
import Cookies from "js-cookie";

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        token: null,
        profile: {},
        insurances: []
    },
    getters: {
        getProfile: (state) => state.profile,
        getInsurances: (state) => state.insurances
    },
    mutations: {
        setToken: (state, payload) => {
            state.token = payload
        },
        setProfile: (state, payload) => {
            state.profile = payload
        },
        setInsurances: (state, payload) => {
            state.insurances = payload
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
        },
        async car({getters}, {car, callback}) {
            car.userId = getters.getProfile.id
            await axios.post('/api/car', car).then(({data}) => {
                console.log(data)
                callback()
            })
        },
        async property({getters}, property) {
            property.userId = getters.getProfile.id
            await axios.post('/api/property', property).then(({data}) => {
                console.log(data)
            })
        },
        async life({getters}, life) {
            life.userId = getters.getProfile.id
            await axios.post('/api/life', life).then(({data}) => {
                console.log(data)
            })
        },
        async allInsurance({commit}) {
            await axios.get('/api/insurances').then(({data}) => {
                commit('setInsurances', data)
            })
        }
    },
})

export default store