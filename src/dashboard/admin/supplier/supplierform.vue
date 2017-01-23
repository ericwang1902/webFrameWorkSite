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
            <el-form-item>
                <el-button type="primary" v-show="!isCreateForm" @click="modifySupplier('supform')">提交修改</el-button>
                <el-button type="primary" v-show="isCreateForm" @click="createSupplier('supform')">立即创建</el-button>
                <el-button @click="resetForm('supform')">重置</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
import config from "../../../common/config"

export default {
    props: ['isCreateForm','supRow'],
    data () {
        return {
            supform:{
                suppliernum:'',
                suppliername:'',
                supplierdes:''
            },
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
    methods: {
        //修改供应商
        modifySupplier(formName){

        },
        //创建供应商
        createSupplier(formName){
            this.$refs[formName].validate((valid)=>{
                if(valid){
                    this.axios.post(config.supplierCreate,this.supform)
                    .then((response)=>{
                        console.log(response)
                        this.$store.commit('setSupplierDialogStatus',false);
                    })
                }
            })
        },
        //重置表单
        resetForm(formName){
            this.$refs[formName].resetFields();
        }
    }
}
</script>
<style>
</style>