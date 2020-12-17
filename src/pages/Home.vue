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
                <table border="0" cellspacing="0">
                    <thead>
                        <tr>
                            <th class="fund_name">基金名称</th>
                            <th>净值日期</th>
                            <th>单位净值</th>
                            <th>累计净值</th>
                            <th>成立以来(%)</th>
                            <th>今年以来(%)</th>
                            <th>近一年(%)</th>
                            <th>近两年(%)</th>
                            <th>近三年(%)</th>
                        </tr>
                    </thead>
                    <tbody style="cursor: pointer;" @click="handleTableClick">
                        <tr v-for="(item) in tableData" :key="item.ID">
                            <td>
                                <div>{{item.wond_name}} <span v-show="item.is_limit" style="color: #CD4645"> (限) </span></div>
                            </td>
                            <td>
                                <div>
                                    <span v-if="showUser" >{{ item.date_worth | formateTime}}</span>
                                    <span v-else  class="blur">{{(item.date_worth)}}</span>
                                </div>
                            </td>
                            <td> <span :class="showUser ?'': 'blur'">{{item.unit_worth}}</span></td>
                            <td> <span :class="showUser?'': 'blur'">{{item.net_worth}}</span></td>
                            <td> <span :class="showUser ?'': 'blur'">{{item.build_before}}</span> </td>
                            <td> <div class="red_color"><span :class="showUser ?'': 'blur'">{{item.now_year}}</span></div> </td>
                            <td> <div class="red_color"><span :class="showUser ?'': 'blur'">{{item.last_year}}</span></div> </td>
                            <td> <span :class="showUser ?'': 'blur'">{{item.three_muoth}}</span> </td>
                            <td> <span :class="showUser ?'': 'blur'">{{item.six_mouth}}</span> </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div class="pic">
           <div class="pic_content">
                <h1 class="pic_title">一<span class="pic_red">诺</span>千金 <span class="pic_red">游</span>刃有余</h1>
                <p class="pic_p">
                    重信守诺是为人和做事的第一准则。
                </p>
                <p class="pic_p" >
                    市场存在低风险和高收益的机会。股价会上下波动，但最终会回归公司的内生价值。
                </p>
                 <p class="pic_p">
                    价值与成长同样性感。
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
                    <div class="company_left" id="group">
                        <h4 class="company_left_h4">·与优秀企业共同成长</h4>
                        <p class="company_left_p" style="margin-bottom: 30px;">
                            价值投资最重要的是寻找优秀的企业，是买公司而并非单纯的买股票。好的公司可能会在一个阶段不被发现或不被认可，但最终会得到市场的公平定价，回归价值。所以，公司是否是好的行业，好的赛道，是否有很深的护城河，管理层是否品德优良、能力超群，这些都是重要的衡量维度。
                        </p>
                    </div>
                    <div class="company_left" id="cycle">
                        <h4 class="company_left_h4">·周期的力量</h4>
                        <p class="company_left_p">
                            经济周期是永远存在的，复苏，繁荣，滞涨，衰退。。。更替周而复始。经济有周期，行业有周期，公司也有周期。每个周期的大小不同、长短不一。我们要用心去感受与体验周期的力量，顺势而行并与之共舞。
                        </p>
                    </div>
                    <div class="company_left" id="logic">
                        <h4 class="company_left_h4">·真的逻辑</h4>
                        <p class="company_left_p">
                            世上往往有些事是似是而非，有些事是似非而是。在投资中要不断寻找和验证逻辑的正确性，并区分是长逻辑还是短逻辑。去伪存真，方可立于不败之地。
                        </p>
                    </div>
                    <div class="company_left" id="market">
                        <h4 class="company_left_h4">·跟随市场，不要预测市场</h4>
                        <p class="company_left_p">
                            资本市场是一个复杂的非稳定的系统。对市场怀有敬畏之心，切记市场永远是对的。不要过度主观与自信，更不要夸夸其谈，以防误入歧途。要跟随市场的节奏与脉动，认可，跟随，并享受市场的变化与波动。
                        </p>
                    </div>
                    <div class="company_left" id="transaction">
                        <h4 class="company_left_h4">·交易的本质</h4>
                        <p class="company_left_p">
                            交易本质上是一场游戏。与其他游戏一样，对技巧和智慧有要求。运气在短期内会起到作用，然而从长远考虑，只有交易技巧才能决定业绩。
                        </p>
                    </div>
                </div>
                <div class="company_right" ref="companyRight">
                    <div class="js_show top foucs_top" ref="topImg">
                        <a href="#group" @click="handleClick('top')">
                            <div class="top_font">与优秀企业共同成长</div>
                            <div class="small_img top_img">
                                <img src="./../assets/images/touzi.png"/>
                            </div>
                        </a>
                    </div>
                    <div class="js_show green" ref="greenImg">
                        <a href="#cycle" @click="handleClick('green')">
                            <div class="green_font">周期的力量</div>
                            <div class="small_img green_img">
                                <img src="./../assets/images/green.png"/>
                            </div>
                        </a>
                    </div>
                    <div class="js_show right" ref="rightImg">
                        <a href="#logic" @click="handleClick('right')">
                            <div class="small_img right_img">
                                <img src="./../assets/images/fengkong.png"/>
                            </div>
                            <div class="right_font">真的逻辑</div>
                        </a>
                    </div>

                    <div class="js_show left" ref="leftImg">
                        <a href="#market" @click="handleClick('left')">
                            <div class="small_img left_img">
                                <img src="./../assets/images/shichang.png"/>
                            </div>
                            <div class="left_font">跟随市场，不要预测市场</div>
                        </a>
                    </div>
                    <div class="js_show yellow" ref="yellowImg">
                        <a href="#transaction" @click="handleClick('yellow')">
                            <div class="yellow_font">交易的本质</div>
                            <div class="small_img yellow_img">
                                <img src="./../assets/images/yellow.png"/>
                            </div>
                        </a>
                    </div>
                    <img src="./../assets/images/circle_one.png"/>
                </div>
            </div>
        </div>
    </div>
        <Footer />
    </div>
