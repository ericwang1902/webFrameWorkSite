<template>
    <div>
        <el-form :model="supplieruserform" label-position="left" ref="supplieruserform" label-width="100px">
            <el-form-item label = "供应商名称" prop = "suppliername">
                <el-input disabled v-model="supRow.suppliername"></el-input>
            </el-form-item>
            <el-form-item  label="选择用户" style="width: 100%">
                <el-table :data = "userList" max-height="450" ref="userListTable" border style="width: 100%" @selection-change="handleSelectionChange">
                    <el-table-column type="selection" width="55">
                    </el-table-column>
                    <el-table-column prop="nickname" label="昵称">
                    </el-table-column>
                    <el-table-column prop="username" label="用户名称">
                    </el-table-column>
                    
                </el-table>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="ModifySupplieruserform('supplieruserform')">提交修改</el-button>
                <el-button @click="resetForm('supplieruserform')">重置</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
import config from '../../../common/config'

export default {
    props:['supRow','userList'],
    data () {

        return {
            supplieruserform:{
                supplieruser:''
            },
            userselection:[]//表单选择关联用户的数组，需要转化给spplieruserform.suppliseruser

        }
    },
    mounted () {
        console.log(this.supRow)
        this.InitForm();
       
    },
    methods: {
            //初始化form
            InitForm(){
                    //已经维护了用户
                    this.userList.forEach((row)=>{
                        this.$refs.userListTable.toggleRowSelection(row,false);
                    })
                    this.$refs.userListTable.toggleRowSelection(this.userList.find(d => d._id === this.supRow.supplieruser._id), true);
            },
            //重置表单
            resetForm(formName) {
                this.$refs[formName].resetFields();
                this.userList.forEach((row)=>{
                    this.$refs.userListTable.toggleRowSelection(row,false);
                })
            },
            //获取选择项
            handleSelectionChange(val) {
                this.userselection = val;
                //做表单验证提醒
               if(this.userselection.length>1){
                            //当没有选择角色时
                            this.$message({
                                showClose:true,
                                message:'只能选择关联一个后台用户！',
                                type:'error'
                            });
                            this.userList.forEach((row)=>{
                                this.$refs.userListTable.toggleRowSelection(row,false);
                            })
                            this.userselection = [];
                }
            },
            //提交修改
            ModifySupplieruserform(formName){
            console.log(JSON.stringify(this.supRow))
            this.$refs[formName].validate((valid)=>{
                if(valid){
                    var length =this.userselection.length;
                    if(length==0){
                            //当没有选择角色时
                            this.$message({
                                showClose:true,
                                message:'必须选择一个用户！',
                                type:'error'
                            });
                            this.userList.forEach((row)=>{
                                this.$refs.userListTable.toggleRowSelection(row,false);
                            })
                    }else if(length>1){
                            //当选得角色数量过多时
                            this.$message({
                                showClose:true,
                                message:'只能选择一个用户！',
                                type:'error'
                            });
                            this.userList.forEach((row)=>{
                                this.$refs.userListTable.toggleRowSelection(row,false);
                            })
                    }else{
                    this.supplieruserform.supplieruser=this.userselection[0]._id;
                    this.axios.put(config.supplierModify+'/'+this.supRow._id,this.supplieruserform)
                              .then((response)=>{
                                  console.log(response)
                                  this.$store.commit('setSupplierDialogStatus',false);
                              })
                              .catch(function(err){
                                  console.log(err)
                              })
                    }
                }
            })
            }
    }
}
</script>
<style>
</style>