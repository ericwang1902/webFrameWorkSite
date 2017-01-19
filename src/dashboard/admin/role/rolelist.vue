<template>
    <div>  
         <el-card class="box-card" style="margin: 10px">
            <div slot="header" class="clearfix">
                <el-button style="float: right; " @click="createRole()" type="primary">添加角色</el-button>
            </div>
          <el-table border :data="rolelistData" style="width: 100%">
                    <el-table-column type="expand">
                    <template scope="props">
                        <el-table :data="props.row.menuList" style="width: 100%">                       
                            <el-table-column label="菜单" prop="menuName"></el-table-column>
                            <el-table-column label="包含功能">                          
                                <template scope="props">
                                    <el-tag v-for="(funcItem, index) in props.row.funcList " style="margin-left: 5px">{{funcItem.funcName}}</el-tag>
                                </template>       
                            </el-table-column>
                        </el-table>
                    </template>
                    </el-table-column>

                    <el-table-column label="职责" prop="roleName"></el-table-column>
                    <el-table-column label="说明" prop="roleDes"></el-table-column>
                    <el-table-column  width="200px" label="操作">
                        <template scope="props">
                            <el-button type="text" @click="modifyRole(props.row)" size="small">编辑</el-button>
                        </template>
                    </el-table-column>
            </el-table>
         </el-card>

<!--dialog start-->
<el-dialog :title="title" v-model="$store.getters.getRoleDialogStatus"  @close="ondialogclose" >
    <roleform :isCreateForm="isCreateForm" :roleRow="rowData" :menuList="menuList"></roleform>
</el-dialog>
<!--dialog end-->
    </div>
</template>
<script>
    import config from '../../../common/config'
    import roleform from './roleform'

    export default{
        components:{
            roleform
        },
        data () {
            return {
                rolelistData:[],
                //dialog
                title:"form",

                isCreateForm:true,
                rowData:{},
                menuList:[]
            }
        },
        created () {
            this.getRoleList();
            this.getMenuList(10,1);
        },
        methods:{
            getRoleList:function(){
                this.axios.get(config.roleList)
                .then((response=>{
                    console.log(JSON.stringify(response.data))
                    this.rolelistData = response.data;//系统内所有的角色列表

                }))
                .catch(function(error){
                    console.log(error)
                })
            },
            //创建角色
            createRole(){
                console.log("添加角色")
                this.title="添加角色";
                this.isCreateForm = true;
                this.$store.commit('setRoleDialogStatus',true);

            },
            //修改角色
            modifyRole(currentRow){
                console.log("修改角色")
                this.title="修改角色"
                this.isCreateForm = false;
                this.$store.commit('setRoleDialogStatus',true);
                console.log("当前行："+JSON.stringify(currentRow));


            },
            //对话框关闭的回调
            ondialogclose(){
                console.log("对话框关闭")
                this.$store.commit('setRoleDialogStatus',false);
            },
            //获取menulist
             getMenuList(pageitems,currentpage) {
                this.axios.get(config.menuList,{
                        params: {
                        pageItems: pageitems,
                        currentPage:currentpage
                        }
                        })
                    .then(response => {
                         response.data.menus.forEach(
                            (item,index,array)=>{
                                    this.menuList.push({
                                         menuId:item._id,
                                        menuName:item.menuName,
                                        funcList:item.funcList
                                })
                            }
                        )
                    })
                    .catch(function (err) {
                        console.log(err);
                    })
            }
        }
    }
</script>
<style>
</style>
