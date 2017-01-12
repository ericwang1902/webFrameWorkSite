<template>
  <div style="height: 100%">
<el-row class="header" type="flex" align="middle">
  <el-col :span="3" class="logo">管理后台</el-col>
  <el-col :span="18">
  </el-col>
  <el-col :span="3">
    <el-menu theme="dark" default-active="1" mode="horizontal" @select="jumpTo">
      <el-submenu index="1">
        <template slot="title">我的工作台</template>
        <el-menu-item index="password">修改密码</el-menu-item>
        <el-menu-item index="modify">修改资料</el-menu-item>
        <hr>
        <el-menu-item index="exit">退出登录</el-menu-item>
      </el-submenu>
    </el-menu>
  </el-col>
</el-row>

<el-row style="height: 100%">
<el-col :span="8" style="width: 225px;height: 100%" >
<el-menu style="height: 100%" default-active="2" :router="true" class="el-menu-vertical-demo"  @open="handleOpen" @close="handleClose">
<div v-for="(menu, index) in menus">
  <el-submenu :index="index.toString()" >
    <template slot="title">{{menu.menuName}}</template>
    <div v-for="(func,index2) in menu.funcList">
      <el-menu-item :index="index.toString()+'-'+index2.toString()" :route="{path: func.funcLink,query:{url:func.funcLink}}">{{func.funcName}}</el-menu-item>
    </div>
  </el-submenu>
</div>

</el-menu>
</el-col>
<el-col :span="16">
  <router-view></router-view>
</el-col>

</el-row>
</div>
</template>

<script>
  export default {
    name: 'app',
    data() {
      return {
        menus: []
      }
    },
    components: {
    },
    created: function () {
      this.axios.get('http://localhost:3000/sysmanage/user')
        .then((response) => {
          this.menus = response.data[0].role[0].menuList;
          console.log(this.menus)
        }
        )
        .catch(function (error) {
          console.log(error);
        });
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      jumpTo(key, keypath) {
        if(key=="exit"){
          
        }
        console.log("key:" + key)
        console.log("keypath:" + keypath)
      }
    }
  }
</script>

<style>
.header{
  background-color: #324057;
  color: #c0ccda;
}
</style>