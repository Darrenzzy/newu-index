<template>
    <div class="footer">
        <div class="line"></div>
        <div class="footer_menu_box">
            <div class="menu_box top_menu">
                <div class="menu_logo">
                    <img src="./../assets/images/footer_logo.png" />
                </div>
                <!-- <div class="privacy">
                    <a href="#">隐私</a>
                    <span>|</span>
                    <a href="#">用户协议</a>
                </div> -->
                
            </div>
            <div class="menu_box">
                <div class="menu_title">首页</div>
                <div class="menu"><a href="">诺游投资视频</a></div>
                <div class="menu"><a href="">基金净值</a></div>
                <div class="menu"><a href="">投资理念</a></div>
                <div class="menu"><a href="">投资策略</a></div>
            </div>
            <div class="menu_box">
                <div class="menu_title">基金产品</div>
                <div class="menu"><a href="/fund#fundIntroduce">产品介绍</a></div>
                <div class="menu"><a href="/fund#fundNet">产品净值</a></div>
                <div class="menu"><a href="/fund#fundProcess">认购流程</a></div>
            </div>
            <div class="menu_box">
                <div class="menu_title">关于诺游</div>
                <div class="menu"><a href="/about_nuoyou#companyIntroduce">公司介绍</a></div>
                <div class="menu"><a href="/about_nuoyou#companyExplain">司名释义</a></div>
                <div class="menu"><a href="/about_nuoyou#logoExplain">标识释义</a></div>
            </div>
            <div class="menu_box" v-if="showUser">
                <div class="menu_title">用户中心</div>
                <div class="menu"><a href="/userCenter#userCenterFund">诺游基金</a></div>
                <div class="menu"><a href="/userCenter#vipSearch">尊户查询</a></div>
                <div class="menu"><a href="/fund#appointment">专户预约</a></div>
            </div>
            <div class="menu_box" v-else>
                <div class="menu_title">用户中心</div>
                <div class="menu"><span @click="toUserCenter()">诺游基金</span></div>
                <div class="menu"><span @click="toUserCenter()">尊户查询</span></div>
                <div class="menu"><span @click="toUserCenter()">专户预约</span></div>
            </div>
        </div>
        <div class="address">
            <div class="top">
                <span class="item"><a href="/contactUs">联系我们</a></span>
                <span class="boder_style"></span>
                <span class="item"><a href="/responseblity#top">免责声明</a></span>
                <span class="boder_style"></span>
                <!-- <span class="item"><a href="/right#top">权益须知</a></span> -->
                <span class="item"><a href="/risk#top">风险提示</a></span>
            </div>
            <p>公司地址：上海市浦东新区明月路188弄27号</p>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            showUser: false,
        }
    },
    mounted(){
        this.showOpacity();
    },
    methods:{
        showOpacity(){
            if (localStorage.getItem("username") && localStorage.getItem("email") && localStorage.getItem("mobile")) {
                this.showUser = true;
                return true
            } else {
                this.showUser = false;
                return false;
            }
        },
        toUserCenter(){
            if (localStorage.getItem("username") && localStorage.getItem("email") && localStorage.getItem("mobile")) {
                console.log("")
            } else {
                let routeData = this.$router.resolve({ path: "/login"});
                window.open(routeData.href, '_blank');
            }
        },

    }
}
</script>
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
    .top_menu{
        text-align: center;
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
        .privacy{
            margin-top: 20px;
            a, span{
                font-size: 11px;
                font-family: Source Han Serif CN;
                font-weight: 800;
                color: #EFEFED;
                opacity: 0.6;
            }
            span{
                display: inline-block;
                margin: 0 3px;
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
            a,span{
                cursor: pointer;
                font-size: 11px;
                font-family: Source Han Serif CN;
                font-weight: 800;
                color: #EFEFED;
                opacity: 0.4;
            }
        }
    }
    .address{
        // height: 50px;
        border-top: 1px solid #245800;
        width: 70%;
        margin-left: 15%;
        .top{
            text-align: center;
            margin-top: 30px;
            .item{
                font-size: 11px;
                font-family: Source Han Serif CN;
                font-weight: 800;
                color: #9A9A9A;
                line-height: 27px;
                opacity: 0.6;
                cursor: pointer;
                a{
                    color: #9A9A9A;
                }
            }
            .boder_style{
                height: 10px;
                border-left: 1px solid #AEAEAC;
                margin: 0 5px;
                display: inline-block;
            }
        }
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
