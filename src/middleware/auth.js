import Cookies from "js-cookie";
import store from "../store/index";

export default function ({next}){
    if (!Cookies.get('token')) {
        return next({
            name: 'auth.login'
        })
    }else {
       store.dispatch('profile')
    }

    return next();
}