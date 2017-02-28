<template>
    <div class="menucontent">
        <el-tabs class="eltabs" >
            <el-tab-pane label="开通县市维护">
                <districtlist></districtlist>
            </el-tab-pane>
            <el-tab-pane label="配送区域维护">
                <regionlist></regionlist>
            </el-tab-pane>
            <el-tab-pane label="所有地址维护">
                <div>所有地址维护</div>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>
<script>
    import districtlist from './districtlist'
    import regionlist from './regionlist'

    export default {
        components: {
            districtlist,
            regionlist
        }
    }

</script>
<style>

</style>