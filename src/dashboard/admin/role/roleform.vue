<template>
    <div>
        <el-form :model="roleform" label-position="left" ref="roleform" label-width="100px">
            <el-form-item label = "角色名称" prop = "roleName">
                <el-input v-model="roleform.roleName"></el-input>
            </el-form-item>
            <el-form-item label="选择菜单" style="width: 100%">
                <el-table :data = "menuList" max-height="450" ref="menuListTable" border style="width: 100%" @selection-change="handleSelectionChange">
                    <el-table-column type="selection" width="55">
                    </el-table-column>
                    <el-table-column prop="menuName" label="菜单名称">
                    </el-table-column>
                </el-table>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>

export default{
    
    props:['isCreateForm','roleRow','menuList'],//分别是form类型，当前role行的信息，系统内menu的list
    data(){
        return {
            roleform:{
                roleName:"",
                menuSelection:[]
            }
        }
    },
    mounted:function(){
        console.log(this.isCreateForm);
        console.log(JSON.stringify(this.menuList))

    },
    methods:{
         //获取选择项
            handleSelectionChange(val) {
                this.roleform.menuSelection = val;
                //  console.log(JSON.stringify(this.menuform.funcSelection))
            },
    }
}
</script>
<style>
</style>