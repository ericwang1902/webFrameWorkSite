import Vue from 'vue'
import Vuex from 'vuex'

// 告诉 vue “使用” vuex
Vue.use(Vuex)

var userInfo = {
    username: "",
    password: "",
    userid:""
}
var dialogStatus=false;
var RoleDialogStatus =false;
var UserDialogStatus=false;
var PasswordDialogStatus = false;

// 创建一个对象来保存应用启动时的初始状态
const state = {
    user: userInfo,//登录用户信息
    dialogStatus:dialogStatus,//菜单form状态
    RoleDialogStatus:RoleDialogStatus,//角色form的对话框的状态
    UserDialogStatus:UserDialogStatus,//用户form的对话框的状态
    PasswordDialogStatus:PasswordDialogStatus//用户修改密码的对话框的状态
}

// 创建一个对象存储一系列我们接下来要写的 mutation 函数
const mutations = {
    // TODO: 放置我们的状态变更函数
    setUserInfo: function (state, userinfo) {
        state.user.username = userinfo.username;
        state.user.password = userinfo.password;
        state.user.userid=userinfo.userid;
    },
    //设置对话框的显示状态
    setDialogStatus:function(state,status){
        state.dialogStatus = status;
    },
    //设置角色form的对话框状态
    setRoleDialogStatus:function(state,status){
        state.RoleDialogStatus = status;
    },
    //设置用户form的对话框的状态
    setUserDialogStatus:function(state,status){
        state.UserDialogStatus = status;
    },
    //用户密码修改form的对话框状态
    setPasswordDialogStatus:function(state,status){
        state.PasswordDialogStatus = status;
    }
}

const getters = {
    getUserInfo: state => { return state.user },
    getDialogStatus:state=> {return state.dialogStatus},
    getRoleDialogStatus:state=>{return state.RoleDialogStatus},
    getUserDialogStatus:state=>{return state.UserDialogStatus},
    getPasswordDialogStatus:state=>{return state.PasswordDialogStatus}

}

// 整合初始状态和变更函数，我们就得到了我们所需的 store
// 至此，这个 store 就可以连接到我们的应用中
export default new Vuex.Store({
    state,
    getters,
    mutations
})
