import Cookies from "js-cookie";
import store from "../store/index";

export default function ({to, next}) {
    if (!Cookies.get('token') && to.path !== '/auth/login') {
        return next({
            path: '/auth/login'
        })
    } else if (Cookies.get('token')) {
        store.dispatch('profile')
    }

    return next();
}