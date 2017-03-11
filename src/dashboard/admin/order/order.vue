<template>
    <div>
        <el-card class="box-card" style="margin: 10px">
            <div slot="header" class="clearfix">
                <el-button style="float: right; " @click="createSupplier()" type="primary">添加供应商</el-button>
            </div>
            <el-table border :data="orderlist" style="width: 100%">
                <el-table-column type="expand">
                    <template scope="props">
                        <el-table :data="props.row.suitelist" style="width: 100%">
                            <el-table-column label="套餐名称" prop="suite.suitename"></el-table-column>
                            <el-table-column label="数量" prop="count"></el-table-column>
                            <el-table-column label="金额（小计）" prop="amount"></el-table-column>
                        </el-table>
                    </template>
                </el-table-column>
                <el-table-column label="订单编号" prop="ordernum"></el-table-column>
                <el-table-column label="区域" prop="region.regionname"></el-table-column>
                <el-table-column label="详细地址" prop="address"></el-table-column>
                <el-table-column label="金额" prop="totalamount"></el-table-column>
            </el-table>
        </el-card>
    </div>
</template>
<script>
    import config from '../../../common/config'

    export default {
        data() {
            return {
                orderlist: []
            }
        },
        created() {
            var userid = this.$store.getters.getUserInfo.userid;

            this.axios.get(config.order + '?userid=' + userid)
                .then((response) => {
                    console.log("该地区的订单列表：")
                    console.log(response.data);
                    this.orderlist = response.data;
                })
                .catch(function (err) {
                    console.log(err);
                })
        }
    }

</script>
<style>

</style>