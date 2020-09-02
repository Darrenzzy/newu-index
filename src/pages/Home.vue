<template>
    <div class="home">
        <div class="line"></div>
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
                <el-table
                    :data="tableData"
                    style="width: 100%">
                    <el-table-column
                        prop="date"
                        label="日期"
                        width="180">
                    </el-table-column>
                    <el-table-column
                        prop="name"
                        label="姓名"
                        width="180">
                    </el-table-column>
                    <el-table-column
                        prop="address"
                        label="地址">
                    </el-table-column>
                </el-table>
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
                <div class="company_right" ref="companyRight">
                    <div class="js_show top" ref="topImg">
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
                    <div class="logo">
                        <img src="./../assets/images/logo.png" ref="logo_img"/>
                    </div>
                    <!-- <div class="circle_font">
                        <div><span>成立</span><p>2016</p> </div>
                        <div><span>成立</span><p>2016</p> </div>
                        <div><span>成立</span><p>2016</p> </div>
                    </div> -->
                    <img src="./../assets/images/circle.png"/>
                </div>
                <div class="company_left">
                    <h4 class="company_left_h4" @click="handleTestMask('foucs_right')">价值投资</h4>
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
        </div>
    </div>
</template>
<script>
import logo from "./../assets/images/logo.png";
import font_logo from "./../assets/images/font_logo.png";

    export default {
        name: 'Home',
        data() {
            return {
                tableData: [{
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1517 弄'
                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1519 弄'
                }, {
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1516 弄'
                }]
            }
        },
        mounted(){
            window.addEventListener('scroll',()=>{
                let scrollHeight= document.documentElement.scrollTop || document.body.scrollTop;
                console.log(scrollHeight)
                // if (scrollHeight > 1300 && scrollHeight < 2500) {
                if (scrollHeight > 1300) {
                    // this.$refs.companyRight.style.display = "block";
                    this.$refs.companyRight.style.transform = "scale(1)";

                } else {
                    // this.$refs.companyRight.style.display = "none";
                    this.$refs.companyRight.style.transform = "scale(0.0001)";

                }
                if (scrollHeight > 1300 &&  scrollHeight < 1650) {
                    this.handleTestMask("topImg", "foucs_top");
                } else {
                    this.handleRemove("topImg", "foucs_top");
                }
                if ( scrollHeight> 1650 && scrollHeight < 2100) {
                    this.handleTestMask("leftImg", "foucs_left")
                    if (this.$refs.logo_img) {
                        this.$refs.logo_img.setAttribute("src", font_logo)
                    }
                } 
                else {
                    this.handleRemove("leftImg", "foucs_left");
                }

                if ( scrollHeight > 2101) {
                // if ( scrollHeight> 2050 && scrollHeight < 2970) {

                    this.handleTestMask("rightImg", "foucs_right");
                    this.$refs.logo_img.setAttribute("src", logo);
                } 
                else {
                    this.handleRemove("rightImg", "foucs_right")
                }
            })
        },
        methods:{
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
    .home{
        position: relative;
    }
    .line{
        position: absolute;
        left: 15%;
        top: 0;
        border-left: 1px solid #FF0000;
        height: 100%;
        z-index: 2;
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
        .table_content{
            box-shadow: 0 0 15px rgba(0,0,0,.05);
            padding-bottom: 40px;
            border-radius: 4px;
        }
        .table_title{
            height: 60px;
            line-height: 60px;
            background: #C80200;
            color: #ffffff;
            text-align: center;
            border-radius: 4px 4px 0 0;
        }
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
                font-size: 51px;
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
        padding-top: 50px;
        padding-bottom: 360px;
        .company_title{
            height: 44px;
            font-size: 45px;
            font-family: Source Han Serif CN;
            font-weight: 800;
            color: #333333;
            line-height: 36px;
            margin-bottom: 146px;
            margin-left: 20%;
        }
        .company_content{
            margin-left: 20%;
            margin-right: 100px;
            position: relative;
        }
      
        .company_left{
            width: 35%;
            margin-bottom: 130px;
            .company_left_h4{
                font-size: 36px;
                font-family: Source Han Serif CN;
                font-weight: 800;
                color: #666666;
                margin-top: 0;
                margin-bottom: 40px;
            }
            .company_left_p{
                width: 100%;
                font-size: 18px;
                font-family: Source Han Serif CN;
                font-weight: 800;
                color: #666666;
                line-height: 27px;
                opacity: 0.65;
            }
        }
        @media screen and (min-width:769px) {
            .company_right{
                width: 26%;
                right: 10%;
            }
        
        }
        @media screen and (max-width:770px) {
            .company_right{
                width: 26%;
                right: 10%;
            }
        
        }
        
        // @media screen and (max-width: 768px) and (min-width:481px) {
        
        // }
        .company_right{
            // position: absolute;
            position: fixed;
            top: 294px;
            right: 10%;
            margin-top: 30px;
            // display: none;
            transform: scale(0.0001);
            transition: transform 1s ease;
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
                    border: 1px solid rgba(188, 304, 40, .8);
                    box-shadow: 0 0 15px rgba(188, 304, 40, .5);
                    img{
                        border: 1px solid rgba(232, 34, 45, .7);
                        box-shadow: 0 0 15px rgba(232, 34, 45, .5);
                    }
                }
                .left_img{
                    border: 1px solid rgba(232, 34, 47, .8);
                    box-shadow: 0 0 15px rgba(232, 34, 45, .5);
                    img{
                        border: 1px solid rgba(232, 34, 45, .7);
                        box-shadow: 0 0 15px rgba(232, 34, 45, .5);
                    }
                }
                .top_img{
                    border: 1px solid rgba(32, 334, 89, .8);
                    box-shadow: 0 0 15px rgba(32, 334, 45, .5);
                    img{
                        border: 1px solid rgba(232, 34, 45, .7);
                        box-shadow: 0 0 15px rgba(232, 34, 45, .5);
                    }
                }
            }
            .logo{
                position: absolute;
                width: 23%;
                left: 50%;
                top: 50%;
                transform: translate(-50%, -50%) scale(1.3);
                transition: transform 1s ease ;
                img{
                    max-height: 100%;
                    max-width: 100%;
                    min-width: 100%;
                    min-height: 100%;
                    object-fit: cover;
                }
            }
            .circle_font{
                position: absolute;
                width: 100%;
                left: 50%;
                top: 50%;
                transform: translate(-50%, -50%) scale(1.3);
                transition: transform 1s ease ;
                display: flex;
                justify-content: space-between;
                div{
                    p{
                        color: #E8222D;
                        font-size: 36px;
                        font-weight: 800;
                    }
                    span{
                        color: #333333;
                        font-size: 12px;
                        font-family: Source Han Serif CN;
                    }
                }   
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
                // border: 1px solid red;
                // img{
                //     border: 1px solid red;
                // }
            }
            img{
                max-height: 100%;
                max-width: 100%;
                min-width: 100%;
                min-height: 100%;
                object-fit: cover;
            }
                
        }

    }
</style>