<template>
    <div>
        <Head />
        <div class="fund">
            <SendEmail />
            <FixedLeft msg="基金产品"></FixedLeft>
            <div class="line"></div>
            <div class="banner">
                <div class="banner_content">
                    <span class="">介绍 </span>
                    <div class="fund_name">诺游基金产品</div>
                    <p class="fund_desc">
                        坚守价值与成长相结合的投资模式，专注于挖掘企业内生增长价值和成长
                        性；同时兼顾收益率曲线的稳定性与资产配置的流动性、灵活性， 为投资
                        者创造持续稳定的（高于指数增长？/且高于同类产品？）的业绩回报。
                    </p>
                </div>
            </div>
            <div class="introduce" id="fundIntroduce">
                <h3 class="fund_public_title">产品介绍</h3>
                <div class="introduce_content">
                    <div class="introduce_left"></div>
                    <div class="fund_name_list">
                        <div class="fund_detail">
                            <div class="fund_detail_title">{{this.fundDetail.name}}</div>
                            <div class="fund_detail_desc">
                                {{this.fundDetail.desc}}
                            </div>
                            <div class="more" @click="handleTableClick">了解更多》</div>

                        </div>
                        <div class="tab">
                            <div 
                                v-for="(item,index) in fundList" 
                                :key="index" :class="activeIndex == index?'tab_list focus_tab_list': 'tab_list' " 
                                @click="handleFundClick(index)"
                            >
                                {{item.name}}
                            </div>
                            <!-- <div class="tab_list">诺游B</div>
                            <div class="tab_list">诺游C</div>
                            <div class="tab_list">诺游D</div> -->


                        </div>
                    </div>
                </div>
            </div>
            <div class="net" id="fundNet">
                <h3 class="fund_public_title">产品净值</h3>
                <div class="net_content">
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

            </div>
            <div class="process" id="fundProcess">
                <h3 class="fund_public_title">认购流程</h3>
                <div class="process_content">
                    <p class="process_p">
                        1.委托人签署信托合同：委托人在产品规定的有效时间范围内，跟信托公司、投资顾问或代销机构联系，获取信托合同进行签署，并提交相关证件；
                    </p>
                    <p class="process_p">
                        2.委托人汇款：委托人在产品规定的有效时间范围内，将认购资金及认购费用，通过银行汇款到该信托产品指定的托管银行帐户；
                    </p>
                    <p class="process_p">
                        3.委托人取得合同：在认购产品成立后，或日常开放日认购后，在合同规定的N个（一般为10个）工作日内，委托人将取得由信托公司签署并盖章的有效合同。 备注： 若委托人为自然人，需提供以下资料： （1）委托人的身份证明文件（身份证或护照）复印件一式两份； （2）委托人的信托利益分配账户（户名需与身份证为同一人）复印件一式两份（该账户应与合同上填写的信托利益分配账户为同一账户）； （3）委托人的信托资金划入认购账户的银行汇款凭证复印件一式一份，并在汇款备注中注明：“XX认购重阳XX期”； （4）以上复印件上均需客户本人签字，并注明：“仅供认购重阳XX期信托计划”。
                    </p>
                    <p class="process_p" style="margin-top: 30px;">
                        备注
                    </p>
                    <p class="process_p">
                        若委托人为自然人，需提供以下资料：
                    </p>
                    <p class="process_p">
                        （1）委托人的身份证明文件（身份证或护照）复印件一式两份； 
                    </p>
                    <p class="process_p">
                        （2）委托人的信托利益分配账户（户名需与身份证为同一人）复印件一式两份（该账户应与合同上填写的信托利益分配账户为同一账户）；
                    </p>
                    <p class="process_p">
                        （3）委托人的信托资金划入认购账户的银行汇款凭证复印件一式一份，并在汇款备注中注明：“XX认购重阳XX期”； 
                    </p>
                    <p class="process_p">
                        （4）以上复印件上均需客户本人签字，并注明：“仅供认购重阳XX期信托计划”。
                    </p>

                </div>

            </div>
            <AppoinmentForm id="appointment"/>
            <!-- <img src="./../assets/images/banner.png"/> -->
        </div>
        <Footer />
    </div>
