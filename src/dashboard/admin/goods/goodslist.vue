<template>
    <div>
        <el-card class="box-card" style="margin: 10px">
            <div slot="header" class="clearfix">
                <el-button style="float: right; " @click="createGoods()" type="primary">创建商品</el-button>
            </div>
            <el-table border :data="goodslistData" style="width: 100%">
                <el-table-column label="名称" prop="goodsname"></el-table-column>
                <el-table-column label="描述" prop="goodsdes"></el-table-column>
                <el-table-column label="进价" prop="goodsbuyprice"></el-table-column>
                <el-table-column label="售价" prop="goodsprice"></el-table-column>
                <el-table-column label="供应商" prop="supplier.suppliername"></el-table-column>
                <el-table-column width="100" fixed="right" label="操作">
                    <template scope="props">
                        <el-button type="primary" @click="modifyGoods(props.row)" size="mini">修改</el-button>
                    </template>
                </el-table-column>
            </el-table>
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
                districtid: ''
            }
        },
        created() {
            var userid = this.$store.getters.getUserInfo.userid;

            this.getGoodsList(userid);//获取所有的商品列表
            this.getSupplierList(userid);


        },
        methods: {
            //实时获取用户信息，为了获取区县信息
            getuserinfo(callback) {
                funcAuth.checkAuth(function (userinfo) {
                    var districtId = userinfo.district._id;
                    //回调，用户赋值给this.districtid
                    callback(districtId)
                })
            },
            getGoodsList(userid) {
                this.axios.get(config.goodsList + '?userid=' + userid)
                    .then((response) => {
                        this.goodslistData = response.data;
                        //console.log(this.goodslistData)

                    })
                    .catch(function (err) {
                        console.log(err)
                    })
            },
            getSupplierList(userid) {
                this.axios.get(config.supplierList + '?userid=' + userid)
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
            ondialogclose() {
                this.$store.commit('setGoodsDialogStatus', false);
                this.getGoodsList(this.$store.getters.getUserInfo.userid);
            }
        }
    }

</script>
<style>

</style>