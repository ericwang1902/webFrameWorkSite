<template>
    <div>
        <el-card class="box-card">
            <el-table empty-text="暂无商铺订单" border :data="shoporderlist" style="width: 100%;">
                <el-table-column label="#" prop="index"  width="100">
                </el-table-column>
                <el-table-column label="下单时间" prop="orderitem.ordertime"></el-table-column>
                <el-table-column label="编号">
                    <el-table-column label="批次号" prop="orderitem.ficorder.ficordernum"></el-table-column>
                    <el-table-column label="订单号" prop="orderitem.ordernum"></el-table-column>
                </el-table-column>
                <el-table-column label="供应商">
                    <!--<el-table-column label="编号" prop="orderitem.supplier.suppliernum"></el-table-column>-->
                    <el-table-column label="名称" prop="orderitem.supplier.suppliername"></el-table-column>
                </el-table-column>
                <el-table-column label="状态" prop="status"></el-table-column>
                <el-table-column type="expand">
                    <template scope="props">
                        <el-table :data="props.row.orderitem.goodslist" style="width: 100%">
                            <el-table-column label="商品" prop="goods.goodsname"></el-table-column>
                            <el-table-column label="进价" prop="goods.goodsbuyprice"></el-table-column>
                            <el-table-column label="数量" prop="goodscount"></el-table-column>
                        </el-table>
                    </template>
                </el-table-column>
            </el-table>
             <!--分页-->
            <div class="block">
                <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="1"
                :page-size="pageitems"
                layout="prev, pager, next, jumper"
                :total="total">
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
                shoporderlist: [],
                userid: '',

                currentPage: 1,
                pageitems: 10,
                total: 0
            }
        },
        created() {
           
            this.getShoporder(this.pageitems,this.currentPage);

        },
        methods: {
            getShoporder(pageitems, currentpage) {
                 this.userid = this.$store.getters.getUserInfo.userid;
                this.axios.get(config.shoporder,
                    {
                        params:
                        {
                            userid: this.userid,
                            pageItems: pageitems,
                            currentPage: currentpage
                        }
                    })
                    .then(response => {
                        console.log(response.data.shoporders);
                        for (var i = 0; i < response.data.shoporders.length; i++) {
                            response.data.shoporders[i].ordertime = moment(response.data.shoporders[i].ordertime).format("YYYY-MM-DD HH:mm:ss ");
                            response.data.shoporders[i].status = config.ficstatus[response.data.shoporders[i].ficorder.ficorderstate].shop;
                   
                        }
                        console.log(response.data.shoporders);

                        this.shoporderlist=[];
                        response.data.shoporders.forEach(
                            (item,index,array)=>{
                                this.shoporderlist.push({
                                    index:((this.currentPage-1)*this.pageitems)+index+1,
                                    orderitem:item,
                                    status:item.status
                                })
                            }
                        )



                        this.total = Number(response.data.count);
                    })
                    .catch(function (err) {
                        console.log(err);
                    })

            },
            //暂时不支持修改每页数量
             handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
            },
            handleCurrentChange(val) {
                this.currentPage =val;
                this.getShoporder(this.pageitems,val);
                console.log(`当前页: ${val}`);
            }
        }
    }

</script>
<style>

</style>