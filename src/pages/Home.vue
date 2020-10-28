<template>
    <div>
        <Head />
    <div class="home">
         <SendEmail />
        <div class="line">
        </div>
        <FixedLeft 
            msg = "首页"
        >
        </FixedLeft>
        <div class="video_box">
            <!-- <video class="video" src="http://cdn.jian24.com/1548381208553958.mp4" preload="none" controls="controls" height="100%" >
            </video> -->
            <div class="play_box"> 
                <img src="./../assets/images/play.png" />
                <a href="#">观看视频</a>
            </div>
        </div>
        <div class="table_box">
            <div class="table_content">
                <div class="table_title">诺游基金</div>
                <div class="column_title"> 
                    <div class="title">基金名称</div>
                    <div class="title" style="width: 160px;">净值日期</div>
                    <div class="title">单位净值</div>
                    <div class="title">累计净值</div>
                    <div class="title">成立以来(%)</div>
                    <div class="title">今年以来(%)</div>
                    <div class="title">近一年(%)</div>
                    <div class="title">近两年(%)</div>
                    <div class="title">近三年(%)</div>
                </div>
                <div class="table_list" style="cursor: pointer;" @click="handleTableClick">
                    <div class="column_content" v-for="(item) in tableData" :key="item.ID">
                        <div class="content">{{item.wond_name}}</div>
                        <div class="content" style="width: 160px;">
                            <span v-if="showUser" >{{ item.date_worth | formateTime}}</span>
                            <span v-else  class="blur">{{(item.date_worth)}}</span>
                        </div>
                        <div class="content"><span :class="showUser ?'': 'blur'">{{item.unit_worth}}</span></div>
                       
                        <div class="content"><span :class="showUser?'': 'blur'">{{item.net_worth}}</span></div>
                        <div class="content"><span :class="showUser ?'': 'blur'">{{item.build_before}}</span></div>
                        <div class="content red_color"><span :class="showUser ?'': 'blur'">{{item.now_year}}</span></div>
                        <div class="content red_color"><span :class="showUser ?'': 'blur'">{{item.last_year}}</span></div>
                        <div class="content"><span :class="showUser ?'': 'blur'">{{item.three_muoth}}</span></div>
                        <div class="content"><span :class="showUser ?'': 'blur'">{{item.six_mouth}}</span></div>

                    </div>
                </div>
            </div>
        </div>
        <div class="pic">
           <div class="pic_content">
                <h1 class="pic_title">价值与成长相结合</h1>
                <p class="pic_p">
                    坚守价值与成长相结合的投资模式，专注于挖掘企业内生增长价值和成长性；
                    同时兼顾收益率曲线的稳定性与资产配置的流动性、灵活性， 为投资者创造持续稳定的（高于指数增长？/且高于同类产品？）的业绩回报。
                </p>
           </div>
        </div>
        <div class="company">
            <div class="company_title">中长期达成稳定资产增长</div>
            <div class="company_content">
                <div class="company_left_box">
                    <div class="company_left">
                        <h4 class="company_left_h4" @click="handleTestMask('foucs_right')">·价值投资</h4>
                        <p class="company_left_p" style="margin-bottom: 30px;">
                                基本面研究为首要依据，诺游投研团队具
                            有平均10年以上高级版行业研究从业经历
                        </p>
                        <p class="company_left_p">
                            诺游以投研团队水平的优势，多次捕捉到
                            公司业绩拐点，抢先发现低估企业，享受
                            戴维斯双击带来的增值红利
                        </p>
                    </div>
                    <div class="company_left">
                        <h4 class="company_left_h4">·资产分配灵活性</h4>
                        <p class="company_left_p">
                            诺游相信趋势与交易的力量，把握进行资
                            产配资调整的机会，让收益能够最大化
                        </p>
                    </div>
                
                    <div class="company_left">
                        <h4 class="company_left_h4">·仓位管控</h4>
                        <p class="company_left_p">
                            诺游执行严格的风控措施，风控团队监控日内交易数据，依据风险分析模型做出仓位管控主
                        </p>
                        <p class="company_left_p">
                            动择时来控制产品的回撤风险，力求产品净值曲线的平滑
                        </p>
                    </div>
                </div>
                <div class="company_right" ref="companyRight">
                    <div class="js_show top foucs_top" ref="topImg">
                        <div class="small_img top_img">
                            <img src="./../assets/images/touzi.png"/>
                        </div>
                    </div>
                     <div class="js_show left" ref="leftImg">
                        <div class="small_img left_img">
                            <img src="./../assets/images/shichang.png"/>
                        </div>
                    </div>
                    <div class="js_show right" ref="rightImg">
                         <div class="small_img right_img">
                            <img src="./../assets/images/fengkong.png"/>
                        </div>
                    </div>
                    <img ref="circle" src="./../assets/images/circle_one.png"/>
                </div>
            </div>
        </div>
    </div>
        <Footer />
    </div>
