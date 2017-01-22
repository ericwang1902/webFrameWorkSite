<template>
    <div>
        <el-form :model="psdform" :rules="rules" label-position="left" ref="psdform" label-width="100px">
            <el-form-item label = "用户名" prop = "userName">
                <el-input v-model="psdform.userName"></el-input>
            </el-form-item>
            <el-form-item label="设置密码" prop="passWord" style="width: 100%">
               <el-input v-model="psdform.passWord"></el-input>
            </el-form-item>
            <el-form-item label="确认密码" prop="checkpassWord" style="width: 100%">
               <el-input v-model="psdform.checkpassWord"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary"  @click="modifypsd('psdform')">提交修改</el-button>
                <el-button @click="resetForm('psdform')">重置</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
import  config from '../../../common/config'

export default {
    props: ['userRow'],
    data () {
            var validatePass = (rule, value, callback) => {
                if (value === '') {
                callback(new Error('请输入密码'));
                } else {
                if (this.psdform.checkpassWord !== '') {
                    this.$refs.psdform.validateField('checkpassWord');
                }
                callback();
                }
            };

             var validatePass2 = (rule, value, callback) => {
                if (value === '') {
                callback(new Error('请再次输入密码'));
                } else if (value !== this.psdform.passWord) {
                callback(new Error('两次输入密码不一致!'));
                } else {
                callback();
                }
            };
        return {
            psdform:{
                userName:"",
                passWord:"",
                checkpassWord:""
            },

            rules:{
               passWord: [ { validator: validatePass, trigger: 'blur' }],
               checkpassWord: [{ validator: validatePass2, trigger: 'blur' }]
            }
        }
    },
    watch: {
      userRow:function(){
          this.psdform.userName = this.userRow.username;
      }  
    },
    mounted(){
        this.psdform.userName = this.userRow.username;
        console.log(this.userRow)
    },
    methods:{
        //修改密码
        modifypsd(formName){
            this.$refs[formName].validate((valid)=>{
                if(valid){
                   //修改passwor的的url
                   console.log(config.userModfiy+'/'+this.userRow._id);
                    this.axios.put(config.userModfiy+'/'+this.userRow._id, this.psdform)
                                .then((response) => {
                                    console.log(response)
                                    this.$store.commit('setPasswordDialogStatus',false)
                                })
                                .catch(function (err) {
                                    console.log(err)
                    })
                }
            })
        },
        resetForm(formName) {
                this.$refs[formName].resetFields();
            }
    }

}
</script>
<style>
</style>