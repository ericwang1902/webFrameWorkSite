<template>
    <div class="menucontent">
       <el-tabs  class="eltabs" @tab-click="handleClick">
        <el-tab-pane label="角色列表"><rolelist></rolelist></el-tab-pane>
        </el-tabs>
    </div>
</template>
<script>
import rolelist from './rolelist';


export default {
    components:{
        rolelist
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