</template>
<script>

import circle_one from "./../assets/images/circle_one.png";
import circle_two from "./../assets/images/circle_two.png";
import circle_three from "./../assets/images/circle_three.png";

import Head from './../components/Head.vue';
import Footer from './../components/Footer';
import SendEmail from './../components/SendEmail';
import FixedLeft from './../components/FixedLeft';
import {mapGetters} from "vuex"

    export default {
        name: 'Home',
        components: {
            Head,
            Footer,
            SendEmail,
            FixedLeft
        },
        data() {
            return {
                showUser: false,
                tableData: [
                    {
                        build_before: "***", 
                        code: "***", 
                        ID: 3, 
                        date_worth:"2020-09-08",
                        last_year: "***", 
                        net_worth: "***", 
                        now_year: "***",
                        create_by: "2020-09-08",
                        six_mouth: "***",
                        three_muoth: "***",
                        unit_worth: "***",
                        update_by: "2020-09-08",
                        wond_name: "诺游基金"
                    }
                ]       
            }
        },
        computed: mapGetters({
            'getCount':  'getCount'
        }),
        created(){
            if (localStorage.getItem("username") && localStorage.getItem("email") && localStorage.getItem("mobile")) {
                this.$Axios.get('/api/v1/netWorth/list',{}).then((data)=>{
                    if (data.data.code == 200) {
                        this.tableData = data.data.data.list;
                        this.showUser = true;
                    } else {
                        this.showUser = false;
                    }
                }).catch(function (error) {
                    console.log(error);
                });
            }
        },
        mounted(){
            window.addEventListener("scroll", this.viewCircle);
        },
        methods:{
            viewCircle(){
                let scrollHeight= document.documentElement.scrollTop || document.body.scrollTop;
                console.log(scrollHeight)
                if (scrollHeight < 1870 && this.$refs.circle) {
                    this.handleTestMask("topImg", "foucs_top");
                    this.$refs.circle.setAttribute("src", circle_one);
                } else {
                    this.handleRemove("topImg", "foucs_top");
                }
                if ( scrollHeight >= 1870 && scrollHeight < 2090 && this.$refs.circle) {
                    this.handleTestMask("leftImg", "foucs_left")
                    this.$refs.circle.setAttribute("src", circle_two)
                } else {
                    this.handleRemove("leftImg", "foucs_left");
                }
                if ( scrollHeight >= 2090 && this.$refs.circle) {
                    this.handleTestMask("rightImg", "foucs_right");
                    this.$refs.circle.setAttribute("src", circle_three);
                } else {
                    this.handleRemove("rightImg", "foucs_right")
                }
            },
            handleTestMask(obj, className){
                if (this.$refs[obj]) {
                    if (!this.$refs[obj].classList.contains("is_show")) {
                        this.$refs[obj].classList.add(className)
                        this.$refs[obj].classList.add("is_show")
                    }
                }
            },
            showOpacity(){
                if (localStorage.getItem("username") && localStorage.getItem("email") && localStorage.getItem("mobile")) {
                    this.showUser = true;
                    return true
                } else {
                    this.showUser = false;
                    return false;
                }
            },
            handleTableClick(){
                if (this.showOpacity()) {
                    this.$router.push({path:'/userCenter'});
                }else{
                    let routeData = this.$router.resolve({ path: '/login'});
                    window.open(routeData.href, '_blank');
                }
            },
            handleRemove(obj, className){
                if (this.$refs[obj]) {
                    this.$refs[obj].classList.remove(className);
                    this.$refs[obj].classList.remove("is_show");
                }

            }
        },
    }
