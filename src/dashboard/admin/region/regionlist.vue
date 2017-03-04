<template>
    <div>
        <el-card class="box-card" style="margin: 10px">
            <div slot="header" class="clearfix">
                <el-button style="float: right; " @click="createRegion()" type="primary">创建商品</el-button>
            </div>
            <el-table border :data="regionlistdata" style="width: 100%">
                <el-table-column label="名称" prop="regionname"></el-table-column>
                <el-table-column label="省" prop="district.province"></el-table-column>
                <el-table-column label="市" prop="district.city"></el-table-column>
                <el-table-column label="区县" prop="district.district"></el-table-column>
                <el-table-column width="100"  label="操作">
                    <template scope="props">
                        <el-button type="primary" @click="modifyRegion(props.row)" size="mini">修改</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </el-card>
        <!--dialog start-->
        <el-dialog :title="title" v-model="$store.getters.getRegionDialogStatus" @close="ondialogclose">
            <regionform v-if="$store.getters.getRegionDialogStatus" :regionRow="regionRow":districtlist="districtlist" :isCreate="isCreate"></regionform>
        </el-dialog>
        <!--dialog end-->
    </div>
</template>
<script>
    import config from '../../../common/config'
    import regionform from './regionform'
    export default {
        components: {
            regionform
        },
        data() {
            return {
                regionlistdata: [],
                districtlist: [],
                isCreate: true,
                regionRow: {},
                title: "新建配送区域"
            }
        },
        mounted() {
            this.getRegion();
            this.getDistrict();
        },
        methods: {
            getRegion: function () {
                this.axios.get(config.region)
                    .then((response) => {
                        console.log(response)
                        this.regionlistdata = response.data;
                    })
                    .catch(function (err) {
                        console.log(err)
                    })
            },
            getDistrict: function () {
                this.axios.get(config.district)
                    .then((response) => {
                        this.districtlist = response.data;
                        console.log(JSON.stringify(this.districtlist))
                    })
            },
            createRegion: function () {
                console.log("createRegion")
                this.isCreate = true;
                this.$store.commit("setRegionDialogStatus", true);

            },
            ondialogclose: function () {
                this.$store.commit("setRegionDialogStatus", false);
                this.getRegion();
            },
            modifyRegion:function(row){
                this.regionRow = row;
                console.log(JSON.stringify(this.regionRow));
                this.isCreate = false;
                this.$store.commit("setRegionDialogStatus", true);
                
            }
        }
    }

</script>
<style>

</style>