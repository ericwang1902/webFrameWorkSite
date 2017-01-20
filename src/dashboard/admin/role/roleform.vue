<template>
 <div>
        <el-form :model="roleform" :rules="rules" label-position="left" ref="roleform" label-width="100px">
            <el-form-item label = "角色名称" prop = "roleName">
                <el-input v-model="roleform.roleName"></el-input>
            </el-form-item>
            <el-form-item label = "角色说明" prop = "roleDes">
                <el-input v-model="roleform.roleDes"></el-input>
            </el-form-item>
            <el-form-item label="选择菜单" style="width: 100%">
                <el-table :data = "menuList" max-height="450" ref="menuListTable" border style="width: 100%" @selection-change="handleSelectionChange">
                    <el-table-column type="selection" width="55">
                    </el-table-column>
                    <el-table-column prop="menuName" label="菜单名称">
                    </el-table-column>
                </el-table>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" v-show="!isCreateForm" @click="modifyRole('roleform')">提交修改</el-button>
                <el-button type="primary" v-show="isCreateForm" @click="createRole('roleform')">立即创建</el-button>
                <el-button @click="resetForm('roleform')">重置</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>


<script>
    import config from '../../../common/config'

    export default {
       props:['isCreateForm','roleRow','menuList'],//分别是form类型，当前role行的信息，系统内menu的list
            data(){
                return {
                    roleform:{
                        roleName: '',
                        roleDes:'',
                        menuSelection:[]
                    },
                    //rules几要素：1.form中的rules；2.item中的prop；3.data中的rules对象
                        rules: {
                            roleName: [
                                { required: true, message: '请输入角色名称', trigger: 'blur' }
                            ],
                            roleDes:[
                                {required:true, message:'请输入角色说明',trigger:'blur'}
                            ]

                        }
                }
            },
            watch: {
                roleRow:function(){
                    console.log(this.isCreateForm)
                    if(!this.isCreateForm){
                        this.modifyInitForm();
                    }else{
                        this.createInitForm();
                    }

                },
                isCreateForm:function(){
                    if(!this.isCreateForm){
                        this.modifyInitForm();
                    }else{
                        this.createInitForm();
                    }
                }
            },
            mounted () {
                           if(!this.isCreateForm){
                        this.modifyInitForm();
                    }else{
                        this.createInitForm();
                    }
            },
             methods:{
            //新建角色的表单初始化
            createInitForm(){
                this.roleform.roleName='';
                this.roleform.roleDes='';
                this.menuList.forEach((row)=>{
                    this.$refs.menuListTable.toggleRowSelection(row,false);
                })
            },
            //修改角色的表单初始化
            modifyInitForm(){
                
                this.roleform.roleName = this.roleRow.roleName;
                this.roleform.roleDes = this.roleRow.roleDes;
                this.menuList.forEach((row)=>{
                    this.$refs.menuListTable.toggleRowSelection(row,false);
                })
                for (var i = 0; i < this.roleRow.menuList.length; i++) {
                    this.$refs.menuListTable.toggleRowSelection(this.menuList.find(d => d.menuId === this.roleRow.menuList[i]._id), true);
                }
            },
            //获取选择项
            handleSelectionChange(val) {
                this.roleform.menuSelection = val;
                 console.log(JSON.stringify(this.roleform.menuSelection))
            },
            //重置表单
            resetForm(formName) {
                this.$refs[formName].resetFields();
                this.menuList.forEach((row) => {
                    this.$refs.menuListTable.toggleRowSelection(row, false);//将符合条件的表行置为false，作为下一个for的初始化。
                })
            },
            //创建角色
            createRole(formName){
                console.log(formName)
                this.$refs[formName].validate((valid)=>{
                    if(valid){
                        if(this.roleform.menuSelection.length == 0){
                            this.$message({
                                showClose:true,
                                message:'请选择至少一个菜单!',
                                type:'error'
                            });
                        }
                        else{
                        console.log("rolecreate")
                        var url = config.roleCreate;
                        this.axios.post(url,this.roleform)
                        .then((response)=>{
                            console.log(response);
                            this.$store.commit('setRoleDialogStatus',false);
                            //清空表单
                            this.roleform.roleName="";
                        })
                        .catch(function(err){
                            console.log(err)
                        })
                    }
                    }
                    
                })
            },
            modifyRole(formName){
                this.$refs[formName].validate((valid)=>{
                    if(valid){
                        if (this.roleform.menuSelection.length == 0) {
                            //当没有选择功能
                            this.$message({
                                showClose: true,
                                message: '请选择至少一个菜单！',
                                type: 'error'
                            });
                        }
                        else{                     
                            console.log("form role:"+JSON.stringify(this.roleRow))
                            this.axios.put(config.roleModify+'/'+this.roleRow._id, this.roleform)
                                .then((response) => {
                                    console.log(response)
                                    this.$store.commit('setRoleDialogStatus',false)
                                    this.roleform.roleName ="";
                                })
                                .catch(function (err) {
                                    console.log(err)
                                })
                        }
                    }
                });
            }
    }
}
</script>

<style>
</style>