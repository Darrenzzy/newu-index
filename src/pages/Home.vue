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
                <h1 class="pic_title">一<span class="pic_red">诺</span>千金 <span class="pic_red">游</span>刃有余</h1>
                <p class="pic_p">
                    守信守诺是为人和做事的第一准则。
                </p>
                <p class="pic_p">
                    投资不难也不易。
                </p>
                 <p class="pic_p">
                    价值与成长同等重要。
                </p>
                 <p class="pic_p">
                    市场存在低风险和高收益的机会。股价会上下波动，但最终会回归公司的内生价值。
                </p>
                 <p class="pic_p">
                    流动性和灵活性非常关键。
                </p>
           </div>
        </div>
        <div class="company">
            <div class="company_title">中长期达成稳定资产增长</div>
            <div class="company_content">
                <div class="company_left_box">
                    <div class="company_left">
                        <h4 class="company_left_h4" @click="handleTestMask('foucs_right')">·与优秀企业共同成长</h4>
                        <p class="company_left_p" style="margin-bottom: 30px;">
                            价值投资最重要的是寻找优秀的企业，是买
                            公司而并非单纯的买股票。好的公司可能会
                            在一个阶段不被发现或不被认可，但最终会
                            得到市场的公平定价，回归价值。所以，公司
                            是否是好的行业，好的赛道， 是否有很深的
                            护城河，管理层是否品德优良、能力超群，这
                            些都是重要的衡量维度。
                        </p>
                    </div>
                    <div class="company_left">
                        <h4 class="company_left_h4">·感受周期</h4>
                        <p class="company_left_p">
                            经济周期是永远存在的，复苏，繁荣，滞涨，
                            衰退。。。更替周而复始。经济有周期，行业
                            有周期，公司也有周期。每个周期的大小不
                            同、长短不一。我们要用心去感受周期，并
                            与之共舞。
                        </p>
                    </div>
                
                    <div class="company_left">
                        <h4 class="company_left_h4">·真的逻辑</h4>
                        <p class="company_left_p">
                            世上往往有些事是似是而非，有些事是似非
                            而是。在投资中要不断寻找和验证逻辑的正
                            确性，并区分是长逻辑还是短逻辑。 去伪存
                            真，方可立于不败之地。
                        </p>
                        
                    </div>
                    <div class="company_left">
                        <h4 class="company_left_h4">·跟随市场，不要预测市场</h4>
                        <p class="company_left_p">
                            资本市场是一个复杂的非稳定的系统。对市
                            场怀有敬畏之心，切记市场永远是对的。 不
                            要过度主观与自信，更不要夸夸其谈， 以防
                            误入歧途。要跟随市场的节奏与脉动， 认可，
                            跟随，并享受市场的变化与波动。
                        </p>
                        
                    </div>
                    <div class="company_left">
                        <h4 class="company_left_h4">·交易的本质</h4>
                        <p class="company_left_p">
                            交易本质上是一场游戏。与其他游戏一样，对
                            技巧和智慧有要求。  运气在短期内会起到作
                            用，然而从长远考虑， 只有交易技巧才能决定
                            业绩。
                        </p>
                        
                    </div>
                </div>
                <div class="company_right" ref="companyRight">
                    <div class="js_show top foucs_top" ref="topImg">
                        <div class="top_font">投资逻辑</div>
                        <div class="small_img top_img">
                            <img src="./../assets/images/touzi.png"/>
                        </div>
                    </div>
                     <div class="js_show left" ref="leftImg">
                        <div class="small_img left_img">
                            <img src="./../assets/images/shichang.png"/>
                        </div>
                        <div class="left_font">市场特点</div>
                    </div>
                    <div class="js_show right" ref="rightImg">
                         <div class="small_img right_img">
                            <img src="./../assets/images/fengkong.png"/>
                        </div>
                        <div class="right_font">风控措施</div>

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
import {mapGetters} from "vuex";
    export default {
        name: 'Home',
        components: {
            Head,
            Footer,
            SendEmail,
            FixedLeft,
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
            window.addEventListener("scroll", this.scrollDebounce(this.viewCircle));
        },
        methods:{
            scrollDebounce(fn){
                let timer = null;
                return ()=>{
                    if (timer) {
                        clearTimeout(timer)
                        timer = null;
                    }
                    timer = setTimeout(()=>{
                        fn();
                    },300) 
                }
            },
            
            viewCircle(){
                let scrollHeight= document.documentElement.scrollTop || document.body.scrollTop;
                console.log(scrollHeight)
                if (scrollHeight < 1870 && this.$refs.circle) {
                    this.handleTestMask("topImg", "foucs_top");
                    this.$refs.circle.setAttribute("src", circle_one);
                } else {
                    this.handleRemove("topImg", "foucs_top");
                }
                // 2090
                if ( scrollHeight >= 1870 && scrollHeight < 2150 && this.$refs.circle) {
                    this.handleTestMask("leftImg", "foucs_left")
                    this.$refs.circle.setAttribute("src", circle_two)
                } else {
                    this.handleRemove("leftImg", "foucs_left");
                }
                if ( scrollHeight >= 2150 && this.$refs.circle) {
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
                font-size: 38px;
                font-family: Source Han Serif CN;
                font-weight: 800;
                color: #EFEFED;
                margin-top: 100px;
                .pic_red{
                    color: #C80200;
                    font-size: 75px;
                    &:last-child{
                        margin-left: 15px;
                    }
                }
            }
            .pic_p{
                font-size: 14px;
                font-family: Source Han Serif CN;
                font-weight: 500;
                color: #EFEFED;
                line-height: 23px;
                line-height: 30px;
                opacity: .9;
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
                .top_font{
                    color: #EEA282;
                    font-size: 14px;
                    text-align: center;
                    width: 200%;
                    position: absolute;
                    top: -20px;
                    left: 50%;
                    transform: translateX(-50%);
                    // position: absolute;
                }
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
                .left_font{
                    color: #E8222D;
                    font-size: 14px;
                    text-align: center;
                    position: absolute;
                    transform: translateX(-50%);
                    left: 50%;
                    width: 200%;
                }
            }
            .foucs_left{
                transform: translateX(-20%) scale(1.6);
            }
            .right{
                bottom: 15%;
                right: 0;
                transition: transform 1s ease ;
                transform: translateX(20%) scale(1.3);
                .right_font{
                    color: #200A3E;
                    font-size: 14px;
                    text-align: center;
                    position: absolute;
                    transform: translateX(-50%);
                    left: 50%;
                    width: 200%;
                }
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