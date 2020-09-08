<template>
    <div class="public_bg">
        <div class="public_box">
            <div class="logo_content">
                <div class="logo_top">
                    <img src="./../assets/images/login_logo.png" alt="">
                </div>
            </div>
            <slot></slot>
        </div>
    </div>
</template>
<script>
    export default {
        // props: {
        //     msg: String
        // }
    }
</script>
<style scoped lang="less">
    .public_bg{
        position: relative;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin: auto;
        height: 100%;
        background: url('./../assets/images/login_bg.png') no-repeat;
    }
    .public_box{
        width: 384px;
        // min-height: 548px;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        padding-bottom: 65px;
        background: #ffffff;
        margin: auto;
        border: 15px solid rgba(200, 2, 0, 0.7);
    }
    .logo_content{
        width: 65px;
        margin: 34px auto;
        .logo_top,.logo_bottom{
            width: 100%;
            height: 71px;
            img{
                max-width: 100%;
                min-width: 100%;
                max-height: 100%;
                min-height: 100%;
            }
        }
    }
</style>