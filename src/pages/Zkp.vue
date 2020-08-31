<template>
    <div>
        <h3>ZKp</h3>
        <!-- <img src="./../assets/banner.png"/> -->
        <div class="canvas">
            <div class="canvas_content">
                <a href="#">
                    <div class="canvas_item">
                        <p class="canvas_title">Company</p>
                        <p class="canvas_text">社会概要</p>
                    </div>
                </a>
                 <a href="#">
                    <div class="canvas_item">
                        <p class="canvas_title">Company</p>
                        <p class="canvas_text">社会概要</p>
                    </div>
                </a>
                <a href="#">
                    <div class="canvas_item">
                        <p class="canvas_title">Company</p>
                        <p class="canvas_text">社会概要</p>
                    </div>
                </a>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        // name: 'ome',
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
    /* div{
        background: #23242c;
        widows: 100%;
        height: 800px;
    } */
    h3 {
      margin: 40px 0 0;
      color: #42b983;
    }
    .canvas{
        background: url('./../assets/link-card-bg.png');
        width: 100%;
        height: 370px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .canvas_content{
        display: flex;
    }
    .canvas_content a{
        display: block;
        margin: 0 20px;
        border: 1px solid #ffffff;
        width: 320px;
        max-width: 320px;
        position: relative;
        z-index: 10;
        color: #ffffff;
        transition: -webkit-transform .25s ease;
        transition: transform .25s ease;
        transition: transform .25s ease,-webkit-transform .25s ease;
    }
    .canvas_content a::before{
        position: absolute;
        top: 0;
        content: "";
        display: block;
        width: 320px;
        height: 100%;
        z-index: -1;
        background-color: #fff;
        -webkit-transform: rotateY(90deg);
        transform: rotateY(90deg);
        background-clip: content-box;
        -webkit-transform-origin: right;
        transform-origin: right;
        transition: -webkit-transform .25s ease;
        transition: transform .25s ease;
        transition: transform .25s ease,-webkit-transform .25s ease;
    }
    .canvas_content a:hover:before {
        -webkit-transform: rotateY(0deg);
        transform: rotateY(0deg);
        -webkit-transform-origin: left;
        transform-origin: left;
        background: #ffffff;
        color: #0e192d;
    }
    .canvas_content a:hover{
        color: #0e192d;
    }
    .canvas_item{
        padding: 37px 0 25px;
    }
    .canvas_title{
        text-align: center;
        padding: 0 0 15px;
        font-weight: 700;
    }
    .canvas_text::before{
        content: "";
        width: 106px;
        height: 1px;
        background: #fff;
        display: block;
        margin: 0 auto 18px;
    }
    .canvas_text{
        text-align: center;
        font-weight: 700;
    }
    
</style>