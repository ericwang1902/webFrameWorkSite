<template>
    <div class="login">
            <el-row :gutter="20" style="width: 100%">
                <el-col :span="12" :offset="6">
                    <div class="grid-content bg-purple">
                        <el-card class="box-card">
                            <div slot="header" class="clearfix">
                                <span style="line-height: 36px;">登录</span>
                            </div>
                            <el-form :model="ruleForm2" :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
                                <el-form-item label="手机号" prop="mobile">
                                    <el-input v-model="ruleForm2.mobile"></el-input>
                                </el-form-item>
                                <el-form-item label="密码" prop="pass">
                                    <el-input type="password" v-model="ruleForm2.pass" auto-complete="off"></el-input>
                                </el-form-item>
                                <el-form-item>
                                    <el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>
                                    <el-button @click="resetForm('ruleForm2')">重置</el-button>
                                </el-form-item>
                            </el-form>
                        </el-card>
                    </div>
                </el-col>
            </el-row>
</div>

</template>
<script>
import config from '../common/config'

    export default {
        data() {
             var checkMobile = (rule, value, callback) => {
                if (!value) {
                return callback(new Error('用户名不能为空'));
                }
                callback();
            };
            var validatePass = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入密码'));
                } 
                callback();
            };
            return {
                ruleForm2: {
                    mobile: '',
                    pass: ''
                },
                rules2: {
                    mobile:[{validator:checkMobile,trigger:'blur'}],
                    pass: [
                        { validator: validatePass, trigger: 'blur' }
                    ]
                }
            };
        },
        methods: {
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    var user = {
                        username: this.ruleForm2.mobile,
                        password: this.ruleForm2.pass
                    }
                    if (valid) {
                        this.axios.post(config.GetLoginUrl, user)
                                .then((response) => {
                                    console.log(response.data.authresult)
                                    if(response.data.authresult==true)
                                        {
                                        var localuserInfo={
                                             username: this.ruleForm2.mobile,
                                             password: this.ruleForm2.pass,
                                             userid:response.data.userId
                                        }
                                        console.log(localuserInfo.userid)
                                      this.$store.commit('setUserInfo',localuserInfo)
                                     // console.log(this.$store.getters.getUserInfo)
                                       this.$router.push('/dashboard');
                                        }
                                    else{
                                        console.log("登录失败！")
                                    }
                                    })
                                .catch(function (error) {
                                    console.log(error);
                                });
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
.login{
      display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
}
</style>