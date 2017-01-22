<template>
    <div>
        <el-form :model="userform" :rules="rules" label-position="left" ref="userform" label-width="100px">
            <el-form-item label = "用户名称" prop = "userName">
                <el-input v-model="userform.userName"></el-input>
            </el-form-item>
             <el-form-item v-if="isCreateForm" label = "密码" prop = "passWord">
                <el-input v-model="userform.passWord"></el-input>
            </el-form-item>
            
            <el-form-item label="选择角色" style="width: 100%">
                <el-table :data = "roleList" max-height="450" ref="roleListTable" border style="width: 100%" @selection-change="handleSelectionChange">
                    <el-table-column type="selection" width="55">
                    </el-table-column>
                    <el-table-column prop="roleName" label="角色名称">
                    </el-table-column>
                </el-table>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" v-show="!isCreateForm" @click="modifyUser('userform')">提交修改</el-button>
                <el-button type="primary" v-show="isCreateForm" @click="createUser('userform')">立即创建</el-button>
                <el-button @click="resetForm('userform')">重置</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
import  config from '../../../common/config'

export default {
    props:['isCreateForm','userRow','roleList'],
    data () {
        return {
            userform:{
                userName:'',
                passWord:'',
                roleSelection:[]
            },
            rules:{
                userName:[
                    {required:true,message:'请输入用户名称',trigger:'blur'}
                ],
                passWord:[
                    {required:true,message:'请输入密码',trigger:'blur'}
                ]

            }
        }
    },
    created () {
        console.log("userform start:")
        console.log(this.userRow)
        console.log(this.roleList)
        console.log("userform end")
    },
    watch:{
        userRow:function(){
           if (!this.isCreateForm) {
                this.modifyInitForm()
            }else{
                this.createInitFrom();
                this.userform.userName ="";
            }
        },
           isCreateForm:function(){
                    if(!this.isCreateForm){
                        this.modifyInitForm();
                    }else{
                        this.createInitFrom();
                        this.userform.userName ="";
                    }
                }
    },
    mounted(){
         if (!this.isCreateForm) {
                this.modifyInitForm()
            }else{
                this.createInitFrom();
                this.userform.userName ="";
            }
    },
    methods: {
          //获取选择项
            handleSelectionChange(val) {
                this.userform.roleSelection = val;
                 console.log(JSON.stringify(this.userform.roleSelection))
            },
        //新建用户的表单初始化
        createInitFrom(){
            this.userform.userName='';
            this.roleList.forEach((row)=>{
                    this.$refs.roleListTable.toggleRowSelection(row,false);
            })
        },
        //修改用户的表单初始化
        modifyInitForm(){
            this.userform.userName = this.userRow.username;
            this.roleList.forEach((row)=>{
                this.$refs.roleListTable.toggleRowSelection(row,false);
            })

            console.log("sadfsdfsdfsd:"+JSON.stringify(this.userRow.role.length));

            for (var i = 0; i < this.userRow.role.length; i++) {
                this.$refs.roleListTable.toggleRowSelection(this.roleList.find(d => d._id === this.userRow.role[i]._id), true);
            }

        },
        //重置表单
            resetForm(formName) {
                this.$refs[formName].resetFields();
                this.roleList.forEach((row)=>{
                    this.$refs.roleListTable.toggleRowSelection(row,false);
                })
            },
        //创建用户
        createUser(formName){
            this.$refs[formName].validate((valid)=>{
                if(valid){
                    if (this.userform.roleSelection.length == 0) {
                            //当没有选择功能
                            this.$message({
                                showClose: true,
                                message: '请选择至少一个角色！',
                                type: 'error'
                            });
                        }
                        else{
                            this.axios.post(config.userCreaste,this.userform)
                                    .then((response=>{
                                       console.log(response)
                                       this.$store.commit('setUserDialogStatus',false);
                                       this.userform.userName="";
                                    }))
                                    .catch(function(err){
                                        console.log(err)
                                    })
                        }
                }
            })
        },
        //修改用户
        modifyUser(formName){
                this.$refs[formName].validate((valid)=>{
                    if(valid){
                        if (this.userform.roleSelection.length == 0) {
                            //当没有选择功能
                            this.$message({
                                showClose: true,
                                message: '请选择至少一个角色！',
                                type: 'error'
                            });
                        }
                        else{                     
                            console.log("form role:"+JSON.stringify(this.userRow))
                            this.axios.put(config.userModfiy+'/'+this.userRow._id, this.userform)
                                .then((response) => {
                                    console.log(response)
                                    this.$store.commit('setUserDialogStatus',false)
                                    this.userform.userName ="";
                                })
                                .catch(function (err) {
                                    console.log(err)
                                })
                        }
                    }
                });
            }
    }
}
</script>
<style>
</style>