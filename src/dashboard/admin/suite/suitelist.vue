<template>
    <div>
        <el-card class="box-card" style="margin: 10px">
            <div slot="header" class="clearfix">
                <el-button style="float: right; " @click="createSuite()" type="primary">创建套餐</el-button>
            </div>
            <el-table border :data="suitelist" style="width: 100%">
                <el-table-column label="套餐信息">
                    <el-table-column label="套餐编号" prop="suitenum"></el-table-column>
                    <el-table-column label="套餐名称" prop="suitename"></el-table-column>
                    <el-table-column label="套餐描述" prop="suitedes"></el-table-column>
                    <el-table-column label="套餐价格" prop="suiteprice"></el-table-column>
                </el-table-column>
                <el-table-column label="所属区县">
                    <el-table-column label="省" prop="district.province"></el-table-column>
                    <el-table-column label="市" prop="district.city"></el-table-column>
                    <el-table-column label="区县" prop="district.district"></el-table-column>
                    <el-table-column label="套餐状态">
                        <template scope="props">
                            <p>{{props.row.suitestate ? '上架' : '下架'}}</p>
                        </template>
                    </el-table-column>
                </el-table-column>


                <el-table-column width="100" label="操作">
                    <template scope="props">
                        <el-button type="primary" @click="modifySuite(props.row)" size="mini">修改</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <!--分页-->
            <div class="block">
                <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="1" :page-size="pageitems"
                    layout="prev, pager, next, jumper" :total="total">
                </el-pagination>
            </div>
        </el-card>
        <!--dialog start-->
        <el-dialog :title="title" v-model="$store.getters.getSuiteDialogStatus" @close="ondialogclose">
            <suiteform v-if="$store.getters.getSuiteDialogStatus" :isCreateForm="isCreateForm" :goodsList="goodsList" :suiteRow="suiteRow"></suiteform>
        </el-dialog>
        <!--dialog end-->
    </div>
</template>
<script>
    import suiteform from './suiteform'
    import config from '../../../common/config'
    import funcAuth from '../../../common/funcAuth'

    export default {
        components: {
            suiteform
        },
        data() {
            return {
                suitelist: [],//suitelist
                title: "",
                isCreateForm: false,
                goodsList: [],
                suiteRow: {},

                currentPage: 1,
                pageitems: 10,
                total: 0

            }
        },
        created() {
            var userid = this.$store.getters.getUserInfo.userid;
            this.getSuiteList(userid);
            this.getGoodsList(userid);
        },
        methods: {
            getSuiteList(userid) {
                
                this.axios.get(config.suite, {
                    params: {
                        userid: userid,
                        pageItems: this.pageitems,
                        currentPage: this.currentPage
                    }
                })
                    .then((response => {
                        this.suitelist = response.data.suites;
                        this.total = response.data.count;
                        console.log("count:" + this.total);
                    }))
                    .catch(function (err) {
                        console.log(err);
                    })

            },
            getGoodsList(userid) {
                this.axios.get(config.goodslistall + '?userid=' + userid)
                    .then((response) => {
                        this.goodsList = response.data;
                        //       console.log(this.goodsList)
                    })
                    .catch(function (err) {
                        console.log(err);
                    })
            },
            createSuite() {
                //   console.log("创建套餐")
                this.title = "创建套餐";
                this.isCreateForm = true;//创建套餐
                this.$store.commit('setSuiteDialogStatus', true);

            },
            modifySuite(val) {
                this.suiteRow = val;
                console.log("----" + JSON.stringify(this.suiteRow.suitestate));
                this.isCreateForm = false;
                this.$store.commit('setSuiteDialogStatus', true);
            },
            ondialogclose() {
                console.log("关闭dialog")
                this.getSuiteList(this.$store.getters.getUserInfo.userid);
                this.$store.commit('setSuiteDialogStatus', false);
            },
            //暂时不支持修改每页数量
            handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
            },
            handleCurrentChange(val) {
                this.currentPage = val;
                this.getGoodsList(this.$store.getters.getUserInfo.userid);
                console.log(`当前页: ${val}`);
            }

        }
    }

</script>
<style>

</style>