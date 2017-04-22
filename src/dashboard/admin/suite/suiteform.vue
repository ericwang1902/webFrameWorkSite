<template>
    <div>
        <el-form :model="suiteform" :rules="rules" label-position="left" ref="suiteform" label-width="100px">
            <el-form-item label="套餐编号" prop="suitenum">
                <el-input v-model="suiteform.suitenum"></el-input>
            </el-form-item>
            <el-form-item label="套餐排序" prop="suiteorder">
                <el-input v-model="suiteform.suiteorder"></el-input>
            </el-form-item>
            
            <el-form-item label="是否上架" prop="suitestate">
                <el-switch v-model="suiteform.suitestate" on-color="#13ce66" on-text="是" off-color="#ff4949" off-text="否"></el-switch>
            </el-form-item>
            <el-form-item label="套餐名称" prop="suitename">
                <el-input v-model="suiteform.suitename"></el-input>
            </el-form-item>
            <el-form-item label="套餐说明" prop="suitedes">
                <el-input v-model="suiteform.suitedes"></el-input>
            </el-form-item>
            <el-form-item label="套餐价格" prop="suiteprice">
                <el-input v-model.number="suiteform.suiteprice"></el-input>
            </el-form-item>
            <el-form-item label="套餐标价" prop="suiteshowprice">
                <el-input v-model.number="suiteform.suiteshowprice"></el-input>
            </el-form-item>
            <el-form-item label="选择商品" style="width: 100%">
                <el-table :data="goodsList" max-height="450" ref="goodsListTable" border style="width: 100%" @selection-change="handleSelectionChange">
                    <el-table-column type="selection" width="55">
                    </el-table-column>
                    <el-table-column prop="goodsname" label="名称">
                    </el-table-column>
                    <el-table-column prop="goodsbuyprice" label="进价">
                    </el-table-column>
                    <el-table-column prop="goodsprice" label="售价">
                    </el-table-column>
                </el-table>
            </el-form-item>
            <el-form-item label="套餐图片" prop="suiteprice">
                <upload @imgurlEvent="setImageURL" :imgURL="suiteform.suitephoto"></upload>
            </el-form-item>

            <el-form-item>
                <el-button type="primary" v-show="!isCreateForm" @click="modifySuite('suiteform')">提交修改</el-button>
                <el-button type="primary" v-show="isCreateForm" @click="createSuite('suiteform')">立即创建</el-button>
                <el-button @click="resetForm('suiteform')">重置</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
    import config from "../../../common/config"
    import upload from "../../../components/qiniuupload"

    export default {
        components: {
            upload
        },
        props: ['goodsList', 'isCreateForm', 'suiteRow'],
        data() {
            return {
                suiteform: {
                    suitenum: "",
                    suiteorder:0,
                    suitename: "",
                    suitedes: "",
                    suitephoto: "",
                    suiteprice: 0,
                    suiteshowprice:0,
                    suitestate: true,
                    suitetype: "",
                    salesnum: "",
                    goodslist: []

                },
                goodsSelection: [],//获取选项
                rules: {
                    suitenum: [{ required: true, message: '请输入套餐编号', trigger: 'blur' }],
                    //suitestate: [{ required: true, message: '请设置套餐状态', trigger: 'blur' },{ type: 'boolean', message: '价格必须为数字'}],
                    suitename: [{ required: true, message: '请输入套餐名称', trigger: 'blur' }],
                    suitedes: [{ required: true, message: '请输入套餐描述', trigger: 'blur' }],
                    suiteprice: [{ required: true, message: '价格不能空' }, { type: 'number', message: '价格必须为数字' }]
                }
            }
        },
        mounted() {
            this.InitForm();
        },
        methods: {
            InitForm() {
                if (this.isCreateForm) {
                    this.InitCreateForm();
                } else {
                    this.InitModifyForm();
                }
            },
            InitCreateForm() {
                this.suiteform = {
                    suitenum: "",
                     suiteorder:0,
                    suitename: "",
                    suitedes: "",
                    suitephoto: "",
                    suiteprice: 0,
                    suiteshowprice:0,
                    suitestate: true,
                    suitetype: "",
                    salesnum: "",
                    goodslist: []
                }
                this.goodsList.forEach((row) => {
                    this.$refs.goodsListTable.toggleRowSelection(row, false);
                })
            },
            InitModifyForm() {
                this.suiteform = {
                    suitenum: this.suiteRow.suitenum,
                     suiteorder:this.suiteRow.suiteorder,
                    suitename: this.suiteRow.suitename,
                    suitedes: this.suiteRow.suitedes,
                    suitephoto: this.suiteRow.suitephoto,
                    suiteprice: this.suiteRow.suiteprice,
                    suiteshowprice:this.suiteRow.suiteshowprice,
                    suitestate: this.suiteRow.suitestate,
                    suitetype: this.suiteRow.suitetype,
                    salesnum: this.suiteRow.salesnum,
                    goodslist: this.suiteRow.goodslist
                }
                this.goodsList.forEach((row) => {
                    this.$refs.goodsListTable.toggleRowSelection(row, false);
                })

                for (var i = 0; i < this.suiteRow.goodslist.length; i++) {
                    this.$refs.goodsListTable.toggleRowSelection(this.goodsList.find(d => d._id === this.suiteRow.goodslist[i]._id), true);
                }
            },
            createSuite(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        if (this.goodsSelection.length == 0)  {
                            this.$message({
                                showClose: true,
                                message: '必须至少选择一个商品,必须选择一个区域！',
                                type: 'error'
                            });


                        } else {
                            for (var i = 0; i < this.goodsSelection.length; i++) {
                                this.suiteform.goodslist.push(this.goodsSelection[i]._id);
                            }
                            console.log("22222222222222:" + JSON.stringify(this.suiteform))
                            this.axios.post(config.suite+ '?userid=' + this.$store.getters.getUserInfo.userid, this.suiteform)
                                .then((response) => {
                                    console.log(response)
                                    this.$store.commit('setSuiteDialogStatus', false);
                                })


                        }

                    }
                })
            },
            //修改套餐
            modifySuite(formName) {
                console.log("suitestate:~~~~~~~~~~~~~~" + JSON.stringify(this.suiteform));
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        if (this.goodsSelection.length !== 0 ) { 
                                this.suiteform.goodslist = [];//清空改goodslist

                            for (var i = 0; i < this.goodsSelection.length; i++) {
                                this.suiteform.goodslist.push(this.goodsSelection[i]._id);
                            }


                            this.axios.put(config.suite + '/' + this.suiteRow._id+ '?userid=' + this.$store.getters.getUserInfo.userid, this.suiteform)
                                .then((response) => {
                                    console.log(response)
                                    this.$store.commit('setSuiteDialogStatus', false);
                                })


                        } else {
                            this.$message({
                                showClose: true,
                                message: '必须至少选择一个商品',
                                type: 'error'
                            });
                        }
                    }
                })
            },
            //获取选择项
            handleSelectionChange(val) {
                this.goodsSelection = val;
            },
            //重置表单
            resetForm(formName) {
                this.$refs[formName].resetFields();
                this.goodsList.forEach((row) => {
                    this.$refs.goodsListTable.toggleRowSelection(row, false);
                })
            },
            //移除
            handleRemove(file, fileList) {
                console.log(file, fileList);
            },
            handlePreview(file) {
                console.log(file);
            },
            setImageURL(msg) {
                this.suiteform.suitephoto = msg;
                console.log("suitephoto:" + this.suiteform.suitephoto);
            }
        }
    }

</script>
<style>

</style>