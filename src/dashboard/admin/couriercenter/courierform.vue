<template>
    <div>
        <el-form :model="courierform" :rules="rules" label-position="left" ref="courierform" label-width="100px">
            <el-form-item label="配送员名称" prop="couriername">
                <el-input v-model="courierform.couriername"></el-input>
            </el-form-item>
             <el-form-item label="配送员描述" prop="courierdes">
                <el-input v-model="courierform.courierdes"></el-input>
            </el-form-item>
            <el-form-item label="选择县市" style="width: 100%">
                <el-table :data="regionlist" max-height="450" ref="regionlistTable" border style="width: 100%" @selection-change="handleregionSelectionChange">
                    <el-table-column type="selection" width="55">
                    </el-table-column>
                    <el-table-column prop="regionname" label="区域名称">
                    </el-table-column>
                </el-table>
            </el-form-item>
            <el-form-item label="选择用户" style="width: 100%">
                <el-table :data="userlist" max-height="450" ref="userlistTable" border style="width: 100%" @selection-change="handleuserSelectionChange">
                    <el-table-column type="selection" width="55">
                    </el-table-column>
                    <el-table-column prop="username" label="用户名称">
                    </el-table-column>
                </el-table>
            </el-form-item>

            <el-form-item>
                <el-button type="primary" v-show="!isCreate" @click="modifyCourier('courierform')">提交修改</el-button>
                <el-button type="primary" v-show="isCreate" @click="createCourier('courierform')">立即创建</el-button>
                <el-button @click="resetForm('courierform')">重置</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
    import config from '../../../common/config'

    export default {
        props: ['regionlist','userlist', 'isCreate','courierRow'],
        data() {
            return {
                courierform: {
                    couriername: '',
                    courierdes: '',
                    region:'',
                    courieruser:''
                },
                regionSelection: [],
                userSelection:[],
                rules: {
                    couriername: [{ required: true, message: '请输入区域名称', trigger: 'blur' }]
                }
            }
        },
        mounted() {
            this.initform();
        },
        methods: {
            initform() {
                if (this.isCreate) {
                    this.courierform.couriername = '';
                    this.courierform.courierdes = '';
                    this.regionlist.forEach((row) => {
                        this.$refs.regionlistTable.toggleRowSelection(row, false);
                    });
                    this.userlist.forEach((row)=>{
                        this.$refs.userlistTable.toggleRowSelection(row, false);
                    })
                } else {
                    //修改区域的时候，初始化表单
                    this.courierform.couriername = this.courierRow.couriername;
                    this.courierform.courierdes = this.courierRow.courierdes;
                    this.regionlist.forEach((row) => {
                        this.$refs.regionlistTable.toggleRowSelection(row, false);
                    })
                    this.$refs.regionlistTable.toggleRowSelection(this.regionlist.find(d => d._id === this.courierRow.region._id), true);
                    

                    this.userlist.forEach((row) => {
                        this.$refs.userlistTable.toggleRowSelection(row, false);
                    })
                    this.$refs.userlistTable.toggleRowSelection(this.userlist.find(d => d._id === this.courierRow.courieruser._id), true);
                    
                
                }
            },
            handleregionSelectionChange(val) {
                this.regionSelection = val;
            },
            handleuserSelectionChange(val){
                this.userSelection=val;
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
                this.regionlist.forEach((row) => {
                        this.$refs.regionlistTable.toggleRowSelection(row, false);
                    })
            },
            createCourier(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        var length = this.regionSelection.length;
                        var length1 = this.userSelection.length;

                        if (length == 0 || length1==0) {
                            this.$message({
                                showClose: true,
                                message: '必须选择一个区域和用户',
                                type: 'error'
                            });
                            this.regionlist.forEach((row) => {
                                this.$refs.regionlistTable.toggleRowSelection(row, false);
                            })
                        } else if (length > 1) {
                            this.$message({
                                showClose: true,
                                message: '只能选择一个区域和用户！',
                                type: 'error'
                            });
                            this.regionlist.forEach((row) => {
                                this.$refs.regionlistTable.toggleRowSelection(row, false);
                            })
                        } else {
                            this.courierform.region = this.regionSelection[0]._id;
                            this.courierform.courieruser =this.userSelection[0]._id;
                            console.log(this.courierform);
                            //提交给创建接口
                            this.axios.post(config.courier+'?userid=' +  this.$store.getters.getUserInfo.userid, this.courierform)
                                .then((response) => {
                                    console.log(response);
                                    this.$store.commit('setCourierDialogStaus', false);
                                })
                                .catch(function (err) {
                                    console.log(err);
                                })
                        }
                    }
                })
            },
            modifyCourier(formName){
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        var length = this.regionSelection.length;
                        var length1 = this.userSelection.length;
                        if (length == 0||length1==0) {
                            this.$message({
                                showClose: true,
                                message: '必须选择一个区域和用户！',
                                type: 'error'
                            });
                            this.regionlist.forEach((row) => {
                                this.$refs.regionlistTable.toggleRowSelection(row, false);
                            })
                        } else if (length > 1) {
                            this.$message({
                                showClose: true,
                                message: '只能选择一个区域和用户！',
                                type: 'error'
                            });
                            this.regionlist.forEach((row) => {
                                this.$refs.regionlistTable.toggleRowSelection(row, false);
                            })
                        } else {
                            this.courierform.region = this.regionSelection[0]._id;
                            this.courierform.courieruser =this.userSelection[0]._id;
                            //提交给创建接口
                            this.axios.put(config.courier+'/'+this.courierRow._id, this.courierform)
                                .then((response) => {
                                    console.log(response);
                                    this.$store.commit('setCourierDialogStaus', false);
                                })
                                .catch(function (err) {
                                    console.log(err);
                                })
                        }
                    }
                })
            }
        }
    }

</script>
<style>

</style>