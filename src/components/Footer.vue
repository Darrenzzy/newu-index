<template>
    <div class="footer">
        <div class="line"></div>
        <div class="footer_menu_box">
            <div class="menu_box">
                <div class="menu_logo">
                    <img src="./../assets/images/footer_logo.png" />
                </div>
                
            </div>
            <div class="menu_box">
                <div class="menu_title">理念</div>
                <div class="menu">价值投资</div>
                <div class="menu">资产分配灵活性</div>
                <div class="menu">仓位管控</div>
            </div>
            <div class="menu_box">
                <div class="menu_title">基金产品</div>
                <div class="menu">产品介绍</div>
                <div class="menu">产品净重</div>
                <div class="menu">认购流程</div>
            </div>
            <div class="menu_box">
                <div class="menu_title">关于诺游</div>
                <div class="menu">公司介绍</div>
                <div class="menu">司名释义</div>
                <div class="menu">标识释义</div>
            </div>
            <div class="menu_box">
                <div class="menu_title">用户中心</div>
                <div class="menu">诺游基金</div>
                <div class="menu">尊户查询</div>
                <div class="menu">专户预约</div>
            </div>
        </div>
        <div class="address">
            <p>
                公司地址：上海市浦东新区明月路188弄27号　邮编：XXXXX
            </p>
        </div>
    </div>
</template>
<style scoped lang="less">
    .footer{
        width: 100%;
        background: #0B0B0B;
        position: relative;
        .line{
            position: absolute;
            top: 0;
            left: 15%;
            border-left: 1px solid #FF0000;
            z-index: 2;
            height: 100%;
            transform: scaleX(0.6);
        }
    }
    .footer_menu_box{
        width: 60%;
        margin-left: 20%;
        display: flex;
        justify-content: space-between;
        padding: 45px 0 60px;
    }
    .menu_box{
        .menu_logo{
            width: 90px;
            height: 90px;
            img{
                max-height: 100%;
                max-width: 100%;
                min-width: 100%;
                min-height: 100%;
                object-fit: cover;
            }
        }
        .menu_title{
            font-size: 14px;
            font-family: Source Han Serif CN;
            font-weight: 800;
            color: #EFEFED;
            margin-bottom: 24px;
        }
        .menu{
            font-size: 11px;
            font-family: Source Han Serif CN;
            font-weight: 800;
            color: #EFEFED;
            opacity: 0.4;
            margin-bottom: 17px;
        }
    }
    .address{
        height: 50px;
        border-top: 1px solid #245800;
        p{
            text-align: center;
            line-height: 50px;
            height: 50px;
            font-size: 11px;
            font-family: Source Han Serif CN;
            font-weight: 800;
            color: #EFEFED;
            opacity: 0.3;
        }

    }
</style>
