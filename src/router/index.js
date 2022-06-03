import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/index'
import Login from '../views/auth/login'

Vue.use(VueRouter)


const routes = [
    {path:'/',component:Main},
    {path:'/auth/login',component:Login}
    // { path: '/foo', component: Foo },
    // { path: '/bar', component: Bar }
]

const router = new VueRouter({
    routes
})

export default router