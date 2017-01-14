import Vue from 'vue'
import Vuex from 'vuex'

// 告诉 vue “使用” vuex
Vue.use(Vuex)

var userInfo = {
    username: "",
    password: ""
}

// 创建一个对象来保存应用启动时的初始状态
const state = {
    user: userInfo//登录用户信息
}

// 创建一个对象存储一系列我们接下来要写的 mutation 函数
const mutations = {
    // TODO: 放置我们的状态变更函数
    setUserInfo: function (state, userinfo) {
        state.user.username = userinfo.username;
        state.user.password = userinfo.password;
    }
}

const getters = {
    getUserInfo: state => { return state.user }

}

// 整合初始状态和变更函数，我们就得到了我们所需的 store
// 至此，这个 store 就可以连接到我们的应用中
export default new Vuex.Store({
    state,
    getters,
    mutations
})
