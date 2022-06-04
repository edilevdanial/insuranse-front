import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        token:null,
        profile:null
    },
    mutations: {
        setToken:(state,payload)=>{
            state.token = payload
        },
        setProfile:(state,payload)=>{
            state.profile = payload
        }
    },
    actions:{
        async registration({commit}, data){
            console.log(data)
           await this.$http.post('/registration',data).then(response=>{
                console.log(response)
                commit('setToken',response.token)
            })
        }
    }
})

export default store