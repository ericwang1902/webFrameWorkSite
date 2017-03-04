//var baseURL="http://localhost:8085"
var baseURL="http://121.42.56.71:8085"

var config={
    
    GetLoginUrl:baseURL+"/sysmanage/login",
    LogoutURL:baseURL+"/sysmanage/logout",
    GetUserInfo:baseURL+"/sysmanage/user",
    userCreate:baseURL+"/sysmanage/user",//用户创建
    userModfiy:baseURL+"/sysmanage/user",//用户修改

    roleList:baseURL+"/sysmanage/role",//角色列表
    roleModify:baseURL+"/sysmanage/role",//角色修改
    roleCreate:baseURL+"/sysmanage/role",//角色创建

    menuList:baseURL+"/sysmanage/menu",//系统menulist的接口
    menuCreate:baseURL+"/sysmanage/menu",//系统menu创建的接口
    menuModify:baseURL+"/sysmanage/menu",//系统menu修改的接口

    funcList:baseURL+"/sysmanage/func",

    supplierCreate:baseURL+"/sysmanage/supplier",//供应商创建接口
    supplierList:baseURL+"/sysmanage/supplier",//供应商列表
    supplierModify:baseURL+"/sysmanage/supplier",//修改供应商

    goodsList:baseURL+"/sysmanage/goods",//商品接口
    goodsCreate:baseURL+"/sysmanage/goods",//创建商品接口
    goodsModify:baseURL+"/sysmanage/goods",//修改商品的接口

    suite:baseURL+"/sysmanage/suite",//套餐接口
    district:baseURL+"/sysmanage/district",//区县接口
    region:baseURL+"/sysmanage/region",//配送区域接口

    //qiniutoken:baseURL+"/sysmanage/qiniu",//七牛token接口
    qiniutoken:"http://aft.robustudio.com/sysmanage/qiniu",
    
    tagTypes:['primary','success','warning','danger'],

    //套餐状态
    suiteState:[{
        code:0,
        stateDes:'已下架'
    },
    {   
        code:1,
        stateDes:'销售中'
    }]
}

export default config;