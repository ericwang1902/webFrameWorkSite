<template>
<div>
    配送员
</div>
</template>
<script>
    import config from '../../../common/config'
export default {
    data () {
        return {
            courierArray:[]
        }
    },
    created () {
        var userid = this.$store.getters.getUserInfo.userid;
        this.getUsers(userid);
    },
    methods: {
        //获取后台用户信息
        getUsers:function(userid){
            this.axios.get(config.courier + '?userid=' + userid)
                        .then((response)=>{
                            this.courierArray = response.data;
                            console.log('---------'+JSON.stringify(response.data))
                        })
                        .catch(function(err){
                            console.log(err)
                        })
        }
    }
}
</script>
<style>
</style>