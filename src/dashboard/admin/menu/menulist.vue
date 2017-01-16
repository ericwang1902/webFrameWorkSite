<template>
    <div>
        <el-card class="box-card" style="margin: 10px">
            <div slot="header" class="clearfix">
                <el-button style="float: right; " @click="dialogFormVisible = true;isCreateForm=true;" type="primary">添加菜单</el-button>
            </div>

            <el-table border :data="menudata" style="width: 100%">
            <el-table-column label="#" type="index" width="100">
            </el-table-column>
            <el-table-column label="菜单名称" prop="menuName" width="200">
            </el-table-column>
            <el-table-column label="包含功能">
                <template scope="props">
                    <el-tag v-for="(funcItem, index) in props.row.funcList " :type="tagTypes[index]" style="margin-left: 5px">{{funcItem.funcName}}</el-tag>
            </template>
            </el-table-column>
            <el-table-column fixed="right" width="200px" label="操作">
                <template scope="props">
                    <el-button type="text" @click="modifyMenu(props.row)" size="small">编辑</el-button>
                </template>
            </el-table-column>
            </el-table>
        </el-card>

<!--dialog start-->
<el-dialog title="收货地址" v-model="dialogFormVisible" @close="updateMenuList" >
    <menuform :isCreateForm="isCreateForm" :row="rowdata" :funcList="funcList"></menuform>
</el-dialog>
<!--dialog end-->

</div>


</template>

<script>
    import config from '../../../common/config'
    import menuform from './menuform'

    export default {
        components:{
            menuform
        },
        data() {
            return {
                dialogFormVisible: false,

                isCreateForm:true,
                rowdata:{},
                funcList:[],

                menudata: [],
                tagTypes: config.tagTypes,

                //rules几要素：1.form中的rules；2.item中的prop；3.data中的rules对象
                rules: {
                    menuName: [
                        { required: true, message: '请输入菜单名称', trigger: 'blur' }
                    ]

                }
            }
        },
        created: function () {
            this.getMenuList();
        },
        methods: {
            getMenuList() {
                this.axios.get(config.menuList)
                    .then(response => {
                        this.menudata = response.data;
                        this.getFuncList();
                    })
                    .catch(function (err) {
                        console.log(err);
                    })
            },
            getFuncList(){
                 this.axios.get(config.funcList)
                    .then((response => {
                        this.funcList = response.data;
                    }))
                    .catch(function (err) {
                        console.log(err)
                    })
            },
           //点击修改按钮，弹出框，传递参数进去
            modifyMenu(row){
               // console.log("所选行的信息:"+JSON.stringify(row))
                this.dialogFormVisible = true;

                this.isCreateForm=false;
                this.rowdata=row;
            },
            updateMenuList(){
                this.getMenuList();
            }
        }
    }
</script>

<style>
  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  .clearfix:after {
      clear: both
  }

</style>