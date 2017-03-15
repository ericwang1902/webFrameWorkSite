<template>
    <div>
        <el-card class="box-card" style="margin: 10px">
            <div slot="header" class="clearfix">
            </div>
            <el-table empty-text="暂无商铺订单" border :data="shoporderlist" style="width: 100%">
                <el-table-column label="下单时间" prop="ordertime"></el-table-column>
                <el-table-column label="编号">
                    <el-table-column label="批次号" prop="ficorder.ficordernum"></el-table-column>
                    <el-table-column label="订单号" prop="ordernum"></el-table-column>
                </el-table-column>
                <el-table-column label="供应商">
                    <el-table-column label="编号" prop="supplier.suppliernum"></el-table-column>
                    <el-table-column label="名称" prop="supplier.suppliername"></el-table-column>
                </el-table-column>
                 <el-table-column label="状态" prop="status"></el-table-column>
                <el-table-column type="expand">
                    <template scope="props">
                        <el-table :data="props.row.goodslist" style="width: 100%">
                            <el-table-column label="商品" prop="goods.goodsname"></el-table-column>
                            <el-table-column label="进价" prop="goods.goodsbuyprice"></el-table-column>
                            <el-table-column label="数量" prop="goodscount"></el-table-column>
                        </el-table>
                    </template>
                </el-table-column>
            </el-table>
        </el-card>
    </div>
</template>
<script>
    import config from '../../../common/config'
    import moment from 'moment'
    moment.locale('zh-cn');

    export default {
        data() {
            return {
                shoporderlist: []
            }
        },
        created() {
            var userid = this.$store.getters.getUserInfo.userid;
            console.log("userid:"+userid);
            this.axios.get(config.shoporder + '?userid=' + userid)
                .then((response) => {
                    console.log("该地区的商户订单列表：")
                    console.log(response.data);
                    for (var i = 0; i < response.data.length; i++) {
                        response.data[i].ordertime = moment(response.data[i].ordertime).format("YYYY-MM-DD HH:mm:ss ");
                       response.data[i].status = config.ficstatus[response.data[i].ficorder.ficorderstate].shop;
                    }
                    this.shoporderlist = response.data;


                })
                .catch(function (err) {
                    console.log(err);
                })
        }
    }

</script>
<style>

</style>