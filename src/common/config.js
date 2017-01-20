var config={
    GetLoginUrl:"http://localhost:3000/sysmanage/login",
    LogoutURL:"http://localhost:3000/sysmanage/logout",
    GetUserInfo:"http://localhost:3000/sysmanage/user",

    roleList:"http://localhost:3000/sysmanage/role",//角色列表
    roleModify:"http://localhost:3000/sysmanage/role",//角色修改
    roleCreate:"http://localhost:3000/sysmanage/role",//角色创建

    menuList:"http://localhost:3000/sysmanage/menu",//系统menulist的接口
    menuCreate:"http://localhost:3000/sysmanage/menu",//系统menu创建的接口
    menuModify:"http://localhost:3000/sysmanage/menu",//系统menu修改的接口

    funcList:"http://localhost:3000/sysmanage/func",

    tagTypes:['primary','success','warning','danger']
}

export default config;