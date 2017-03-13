<template>
    <div>
        <el-card class="box-card" style="margin: 10px">
            <div slot="header" class="clearfix">
                <el-button style="float: right; " @click="diliverOrder()" type="primary">下发订单</el-button>
            </div>
            <el-table border :data="orderlist" style="width: 100%" @selection-change="handleSelectionChange">
                <el-table-column type="selection" width="55"></el-table-column>
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
                selectedOrders: []
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
        },
        methods: {
            diliverOrder() {
                console.log("创建订单");
                //按商品拆分订单,按照供应商汇总

                var goodslist = [];
                //1.提取所有订单中的商品列表
                for (var i = 0; i < this.selectedOrders.length; i++) {
                    for (var j = 0; j < this.selectedOrders[i].suitelist.length; j++) {

                        var count = this.selectedOrders[i].suitelist[j].count;//套餐数量（也就是该套餐下的商品的数量)
                        var suite = this.selectedOrders[i].suitelist[j].suite;
                        console.log(suite)

                        for (var k = 0; k < suite.goodslist.length; k++) {
                            var supplierid = suite.goodslist[k].supplier._id;
                            var goodsid = suite.goodslist[k]._id;
                            var goodscount = count;

                            var goodsitem = {
                                supplier: supplierid,
                                goodsid: goodsid,
                                goodscount: goodscount
                            }
                            goodslist.push(goodsitem);
                        }
                    }
                }

                var shoporderlist =[];
                //2.根据goodslist中的goods数据，按照supplierid来分组,按照goods汇总数据，构成shoporder
                for(var i = 0;i<goodslist.length;i++){
                    //如果没有在shoporderlist中，就要加上count
                    if(!shoporderlist.find(d=>d.goodsid==goodslist[i].goodsid)){
                        shoporderlist.push(goodslist[i]);
                    }else{
                      var index =  shoporderlist.indexOf(shoporderlist.find(d=>d.goodsid==goodslist[i].goodsid));
                      shoporderlist[index].goodscount+=goodslist[i].goodscount;
                    }
                }
                console.log("拆分后的订单："+JSON.stringify(shoporderlist));


            },
            handleSelectionChange(val) {
                this.selectedOrders = val;//获取要下发的订单
                //console.log("当前所选订单");
              //  console.log(JSON.stringify(val))
            }
        }
    }

</script>
<style>

</style>