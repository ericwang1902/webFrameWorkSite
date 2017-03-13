<template>
    <div>
        <el-form :model="goodsform" :rules="rules" label-position="left" ref="goodsform" label-width="100px">
            <el-form-item label="商品编号" prop="goodsnum">
                <el-input v-model="goodsform.goodsnum"></el-input>
            </el-form-item>
            <el-form-item label="商品名称" prop="goodsname">
                <el-input v-model="goodsform.goodsname"></el-input>
            </el-form-item>
            <el-form-item label="商品介绍" prop="goodsdes">
                <!--<Vueditor ref="vueEditor1" style="height: 400px"></Vueditor>-->
                <el-input v-model="goodsform.goodsdes"></el-input>
            </el-form-item>
            <el-form-item label="商品进价" prop="goodsbuyprice">
                <el-input v-model.number="goodsform.goodsbuyprice"></el-input>
            </el-form-item>
            <el-form-item label="销售价格" prop="goodsprice">
                <el-input v-model.number="goodsform.goodsprice"></el-input>
            </el-form-item>
            <el-form-item label="选择供应商" style="width: 100%">
                <el-table :data="supplierList" max-height="450" ref="supplierListTable" border style="width: 100%" @selection-change="handleSelectionChange">
                    <el-table-column type="selection" width="55">
                    </el-table-column>
                    <el-table-column prop="suppliername" label="供应商">
                    </el-table-column>
                    <el-table-column prop="supplierdes" label="简介">
                    </el-table-column>
                    <el-table-column prop="supplieruser.nickname" label="店长">
                    </el-table-column>
                </el-table>
            </el-form-item>

            <el-form-item>
                <el-button type="primary" v-show="!isCreateForm" @click="modifyGoods('goodsform')">提交修改</el-button>
                <el-button type="primary" v-show="isCreateForm" @click="createGoods('goodsform')">立即创建</el-button>
                <el-button @click="resetForm('goodsform')">重置</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
    import config from '../../../common/config'

    export default {
        props: ['isCreateForm', 'goodsRow', 'supplierList', 'districtId'],
        data() {
            return {
                goodsform: {
                    goodsnum: "",
                    goodsname: "",
                    goodsdes: "",
                    goodsphoto: "",
                    goodsprice: 0,
                    goodsbuyprice: 0,
                    goodsstate: "",
                    goodstype: "",
                    weight: "",
                    supplier: "",
                    salesnum: "",
                    goodsjudge: "",
                    district: ""
                },
                supplierSelection: [],//用来获取从列表中选择的关联供应商
                rules: {
                    goodsnum: [{ required: true, message: '请输入商品编号', trigger: 'blur' }],
                    goodsname: [{ required: true, message: '请输入商品名称', trigger: 'blur' }],
                    //  goodsdes:[{required:true,message:'请输入商品说明',trigger:'blur'}],
                    goodsbuyprice: [{ required: true, message: '价格不能空' }, { type: 'number', message: '价格必须为数字' }],
                    goodsprice: [{ required: true, message: '价格不能空' }, { type: 'number', message: '价格必须为数字' }]
                }
            }
        },
        mounted() {
            console.log("mounted!")
           
            this.InitForm();
        },
        watch: {
            isCreateForm: function () {
              this.InitForm();
            }
        },
        methods: {
            InitForm() {
                if (this.isCreateForm) {
                    console.log("this.isCreateForm:"+this.isCreateForm);
                    this.InitCreateGoods();
                } else {
                    console.log("this.isCreateForm:"+this.isCreateForm);
                    this.InitModifyGoods();
                }
            },
            InitCreateGoods() {
                this.goodsform.goodsnum = "";
                this.goodsform.goodsname = "";
                this.goodsform.goodsdes = "";
                this.goodsform.goodsphoto = "";
                this.goodsform.goodsprice = 0;
                this.goodsform.goodsbuyprice = 0;
                this.goodsform.goodsstate = "";
                this.goodsform.goodstype = "";
                this.goodsform.weight = "";
                this.goodsform.supplier = "";
                this.goodsform.salesnum = "";
                this.goodsform.goodsjudge = "";

               // this.$refs["vueEditor1"].setContent('ooo');
                this.supplierList.forEach((row) => {
                    this.$refs.supplierListTable.toggleRowSelection(row, false);
                })
            },
            InitModifyGoods() {
              //  console.log(typeof (this.goodsRow.goodsprice))
                this.goodsform.goodsnum = this.goodsRow.goodsnum;
                this.goodsform.goodsname = this.goodsRow.goodsname;
                this.goodsform.goodsdes = this.goodsRow.goodsdes;
                this.goodsform.goodsphoto = this.goodsRow.goodsphoto;
                this.goodsform.goodsprice = this.goodsRow.goodsprice;
                this.goodsform.goodsbuyprice = this.goodsRow.goodsbuyprice;
                this.goodsform.goodsstate = this.goodsRow.goodsstate;
                this.goodsform.goodstype = this.goodsRow.goodstype;
                this.goodsform.weight = this.goodsRow.weight;
                this.goodsform.supplier = this.goodsRow.supplier;
                this.goodsform.salesnum = this.goodsRow.salesnum;
                this.goodsform.goodsjudge = this.goodsRow.goodsjudge;
                
               // this.$refs.vueEditor1.setContent(this.goodsRow.goodsdes);

              //  console.log(typeof (this.goodsform.goodsprice))
                console.log(this.goodsRow.goodsdes)

                this.supplierList.forEach((row) => {
                    this.$refs.supplierListTable.toggleRowSelection(row, false);
                })
                this.$refs.supplierListTable.toggleRowSelection(this.supplierList.find(d => d._id === this.goodsRow.supplier._id), true);
            },
            modifyGoods(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                            console.log("modifyGoods方法")
                            var length = this.supplierSelection.length;
                            if (length == 0) {
                                //当没有选择供应商时
                                this.$message({
                                    showClose: true,
                                    message: '必须选择一个供应商！',
                                    type: 'error'
                                });
                                this.userList.forEach((row) => {
                                    this.$refs.userListTable.toggleRowSelection(row, false);
                                })
                            } else if (length > 1) {
                                //当选择的供应商过多时
                                this.$message({
                                    showClose: true,
                                    message: '只能选择一个供应商！',
                                    type: 'error'
                                });
                                this.userList.forEach((row) => {
                                    this.$refs.userListTable.toggleRowSelection(row, false);
                                })
                            } else {
                                this.goodsform.supplier = this.supplierSelection[0]._id;
                                //提交给put接口
                                this.axios.put(config.goodsModify + '/' + this.goodsRow._id+ '?userid=' + this.$store.getters.getUserInfo.userid, this.goodsform)
                                    .then((response) => {
                                        console.log(response);
                                        this.$store.commit('setGoodsDialogStatus', false);
                                    })
                                    .catch(function (err) {
                                        console.log(err)
                                    })

                            }

                 
                    }
                })
            },
            //创建商品
            createGoods(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                            var length = this.supplierSelection.length;
                            if (length == 0) {
                                //当没有选择角色时
                                this.$message({
                                    showClose: true,
                                    message: '必须选择一个供应商',
                                    type: 'error'
                                });
                                this.userList.forEach((row) => {
                                    this.$refs.supplierListTable.toggleRowSelection(row, false);
                                })
                            } else if (length > 1) {
                                //当选得角色数量过多时
                                this.$message({
                                    showClose: true,
                                    message: '只能选择一个供应商',
                                    type: 'error'
                                });
                                this.userList.forEach((row) => {
                                    this.$refs.supplierListTable.toggleRowSelection(row, false);
                                })
                            } else {
                                //将list的选择转化为supplieruser
                                this.goodsform.supplier = this.supplierSelection[0]._id;
                                this.goodsform.district = this.districtId;
                                this.axios.post(config.goodsCreate+ '?userid=' + this.$store.getters.getUserInfo.userid, this.goodsform)
                                    .then((response) => {
                                        console.log(response)
                                        this.$store.commit('setGoodsDialogStatus', false);
                                    })
                                    .catch(function (err) {
                                        console.log(err)
                                    })

                                    



                            }
                        


                    }
                })
            },
            //重置表单
            resetForm(formName) {
                this.$refs[formName].resetFields();
                this.supplierList.forEach((row) => {
                    this.$refs.supplierListTable.toggleRowSelection(row, false);
                })
            },
            //获取选择项
            handleSelectionChange(val) {
                this.supplierSelection = val;
            }
        }
    }

</script>
<style>

</style>