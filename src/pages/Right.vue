<template>
    <div>
        <Head />
        <div class="right">
            <div class="line"></div>
            <SendEmail />
            <FixedLeft msg="权益须知" />
            <div class="banner"></div>
            <div class="right_content">
                <div class="bread">你当前位置：首页>权益须知</div>
                
            </div>
        </div>
        <Footer />
    </div>

</template>
<script>
import Footer from './../components/Footer';
import Head from './../components/Head.vue';
import SendEmail from './../components/SendEmail';
import FixedLeft from './../components/FixedLeft';
export default {
    components:{
        Footer,
        Head,
        SendEmail,
        FixedLeft,
    },
}
</script>
<style lang="less" scoped>
    .banner{
        background: url('./../assets/images/right_banner.png') no-repeat;
        width: 100%;
        background-size: cover;
        height: 443px;
    }
    .right_content{
        width: 60%;
        margin-left: 20%;
        .bread{
            font-size: 18px;
            font-family: Source Han Serif CN;
            color: #000000;
            line-height: 27px;
            margin-top: 33px;
            margin-bottom: 40px;
        }
    }
</style>