import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/index'
import Login from '../views/auth/login'
import Registration from '../views/auth/registration'
import Profile from '../views/profile/index'
import Property from '../views/details/Property'
import Car from "../views/details/Car";
//Middleware
import auth from "@/middleware/auth";


Vue.use(VueRouter)


const routes = [
    {path: '/', component: Main, name: 'auth.login'},
    {path: '/auth/login', component: Login},
    {path: '/auth/registration', component: Registration},
    {path: '/profile', component: Profile},
    {path: '/property', component: Property},
    {path: '/car', component: Car},
    // { path: '/foo', component: Foo },
    // { path: '/bar', component: Bar }
]

const router = new VueRouter({
    mode: 'history',
    routes
})

router.beforeEach((to, from, next) => {
    return auth({to, next})
})

export default router