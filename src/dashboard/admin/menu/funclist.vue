<template>
    <div>
        <el-table border :data="funcdata" style="width: 100%">
        <el-table-column label="#" type="index" width="100">
        </el-table-column>
        <el-table-column label="功能名称" prop="funcName" >
        </el-table-column>
        <el-table-column label="功能链接" prop="funcLink" >
        </el-table-column>
        </el-table-column>
        </el-table>
    </div>

</template>
<script>
    import config from '../../../common/config'

    export default {
        data() {
            return {
                funcdata: []
            }
        },
        created: function () {
            this.getFuncList();
        },
        methods: {
            getFuncList() {
                this.axios.get(config.funcList)
                    .then((response => {
                        this.funcdata = response.data;
                        //    console.log(response.data)
                    }))
                    .catch(function (err) {
                        console.log(err)
                    })
            }
        }
    }
</script>
<style>
</style>