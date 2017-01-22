<template>
    <div>
            <steps></steps>
        <div>
            <router-view></router-view>
        </div>
    </div>
    
</template>
<script>
import steps from './steps'

export default {
    components:{
        steps
    },
    data () {
        return {
            
        }
    }
}
</script>
<style>
</style>
