<template>
    <div>

    </div>
</template>
<script>
    export default{
        props: ["supRow"],
        created () {
            if(supRow.supplieruser.openid){
               
                //去调取后台接口来获取微信用户信息
                //this.axios.get()

            }
        }
    }

</script>
<style>

</style>