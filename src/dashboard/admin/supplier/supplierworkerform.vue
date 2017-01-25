<template>
    <div>
        <el-form :model="supplierworkerform" label-position = "left" ref="supplierworkerform" label-width="100px">
            <el-form-item label = "供应商名称" prop = "suppliername">
                <el-input disabled v-model="supRow.suppliername"></el-input>
            </el-form-item>
            <el-form-item  label="关联用户" style="width: 100%">
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
                <el-button type="primary" @click="ModifySpplierWorkerForm('supplierworkerform')">提交修改</el-button>
                <el-button @click="resetForm('supplierworkerform')">重置</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
import config from '../../../common/config'
export default {
    props: ['supRow','userList'],
    data () {
        return {
            supplierworkerform:{
                workers:[]
            },
            wokerselection:[]
        }
    },
    mounted () {
        this.InitForm();
    },
    methods: {
        //初始化form
        InitForm(){
             this.userList.forEach((row)=>{
                  this.$refs.userListTable.toggleRowSelection(row,false);
              })
              for(var i = 0;i<this.supRow.workers.length;i++){
                  this.$refs.userListTable.toggleRowSelection(this.userList.find(d => d._id === this.supRow.workers[i]._id), true);
              }
               
        },
        //修改供应商店员
        ModifySpplierWorkerForm(formName){
            this.$refs[formName].validate((valid)=>{
                if(valid){
                    var length = this.wokerselection.length;
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
                    }else{
                        for(var i=0;i<this.wokerselection.length;i++){
                            this.supplierworkerform.workers.push(this.wokerselection[i]._id);
                        }

                        this.axios.put(config.supplierModify+'/'+this.supRow._id,this.supplierworkerform)
                                  .then((response)=>{
                                      this.$store.commit('setSupplierDialogStatus',false);
                                  })
                                  .catch(function(err){
                                      console.log(err);
                                  })
                    }
                }
            })
        },
        //重置表单
        resetForm(formName){
             this.$refs[formName].resetFields();
             this.userList.forEach((row)=>{
                this.$refs.userListTable.toggleRowSelection(row,false);
                })
        },
        //选择店员用户
        handleSelectionChange(val){
            this.wokerselection=val;
        }

    }
}
</script>
<style>
</style>
