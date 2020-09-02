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
                <div class="menu"><a href="">价值投资</a></div>
                <div class="menu"><a href="">资产分配灵活性</a></div>
                <div class="menu"><a href="">仓位管控</a></div>
            </div>
            <div class="menu_box">
                <div class="menu_title">基金产品</div>
                <div class="menu"><a href="">产品介绍</a></div>
                <div class="menu"><a href="">产品净重</a></div>
                <div class="menu"><a href="">认购流程</a></div>
            </div>
            <div class="menu_box">
                <div class="menu_title">关于诺游</div>
                <div class="menu"><a href="">公司介绍</a></div>
                <div class="menu"><a href="">司名释义</a></div>
                <div class="menu"><a href="">标识释义</a></div>
            </div>
            <div class="menu_box">
                <div class="menu_title">用户中心</div>
                <div class="menu"><a href="">诺游基金</a></div>
                <div class="menu"><a href="">尊户查询</a></div>
                <div class="menu"><a href="">专户预约</a></div>
            </div>
        </div>
        <div class="address">
            <p>公司地址：上海市浦东新区明月路188弄27号  邮编：XXXXX</p>
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
                margin-bottom: 17px;
            a{

                font-size: 11px;
                font-family: Source Han Serif CN;
                font-weight: 800;
                color: #EFEFED;
                opacity: 0.4;
            }
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
