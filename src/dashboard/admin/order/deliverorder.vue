<template>
    <div>
        <el-card class="box-card">
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
                <el-button style="float: right; " @click="diliverOrder()" type="primary">下发订单</el-button>
            </div>
            <el-table empty-text="暂无未分发订单" border :data="orderlist" style="width: 100%;" @selection-change="handleSelectionChange">
                <el-table-column type="selection" width="55"></el-table-column>
                <!--<el-table-column label="批次号" prop="ficorder.ficordernum"></el-table-column>-->
                <el-table-column label="#" prop="index"  width="100">
                </el-table-column>
                <el-table-column label="订单信息">
                    <el-table-column label="订单编号" prop="orderitem.ordernum"></el-table-column>
                    <el-table-column label="套餐总数" prop="orderitem.taotalcount"></el-table-column>
                    <el-table-column label="金额" prop="orderitem.totalamount"></el-table-column>
                </el-table-column>
                <el-table-column label="配送信息">
                    <el-table-column label="区域" prop="orderitem.region.regionname"></el-table-column>
                    <el-table-column label="详细地址" prop="orderitem.address"></el-table-column>
                    <el-table-column label="电话" prop="orderitem.mobile"></el-table-column>
                </el-table-column>
                <el-table-column label="状态" prop="status"></el-table-column>
                <el-table-column type="expand">
                    <template scope="props">
                        <el-table :data="props.row.orderitem.suitelist" style="width: 100%;">

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
    import config from '../../../common/config';
    import { Loading } from 'element-ui';

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
                if (this.selectedregion == 'all') {
                    params = {
                        userid: userid,
                        pageItems: this.pageitems,
                        currentPage: this.currentpage
                    }
                } else {
                    params = {
                        userid: userid,
                        region: this.selectedregion,
                        pageItems: this.pageitems,
                        currentPage: this.currentpage
                    }
                }

                this.axios.get(config.order,
                    {
                        params: params
                    }
                )
                    .then((response) => {
                        console.log(response.data);
                        for (var i = 0; i < response.data.orders.length; i++) {
                            response.data.orders[i].status = "未接单";
                            response.data.orders[i].totalamount=(response.data.orders[i].totalamount/100).toFixed(2)
                   
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
                        console.log(response.data)
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
            diliverOrder() {
                if (this.selectedregion == 'all' || this.selectedregion == '') {
                    this.$message({
                        showClose: true,
                        message: '必须选择具体下发区域！',
                        type: 'error'
                    });
                }else if(this.selectedOrders.length==0)
                {
                    this.$message({
                        showClose: true,
                        message: '下发订单不可为空！',
                        type: 'error'
                    });
                } 
                else {

                    console.log("创建虚拟订单");
                    let loadingInstance = Loading.service({ fullscreen: true });

                    this.axios.post(config.ficorder, { ficorderstate: 1, region: this.selectedregion })
                        .then((response) => {
                            console.log("ficorder:")
                            var ficorder = response.data;
                            console.log(response.data);
                            this.createShopOrder(ficorder, function () {
                                loadingInstance.close();//模态窗口
                            });//创建商铺订单

                        })
                        .catch(function (err) {
                            console.log(err);
                        })


                }


            },
            createShopOrder(fic, callback) {
                console.log("创建订单");
                //按商品拆分订单,按照供应商汇总

                var goodslist = [];
                //1.提取所有订单中的商品列表
                for (var i = 0; i < this.selectedOrders.length; i++) {
                    for (var j = 0; j < this.selectedOrders[i].orderitem.suitelist.length; j++) {

                        var count = this.selectedOrders[i].orderitem.suitelist[j].count;//套餐数量（也就是该套餐下的商品的数量)
                        var suite = this.selectedOrders[i].orderitem.suitelist[j].suite;
                        console.log(suite)

                        for (var k = 0; k < suite.goodslist.length; k++) {
                            var supplierid = suite.goodslist[k].supplier._id;
                            var district = suite.goodslist[k].supplier.district
                            var goods = suite.goodslist[k];
                            var goodscount = count;

                            var goodsitem = {
                                supplier: supplierid,
                                district: district,
                                goods: goods,
                                goodscount: goodscount
                            }
                            goodslist.push(goodsitem);
                        }
                    }
                }

                //2.根据goodslist中的goods数据，按照supplierid来分组,按照goods汇总数据，构成shoporder
                /*
                [{"supplier":"58c4123426ff2d1ed5bf4e7d","goodsid":"58c62905641c7b5a142ad2ac","goodscount":2},
                {"supplier":"58c4123426ff2d1ed5bf4e7d","goodsid":"58c4123d26ff2d1ed5bf4e7e","goodscount":19}]
                */

                var shopgoodslist = [];

                for (var i = 0; i < goodslist.length; i++) {
                    //如果没有在shopgoodslist中，就要加上count
                    if (!shopgoodslist.find(d => d.goods._id == goodslist[i].goods._id)) {
                        shopgoodslist.push(goodslist[i]);
                    } else {
                        var index = shopgoodslist.indexOf(shopgoodslist.find(d => d.goods._id == goodslist[i].goods._id));
                        shopgoodslist[index].goodscount += goodslist[i].goodscount;
                    }
                }
                console.log("拆分后的订单：" + JSON.stringify(shopgoodslist));

                //3.按供应商汇总goods
                /*[
                    {
                        supplier:'',
                        goodslist:[
                            {
                                goods:{},
                                goodscount:10
                            },
                            {
                                goods:{},
                                goodscount:10
                            }
                        ]
                    }
                ]
                */
                var shoporderlist = [];
                for (var i = 0; i < shopgoodslist.length; i++) {
                    if (!shoporderlist.find(d => d.supplier == shopgoodslist[i].supplier)) {
                        shoporderlist.push({
                            supplier: shopgoodslist[i].supplier,
                            district: shopgoodslist[i].district,
                            ficorder: fic._id,
                            goodslist: [
                                {
                                    goods: shopgoodslist[i].goods,
                                    goodscount: shopgoodslist[i].goodscount
                                }
                            ]
                        })
                    } else {
                        var index = shoporderlist.indexOf(shoporderlist.find(d => d.supplier == shopgoodslist[i].supplier));
                        shoporderlist[index].goodslist.push({
                            goods: shopgoodslist[i].goods,
                            goodscount: shopgoodslist[i].goodscount
                        })
                    }
                }
                console.log("最终的商家订单：" + JSON.stringify(shoporderlist));//需要存储到数据库
                this.axios.post(config.pshoporder, { shoporderlist: shoporderlist })
                    .then((response) => {
                        console.log(response);
                        this.updateCustOrder(fic, function () {
                            callback();
                        });
                    })
                    .catch(function (err) {
                        console.log(err);
                    })


            },
            updateCustOrder(fic, callback) {
                //构造orderlist，带上ficorder的属性
                for (var i = 0; i < this.selectedOrders.length; i++) {
                    this.selectedOrders[i].orderitem.ficorder = fic._id;
                }
                console.log("最终的客户订单：" + JSON.stringify(this.selectedOrders))//要更新客户订单
                this.axios.post(config.porder, { orderlist: this.selectedOrders })
                    .then((response) => {
                        console.log(response);
                        callback();
                        //
                        this.getorderlist();
                    })
                    .catch(function (err) {
                        console.log(err);
                    })
            },
            handleSelectionChange(val) {
                this.selectedOrders = val;//获取要下发的订单
                console.log("当前所选订单");
                console.log(JSON.stringify(val))
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