<template>
    <div>
        <el-form :model="disform" :rules="rules" label-position="left" ref="disform" label-width="100px">
            <el-form-item label="省" prop="province">
                <el-input v-model="disform.province"></el-input>
            </el-form-item>
            <el-form-item label="市" prop="city">
                <el-input v-model="disform.city"></el-input>
            </el-form-item>
            <el-form-item label="区县" prop="district">
                <el-input v-model="disform.district"></el-input>
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
                    district: ''
                },
                rules: {
                    province: [{ required: true, message: '请输入省', trigger: 'blur' }],
                    city: [{ required: true, message: '请输入市', trigger: 'blur' }],
                    district: [{ required: true, message: '请输入区或县', trigger: 'blur' }]
                }
            }
        },
        mounted (){
            console.log("mounted!!")
            this.initModify();
        },
        watch:{
            isCreate:function(){
                this.initModify();
            }
            
        },
        methods: {
            initModify(){
                this.disform.province = this.disRow.province;
                this.disform.city = this.disRow.city;
                this.disform.district = this.disRow.district;
                
            },
            createDis(formName) {
                console.log('form:'+JSON.stringify(this.disform));

                this.$refs[formName].validate((valid) => {
                    if(valid){
                        this.axios.post(config.district,this.disform)
                                   .then((response)=>{
                                       console.log(response)
                                       this.$store.commit('setDistrictDialogStatus', false);
                                   })
                                   .catch(function(err){
                                       console.log(err);
                                   })
                    }
                })

            },
            modifyDis(formName) {
                this.$refs[formName].validate((valid) => {
                    if(valid){
                        this.axios.put(config.district+'/'+this.disRow._id,this.disform)
                                  .then((response)=>{
                                      console.log(response);
                                      this.$store.commit('setDistrictDialogStatus', false);
                                  })
                                  .catch(function(err){
                                      console.log(err)
                                  })
                        
                    }
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