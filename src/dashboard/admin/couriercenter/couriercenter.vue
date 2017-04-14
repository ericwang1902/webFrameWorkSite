<template>
    <div>
        <el-card class="box-card" style="margin: 10px">
            <div slot="header" class="clearfix">
                <el-button style="float: right; " @click="createCourier()" type="primary">创建配送员</el-button>
            </div>
            <el-table border :data="courierArray" style="width: 100%">
                <el-table-column label="区县" prop="district.province"></el-table-column>
                <el-table-column label="区县" prop="district.city"></el-table-column>
                <el-table-column label="区县" prop="district.district"></el-table-column>
                <el-table-column label="姓名" prop="couriername"></el-table-column>
                <el-table-column label="描述" prop="courierdes"></el-table-column>
                <el-table-column label="系统用户" prop="courieruser.username"></el-table-column>
                <el-table-column width="100" label="操作">
                    <template scope="props">
                        <el-button type="primary" @click="modifyCourier(props.row)" size="mini">修改</el-button>
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
        <el-dialog :title="title" v-model="$store.getters.getCourierDialogStaus" @close="ondialogclose">
            <courierform v-if="$store.getters.getCourierDialogStaus" :userlist="userlist" :courierRow="courierRow" :regionlist="regionlist"
                :isCreate="isCreate"></courierform>
        </el-dialog>
        <!--dialog end-->
    </div>
</template>
<script>
    import config from '../../../common/config';
    import courierform from './courierform';

    export default {
        components: {
            courierform
        },
        data() {
            return {
                title: '创建配送员',
                regionlist: [],
                isCreate: false,
                courierArray: [],
                userid: '',
                courierRow: {},
                userlist: [],

                currentPage: 1,
                pageitems: 10,
                total: 0
            }
        },
        created() {
            this.userid = this.$store.getters.getUserInfo.userid;
            this.getCourier(this.userid);
            //这里的关联表单，是最佳实践，后期其他表单也要做修改
        },
        methods: {
            //获取系统用户信息
            getuserlist: function (userid, callback) {
                this.axios.get(config.GetUserInfo + '?userid=' + userid)
                    .then((response) => {
                        this.userlist = response.data;
                        console.log(this.userList)
                        callback();
                    })
                    .catch(function (err) {
                        console.log(err)
                    })
            },
            //获取区域，共配送员创建表单使用
            getRegion: function (userid, callback) {
                this.axios.get(config.region + '?userid=' + userid)
                    .then((response) => {
                        console.log("区域列表")
                        console.log(response)
                        this.regionlist = response.data;
                        callback();
                    })
                    .catch(function (err) {
                        console.log(err)
                    })
            },
            //获取配送员
            getCourier: function (userid) {
                // this.axios.get(config.courier + '?userid=' + userid)
                //     .then((response) => {
                //         this.courierArray = response.data;
                //         console.log('配送员：' + JSON.stringify(response.data))
                //     })
                //     .catch(function (err) {
                //         console.log(err)
                //     })

                this.axios.get(config.courier, {
                    params: {
                        userid: userid,
                        pageItems: this.pageitems,
                        currentPage: this.currentPage
                    }
                })
                .then((response)=>{
                    this.courierArray = response.data.couriers;
                    this.total = response.data.count;
                })
                .catch(function(err){
                    console.log(err);
                })
            },
            createCourier: function () {
                console.log('创建配送员按钮');
                this.getRegion(this.userid, () => {
                    this.getuserlist(this.userid, () => {
                        this.isCreate = true;
                        this.$store.commit('setCourierDialogStaus', true);
                    });
                });
            },
            modifyCourier: function (courierRow) {
                this.getRegion(this.userid, () => {
                    this.getuserlist(this.userid, () => {
                        this.courierRow = courierRow;
                        this.isCreate = false;
                        this.$store.commit('setCourierDialogStaus', true);
                        console.log('修改配送员')
                    });
                });
            },
            ondialogclose: function () {
                this.$store.commit('setCourierDialogStaus', false);
                this.getCourier(this.userid);
            },
             //暂时不支持修改每页数量
            handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
            },
            handleCurrentChange(val) {
                this.currentPage = val;
                this.getCourier(this.$store.getters.getUserInfo.userid);
                console.log(`当前页: ${val}`);
            }
        }
    }

</script>
<style>

</style>