</script>
<style scoped lang="less">
    .home{
        position: relative;
    }
    
   .video_box{
       width: 100%;
       height: 525px;
       background: black;
       display: flex;
       justify-content: center;
       align-items: center;
       .play_box{
           width: 68px;
           height: 68px;
           margin: auto;
           text-align: center;
           cursor: pointer;
            img{
               width: 68px;
               height: 68px;
            }
            a{
                color: rgba(255, 255, 255, 0.75);
                font-size: 15px;
                margin-top: 10px;
                display: inline-block;
            }
                
        }
    }
    .video{
       width: 50%;
       margin: 0 auto;
       height: 100%;
       display: block;
    }   
    .table_box{
        width: 70%;
        margin: 0 auto;
        padding: 100px 0;
        
    } 
    .pic{
        width: 100%;
        height: 450px;
        background: url("./../assets/images/banner.png") no-repeat;
        background-size: cover;
        padding-left: 15%;
        box-sizing: border-box;
        .pic_content{
            margin-left: 70px;
            overflow: hidden;
            height: 100%;
            .pic_title{
                width: 443px;
                font-size: 38px;
                font-family: Source Han Serif CN;
                font-weight: 800;
                color: #EFEFED;
                margin-top: 170px;
            }
            .pic_p{
                font-size: 14px;
                width: 443px;
                font-family: Source Han Serif CN;
                font-weight: 500;
                color: #EFEFED;
                line-height: 23px;
            }

        }
    }
    .company{
        padding-top: 84px;
        padding-bottom: 360px;
        .company_title{
            height: 44px;
            font-size: 36px;
            font-family: Source Han Serif CN;
            font-weight: 800;
            color: #333333;
            line-height: 36px;
            margin-bottom: 100px;
            margin-left: 20%;
        }
        .company_content{
            margin-left: 20%;
            width: 60%;
            position: relative;
            justify-content: space-between;
            display: flex;
        }
        .company_left_box{
            width: 60%;
            .company_left{
                width: 80%;
                margin-bottom: 120px;
                .company_left_h4{
                    font-size: 30px;
                    font-family: Source Han Serif CN;
                    font-weight: 800;
                    color: #666666;
                    margin-top: 0;
                    margin-bottom: 30px;
                }
                .company_left_p{
                    width: 100%;
                    max-width: 502px;
                    font-size: 18px;
                    font-family: Source Han Serif CN;
                    font-weight: 800;
                    color: #666666;
                    line-height: 27px;
                    opacity: 0.65;
                }
                &:last-child{
                    margin-bottom: 160px;
                }
            }
           
        }
       
        
        .company_right{
            position: sticky;
            opacity: 1;
            width: 40%;
            max-width: 334px;
            right: 20%;
            top: 200px;
            margin-top: 30px;
            height: 20%;
            .js_show{
                position: absolute;
                width: 26%;
                .small_img{
                    padding: 5px;
                    width: 100%;
                    height: 100%;
                    border-radius: 50%;
                    box-sizing: border-box;
                    position: relative;
                    transition: transform 1s ease ;
                    line-height: .8;

                    img{
                        max-height: 100%;
                        max-width: 100%;
                        min-width: 100%;
                        min-height: 100%;
                        object-fit: cover;
                        box-sizing: border-box;
                        padding: 5px;
                        border-radius: 50%;
                    }
                }
            }
            .is_show{
                .right_img{
                    border: 1px solid rgba(30,12,63, .85);
                    img{
                        border: 1px solid rgba(30,12,63, .45);
                    }
                }
                .left_img{
                    border: 1px solid rgba(235,26,49, .85);
                    img{
                        border: 1px solid rgba(235,26,49, .45);
                    }
                }
                .top_img{
                    border: 1px solid rgba(239,162,135, .85);
                    img{
                        border: 1px solid rgba(239,162,135, .45);
                    }
                }
            }
            
            .font_circle{
                width: 110%;
                transform: translate(-50%, -90%) scale(1.3);
            }
            .top{
                left: 50%;
                transition: transform 1s ease ;
                transform: translate(-50%, -50%) scale(1.3);
            }
            .foucs_top{
                transform: translate(-50%, -50%) scale(1.6);
            }
            .foucs_left{
                transform: translateX(-20%) scale(1.6);
            }
            .left{
                bottom: 15%;
                transition: transform 1s ease ;
                transform: translateX(-20%) scale(1.3);
            }
            .foucs_left{
                transform: translateX(-20%) scale(1.6);
            }
            .right{
                bottom: 15%;
                right: 0;
                transition: transform 1s ease ;
                transform: translateX(20%) scale(1.3);
            }
            .foucs_right{
                transform: translateX(20%) scale(1.6);
            }
            img{
                max-height: 99%;
                min-height: 99%;
                max-width: 99%;
                min-width: 99%;
                object-fit: cover;
            }
                
        }
        // @media screen and (min-width:769px) {
        //     .company_right{
        //         width: 25%;
        //         right: 20%;
        //     }
        // }
        // @media screen and (max-width:769px) {
        //     .company_right{
        //         width: 25%;
        //         right: 20%;
        //         min-width: 25%;
        //     }
        // }
    }
</style>