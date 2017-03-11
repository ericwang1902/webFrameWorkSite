<template>
    <div>
        <el-card class="box-card" style="margin: 10px">
            <div slot="header" class="clearfix">
                <el-button style="float: right; " @click="createMenu()" type="primary">添加菜单</el-button>
            </div>

            <el-table border :data="menudata" style="width: 100%">
            <el-table-column label="#" prop="index"  width="100">
            </el-table-column>
            <el-table-column label="菜单名称" prop="menuName" width="200">
            </el-table-column>
            <el-table-column label="包含功能">
                <template scope="props">
                    <el-tag v-for="(funcItem, index) in props.row.funcList " :type="tagTypes[index]" style="margin-left: 5px">{{funcItem.funcName}}</el-tag>
                </template>
            </el-table-column>
            <el-table-column  width="200px" label="操作">
                <template scope="props">
                    <el-button type="text" @click="modifyMenu(props.row)" size="small">编辑</el-button>
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

<!--dialog start-->
<el-dialog :title="title" v-model="$store.getters.getDialogStatus"  @close="ondialogclose" >
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
                isCreateForm:true,
                rowdata:{},
                funcList:[],
                title:"",

                currentPage:1,
                pageitems:10,
                total:0,

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
            this.getMenuList(10,1);
        },
        methods: {
            getMenuList(pageitems,currentpage) {
                this.axios.get(config.menuList,{
                        params: {
                        pageItems: pageitems,
                        currentPage:currentpage
                        }
                        })
                    .then(response => {
                        this.menudata =[];
                        //构造分页序号
                        response.data.menus.forEach(
                            (item,index,array)=>{
                                    this.menudata.push({
                                        index:((this.currentPage-1)*this.pageitems)+index+1,
                                        menuId:item._id,
                                        menuName:item.menuName,
                                        funcList:item.funcList
                                })
                            }
                        )

                        //this.menudata = response.data.menus;
                        this.total = Number(response.data.count);
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
            //点击新建按钮
            createMenu(){
                console.log(this.$store.getters.getDialogStatus)
                this.$store.commit('setDialogStatus',true)
                this.isCreateForm=true;
                this.title="添加菜单"
            },
           //点击修改按钮，弹出框，传递参数进去
            modifyMenu(row){
                this.$store.commit('setDialogStatus',true)

                this.isCreateForm=false;
                this.rowdata=row;
                this.title="修改菜单"
            },
            ondialogclose(){
                this.getMenuList(this.pageitems, this.currentPage);
                this.$store.commit('setDialogStatus',false);
            },
            //暂时不支持修改每页数量
             handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
            },
            handleCurrentChange(val) {
                this.currentPage =val;
                this.getMenuList(this.pageitems,val);
                console.log(`当前页: ${val}`);
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