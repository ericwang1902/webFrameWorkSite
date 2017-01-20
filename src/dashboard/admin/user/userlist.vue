<template>
    <div>
        <el-card class="box-card" style="margin: 10px">
        </el-card>
    </div>
</template>
<script>
import config from '../../../common/config'

export default {
    data () {
        return {
            userdata:{}
        }
    },
    created () {
        this.axios.get(config.GetUserInfo+'/'+this.$store.getters.setUserInfo.userid)
        
    }
}
</script>
<style>
</style>