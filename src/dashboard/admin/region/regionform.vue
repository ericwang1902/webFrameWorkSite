<template>
    <div>
        <el-form :model="regionform" :rules="rules" label-position="left" ref="regionform" label-width="100px">
            <el-form-item label="区域名称" prop="regionname">
                <el-input v-model="regionform.regionname"></el-input>
            </el-form-item>
            <el-form-item label="选择县市" style="width: 100%">
                <el-table :data="districtlist" max-height="450" ref="districtlistTable" border style="width: 100%" @selection-change="handleSelectionChange">
                    <el-table-column type="selection" width="55">
                    </el-table-column>
                    <el-table-column prop="province" label="省">
                    </el-table-column>
                    <el-table-column prop="city" label="市">
                    </el-table-column>
                    <el-table-column prop="district" label="区县">
                    </el-table-column>
                </el-table>
            </el-form-item>

            <el-form-item>
                <el-button type="primary" v-show="!isCreate" @click="modifyRegion('regionform')">提交修改</el-button>
                <el-button type="primary" v-show="isCreate" @click="createRegion('regionform')">立即创建</el-button>
                <el-button @click="resetForm('regionform')">重置</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
    import config from '../../../common/config'

    export default {
        props: ['districtlist', 'isCreate', 'regionRow'],
        data() {
            return {
                regionform: {
                    district: '',
                    regionname: ''
                },
                districtSelection: [],
                rules: {
                    regionname: [{ required: true, message: '请输入区域名称', trigger: 'blur' }]
                }
            }
        },
        mounted() {
            this.initform();
        },
        methods: {
            initform() {
                if (this.isCreate) {
                    this.regionform.district = '';
                    this.regionform.regionname = '';
                    this.districtlist.forEach((row) => {
                        this.$refs.districtlistTable.toggleRowSelection(row, false);
                    })
                } else {
                    //修改区域的时候，初始化表单
                    this.regionform.regionname = this.regionRow.regionname;
                    this.districtlist.forEach((row) => {
                        this.$refs.districtlistTable.toggleRowSelection(row, false);
                    })

                    this.$refs.districtlistTable.toggleRowSelection(this.districtlist.find(d => d._id === this.regionRow.district._id), true);
                }
            },
            handleSelectionChange(val) {
                this.districtSelection = val;
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            },
            createRegion(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        var length = this.districtSelection.length;
                        if (length == 0) {
                            this.$message({
                                showClose: true,
                                message: '必须选择一个区县！',
                                type: 'error'
                            });
                            this.districtlist.forEach((row) => {
                                this.$refs.districtlistTable.toggleRowSelection(row, false);
                            })
                        } else if (length > 1) {
                            this.$message({
                                showClose: true,
                                message: '只能选择一个区县！',
                                type: 'error'
                            });
                            this.districtlist.forEach((row) => {
                                this.$refs.districtlistTable.toggleRowSelection(row, false);
                            })
                        } else {
                            this.regionform.district = this.districtSelection[0]._id;
                            //提交给创建接口
                            this.axios.post(config.region, this.regionform)
                                .then((response) => {
                                    console.log(response);
                                    this.$store.commit('setRegionDialogStatus', false);
                                })
                                .catch(function (err) {
                                    console.log(err);
                                })
                        }
                    }
                })
            },
            modifyRegion(formName){
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        var length = this.districtSelection.length;
                        if (length == 0) {
                            this.$message({
                                showClose: true,
                                message: '必须选择一个区县！',
                                type: 'error'
                            });
                            this.districtlist.forEach((row) => {
                                this.$refs.districtlistTable.toggleRowSelection(row, false);
                            })
                        } else if (length > 1) {
                            this.$message({
                                showClose: true,
                                message: '只能选择一个区县！',
                                type: 'error'
                            });
                            this.districtlist.forEach((row) => {
                                this.$refs.districtlistTable.toggleRowSelection(row, false);
                            })
                        } else {
                            this.regionform.district = this.districtSelection[0]._id;
                            //提交给创建接口
                            this.axios.put(config.region+'/'+this.regionRow._id, this.regionform)
                                .then((response) => {
                                    console.log(response);
                                    this.$store.commit('setRegionDialogStatus', false);
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