<template>
    <div>
        <Head />
        <div class="fund">
            <SendEmail />
            <div class="line"></div>
            <FixedLeft 
                msg = "关于诺游"
            >
            </FixedLeft>
            <div class="banner" >
                <!-- <div class="banner_content">
                    <div class="fund_name">诺游投资</div>
                    <p class="fund_desc">
                        诺游投资坚守价值与成长相结合的投资模式，专注于挖掘企业 内生增长价值和成长性
                    </p>
                    <p class="fund_desc" style="margin-top: 30px;">
                        同时兼顾收益率曲线的稳定性与资产配置的流动性、灵活性， 努力为投资者创造持续稳定的业绩回报。
                    </p>
                </div> -->
            </div>
            <div class="company_introduce" id="companyIntroduce">
                <div class="title">诺游投资</div>
                <p class="desc">
                    上海诺游投资管理有限公司成立于2016年4月。2017年6月5日经中国证券投资基金业协会登记备案，取得私募投资基金管理人资格，登记编号为P1062983。
                </p>
                <p class="desc" style="margin-top: 20px;">
                    诺游投资的创始团队均来自于原泽熙投资的交易团队，联合创始人王小静女士曾任泽熙投资战略发展部总监。经过多年积累，
                    诺游投资已拥有一支既富理论造诣又经市场锤炼的投研团队，核心投研人员超过10人。诺游投资坚守价值与成长相结合的投资模式，专注于挖掘企业内生增长价值和成长性，
                    同时兼顾收益率曲线的稳定性与资产配置的流动性、灵活性，努力为投资者创造持续稳定的业绩回报。
                </p>
            </div>
            <div class="explain">
                <div class="left">
                    <div class="left_content flex">
                        <div class="leftImg">
                            <img src="./../assets/images/font_logo.png"/>
                        </div>
                    </div>
                </div>
                <div class="right" id="companyExplain">
                    <div class="right_content">
                        <div class="font_title">司名释义</div>
                        <p class="font_p">诺代表，和客户之间的承诺与信任。</p>
                        <p class="font_p">游代表，一种流动性，像鱼儿在大海中畅游一样，</p>
                        <p class="font_p">享受投资带来的乐趣和持久的收益。</p>
                    </div>
                    
                </div>
            </div>
            <div class="explain" id="logoExplain">
                <div class="left back_white" style="order:1;">
                    <div class="left_content">
                        <div class="font_title">标识释义</div>

                        <p class="font_p" style="margin-bottom: 20px;">
                            类似于树的标识，是“诺”的古字体。最初的设计灵感来源于一位13岁的小女孩。
                        </p>
                        <p class="font_p">
                            小女孩说红和绿代表了股票有涨有跌， 但是我们的净值却是一直向上！类似于树的 图案，则代表欣欣向荣，一直向天空成长！ 事实上，我们所推崇的投资，就像孩子的眼界一样，希望看到最本质和最纯粹的东西，而不是复杂的表象。
                        </p>
                    </div>
                </div>

                <div class="left" style="order:2; background: #EAEAEA;">
                    <div class="left_content flex" style="float: left;">
                        <div class="leftImg">
                            <img src="./../assets/images/logo.png"/>
                        </div>
                    </div>
                </div>
            </div>
            <div class="structer">
                <div class="title">风控架构</div>
                <div class="structer_img">
                    <img src="./../assets/images/jiagou.png"/>
                </div>
            </div>

            <!-- <img src="./../assets/images/banner.png"/> -->
        </div>
        <Footer />
    </div> 
</template>
<script>
    import SendEmail from './../components/SendEmail';
    import Head from './../components/Head.vue';
    import Footer from './../components/Footer';
    import FixedLeft from './../components/FixedLeft';

    export default {
        components:{
            SendEmail,
            Head,
            Footer,
            FixedLeft
        },
        data() {
            return {
            };
        },
        methods:{
        },
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
<style scoped lang="less">
    .fund{
       position: relative;
    }
    .banner{
        height: 443px;
        width: 100%;
        background: url("./../assets/images/about_nuoyou_banner.png") no-repeat;
        background-size: cover;
        overflow: hidden;
    }
    .banner_content{
        margin-left: 20%;
        height: 100%;
        span{
            width: 45px;
            height: 23px;text-align: center;
            line-height: 23px;
            background: #C00000;
            font-size: 11px;
            font-weight: 800;
            color: #EFEFED;
            display: inline-block;
        }
        .fund_name{
            width: 323px;
            height: 50px;
            font-size: 38px;
            font-weight: 800;
            color: #C80200;
            margin-top: 24px;
            margin-top: 128px;
            margin-bottom: 40px;

        }
        .fund_desc{
            max-width: 456px;
            font-size: 14px;
            font-weight: 500;
            color: #333333;
            line-height: 23px;
        }
    }
    .company_introduce{
        width: 100%;
        width: 60%;
        margin-left: 20%;
        padding-top: 83px;
        padding-bottom: 120px;
        box-sizing: border-box;
        .title{
            margin-bottom: 60px;
            font-size: 34px;
            font-weight: 800;
            color: #333333;
            text-align: center;
        }
        .desc{
            width: 100%;
            font-size: 18px;
            font-weight: 500;
            color: #333333;
            line-height: 36px;
        }
    }
    .explain{
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;

        .left,.right{
            width: 50%;
            // height: 100%;
            min-height: 375px;
        }
        .left{
            background: #EAEAEA;
            box-sizing: border-box;
            padding-right: 3%;
            .left_content{
                width: 55%;
                height: 100%;
                float: right;
            }
        }
        .flex{
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
        }
        .leftImg{
            width: 109px;
            margin: 0 auto;
            img{
                width: 100%;
            }
        }
        .right{ 
            background: #ffffff;
            box-sizing: border-box;
            padding-left: 3%;
            .right_content{
                float: left;
                // width: 55%;
                height: 100%;
                .font_title{
                    margin-top: 77px;
                    margin-bottom: 49px;
                }
            }
        }
        .font_title{
            font-size: 27px;
            font-weight: 800;
            color: #363630;
            text-align: center;
        }
        .font_p{
            font-size: 18px;
            font-weight: 400;
            color: #363630;
            line-height: 27px;
        }
        .back_white{
            background: #ffffff;
            .font_title,.font_p{
                color: #333333;
            }
            .font_title{
                margin: 44px 0 30px;
            }
        }
    }
    .structer{
        background: #FAFAFA;
        padding: 96px 0 152px;
        margin-top: 66px;
        .title{
            text-align: center;
            margin-bottom: 76px;
            font-size: 36px;
            font-weight: 800;
            color: #333333;
        }
        .structer_img{
            margin: 0 auto;
            text-align: center;
            img{
                max-width: 731px;
                min-height: 50%;
                min-width: 50%;
                // max-width: 40%;
                // max-height: 40%;
                object-fit: cover;
            }
        }
    }
</style>



