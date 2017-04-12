<template>
    <div>
        <el-card class="box-card" style="margin: 10px">
            <el-table border :data="supplierlistData" style="width: 100%">
                <el-table-column label="供应商编号" prop="suppliernum"></el-table-column>
                <el-table-column label="供应商名称" prop="suppliername"></el-table-column>
                <el-table-column label="供应商说明" prop="supplierdes"></el-table-column>
                <el-table-column label="今日营业额" prop="supplieruser.district.province"></el-table-column>
            </el-table>
        </el-card>
    </div>
</template>
<script>
    import config from '../../../common/config'
    export default {
        data() {
            return {
                sda:[]//supplierDailyAmount

            }
        },
        created() {
            this.axios.get(config.supplierDaily)
                      .then((response)=>{
                          console.log(response.data);
                          this.sda = response.data;
                      })
                      .catch(function(err){
                          console.log(err);
                      })
        }
    }

</script>
<style>

</style>