<template>
    <div>
        <el-card class="box-card" style="margin: 10px">
            <div slot="header" class="clearfix">
                <el-button style="float: right; " @click="createGoods()" type="primary">创建商品</el-button>
            </div>

            <el-table border :data="goodslistData" style="width: 100%">
                <el-table-column label="编号" prop="goodsnum"></el-table-column>
                <el-table-column label="名称" prop="goodsname"></el-table-column>
                <el-table-column label="描述" prop="goodsdes"></el-table-column>
                <el-table-column label="进价" prop="goodsbuyprice"></el-table-column>
                <el-table-column label="售价" prop="goodsprice"></el-table-column>
                <el-table-column label="供应商" prop="supplier.suppliername"></el-table-column>
                <!--<el-table-column label="省" prop="district.province"></el-table-column>
                <el-table-column label="市" prop="district.city"></el-table-column>-->
                <el-table-column label="区县" prop="district.district"></el-table-column>
                <el-table-column width="200" label="操作" v-if="isAdmin">
                    <template scope="props">
                        <el-button type="primary" @click="modifyGoods(props.row)" size="mini">修改</el-button>
                        <el-button type="danger" @click="deleteGoods(props.row)" size="mini">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <!--分页-->
            <div class="block">
                <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="1" :page-size="pageitems"
                    layout="prev, pager, next, jumper" :total="total">
                </el-pagination>
            </div>
        </el-card>
        <!--dialog start-->
        <el-dialog :title="title" v-model="$store.getters.getGoodsDialogStatus" @close="ondialogclose">
            <goodsform v-if="$store.getters.getGoodsDialogStatus" :districtId="districtid" :isCreateForm="isCreateForm" :goodsRow="goodsRow"
                :supplierList="supplierList"></goodsform>
        </el-dialog>

        <!--dialog end-->
    </div>
</template>
<script>
    import config from '../../../common/config'
    import goodsform from './goodsform'
    import funcAuth from '../../../common/funcAuth'

    export default {
        components: {
            goodsform
        },
        data() {
            return {
                title: "创建商品",
                isCreateForm: true,
                goodsRow: {},
                supplierList: [],
                goodslistData: [],
                districtid: '',

                currentPage: 1,
                pageitems: 10,
                total: 0,

                isAdmin: false
            }
        },
        created() {
            var userid = this.$store.getters.getUserInfo.userid;
            var role = this.$store.getters.getUserInfo.userRole;
            console.log("role:" + JSON.stringify(role[0]));
            if (role[0].roleName == "ADMIN") {
                this.isAdmin = false;
            } else {
                this.isAdmin = true;
            }

            this.getGoodsList(userid);//获取所有的商品列表
            this.getSupplierList(userid);


        },
        methods: {
            getGoodsList(userid) {
                // this.axios.get(config.goodsList + '?userid=' + userid)
                //     .then((response) => {
                //         this.goodslistData = response.data;
                //         //console.log(this.goodslistData)
                //     })
                //     .catch(function (err) {
                //         console.log(err)
                //     })
                this.axios.get(config.goodsList, {
                    params: {
                        userid: userid,
                        pageItems: this.pageitems,
                        currentPage: this.currentPage
                    }
                })
                    .then((response => {
                        this.goodslistData = response.data.goods;
                        this.total = response.data.count;
                        console.log("count:" + this.total);
                        console.log("goodslistData:" + this.goodslistData);
                    }))
                    .catch(function (err) {
                        console.log(err);
                    })


            },
            getSupplierList(userid) {
                this.axios.get(config.supplierslistall + '?userid=' + userid)
                    .then((response) => {
                        this.supplierList = response.data;
                    })
                    .catch(function (err) {
                        console.log(err)
                    })
            },
            createGoods() {
                // console.log("创建商品");
                this.$store.commit('setGoodsDialogStatus', true);
                this.isCreateForm = true;
            },
            //修改供应商
            modifyGoods(val) {
                this.goodsRow = val;
                this.isCreateForm = false;
                this.$store.commit('setGoodsDialogStatus', true);

            },
            deleteGoods(val) {
                this.goodsRow = val;

                this.$confirm('此操作将永久删除该商品, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.axios.delete(config.goodsList + '/' + this.goodsRow._id)
                        .then((response) => {
                            console.log(response);
                            this.$message({
                                type: 'success',
                                message: '删除成功!'
                            });
                            this.getGoodsList(this.$store.getters.getUserInfo.userid);
                        })

                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消删除'
                    });
                });



            },
            ondialogclose() {
                this.$store.commit('setGoodsDialogStatus', false);
                this.getGoodsList(this.$store.getters.getUserInfo.userid);
            },
            //暂时不支持修改每页数量
            handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
            },
            handleCurrentChange(val) {
                this.currentPage = val;
                this.getGoodsList(this.$store.getters.getUserInfo.userid);
                console.log(`当前页: ${val}`);
            }
        }
    }

</script>
<style>

</style>