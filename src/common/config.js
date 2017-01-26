var config={
    GetLoginUrl:"http://localhost:3000/sysmanage/login",
    LogoutURL:"http://localhost:3000/sysmanage/logout",
    GetUserInfo:"http://localhost:3000/sysmanage/user",
    userCreaste:"http://localhost:3000/sysmanage/user",//用户创建
    userModfiy:"http://localhost:3000/sysmanage/user",//用户修改

    roleList:"http://localhost:3000/sysmanage/role",//角色列表
    roleModify:"http://localhost:3000/sysmanage/role",//角色修改
    roleCreate:"http://localhost:3000/sysmanage/role",//角色创建

    menuList:"http://localhost:3000/sysmanage/menu",//系统menulist的接口
    menuCreate:"http://localhost:3000/sysmanage/menu",//系统menu创建的接口
    menuModify:"http://localhost:3000/sysmanage/menu",//系统menu修改的接口

    funcList:"http://localhost:3000/sysmanage/func",

    supplierCreate:"http://localhost:3000/sysmanage/supplier",//供应商创建接口
    supplierList:"http://localhost:3000/sysmanage/supplier",//供应商列表
    supplierModify:"http://localhost:3000/sysmanage/supplier",//修改供应商

    goodsList:"http://localhost:3000/sysmanage/goods",//商品接口
    goodsCreate:"http://localhost:3000/sysmanage/goods",//创建商品接口

    tagTypes:['primary','success','warning','danger']
}

export default config;