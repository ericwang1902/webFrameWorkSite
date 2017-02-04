var config={
    GetLoginUrl:"http://localhost:8085/sysmanage/login",
    LogoutURL:"http://localhost:8085/sysmanage/logout",
    GetUserInfo:"http://localhost:8085/sysmanage/user",
    userCreaste:"http://localhost:8085/sysmanage/user",//用户创建
    userModfiy:"http://localhost:8085/sysmanage/user",//用户修改

    roleList:"http://localhost:8085/sysmanage/role",//角色列表
    roleModify:"http://localhost:8085/sysmanage/role",//角色修改
    roleCreate:"http://localhost:8085/sysmanage/role",//角色创建

    menuList:"http://localhost:8085/sysmanage/menu",//系统menulist的接口
    menuCreate:"http://localhost:8085/sysmanage/menu",//系统menu创建的接口
    menuModify:"http://localhost:8085/sysmanage/menu",//系统menu修改的接口

    funcList:"http://localhost:8085/sysmanage/func",

    supplierCreate:"http://localhost:8085/sysmanage/supplier",//供应商创建接口
    supplierList:"http://localhost:8085/sysmanage/supplier",//供应商列表
    supplierModify:"http://localhost:8085/sysmanage/supplier",//修改供应商

    goodsList:"http://localhost:8085/sysmanage/goods",//商品接口
    goodsCreate:"http://localhost:8085/sysmanage/goods",//创建商品接口
    goodsModify:"http://localhost:8085/sysmanage/goods",//修改商品的接口

    tagTypes:['primary','success','warning','danger']
}

export default config;