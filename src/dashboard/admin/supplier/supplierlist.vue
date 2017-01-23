<template>
    <div>
        <el-card class="box-card" style="margin: 10px">
            <div slot="header" class="clearfix">
                <el-button style="float: right; " @click="createSupplier()" type="primary">添加供应商</el-button>
            </div>
            <el-table border :data="supplierlistData" style="width: 100%" >
                <el-table-column label="供应商编号" prop="suppliernum"></el-table-column>
                <el-table-column label="供应商名称" prop="suppliername"></el-table-column>
                <el-table-column label="供应商说明" prop="supplierdes"></el-table-column>
            </el-table>
        </el-card>
<!--dialog start-->
<el-dialog :title="title" v-model="$store.getters.getSupplierDialogStatus"  @close="ondialogclose" >
    <supplierform :isCreateForm="isCreateForm" :supRow="supRow"></supplierform>
</el-dialog>
<!--dialog end-->
    </div>
</template>
<script>
import supplierform from './supplierform'

export default {
    components: {
      supplierform  
    },
    data () {
        return {
            title:"新建供应商",
            isCreateForm:true,
            supRow:{},
            supplierlistData:[]
            
        }
    },
    created () {
        
    },
    methods:{
        getsupplierList(){
            
        },
        createSupplier:function(){
            console.log("添加供应商")
            this.$store.commit('setSupplierDialogStatus',true);
            this.isCreateFrom = true;
        },
        ondialogclose(){
            console.log("关闭dialog")
            this.$store.commit('setSupplierDialogStatus',false);
        }
    }
}
</script>
<style>
</style>
