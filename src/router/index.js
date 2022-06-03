import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/index'
import Login from '../views/auth/login'
import Registration from '../views/auth/registration'
import Profile from '../views/profile/index'

Vue.use(VueRouter)


const routes = [
    {path:'/',component:Main},
    {path:'/auth/login',component:Login},
    {path:'/auth/registration',component:Registration},
    {path:'/profile',component:Profile}
    // { path: '/foo', component: Foo },
    // { path: '/bar', component: Bar }
]

const router = new VueRouter({
    routes
})

export default router