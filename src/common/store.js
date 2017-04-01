import Vue from 'vue'
import Vuex from 'vuex'

// 告诉 vue “使用” vuex
Vue.use(Vuex)

var userInfo = {
    username: "",
    password: "",
    userid:"",
    userRole:[],
    userRegion:""
}
var dialogStatus=false;
var RoleDialogStatus =false;
var UserDialogStatus=false;
var PasswordDialogStatus = false;
var SupplierDialogStatus = false;
var GoodsDialogStatus = false;
var SuiteDialogStatus = false;
var DistrictDialogStatus = false;
var RegionDialogStatus = false;
var CourierDialogStaus = false;

// 创建一个对象来保存应用启动时的初始状态
const state = {
    user: userInfo,//登录用户信息
    dialogStatus:dialogStatus,//菜单form状态
    RoleDialogStatus:RoleDialogStatus,//角色form的对话框的状态
    UserDialogStatus:UserDialogStatus,//用户form的对话框的状态
    PasswordDialogStatus:PasswordDialogStatus,//用户修改密码的对话框的状态
    SupplierDialogStatus:SupplierDialogStatus,//供应商新建form的状态
    GoodsDialogStatus:GoodsDialogStatus,//商品新建form的状态
    SuiteDialogStatus:SuiteDialogStatus,//套餐form的状态
    DistrictDialogStatus:DistrictDialogStatus,//区县form的状态
    RegionDialogStatus:RegionDialogStatus,//配送区域的form状态
    CourierDialogStaus:CourierDialogStaus//配送员的form的状态
}

// 创建一个对象存储一系列我们接下来要写的 mutation 函数
const mutations = {
    // TODO: 放置我们的状态变更函数
        setUserInfo: function (state, userinfo) {
        state.user.username = userinfo.username;
        state.user.password = userinfo.password;
        state.user.userid=userinfo.userid;
        state.user.userRole = userinfo.userRole;
        state.user.userRegion = userinfo.userRegion;
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
    },
    //新建供应商的form的对话框状态
    setSupplierDialogStatus:function(state,status){
        state.SupplierDialogStatus = status;
    },
    //新建商品的form的对话框状态
    setGoodsDialogStatus:function(state,status){
        state.GoodsDialogStatus = status;
    },
    //新建套餐的form的对话框状态
    setSuiteDialogStatus:function(state,status){
        state.SuiteDialogStatus = status;
    },
    //新建区县的form的对话框状态
    setDistrictDialogStatus:function(state,status){
        state.DistrictDialogStatus = status;
    },
    //新建配送区域的form的对话框状态
    setRegionDialogStatus:function(state,status){
        state.RegionDialogStatus = status;
    },
    //新建配送员的form的对话框状态
    setCourierDialogStaus:function(state,status){
        state.CourierDialogStaus = status;
    }
}

const getters = {
    getUserInfo: state => { return state.user },
    getDialogStatus:state=> {return state.dialogStatus},
    getRoleDialogStatus:state=>{return state.RoleDialogStatus},
    getUserDialogStatus:state=>{return state.UserDialogStatus},
    getPasswordDialogStatus:state=>{return state.PasswordDialogStatus},
    getSupplierDialogStatus:state=>{return state.SupplierDialogStatus},
    getGoodsDialogStatus:state=>{return state.GoodsDialogStatus},
    getSuiteDialogStatus:state=>{return state.SuiteDialogStatus},
    getDistrictDialogStatus:state=>{return state.DistrictDialogStatus},
    getRegionDialogStatus:state=>{return state.RegionDialogStatus},
    getCourierDialogStaus:state=>{return state.CourierDialogStaus}

}

// 整合初始状态和变更函数，我们就得到了我们所需的 store
// 至此，这个 store 就可以连接到我们的应用中
export default new Vuex.Store({
    state,
    getters,
    mutations
})
