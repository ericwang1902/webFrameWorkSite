<template>
    <div class="menucontent">
       <el-tabs  class="eltabs" @tab-click="handleClick">
        <el-tab-pane label="用户列表"><userlist></userlist></el-tab-pane>
        </el-tabs>
    </div>
</template>
<script>
import userlist from './userlist';

export default {
    components:{
        userlist
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
