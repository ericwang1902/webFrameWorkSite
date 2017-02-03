<template>
    <div>
        <el-form :model="supform" :rules="rules" label-position="left" ref="supform" label-width="100px">
            <el-form-item label = "供应商编号" prop = "suppliernum">
                <el-input v-model="supform.suppliernum"></el-input>
            </el-form-item>
            <el-form-item label = "供应商名称" prop = "suppliername">
                <el-input v-model="supform.suppliername"></el-input>
            </el-form-item>
            <el-form-item label = "供应商说明" prop = "supplierdes">
                <el-input v-model="supform.supplierdes"></el-input>
            </el-form-item>
            <el-form-item v-show="isCreateForm" label="选择用户" style="width: 100%">
                <el-table :data = "userList" max-height="450" ref="userListTable" border style="width: 100%" @selection-change="handleSelectionChange">
                    <el-table-column type="selection" width="55">
                    </el-table-column>
                    <el-table-column prop="username" label="用户名称">
                    </el-table-column>
                </el-table>
            </el-form-item>

            <el-form-item>
                <el-button type="primary" v-show="!isCreateForm" @click="modifySupplier('supform')">提交修改</el-button>
                <el-button type="primary" v-show="isCreateForm" @click="createSupplier('supform')">立即创建</el-button>
                <el-button v-show="isCreateForm" @click="resetForm('supform')">重置</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
import config from "../../../common/config"

export default {
    props: ['isCreateForm','supRow','userList'],
    data () {
        return {
            supform:{
                suppliernum:'',
                suppliername:'',
                supplierdes:'',
                supplieruser:''
            },
            userselection:[],//表示表单选择关联用户的数组，需要转化给supform.supplieruser
            rules:{
                suppliernum:[
                    {required:true,message:'请输入供应商编号',trigger:'blur'}
                ],
                suppliername:[
                    {required:true,message:'请输入供应商名称',trigger:'blur'}
                ],
                supplierdes:[
                    {required:true,message:'请输入供应商描述',trigger:'blur'}
                ]
            }
        }
    },
    watch: {
        supRow:function(){
            console.log("supRow")
            this.initForm();
        },
        isCreateForm:function(){
            console.log("isCreateForm")
            this.initForm();
        }
    },
    mounted(){
        console.log("mounted")
        this.initForm();
    },
    methods: {
        initForm(){
            console.log("isCreateForm:"+this.isCreateForm);
            if(this.isCreateForm){
                this.createInitSupplier();
            }else{
                this.modifyInitSupplier();
            }
        },
        createInitSupplier(){
            console.log("createInitSupplier")
            this.supform.suppliernum ='';
            this.supform.suppliername = '';
            this.supform.supplierdes='';
        },
        modifyInitSupplier(){
            console.log("modifyInitSupplier")
            this.supform = this.supRow;
            //已经维护了用户
           this.userList.forEach((row)=>{
                 this.$refs.userListTable.toggleRowSelection(row,false);
           })
           this.$refs.userListTable.toggleRowSelection(this.userList.find(d => d._id === this.supRow.supplieruser._id), true);
        },
        //修改供应商
        modifySupplier(formName){
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
                    this.supform.supplieruser=this.userselection[0]._id;
                    this.axios.put(config.supplierModify+'/'+this.supRow._id,this.supform)
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
        },
        //创建供应商
        createSupplier(formName){
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
                        //将list的选择转化为supplieruser
                        this.supform.supplieruser=this.userselection[0]._id;
                        this.axios.post(config.supplierCreate,this.supform)
                                  .then((response)=>{
                                        console.log(response)
                                        this.$store.commit('setSupplierDialogStatus',false);
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
        //获取选择项
            handleSelectionChange(val) {          
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
                }else{
                    this.userselection = val;
                }
            }
    }
}
</script>
<style>
</style>