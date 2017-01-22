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
        <!--<el-menu-item index="password">修改密码</el-menu-item>
        <el-menu-item index="modify">修改资料</el-menu-item>
        <hr>-->
        <el-menu-item index="exit">退出登录</el-menu-item>
      </el-submenu>
    </el-menu>
  </el-col>
</el-row>

<el-row style="height: 100%">
<el-col :span="4" style="height: 100%" >

<!--官方menu 结合router的使用方法，出现menu-item和跳转不匹配的情况-->
<!--<el-menu style="height: 100%" :router="isRouter" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
      <el-submenu v-for="(menu, index) in menus" :index="index.toString()">
        <template slot="title"><i class="el-icon-message"></i>{{menu.menuName}}</template>
          <el-menu-item  v-for="(func,index2) in menu.funcList" :index="index.toString()+'-'+index2.toString()" :route="{path: func.funcLink}">{{func.funcName}}</el-menu-item>
      </el-submenu>
</el-menu>-->
<!--end 官方menu-->

<el-menu style="height: 100%;border-radius: 0px"  theme="dark" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
      <el-submenu v-for="(menu, index) in menus" :index="index.toString()">
        <template slot="title"><i class="el-icon-message"></i>{{menu.menuName}}</template>
         <router-link style="text-decoration:none" v-for="(func,index2) in menu.funcList" :to="func.funcLink">
           <el-menu-item   :index="index.toString()+'-'+index2.toString()" >{{func.funcName}}</el-menu-item>
         </router-link>
      </el-submenu>
</el-menu>



</el-col>
<el-col :span="20" style="height: 100%" >
  <router-view></router-view>
</el-col>

</el-row>
</div>
</template>

<script>
import config from './common/config'

  export default {
    name: 'app',
    data() {
      return {
        isRouter:true,
        menus: []
      }
    },
    components: {
    },
    created: function () {
       console.log("userinfo:"+this.$store.getters.getUserInfo.userid)
      this.axios.get(config.GetUserInfo+'/'+this.$store.getters.getUserInfo.userid)
        .then((response) => {
         
          var user = response.data;
         //  console.log("user:"+JSON.stringify(user))
          var roles= user.role;
          
          //role其实是一个数组
          for(var i=0;i<roles.length;i++){
            //concat就是合并数组
            this.menus=this.menus.concat(roles[i].menuList);
          }
          
          
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
        var usrinfo ={
          username:this.$store.getters.getUserInfo.username,
          password:this.$store.getters.getUserInfo.password
        }
        if(key=="exit"){
          console.log(usrinfo)
          this.axios.post(config.LogoutURL,usrinfo)
          .then((response)=>{
            console.log(response);
           if(response.data.authresult==false)
           {
              this.$store.commit('setUserInfo',{});
              this.$router.push('/');
           }

          })
          .catch(function(err){
            console.log(err)
          })
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