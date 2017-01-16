<template>
    <el-form :model="menuform" :rules="rules" label-position="left" ref="menuform" label-width="100px">
        <el-form-item label="菜单名称" prop="menuName">
            <el-input v-model="menuform.menuName"></el-input>
        </el-form-item>

        <el-form-item label="选择功能" style="width: 100%" >
<el-table :data="funcList" max-height="450" ref="funcListTable" border style="width: 100%" @selection-change="handleSelectionChange">
<el-table-column type="selection" width="55">
</el-table-column>

<el-table-column prop="funcName" label="功能名称">
</el-table-column>
</el-table>
</el-form-item>

<el-form-item>
    <el-button type="primary" v-show="!isCreateForm" @click="modifyForm('menuform')">提交修改</el-button>
    <el-button type="primary" v-show="isCreateForm" @click="createMenu('menuform')">立即创建</el-button>
    <el-button @click="resetForm('menuform')">重置</el-button>
</el-form-item>
</el-form>

</template>


<script>
    import config from '../../../common/config'

    export default {
        props: ['isCreateForm', 'row', 'funcList'],
        data() {
            return {
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
        watch: {
            row: function () {
                if (!this.isCreateForm) {
                    this.ModifyInitForm()
                }else{
                    this.CreateInitFrom();
                     this.menuform.menuName ="";
                }

            },
            isCreateForm:function(){
               if (!this.isCreateForm) {
                    this.ModifyInitForm()
                }else{
                    this.CreateInitFrom();
                    this.menuform.menuName ="";
                }
            }
        },
        mounted: function () {
            if (!this.isCreateForm) {
                this.ModifyInitForm()
            }else{
                this.CreateInitFrom();
                this.menuform.menuName ="";
            }
        },
        methods: {
            CreateInitFrom(){
                this.menuform.menuName ="";
                this.funcList.forEach((row) => {
                    this.$refs.funcListTable.toggleRowSelection(row, false);//将符合条件的表行置为false，作为下一个for的初始化。
                })
            },
            ModifyInitForm() {
                this.menuform.menuName = this.row.menuName;
                console.log("watch:" + JSON.stringify(this.row))
                this.funcList.forEach((row) => {
                    //this.$refs.funcListTable.toggleRowSelection(row, true);//将符合条件的表行置为true
                    this.$refs.funcListTable.toggleRowSelection(row, false);//将符合条件的表行置为false，作为下一个for的初始化。
                })
                for (var i = 0; i < this.row.funcList.length; i++) {
                    this.$refs.funcListTable.toggleRowSelection(this.funcList.find(d => d._id === this.row.funcList[i]._id), true);
                }
            },
            //获取选择项
            handleSelectionChange(val) {
                this.menuform.funcSelection = val;
                //  console.log(JSON.stringify(this.menuform.funcSelection))
            },
            createMenu(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        if (this.menuform.funcSelection.length == 0) {
                            //当没有选择功能
                            this.$message({
                                showClose: true,
                                message: '请选择至少一个功能！',
                                type: 'error'
                            });
                        }
                        else {
                            console.log(JSON.stringify(this.menuform))
                            this.axios.post(config.menuCreate, this.menuform)
                                .then((response) => {
                                    console.log(response)
                                    this.$store.commit('setDialogStatus',false)
                                     this.menuform.menuName ="";
                                })
                                .catch(function (err) {
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
                this.funcList.forEach((row) => {
                    this.$refs.funcListTable.toggleRowSelection(row, false);//将符合条件的表行置为false，作为下一个for的初始化。
                })

            },
            modifyForm(formName) {

            }
        }
    }
</script>

<style>
</style>