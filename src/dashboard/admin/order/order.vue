<template>
    <div class="menucontent">
        <el-tabs class="eltabs" value="first" @tab-click="handleClick">
            <el-tab-pane label="待下发" name="first">
                <deliverorder></deliverorder>
            </el-tab-pane>
            <el-tab-pane label="已下发" name="second">
                <deliveredorder v-if="sshow"></deliveredorder>
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
        },
        data () {
            return {
                sshow:false
            }
        },
        methods: {
            handleClick(tab, event) {
                console.log(tab.name);

                if(tab.name=='second'){
                    this.sshow = false;
                    this.sshow = true;
                }
                
            }
        }
    }

</script>
<style>

</style>