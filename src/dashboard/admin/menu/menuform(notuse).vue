<template>
    <el-form :model="menuform" :rules="rules" label-position="left" ref="menuform" label-width="100px">
        <el-form-item label="菜单名称" prop="menuName">
            <el-input v-model="menuform.menuName"></el-input>
        </el-form-item>

        <el-form-item label="选择功能" style="width: 100%" >
            <el-table :data="funcList"   max-height="450" border style="width: 100%" @selection-change="handleSelectionChange">
                <el-table-column type="selection" width="55">
                </el-table-column>

                <el-table-column prop="funcName" label="功能名称">
                </el-table-column>
            </el-table>
        </el-form-item>

        <el-form-item>
            <el-button type="primary" @click="submitForm('menuform')">立即创建</el-button>
            <el-button @click="resetForm('menuform')">重置</el-button>
        </el-form-item>
    </el-form>

    
</template>


<script>
import config from '../../../common/config'

    export default {
        data() {
            return {
                funcList: [],//用来显示的功能列表
                menuform: {
                    menuName: '',            
                    funcSelection: []
                },
                //rules几要素：1.form中的rules；2.item中的prop；3.data中的rules对象
                rules: {
                    menuName: [
                        { required: true, message: '请输入菜单名称', trigger: 'blur' }
                    ]
                    
                }
            }
        },
        created () {
          this.axios.get(config.funcList)
          .then((response=>{
              this.funcList=response.data;
          //    console.log(response.data)
          }))
          .catch(function(err){
              console.log(err)
          })
        },
        methods: {
            //获取选择项
            handleSelectionChange(val) {
                this.menuform.funcSelection = val;
              //  console.log(JSON.stringify(this.menuform.funcSelection))
            },
              submitForm(formName) {
                    this.$refs[formName].validate((valid) => {
                    if (valid) {
                        if(this.menuform.funcSelection.length==0){
                            //当没有选择功能
                             this.$message({
                                    showClose: true,
                                    message: '请选择至少一个功能！',
                                    type: 'error'
                                    });
                        }
                        else{
                            console.log(JSON.stringify(this.menuform))
                            this.axios.post(config.menuCreate,this.menuform)
                            .then((response)=>{
                                console.log(response)
                            })
                            .catch(function(err){
                                console.log(err)
                            })
                        }
                       
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                    });
                },
                resetForm(formName) {
                    this.$refs[formName].resetFields();
                }
    }
    }
</script>

<style>
</style>