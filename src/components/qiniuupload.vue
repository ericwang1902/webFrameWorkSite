<template>
    <div>   
        <input ref="photo" type="file" name="photo" id="photo" v-on:change="upload">
        <el-button type="primary" size="mini" @click="submitForm">上传<i class="el-icon-upload el-icon--right"></i></el-button>
        <img border="0" :src="imgURL" alt="Pulpit rock" width="304" height="228">
    </div>
</template>
<script>

export default {
    props:['imgURL'],
    data () {
        return {
            fileForm:{
                token:"",
                key:"",
                file:""
            },
            
            ////jsonplaceholder.typicode.com/posts/
        }
    },
    methods: {
            upload: function(e) {
                e.preventDefault();//通知浏览器不要执行默认动作，以执行获取文件路径的下行代码
                this.fileForm.file = this.$refs.photo.files[0];
                console.log( this.fileForm.file)
            },
            submitForm:function(){
                //获取token和key
                this.axios.get("http://localhost:8085/sysmanage/qiniu")
                      .then((response)=>{
                          this.fileForm.key = response.data.key;
                          this.fileForm.token = response.data.token;

                          var data = new FormData();
                            data.append('file', this.fileForm.file);
                            data.append('key', this.fileForm.key);
                            data.append('token', this.fileForm.token);

                            //上传formdata
                            this.axios.post("http://up.qiniu.com",data)
                                    .then((response)=>{
                                        console.log("http://okxwe70nc.bkt.clouddn.com/"+response.data.key)
                                        this.imgURL = "http://okxwe70nc.bkt.clouddn.com/"+response.data.key;
                                        this.$notify({
                                            title: '上传成功！',
                                            message: '成功上传一张图片！',
                                            type: 'success'
                                            });
                                        this.$emit('imgurl',this.imgURL);
                                    })
                                    .catch(function(err){
                                        console.log(err)
                                    })
                      })
                      .catch(function(err){
                          console.log(err)
                      })

                
                          
            }
        
    }
}
</script>
<style>

</style>