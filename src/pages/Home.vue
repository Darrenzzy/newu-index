<template>
    <h3>Home</h3>
</template>
<script>
    export default {
        name: 'Home',
        // props: {
        //     msg: String
        // }
        created(){
            
            this.$Axios.post('api/admin/v1/sysUser',{
                deptId: 10,
                email: "123@qq.com",
                nickName: "test2",
                password: "123456",
                phone: "17856376472",
                postId: 1,
                remark: "test2",
                sex: "1",
                status: "1",
                username: "test2",
            }).then(function(res){
                console.log(res)
            }).catch(function (error) {
                console.log(error);
            });
        }
    }
</script>
<style scoped>
    h3 {
      margin: 40px 0 0;
      color: #42b983;
    }
</style>