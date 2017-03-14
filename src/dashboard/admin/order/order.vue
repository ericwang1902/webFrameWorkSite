<template>
    <div class="menucontent">
        <el-tabs class="eltabs" >
            <el-tab-pane label="待下发">
                <deliverorder></deliverorder>
            </el-tab-pane>
            <el-tab-pane label="已下发">
                <deliveredorder></deliveredorder>
            </el-tab-pane>
            
        </el-tabs>
    </div>
</template>
<script>
    import deliverorder from './deliverorder';
    import deliveredorder from './deliveredorder';
    export default {
        components: {
            deliverorder,
            deliveredorder
        }
    }
    

</script>
<style>

</style>