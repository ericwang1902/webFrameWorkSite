<template>
    <div>
        <el-card class="box-card" style="margin: 10px">
            <div slot="header" class="clearfix">
                <el-button style="float: right; " @click="createSupplier()" type="primary">添加供应商</el-button>
            </div>
            <el-table border :data="supplierlistData" style="width: 100%">
                <el-table-column label="供应商编号" prop="suppliernum"></el-table-column>
                <el-table-column label="供应商名称" prop="suppliername"></el-table-column>
                <el-table-column label="供应商说明" prop="supplierdes"></el-table-column>
                <el-table-column label="省" prop="supplieruser.district.province"></el-table-column>
                <el-table-column label="市" prop="supplieruser.district.city"></el-table-column>
                <el-table-column label="区县" prop="supplieruser.district.district"></el-table-column>
                <el-table-column width="300" label="修改">
                    <template scope="props">
                        <el-button type="primary" @click="modifySupplier(props.row)" size="mini">信息</el-button>
                        <el-button type="success" @click="setSupplierUser(props.row)" size="mini">用户</el-button>
                        <!--<el-button type="warning" @click="setSupplierWorker(props.row)" size="mini">店员</el-button>
                        <el-button type="danger" @click="modifySupplier(props.row)" size="mini">商品</el-button>-->
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
        <el-dialog :title="title" v-model="$store.getters.getSupplierDialogStatus" @close="ondialogclose">
            <supplierform v-if="formTypes[0]" :isCreateForm="isCreateForm" :supRow="supRow" :userList="userList"></supplierform>
            <supplieruserform v-if="formTypes[1]" :userList="userList" :supRow="supRow"></supplieruserform>
            <supplierworkerform v-if="formTypes[2]" :userList="userList" :supRow="supRow"></supplierworkerform>

        </el-dialog>
        <!--dialog end-->
    </div>
</template>
<script>
    import config from '../../../common/config'
    import supplierform from './supplierform'
    import supplieruserform from './supplieruserform'
    import supplierworkerform from './supplierworkerform'
    import funcAuth from '../../../common/funcAuth'

    export default {
        components: {
            supplierform,
            supplieruserform,
            supplierworkerform
        },
        data() {
            return {
                title: "新建供应商",
                isCreateForm: true,
                supRow: {},
                supplierlistData: [],
                userList: [],
                formTypes: [false, false, false, false],//formtypes和isCreateForm来共同控制弹出form
                userid: '',

                currentPage: 1,
                pageitems: 10,
                total: 0
            }
        },
        created() {
            this.userid = this.$store.getters.getUserInfo.userid;
            this.getsupplierList(this.userid);
            this.getUserList(this.userid);
        },
        methods: {
            //获取后台用户信息
            getUserList: function (userid) {
                this.axios.get(config.GetUserInfo + '?userid=' + userid)
                    .then((response) => {
                        this.userList = response.data;
                    })
                    .catch(function (err) {
                        console.log(err)
                    })
            },
            getsupplierList(userid) {
                // this.axios.get(config.supplierList + '?userid=' + userid)
                //     .then((response) => {
                //           console.log(response.data)
                //         this.supplierlistData = response.data;

                //     })
                //     .catch(function (err) {
                //         console.log(err)
                //     })

                this.axios.get(config.supplierList, {
                    params: {
                        userid: userid,
                        pageItems: this.pageitems,
                        currentPage: this.currentPage
                    }
                })
                    .then((response) => {
                        this.supplierlistData = response.data.suppliers;
                        this.total = response.data.count;
                    })
                    .catch(function (err) {
                        console.log(err);
                    })

            },
            //重置formtypes数组
            resetFormTypes() {
                for (var i = 0; i < this.formTypes.length; i++) {
                    this.formTypes[i] = false;
                }
            },

            ondialogclose() {
                console.log("关闭dialog")
                this.$store.commit('setSupplierDialogStatus', false);
                this.getsupplierList(this.$store.getters.getUserInfo.userid);
                this.resetFormTypes();//关闭窗口的时候，充值formtypes数组
            },
            //创建供应商
            createSupplier: function () {
                console.log("添加供应商")
                this.isCreateForm = true;
                this.title = "新建供应商";
                this.formTypes[0] = true;
                this.$store.commit('setSupplierDialogStatus', true);//千万要注意顺序，需要先设置子控件的内容，在做弹出框显示
            },
            //修改供应商
            modifySupplier(supRow) {
                console.log(supRow);
                this.isCreateForm = false;
                this.title = "修改供应商";
                this.supRow = supRow;
                this.formTypes[0] = true;
                this.$store.commit('setSupplierDialogStatus', true);
            },
            //设置供应商后台用户
            setSupplierUser(supRow) {
                this.title = "设置供应商后台用户"
                this.formTypes[1] = true;
                this.supRow = supRow;
                this.$store.commit('setSupplierDialogStatus', true);
            },
            //设置供应商店员
            setSupplierWorker(supRow) {
                this.title = "设置供应商店员";
                this.formTypes[2] = true;
                this.supRow = supRow;
                this.$store.commit('setSupplierDialogStatus', true)
            },
            //暂时不支持修改每页数量
            handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
            },
            handleCurrentChange(val) {
                this.currentPage = val;
                this.getsupplierList(this.userid);
                console.log(`当前页: ${val}`);
            }
        }
    }

</script>
<style>

</style>