<template>
    <div class="menucontent">
       <el-tabs  class="eltabs" @tab-click="handleClick">
        <el-tab-pane label="菜单列表"><menulist></menulist></el-tab-pane>
        <!--<el-tab-pane label="新建菜单">
            <el-row :gutter="20">
            <el-col :span="12" :offset="6"><el-card class="box-card"><menuform></menuform></el-card></el-col>
            </el-row>
        </el-tab-pane>-->
        <el-tab-pane label="功能列表"><funclist></funclist></el-tab-pane>
        </el-tabs>
    </div>
</template>
<script>
import menulist from './menulist';
//import menuform from './menuform';
import funclist from './funclist';

export default {
    components:{
        menulist,
        funclist
  //      menuform
    },
    methods: {
        handleClick(tab, event) {
        console.log(tab, event);
      }
    }
}

</script>
<style>
.menucontent{
    height: 100%;
    width: 100%;
}
.eltabs{
    height: 100%;
}
</style>
