<template>
    <div>
        <el-card class="box-card" style="margin: 10px">
            <div slot="header" class="clearfix">
                <el-button style="float: right;" @click="createDistrict()" type="primary">开通县市</el-button>
            </div>
            <el-table border :data="districts" style="width: 100%">
                <el-table-column label="省" prop="province"></el-table-column>
                <el-table-column label="市" prop="city"></el-table-column>
                <el-table-column label="区/县" prop="district"></el-table-column>
                <el-table-column width="100" fixed="right" label="操作">
                    <template scope="props">
                        <el-button type="primary" @click="modifyDistrict(props.row)" size="mini">修改</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </el-card>

        <!--dialog start-->
        <el-dialog :title="title" v-model="$store.getters.getDistrictDialogStatus" @close="ondialogclose">
            <districtform v-if="$store.getters.getDistrictDialogStatus" :isCreate="isCreate" :disRow="disRow"></districtform>
        </el-dialog>
        <!--dialog end-->
    </div>
</template>
<script>
    import config from '../../../common/config'
    import districtform from './districtform'

    export default {
        components: {
            districtform
        },
        data() {
            return {
                title: "开通县市",
                isCreate: false,//是否是创建的区县
                disRow: {},
                districts: []//开通的县市列表
                  
            }
        },
        created() {
            this.getDistricts();
        },
        methods: {
            createDistrict() {
                this.isCreate = true;
                this.$store.commit('setDistrictDialogStatus', true);
            },
            ondialogclose() {
                
                this.$store.commit('setDistrictDialogStatus', false);
                this.getDistricts();
            },
            modifyDistrict(val) {
                this.disRow = val;
                this.isCreate = false;
                this.$store.commit('setDistrictDialogStatus', true);
                console.log('selected row:'+JSON.stringify(this.disRow));
            },
            getDistricts(){
                this.axios.get(config.district)
                .then((response) => {
                    this.districts = response.data;
                    console.log(response)
                })
                .catch(function (err) {
                    console.log(err)
                })
            }
        }
    }

</script>
<style>

</style>