</template>
<script>
    import AppoinmentForm from "./../components/AppoinmentForm";
    import Footer from './../components/Footer';
    import Head from './../components/Head.vue';
    import SendEmail from './../components/SendEmail';
    import FixedLeft from './../components/FixedLeft';

    export default {
        data() {
            return {
                fundDetail:{},
                showUser: false,
                tableData: [
                    {
                        build_before: "***", 
                        code: "***", 
                        ID: 3, 
                        date_worth:"1999-09-08",
                        last_year: "***", 
                        net_worth: "***", 
                        now_year: "***",
                        create_by: "1999-09-08",
                        six_mouth: "***",
                        three_muoth: "***",
                        unit_worth: "***",
                        update_by: "1999-09-08",
                        wond_name: "诺游基金"
                    }
                ],
                fundList:[
                    {
                        name: "诺游A",
                        title: "诺游A",
                        desc: `诺游A 坚守价值与成长相结合的投资模式，专注于挖掘企业内生增长价值和成长
                                性；同时兼顾收益率曲线的稳定性与资产配置的流动性、灵活性， 为投资
                                者创造持续稳定的（高于指数增长？/且高于同类产品？）的业绩回报。`
                    },
                     {
                        name: "诺游B",
                        title: "诺游B",
                        desc: `诺游B 坚守价值与成长相结合的投资模式，专注于挖掘企业内生增长价值和成长
                                性；同时兼顾收益率曲线的稳定性与资产配置的流动性、灵活性， 为投资
                                者创造持续稳定的（高于指数增长？/且高于同类产品？）的业绩回报。`
                    },
                     {
                        name: "诺游C",
                        title: "诺游C",
                        desc: `诺游C 坚守价值与成长相结合的投资模式，专注于挖掘企业内生增长价值和成长
                                性；同时兼顾收益率曲线的稳定性与资产配置的流动性、灵活性， 为投资
                                者创造持续稳定的（高于指数增长？/且高于同类产品？）的业绩回报。`
                    },
                     {
                        name: "诺游D",
                        title: "诺游D",
                        desc: `诺游D 坚守价值与成长相结合的投资模式，专注于挖掘企业内生增长价值和成长
                                性；同时兼顾收益率曲线的稳定性与资产配置的流动性、灵活性， 为投资
                                者创造持续稳定的（高于指数增长？/且高于同类产品？）的业绩回报。`
                    },
                ],
            };
        },
        components:{
            AppoinmentForm,
            Footer,
            Head,
            SendEmail,
            FixedLeft,
        },
        methods:{
            handleFundClick(activeIndex){
                this.activeIndex = activeIndex;
                this.fundDetail = this.fundList.find((item,index)=>{
                    return activeIndex == index;
                })
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
                    // this.$message({
                    //     message: "请先登录",
                    //     type: 'error',
                    // });
                    // setTimeout(()=>{
                        this.$router.push({path:'/login'});
                    // },1000)
                    let routeData = this.$router.resolve({ path: '/login'});
                    window.open(routeData.href, '_blank');
                }
            },
        },
        mounted(){
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
        created(){
            this.handleFundClick(0);
            
        }
    }
</script>
<style scoped lang="less">
    .fund{
       position: relative;
       padding-bottom: 142px;
    }
    .banner{
        height: 443px;
        width: 100%;
        background: url("./../assets/images/fund_banner.png") no-repeat;
        background-size: cover;
        overflow: hidden;
    }
    .banner_content{
        margin-left: 20%;
        margin-top: 88px;
        span{
            width: 45px;
            height: 23px;text-align: center;
            line-height: 23px;
            background: #C00000;
            font-size: 11px;
            font-family: Source Han Serif CN;
            font-weight: 800;
            color: #EFEFED;
            display: inline-block;

        }
        .fund_name{
            width: 323px;
            height: 50px;
            font-size: 38px;
            font-family: Source Han Serif CN;
            font-weight: 800;
            color: #C80200;
            margin-top: 24px;

        }
        .fund_desc{
            max-width: 456px;
            font-size: 14px;
            font-family: Source Han Serif CN;
            font-weight: 500;
            color: #2F2F2F;
            line-height: 23px;
            margin-top: 52px;
        }
    }
    .fund_public_title{
        font-size: 25px;
        font-family: Source Han Serif CN;
        font-weight: 800;
        color: #414141;
        text-align: center;
        margin: 0;
        padding: 0;
    }
    .introduce{
        padding: 76px 0;
    }
    .introduce_content{
        margin-top: 50px;
        width: 70%;
        display: flex;
        justify-content: space-between;
        margin-left: 15%;
        .introduce_left{
            background: url("./../assets/images/fund_left.png") no-repeat;
            background-size: cover;
            // width: 306px;
            width: 35%;
            height: 336px;
        }
        .fund_name_list{
            display: flex;
            justify-content: space-between;
            width: 63%;
        }
        .fund_detail{
            background: url("./../assets/images/fund_right.png") no-repeat;
            background-size: cover;
            // width: 440px;
            width: calc(100% - 200px);
            height: 336px;
            padding: 48px 28px 50px;
            box-sizing: border-box;
            overflow: hidden;
            position: relative;
            .fund_detail_title{
                font-size: 25px;
                font-family: Source Han Serif CN;
                font-weight: 800;
                color: #414141;
               
            }
            .fund_detail_desc{
                width: 100%;
                font-size: 12px;
                font-family: Source Han Serif CN;
                font-weight: 500;
                color: #2A2A2A;
                line-height: 25px;
                margin-top: 20px;
                overflow:hidden; 
                text-overflow:ellipsis; 
                display:-webkit-box; /* autoprefixer: off */ 
                -webkit-box-orient:vertical; /* autoprefixer: on */ 
                -webkit-line-clamp:6;
            }
            .more{
                color: #ffffff;
                background: #C80200;
                cursor: pointer;
                width: 87px;
                height: 30px;
                line-height: 30px;
                text-align: center;
                font-size: 12px;
                position: absolute;
                right: 28px;
                bottom: 40px;

            }
        }
        .tab{
            width: 179px;
            .tab_list{
                width: 100%;
                height: 53px;
                line-height: 53px;
                border-bottom: 1px solid #DFDFDF;
                font-size: 17px;
                font-family: Source Han Serif CN;
                font-weight: 500;
                color: #666666;
                background: #F3F3F3;
                text-align: center;
                cursor: pointer;
            }
            .focus_tab_list{
                background: #C80200;
                color: #ffffff;
            }
        }
    }
    .net{
        .net_content{
            padding: 50px 0 76px;
            width: 70%;
            margin-left: 15%;
        }
    }
    .process{
        .process_content{
            width: 60%;
            margin-left: 20%;
            padding: 50px 0 76px;
            .process_p{
                width: 100%;
                font-size: 12px;
                font-family: Source Han Serif CN;
                font-weight: 800;
                color: #414141;
                line-height: 27px;
            }
        }
    }

</style>