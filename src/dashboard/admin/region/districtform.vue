<template>
    <div>
        <el-form :model="disform" :rules="rules" label-position="left" ref="disform" label-width="100px">
            <el-form-item label="省" prop="province">
                <el-input v-model="disform.province"></el-input>
            </el-form-item>
            <el-form-item label="市" prop="city">
                <el-input v-model="disform.city"></el-input>
            </el-form-item>
            <el-form-item label="区县" prop="discrict">
                <el-input v-model="disform.discrict"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" v-show="!isCreate" @click="modifyDis('disform')">提交修改</el-button>
                <el-button type="primary" v-show="isCreate" @click="createDis('disform')">立即创建</el-button>
                <el-button @click="resetForm('disform')">重置</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
    import config from '../../../common/config'


    export default {
        components: {

        },
        props: ['isCreate', 'disRow'],
        data() {
            return {
                disform: {
                    province: '',
                    city: '',
                    discrict: ''
                },
                rules: {

                }
            }
        },
        methods: {
            change(val) {
                console.log(val);
            },
            createDis(formName) {
                this.$refs[formName].validate((valid) => {

                })

            },
            modifyDis(formName) {
                this.$refs[formName].validate((valid) => {

                })
            },
            //重置表单
            resetForm(formName) {
                this.$refs[formName].resetFields();
            }
        }
    }

</script>
<style>

</style>