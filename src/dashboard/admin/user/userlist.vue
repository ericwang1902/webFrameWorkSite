<template>
    <div>
        <el-card class="box-card" style="margin: 10px">
            <div slot="header" class="clearfix">
                <el-button style="float: right; " @click="createUser()" type="primary">添加用户</el-button>
            </div>

            <el-table border :data="usersArray" style="width: 100%">
                <el-table-column type="expand">
                    <template scope="props1">
                        <div>
                        
                        <el-table :data="props1.row.role" style="width: 100%">                       
                            <el-table-column label="角色名称" prop="roleName"></el-table-column>
                            <el-table-column label="角色说明" prop="roleDes"></el-table-column>
                            <el-table-column label="角色id" prop="_id"></el-table-column>
                        </el-table>
                        </div>
                    </template>
                    </el-table-column>
                 
                 <el-table-column label="用户名" prop="username">
                 </el-table-column>
                 <el-table-column label="昵称" prop="nickname" >
                 </el-table-column>
                 <el-table-column label="手机号" prop="mobile" >
                 </el-table-column>
                 <el-table-column label="省" prop="district.province">
                 </el-table-column>
                  <el-table-column label="市" prop="district.city" >
                 </el-table-column>
                  <el-table-column label="区县" prop="district.district" >
                 </el-table-column>
                 <el-table-column label="微信" prop="openid" >
                     
                 </el-table-column>
                 <el-table-column  width="150" label="操作">
                        <template scope="props">
                            <el-button type="text" @click="modifyUser(props.row)" size="small">编辑</el-button>
                            <el-button type="text" @click="resetPassword(props.row)" size="small">密码重置</el-button>
                        </template>
                 </el-table-column>
            </el-table>
        </el-card>
<!--dialog start-->
<el-dialog :title="title" v-model="$store.getters.getUserDialogStatus"  @close="ondialogclose" >
    <userform  :isCreateForm="isCreateForm" :userRow="rowData" :roleList="roleList" :districtList="districtList"></userform>
    
</el-dialog>
<el-dialog title="修改密码" v-model="$store.getters.getPasswordDialogStatus"  @close="onpsddialogclose" >
    <passwordform :userRow="rowData"></passwordform>  
</el-dialog>

<!--dialog end-->
    </div>

    
</template>
<script>
import config from '../../../common/config'
import userform from './userform'
import passwordform from './passwordform'

export default {
    components:{
        userform,
        passwordform
    },
    data () {
        return {
            //系统内所有后台用户的信息，构成数组
            usersArray:[],
            
            title:"添加用户",
            isCreateForm:true,
            rowData:{},
            roleList:[],
            districtList:[]
        }
    },
    created () {
        //在登录开始，获取后台用户信息
        var userid = this.$store.getters.getUserInfo.userid;
        this.getUsers(userid);
        this.getRoleList();
        this.getDistrictList();
    },
    methods: {
        hasopenid:function(row){
            if(row.openid){
                return true;
            }else
            {
                return false;
            }
        },
        //获取后台用户信息
        getUsers:function(userid){
            this.axios.get(config.GetUserInfo + '?userid=' + userid)
                        .then((response)=>{
                            this.usersArray = response.data;
                            console.log('---------'+JSON.stringify(response.data))
                        })
                        .catch(function(err){
                            console.log(err)
                        })
        },
        //获取所有role清单
        getRoleList:function(){
            this.axios.get(config.roleList)
                      .then((response)=>{
                          this.roleList = response.data;//设置给form的属性
                          //console.log("获取所有的role清单")
                          //console.log(JSON.stringify(this.roleList))
                      })
                      .catch(function(err){
                          console.log(err)
                      })
        },
        //获取所有district的列表
        getDistrictList:function(){
            this.axios.get(config.district)
                      .then((response)=>{
                          this.districtList = response.data;
                          //console.log("获取所有的district清单"+JSON.stringify(this.districtList));
                      })
                      .catch(function(err){
                          console.log(err);
                      })
        },
        //修改用户
        modifyUser(currentRow){
            console.log("修改用户")
            this.rowData = currentRow;
            this.$store.commit('setUserDialogStatus',true);
            this.title="修改用户";
            this.isCreateForm = false;
            
        },
        //重置密码
        resetPassword(currentRow){
            this.rowData = currentRow;
            this.$store.commit('setPasswordDialogStatus',true);           
            console.log("修改密码："+JSON.stringify(currentRow))
        },
        //对话框关闭回调事件
        ondialogclose(){
            console.log("对话框关闭")
            this.getUsers(this.$store.getters.getUserInfo.userid);
            this.$store.commit('setUserDialogStatus',false);
           
        },
        onpsddialogclose(){
            this.getUsers(this.$store.getters.getUserInfo.userid);
            this.$store.commit('setPasswordDialogStatus',false)
        },
        //创建用户按钮
        createUser(){
            console.log("创建用户")
            this.$store.commit('setUserDialogStatus',true);
            this.isCreateForm = true;
        }
    }
}
</script>
<style>
</style>