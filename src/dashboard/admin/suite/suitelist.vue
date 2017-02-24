<template>
    <div>
        <el-card class="box-card" style="margin: 10px">
            <div slot="header" class="clearfix">
                <el-button style="float: right; " @click="createSuite()" type="primary">创建套餐</el-button>
            </div>
           <el-table border :data="suitelist" style="width: 100%">
               <el-table-column label="套餐编号"  prop="suitenum"></el-table-column>
               <el-table-column label="套餐名称"  prop="suitename"></el-table-column>
               <el-table-column label="套餐描述"  prop="suitedes"></el-table-column>
               <el-table-column label="套餐价格"  prop="suiteprice"></el-table-column>
               <el-table-column label="套餐状态" >
                   <template scope="props">
                        
                        <p>{{props.row.suitestate ? '上架' : '下架'}}</p>
                  </template>
               </el-table-column>
               
               <el-table-column width="100" fixed="right" label="操作">
                    <template scope="props">
                        <el-button type="primary" @click="modifySuite(props.row)" size="mini">修改</el-button>
                    </template>
                </el-table-column>
           </el-table>
        </el-card>
        <!--dialog start-->
<el-dialog :title="title" v-model="$store.getters.getSuiteDialogStatus"  @close="ondialogclose" >
        <suiteform v-if="$store.getters.getSuiteDialogStatus":isCreateForm="isCreateForm" :goodsList="goodsList" :suiteRow="suiteRow"></suiteform>
 </el-dialog>
<!--dialog end-->
    </div>
</template>
<script>
import suiteform from './suiteform'
import config from '../../../common/config'

export default {
    components:{
        suiteform
    },
    data () {
        return {
            suitelist:[],//suitelist
            title:"",
            isCreateForm:false,
            goodsList:[],
            suiteRow:{}

        }
    },
    created () {
      this.getSuiteList();  
      this.getGoodsList();
    },
    methods: {
        getSuiteList(){
            console.log("获取套餐列表")
            
            this.axios.get(config.suite)
                      .then((response)=>{
                           this.suitelist = response.data;
                          
                      })
                      .catch(function(err){
                          console.log(err);
                      })
            
        },
        getGoodsList(){
            this.axios.get(config.goodsList)
                       .then((response)=>{
                           this.goodsList = response.data;
                           console.log(this.goodsList)
                       })
                       .catch(function(err){
                           console.log(err);
                       })
        },
        createSuite(){
            console.log("创建套餐")
            this.title="创建套餐";
            this.isCreateForm =true;//创建套餐
            this.$store.commit('setSuiteDialogStatus',true);

        },
        modifySuite(val){
            this.suiteRow = val;
            console.log("----"+JSON.stringify(this.suiteRow.suitestate));
            this.isCreateForm =false;
            this.$store.commit('setSuiteDialogStatus',true);
        },
        ondialogclose(){
            console.log("关闭dialog")
            this.getSuiteList();
            this.$store.commit('setSuiteDialogStatus',false);
        }
        
    }
}
</script>
<style>
</style>
