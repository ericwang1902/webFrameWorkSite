<template>
    <div>
        <el-card class="box-card" style="margin: 10px">
            <div slot="header" class="clearfix">
            <span style="line-height: 36px;">
                     <el-select v-model="selectedregion" @change="onchange" placeholder="请选择">
                        <el-option
                        v-for="item in regionlistdata"
                        :label="item.regionname"
                        :value="item._id">
                        </el-option>
                    </el-select>
                </span>
            </div>
            <el-table empty-text="暂无已分发订单" border :data="orderlist" style="width: 100%" >
                <el-table-column label="批次号" prop="ficorder.ficordernum"></el-table-column>
                <el-table-column label="订单信息">
                    <el-table-column label="订单编号" prop="ordernum"></el-table-column>
                    <el-table-column label="套餐总数" prop="taotalcount"></el-table-column>
                    <el-table-column label="金额" prop="totalamount"></el-table-column>
                </el-table-column>
                <el-table-column label="配送信息">
                    <el-table-column label="区域" prop="region.regionname"></el-table-column>
                    <el-table-column label="详细地址" prop="address"></el-table-column>
                </el-table-column>
                <el-table-column type="expand">
                    <template scope="props">
                        <el-table :data="props.row.suitelist" style="width: 100%">

                            <el-table-column label="套餐名称" prop="suite.suitename"></el-table-column>
                            <el-table-column label="数量" prop="count"></el-table-column>
                            <el-table-column label="金额（小计）" prop="amount"></el-table-column>
                            <el-table-column type="expand">
                                <template scope="props">
                                    <el-table :data="props.row.suite.goodslist" style="width: 100%">
                                        <el-table-column label="商品名称" prop="goodsname"></el-table-column>
                                        <el-table-column label="供应商" prop="supplier.suppliername"></el-table-column>
                                    </el-table>
                                </template>
                            </el-table-column>
                        </el-table>
                    </template>
                </el-table-column>
            </el-table>
        </el-card>
    </div>
</template>
<script>
    import config from '../../../common/config'

    export default {
        data() {
            return {
                orderlist: [],
                selectedOrders: [],
                regionlistdata:[],
                selectedregion:''
            }
        },
        created() {
            this.getorderlist();
            this.getregions();
        },
        methods: {
            getorderlist() {
                var userid = this.$store.getters.getUserInfo.userid;

                this.axios.get(config.order + '?userid=' + userid+'&delivered=1')
                    .then((response) => {
                        console.log("该地区的订单列表：")
                        console.log(response.data);
                        this.orderlist = response.data;
                    })
                    .catch(function (err) {
                        console.log(err);
                    })
            },
            getregions() {
                var userid = this.$store.getters.getUserInfo.userid;
                this.axios.get(config.region + '?userid=' + userid)
                    .then((response) => {
                        console.log(response)
                        this.regionlistdata = response.data;
                    })
                    .catch(function (err) {
                        console.log(err)
                    })
            },
            onchange(val){
                console.log(val);
                var userid = this.$store.getters.getUserInfo.userid;

                this.axios.get(config.order + '?userid=' + userid+'&region='+val+'&delivered=1')
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
    }

</script>
<style>

</style>