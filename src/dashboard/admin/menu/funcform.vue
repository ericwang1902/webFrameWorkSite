<template>

    <el-form :model="funcform" :rules="rules" label-position="left" ref="funcform" label-width="100px">
        <el-form-item label="功能名称" prop="funcName">
            <el-input v-model="funcform.funcName"></el-input>
        </el-form-item>

        <el-form-item label="功能路由" style="width: 100%" prop="funcLink">
            <el-input v-model="funcform.funcLink"></el-input>
        </el-form-item>
        <el-form-item label="功能优先级" style="width: 100%" prop="funcNum">
            <el-input v-model="funcform.funcNum"></el-input>
        </el-form-item>

        <el-form-item>
            <el-button type="primary" v-show="!isCreateForm" @click="modifyFunc('funcform')">提交修改</el-button>
            <el-button type="primary" v-show="isCreateForm" @click="createFunc('funcform')">立即创建</el-button>
            <el-button @click="resetForm('funcform')">重置</el-button>
        </el-form-item>
    </el-form>
</template>
<script>
    import config from '../../../common/config'

    export default {
        props: ['isCreateForm', 'row'],
        data() {
            return {
                funcform: {
                    funcName: '',
                    funcLink: '',
                    funcNum: 0//优先级
                },
                //rules几要素：1.form中的rules；2.item中的prop；3.data中的rules对象
                rules: {
                    funcName: [
                        { required: true, message: '请输入功能名称', trigger: 'blur' }
                    ]

                }
            }
        },
        watch: {
            row: function () {
                if (!this.isCreateForm) {
                    this.ModifyInitForm()
                } else {
                    this.CreateInitForm();
                }

            },
            isCreateForm: function () {
                if (!this.isCreateForm) {
                    this.ModifyInitForm()
                } else {
                    this.CreateInitForm();
                }
            }
        },
        mounted: function () {
            if (!this.isCreateForm) {
                this.ModifyInitForm()
            }else{
                this.CreateInitForm();
            }
        },
        methods: {
            CreateInitForm() {
                this.funcform.funcName = '';
                this.funcform.funcLink = '';
                this.funcform.funcNum = 0;
            },
            ModifyInitForm() {
                this.funcform.funcName = this.row.funcName;
                this.funcform.funcLink = this.row.funcLink;
                this.funcform.funcNum = this.row.funcNum;
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            },
            createFunc(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        this.axios.post(config.func, this.funcform)
                            .then((response) => {
                                this.$store.commit('setFuncDialogStatus', false);
                            })
                            .catch(function (err) {
                                console.log(err);
                            })
                    }
                    else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            }
        }
    }

</script>
<style>

</style>