</template>
<script>
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
                obj: "top",
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
            this.handleTestMask("topImg", "foucs_top");
        },
        methods:{
            handleClick(activeObj){
                this.handleTestMask(`${activeObj}Img`, `foucs_${activeObj}`);
                this.handleRemove(`${this.obj}Img`, `foucs_${this.obj}`);
                this.obj = activeObj;
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
            handleTestMask(obj, className){
                if (this.$refs[obj]) {
                    if (!this.$refs[obj].classList.contains("is_show")) {
                        this.$refs[obj].classList.add(className)
                        this.$refs[obj].classList.add("is_show")
                    }
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
        padding: 40px 0;
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
                .yellow_img{
                    border: 1px solid rgba(255,200,92, .85);
                    img{
                        border: 1px solid rgba(255,200, 92, 45);
                    }
                }
                .green_img{
                    border: 1px solid rgba(89,136,107, .85);
                    img{
                        border: 1px solid rgba(89,136,107, .45);
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
                    top: -20px;
                }
            }
            .top_font, .left_font,.right_font, .yellow_font, .green_font{
                font-size: 14px;
                text-align: center;
                position: absolute;
                transform: translateX(-50%);
                left: 50%;
                width: 200%;
            }
            .foucs_top{
                transform: translate(-50%, -50%) scale(1.6);
            }
           
            .left,.right, .green, .yellow{
                transition: transform 1s ease ;
                transform: translateX(-20%) scale(1.3);
            }
            .left{
                bottom: 10%;
            }
            .left_font{
                color: #E8222D;
            }
            .yellow{
                top: 15%;
                left: -5%;
            }
            .green{
                right: -15%;
                top: 15%;
            }
            .yellow_font{
                color: #FFC85C;
                bottom: -20px;
            }
            .green_font{
                color: #59886B;
                bottom: -20px;
            }
            .foucs_left, .foucs_right, .foucs_yellow, .foucs_green{
                transform: translateX(-20%) scale(1.6);
            }
            .right{
                right: -10%;
                bottom: 10%;
                .right_font{
                    color: #200A3E;
                }
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