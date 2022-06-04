import Cookies from 'js-cookie'
import Vue from "vue";

const createTool = (name) => (
    {
        get: () => Cookies.get(name) || null,
        set: (value) => Cookies.set(name, value),
        clear: () => Cookies.remove(name)
    }
)

export default function () {
    const tool = {
        token: createTool("token"),
        refreshToken: createTool("refreshToken"),
    }
    Vue.prototype.$cookie = tool
}
