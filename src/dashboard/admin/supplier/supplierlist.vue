<template>
    <div>
        <el-card class="box-card" style="margin: 10px">
            <div slot="header" class="clearfix">
                <el-button style="float: right; " @click="createSupplier()" type="primary">添加供应商</el-button>
            </div>
            <el-table border :data="supplierlistData" style="width: 100%" >
                <el-table-column type="expand">
                    <template scope="props">
                            sdf
                    </template>
                </el-table-column>
                <el-table-column label="供应商编号" width="300" prop="suppliernum"></el-table-column>
                <el-table-column label="供应商名称" width="300" prop="suppliername"></el-table-column>
                <el-table-column label="供应商说明" width="300" prop="supplierdes"></el-table-column>
                <el-table-column width="300" fixed="right" label="修改">
                    <template scope="props">
                        <el-button type="primary" @click="modifySupplier(props.row)" size="mini">信息</el-button>
                        <el-button type="success" @click="setSupplierUser(props.row)" size="mini">用户</el-button>
                        <el-button type="warning" @click="modifySupplier(props.row)" size="mini">店员</el-button>
                        <el-button type="danger" @click="modifySupplier(props.row)" size="mini">商品</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </el-card>
<!--dialog start-->
<el-dialog :title="title" v-model="$store.getters.getSupplierDialogStatus"  @close="ondialogclose" >
    <supplierform v-if="formTypes[0]" :isCreateForm="isCreateForm" :supRow="supRow" :userList="userList"></supplierform>
    <supplieruserform v-if="formTypes[1]" :userList="userList" :supRow="supRow"></supplieruserform>


</el-dialog>
<!--dialog end-->
    </div>
</template>
<script>
import config from '../../../common/config'
import supplierform from './supplierform'
import supplieruserform from './supplieruserform'

export default {
    components: {
      supplierform,
      supplieruserform
    },
    data () {
        return {
            title:"新建供应商",
            isCreateForm:true,
            supRow:{},
            supplierlistData:[],
            userList:[],
            formTypes:[false,false,false,false],//formtypes和isCreateForm来共同控制弹出form
            
        }
    },
    created () {
        this.getsupplierList();
        this.getUserList();
    },
    methods:{
       //获取后台用户信息
        getUserList:function(){
            this.axios.get(config.GetUserInfo)
                        .then((response)=>{
                            this.userList = response.data;
                        })
                        .catch(function(err){
                            console.log(err)
                        })
        },
        //重置formtypes数组
        resetFormTypes(){
            for(var i =0;i<this.formTypes.length;i++){
                this.formTypes[i] = false;
            }
        },
        getsupplierList(){
            this.axios.get(config.supplierList)
                      .then((response)=>{
                          console.log(response.data)
                          this.supplierlistData = response.data;
                      })
                      .catch(function(err){
                          console.log(err)
                      })
        },
        ondialogclose(){
            console.log("关闭dialog")
            this.$store.commit('setSupplierDialogStatus',false);
            this.getsupplierList();
            this.resetFormTypes();//关闭窗口的时候，充值formtypes数组
        },
        //创建供应商
        createSupplier:function(){
            console.log("添加供应商")
            this.isCreateForm = true;
            this.title="新建供应商";
            this.formTypes[0]=true;
            this.$store.commit('setSupplierDialogStatus',true);//千万要注意顺序，需要先设置子控件的内容，在做弹出框显示
        },
        //修改供应商
        modifySupplier(supRow){
            console.log(supRow);
            this.isCreateForm=false;
            this.title="修改供应商";
            this.supRow = supRow;
            this.formTypes[0]=true;
            this.$store.commit('setSupplierDialogStatus',true);
        },
        //设置供应商后台用户
        setSupplierUser(supRow){
            this.title="设置供应商后台用户"
            this.formTypes[1]=true;
            this.supRow = supRow;
            this.$store.commit('setSupplierDialogStatus',true);
        }
    }
}
</script>
<style>
</style>
