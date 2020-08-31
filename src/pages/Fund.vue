<template>
    <div>
        <h3>Fund</h3>
        <!-- <img src="./../assets/banner.png"/> -->
    </div>
</template>
<script>
    export default {
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
   

    
</style>