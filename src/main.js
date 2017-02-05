// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'

import store from './common/store'//vuex配置和相关数据在这里面

import Vueditor from 'vueditor' //富文本编辑器
import "vueditor/dist/css/vueditor.min.css"
// your config here
let config = {
  toolbar: [
    'removeFormat', 'undo', '|', 'elements', 'fontName', 'fontSize', 'foreColor', 'backColor'
  ],
  fontName: [
    { val: "宋体, SimSun", abbr: "宋体" }, { val: "黑体, SimHei", abbr: "黑体" },
    { val: "楷体, SimKai", abbr: "楷体" }, { val: "微软雅黑, 'Microsoft YaHei'", abbr: "微软雅黑" },
    { val: "arial black" }, { val: "times new roman" }, { val: "Courier New" }
  ],
  fontSize: ['12px', '14px', '16px', '18px', '0.8rem', '1.0rem', '1.2rem', '1.5rem', '2.0rem'],
  emoji: ["1f600", "1f601", "1f602", "1f923", "1f603"],
  lang: 'en',
  mode: 'default',
  iframePath: '',
  fileuploadUrl: ''
};
Vue.use(Vueditor, config);



import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

//components
import login from './components/login'//登录组件
import menu from './dashboard/admin/menu/menu'//菜单管理
import role from './dashboard/admin/role/role'//角色管理
import user from './dashboard/admin/user/user'//用户列表

import supplier from './dashboard/admin/supplier/supplier'//供应商管理
import supplierlist from './dashboard/admin/supplier/supplierlist'//供应商列表
import supplieruser from './dashboard/admin/supplier/supplieruser'//绑定供应商后台用户
import supplierworker from './dashboard/admin/supplier/supplierworker'//绑定供应商的店员，用来接收订单通知
import suppliergoods from './dashboard/admin/supplier/suppliergoods'//创建该供应商提供的商品


import goods from './dashboard/admin/goods/goods'//商品

import suite from './dashboard/admin/suite/suitelist'//套餐




import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(ElementUI)

Vue.use(VueRouter)
Vue.use(VueAxios, axios)

// /* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   template: '<App/>',
//   components: { App }
// })

// 0. 如果使用模块化机制编程，導入Vue和VueRouter，要调用 Vue.use(VueRouter)

// 1. 定义（路由）组件。
// 可以从其他文件 import 进来
// const Foo = { template: '<div>foo</div>' }
// const Bar = { template: '<div>bar</div>' }

// 2. 定义路由
// 每个路由应该映射一个组件。 其中"component" 可以是
// 通过 Vue.extend() 创建的组件构造器，
// 或者，只是一个组件配置对象。
// 我们晚点再讨论嵌套路由。
const routes = [
  {
    path: '/dashboard',
    component: App,
    meta: { title: '控制台' },
    children: [
      { path: 'menu', component: menu, meta: { title: '菜单管理' } },
      { path: 'role', component: role, meta: { title: '角色管理' } },
      { path: 'user', component: user, meta: { title: '用户管理' } },
      {
        path: 'supplier',
        component: supplier,
        meta: { title: '供应商管理' },
        children: [
          { path: 'supplierlist', component: supplierlist, meta: { title: "供应商列表" } },
          { path: 'supplieruser', component: supplieruser, meta: { title: "设置供应商后台用户" } },//作废
          { path: 'supplierworker', component: supplierworker, meta: { title: "绑定供应商店员" } },//作废
          { path: 'suppliergoods', component: suppliergoods, meta: { title: "管理商品" } }//作废

        ]
      },
      {
        path: 'goods', component: goods, meta: { title: '商品管理' }
      },
      {
        path: 'suite', component: suite, meta: { title: '套餐管理' }
      }
    ]
  },
  {
    path: '/',
    component: login,
    meta: { title: '管理后台' }
  }
]

// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
const router = new VueRouter({
  routes // （缩写）相当于 routes: routes
})

router.afterEach(route => {
  document.title = route.meta.title;
})

// 4. 创建和挂载根实例。
// 记得要通过 router 配置参数注入路由，
// 从而让整个应用都有路由功能
const app = new Vue({
  router,
  store
}).$mount('#app')
