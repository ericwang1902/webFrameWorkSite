
//作废
import axios from 'axios'
import config from './config'

var checkAuth=function(callback){
    //获取挡墙登陆的用户信息
    axios.get(config.GetUserInfo+'/'+JSON.parse(localStorage.getItem('currentInfo')).userid)
        .then((response)=>{
            var user = response.data;
            callback(user);
        })
        .catch(function(err){
            console.log(err)
        })
        
}

export default {
    checkAuth
}