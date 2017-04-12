<template>
    <div>
        <el-card class="box-card" style="margin: 10px">
            <div slot="header" class="clearfix">
                <el-button style="float: right; " @click="createFunc()" type="primary">添加功能</el-button>
            </div>
            <el-table border :data="funcdata" style="width: 100%">
            <el-table-column label="#" type="index" width="100">
            </el-table-column>
            <el-table-column label="功能名称" prop="funcName" >
            </el-table-column>
            <el-table-column label="功能链接" prop="funcLink" >
            </el-table-column>
            <el-table-column label="功能排序号" prop="funcNum" >
            </el-table-column>
            </el-table-column>
            <el-table-column  width="200px" label="操作">
                <template scope="props">
                    <el-button type="text" @click="modifyFunc(props.row)" size="small">编辑</el-button>
                </template>
            </el-table-column>
            </el-table>
        </el-card>

        <!--dialog start-->
        <el-dialog :title="title" v-model="$store.getters.getFuncDialogStatus"  @close="ondialogclose" >
            <funcform :isCreateForm="isCreateForm" :row="rowdata"></funcform>
        </el-dialog>
        <!--dialog end-->
    </div>

</template>
<script>
    import config from '../../../common/config'
    import funcform from './funcform'

    export default {
        components:{
            funcform
        },
        data() {
            return {
                funcdata: [],
                title:'',
                rowdata:{},
                isCreateForm:true

            }
        },
        created: function () {
            this.getFuncList();
        },
        methods: {
            getFuncList() {
                this.axios.get(config.funcList)
                    .then((response => {
                        this.funcdata = response.data;
                        //    console.log(response.data)
                    }))
                    .catch(function (err) {
                        console.log(err)
                    })
            },
            createFunc(){
                console.log("添加功能")
                this.$store.commit('setFuncDialogStatus',true);
                this.title = "添加功能";
                this.isCreateForm = true;      

            },
            modifyFunc(funcitem){
                console.log("修改功能")
                this.$store.commit('setFuncDialogStatus',true);
                this.isCreateForm = false;
                this.title = "修改功能";
                this.rowdata = funcitem;
                console.log(funcitem);

            },
            ondialogclose(){
                
                this.getFuncList();
                this.$store.commit('setFuncDialogStatus',false);
            }
        }
    }
</script>
<style>
</style>