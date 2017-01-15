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

<el-dialog title="收货地址" v-model="dialogFormVisible">
    <el-form :model="menuform" :rules="rules" label-position="left" ref="menuform" label-width="100px">
        <el-form-item label="菜单名称" prop="menuName">
            <el-input v-model="menuform.menuName"></el-input>
        </el-form-item>

        <el-form-item label="选择功能" style="width: 100%" >
<el-table :data="funcList" max-height="450" ref="funcListTable" border style="width: 100%" @selection-change="handleSelectionChange">
<el-table-column type="selection" width="55">
</el-table-column>

<el-table-column prop="funcName" label="功能名称">
</el-table-column>
</el-table>
</el-form-item>

<el-form-item>
    <el-button type="primary" v-if="!isCreateForm" @click="modifyForm('menuform')">提交修改</el-button>
    <el-button type="primary" v-if="isCreateForm" @click="createMenu('menuform')">立即创建</el-button>
    <el-button @click="resetForm('menuform')">重置</el-button>
</el-form-item>
</el-form>
</el-dialog>
<!--dialog end-->

</div>


</template>

<script>
    import config from '../../../common/config'

    export default {
        data() {
            return {
                dialogFormVisible: false,
                isCreateForm:true,
                menudata: [],
                tagTypes: config.tagTypes,

                funcList: [],//用来显示的功能列表
                menuform: {
                    menuName: '',
                    funcSelection: []
                },
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
                        this.axios.get(config.funcList)
                            .then((response => {
                                this.funcList = response.data;
                                //    console.log(response.data)
                            }))
                            .catch(function (err) {
                                console.log(err)
                            })
                    })
                    .catch(function (err) {
                        console.log(err);
                    })
            },
            //获取选择项
            handleSelectionChange(val) {
                this.menuform.funcSelection = val;
                console.log(JSON.stringify(this.menuform.funcSelection))
            },
            createMenu(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        if (this.menuform.funcSelection.length == 0) {
                            //当没有选择功能
                            this.$message({
                                showClose: true,
                                message: '请选择至少一个功能！',
                                type: 'error'
                            });
                        }
                        else {
                            //创建菜单接口，成功后回调
                            this.axios.post(config.menuCreate, this.menuform)
                                .then((response) => {
                                    this.dialogFormVisible = false;
                                    this.getMenuList();
                                })
                                .catch(function (err) {
                                    console.log(err)
                                })
                        }

                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            modifyForm(formName){

            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            },
            modifyMenu(row){
                console.log("row info:"+JSON.stringify(row))
                this.dialogFormVisible = true;
                this.isCreateForm=false;
                //row是一行的menu数据
                //弹出表单
                this.menuform.menuName=row.menuName;
                this.menuform.funcSelection = row.funcList;
                console.log("selections:"+JSON.stringify(this.menuform.funcSelection))
                for(var i =0;i<row.funcList.length;i++){
                    console.log("this:"+typeof(this))
                    this.$refs.funcListTable.toggleRowSelection(this.menuform.funcSelection.find(d => d._id === row.funcList[i]._id))
                }
               
 

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