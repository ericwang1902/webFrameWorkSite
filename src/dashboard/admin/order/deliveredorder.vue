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
            <el-table empty-text="暂无已分发订单" border :data="orderlist" style="width: 100%;">
                <el-table-column label="#" prop="index"  width="100">
                </el-table-column>
                <el-table-column label="批次号"  prop="orderitem.ficorder.ficordernum"></el-table-column>
                <el-table-column label="订单信息">
                    <el-table-column label="下单时间" prop="orderitem.ordertime"></el-table-column>
                    <el-table-column label="订单编号"  prop="orderitem.ordernum"></el-table-column>
                    <el-table-column label="套餐总数"  prop="orderitem.taotalcount"></el-table-column>
                    <el-table-column label="金额"  prop="orderitem.totalamount"></el-table-column>
                </el-table-column>
                <el-table-column label="配送信息">
                    <el-table-column label="区域"  prop="orderitem.region.regionname"></el-table-column>
                    <el-table-column label="详细地址"  prop="orderitem.address"></el-table-column>
                    <el-table-column label="电话" prop="orderitem.mobile"></el-table-column>
                </el-table-column>
                <el-table-column label="状态" width="100" prop="status"></el-table-column>
                <el-table-column type="expand">
                    <template scope="props">
                        <el-table :data="props.row.orderitem.suitelist" style="width: 100%">
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
            <!--分页-->
            <div class="block">
                <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="1" :page-size="pageitems"
                    layout="prev, pager, next, jumper" :total="total">
                </el-pagination>
            </div>
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
                selectedregion: 'all',

                currentPage: 1,
                pageitems: 10,
                total: 0
            }
        },
        created() {
            this.getorderlist();
            this.getregions();
        },
        methods: {
            getorderlist() {
                var userid = this.$store.getters.getUserInfo.userid;
                var params = {};

                var params = {};
                if (this.selectedregion == 'all') {
                    params = {
                        userid: userid,
                        pageItems: this.pageitems,
                        currentPage: this.currentpage,
                        delivered: 1
                    }
                } else {
                    params = {
                        userid: userid,
                        region: this.selectedregion,
                        pageItems: this.pageitems,
                        currentPage: this.currentpage,
                        delivered: 1
                    }
                }

                this.axios.get(config.order,
                    {
                        params: params
                    })
                    .then(response => {
                        console.log(response.data.orders);
                        for (var i = 0; i < response.data.orders.length; i++) {
                            response.data.orders[i].ordertime = moment(response.data.orders[i].ordertime).format("YYYY-MM-DD HH:mm:ss ");
                            response.data.orders[i].status = config.ficstatus[response.data.orders[i].ficorder.ficorderstate].cust;
                            response.data.orders[i].totalamount=(response.data.orders[i].totalamount/100).toFixed(2)
                            console.log(response.data.orders[i].totalamount)
                   
                        }

                        this.orderlist = [];
                        response.data.orders.forEach(
                            (item, index, array) => {
                                this.orderlist.push({
                                    index: ((this.currentPage - 1) * this.pageitems) + index + 1,
                                    orderitem: item,
                                    status: item.status
                                })
                            }
                        )
                        this.total = response.data.count;

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

                        this.regionlistdata.push({
                            regionname: "所有区域",
                            _id: "all"
                        })
                    })
                    .catch(function (err) {
                        console.log(err)
                    })
            },
            onchange(val) {
                console.log(val);
                this.getorderlist();


            },
            //暂时不支持修改每页数量
            handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
            },
            handleCurrentChange(val) {
                this.currentPage = val;
                this.getorderlist();
                console.log(`当前页: ${val}`);
            }
        }
    }

</script>
<style>

</style>