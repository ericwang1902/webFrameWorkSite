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
            <el-table empty-text="暂无已分发订单" border :data="orderlist" style="width: 100%">
                <el-table-column label="批次号" width="200" prop="ficorder.ficordernum"></el-table-column>
                <el-table-column label="订单信息">
                    <el-table-column label="下单时间" width="200" prop="ordertime"></el-table-column>
                    <!--<el-table-column label="订单编号" width="200" prop="ordernum"></el-table-column>-->
                    <el-table-column label="套餐总数" width="100" prop="taotalcount"></el-table-column>
                    <el-table-column label="金额" width="100" prop="totalamount"></el-table-column>
                </el-table-column>
                <el-table-column label="配送信息">
                    <el-table-column label="区域" width="100" prop="region.regionname"></el-table-column>
                    <el-table-column label="详细地址" width="300" prop="address"></el-table-column>
                </el-table-column>
                <el-table-column label="状态" width="100" prop="status"></el-table-column>
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
    import moment from 'moment'
    moment.locale('zh-cn');

    export default {
        data() {
            return {
                orderlist: [],
                selectedOrders: [],
                regionlistdata: [],
                selectedregion: ''
            }
        },
        created() {
            this.getorderlist();
            this.getregions();
        },
        methods: {
            getorderlist() {
                var userid = this.$store.getters.getUserInfo.userid;

                this.axios.get(config.order + '?userid=' + userid + '&delivered=1')
                    .then((response) => {
                        console.log("该地区的订单列表：")
                        console.log(response.data);
                        for (var i = 0; i < response.data.length; i++) {
                            response.data[i].ordertime = moment(response.data[i].ordertime).format("YYYY-MM-DD HH:mm:ss ");
                            response.data[i].status = config.ficstatus[response.data[i].ficorder.ficorderstate].cust;
                        }
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
            onchange(val) {
                console.log(val);
                var userid = this.$store.getters.getUserInfo.userid;

                this.axios.get(config.order + '?userid=' + userid + '&region=' + val + '&delivered=1')
                    .then((response) => {
                        console.log("该地区的订单列表：")
                        console.log(response.data);
                        for (var i = 0; i < response.data.length; i++) {
                            response.data[i].ordertime = moment(response.data[i].ordertime).format("YYYY-MM-DD HH:mm:ss ");
                            response.data[i].status = config.ficstatus[response.data[i].ficorder.ficorderstate].cust;
                        }
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