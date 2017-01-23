<template>
    <div >
        <el-steps style="width: 100%;display: flex;justify-content: center;align-items: center;margin-top: 10px" :space="200" :center="true" :active="active" finish-status="success">
        <el-step title="供应商列表" description="供应商列表，可新建供应商。"></el-step>
        <el-step title="供应商后台用户" description="设置供应登录后台管理的帐号"></el-step>
        <el-step title="绑定店员" description="绑定店员微信，用来接收订单通知"></el-step>
        <el-step title="管理商品" description="管理该供应商的商品"></el-step>
        </el-steps>

        <el-button style="margin-top: 12px;" @click="back">上一步</el-button>
        <el-button style="margin-top: 12px;" @click="next">下一步</el-button>
    </div>
</template>
<script>
  export default {
    data() {
      return {
        active: 0,
        navList:[
          {actValue:0,pathValue:"/dashboard/supplier/supplierlist"},
          {actValue:1,pathValue:"/dashboard/supplier/supplieruser"},
          {actValue:2,pathValue:"/dashboard/supplier/supplierworker"},
          {actValue:3,pathValue:"/dashboard/supplier/suppliergoods"}
        ]
      };
    },

    methods: {
        back(){
          if(this.active>0){
            this.active--;
            this.active = this.navList[this.active].actValue;
            this.$router.push({ path: this.navList[this.active].pathValue }) 
          }
        },
      next() {
        if(this.active<4){
            this.active++;
            console.log(this.active) 
            if(this.active<4){
              this.active = this.navList[this.active].actValue;
              this.$router.push({ path: this.navList[this.active].pathValue })
            }
            
           
          }
      }
    }
  }
</script>