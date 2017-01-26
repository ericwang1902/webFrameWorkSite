<template>
    <div class="menucontent">
       <el-tabs  class="eltabs" @tab-click="handleClick">
        <el-tab-pane label="商品列表"><goodslist></goodslist></el-tab-pane>
       </el-tabs>
    </div>
</template>
<script>
import goodslist from './goodslist'

    export default {
        components: {
            goodslist
        },
        methods: {
        handleClick(tab, event) {
        console.log(tab, event);
            }
        }
    }
</script>
<style>
</style>