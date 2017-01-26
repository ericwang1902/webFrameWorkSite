<template>
    <div>
        <el-card class="box-card" style="margin: 10px">
            <div slot="header" class="clearfix">
                <el-button style="float: right; " @click="createGoods()" type="primary">创建商品</el-button>
            </div>
            <el-table border :data="goodslistData" style="width: 100%" >
                <el-table-column label="商品名称" width="300" prop="goodsname"></el-table-column>
                <!--<el-table-column label="商品介绍" width="300" prop="goodsdes"></el-table-column>
                <el-table-column label="商品进价" width="300" prop="goodsbuyprice"></el-table-column>
                <el-table-column label="商品售价" width="300" prop="goodsprice"></el-table-column>-->
                <!--<el-table-column width="300" fixed="right" label="操作">
                    <template scope="props">
                        <el-button type="primary" @click="modifyGoods(props.row)" size="mini">修改</el-button>
                    </template>
                </el-table-column>-->
            </el-table>
        </el-card>
        <!--dialog start-->
<el-dialog :title="title" v-model="$store.getters.getGoodsDialogStatus"  @close="ondialogclose" >
        <goodsform :isCreateForm="isCreateForm" :goodsRow="goodsRow" :supplierList="supplierList"></goodsform>
 </el-dialog>
<!--dialog end-->
    </div>
</template>
<script>
import config from '../../../common/config'
import goodsform from './goodsform'


export default {
    components: {
        goodsform
    },
    data () {
        return {
            title:"创建商品",
            isCreateForm:true,
            goodsRow:{},
            supplierList:[],
            goodslistData:[]
        }
    },
    created () {
        this.getGoodsList();//获取所有的商品列表
        this.getSupplierList();
    },
    methods: {
        getGoodsList(){
            this.axios.get(config.goodsList)
                      .then((response)=>{
                          this.goodsListData = response.data;
                          console.log("商品列表：")
                          console.log(response.data);
                      })
                      .catch(function(err){
                          console.log(err)
                      })
        },
        getSupplierList(){
            this.axios.get(config.supplierList)
                       .then((response)=>{
                           this.supplierList = response.data;
                           console.log("供应商列表：")
                           console.log(this.supplierList);
                       })
                       .catch(function(err){
                           console.log(err)
                       })
        },
        createGoods(){
            console.log("创建商品");
            this.$store.commit('setGoodsDialogStatus',true);
        },
        //修改供应商
        modifyGoods(val){
            this.goodsRow = val;
            this.$store.commit('setGoodsDialogStatus',true);

        },
        ondialogclose(){
            this.$store.commit('setGoodsDialogStatus',false);
            this.getGoodsList();
        }
    }
}
</script>
<style>
</style>