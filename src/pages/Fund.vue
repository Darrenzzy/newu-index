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
            <div class="introduce">
                <div class="introduce_left">
                    <img src="./../assets/images/fund_icon.png" />
                    <div class="fund_left_font">诺游基金</div>
                    <div class="more" @click="handleTableClick">了解更多-></div>
                </div>
                <div class="introduce_right">
                    <div class="item" v-for="item in tableData" :key="item.ID">
                        <div class="position_absolute" v-show="item.is_limit">
                            <img src="./../assets/images/fund_limit.png" />
                        </div>
                        <div class="item_top">
                            <div>
                                <div class="fund_tite">诺游1号</div>
                                <div class="fund_code">(000100)</div>
                            </div> 
                            <div>
                                <div class="fund_percent">78.89%</div>
                                <div class="fund_create">近一年成立</div>
                            </div>
                        </div>
                        <div class="item_middle"> 
                            <div class="fund_desc">
                                着重挖掘高成长公司配置，捕捉市场热点题材，灵活多变的投资策略。
                            </div>
                        </div>
                        <!-- <div class="item_bottom"> 
                            <div>
                                <div class="fund_info"> 产品开放日: 每月15日</div>
                                <div class="fund_info"> 管理费: 5%</div>
                                <div class="fund_info"> 业绩报酬: 20%</div>
                                <div class="fund_info"> 最低认购金: 100万元</div>
                            </div>
                            <div class="fund_person">基金经理 <span>王小静</span></div>
                        </div> -->

                        <div class="item_bottom_center"> 
                            <div class="fund_person">基金经理 <span>王小静</span></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="risk_message">
                注：基金投资有风险，请投资者关注基金产品的风险等级，选择与您风险承受力相匹配的产品
            </div>
            <div class="net" id="fundNet">
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
                            <div class="column_content" v-for="(item) in listData" :key="item.ID">
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
            <div class="login">
                <div class="login_head">网上交易登录</div>
                <div class="login_form">
                    <el-form  :model="formInline" :rules="rules"  ref="form" label-width="50px" class="demo-form-inline" :label-position="labelPosition">
                        <div class="login_form_content">
                            <div class="input_box">
                                <el-form-item label="手机号:" prop="user">
                                    <el-input v-model="formInline.mobile" placeholder=""></el-input>
                                </el-form-item>
                            </div>
                            <div class="input_box">
                                <el-form-item label="密码:">
                                    <el-input type="password" v-model="formInline.password" placeholder=""></el-input>
                                    <div class="link_style"  @click="forgetPassword">
                                        <div class="login_icon">
                                            <img src="./../assets/images/login_icon.png" />
                                        </div>
                                        <span>忘记密码</span>
                                    </div>
                                </el-form-item>
                            </div>
                            <div class="input_box">
                                <el-form-item label="" prop="">
                                     <div class="button_box">
                                        <div class="button" @click="onSubmit('form')">登录</div>
                                    </div>
                                </el-form-item>
                            </div>
                           
                        </div>
                    </el-form> 
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
            var validateMobile = (rule, value, callback) => {
                if (!value) {
                    return callback(new Error('手机号不能为空'));
                }
                setTimeout(() => {
                    if ( /^1(3|4|5|6|7|8|9)\d{9}$/.test(value) ) {
                        callback();
                    } else {
                        callback(new Error('手机号码格式不对'));
                    }
                }, 900);
            };
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
                formInline: {
                    mobile: "",
                    password: "",
                },
                labelPosition: "left",
                rules: {
                    mobile: [
                        { validator: validateMobile, trigger: 'change' }
                    ],
                    password: [
                        { required: true, message: '密码不能为空', trigger: 'change' }
                    ],
                },
                listData:[]
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
            forgetPassword(){
                this.$router.push({path:'/forgetPwd'});
            },
            onSubmit(formName) {
                this.$refs[formName].validate((valid) => {
                if (valid) {
                     this.$Axios.post('/api/v1/member/login',{
                       ...this.formInline
                    }).then((res)=>{
                        if (res.data.code == 200) {
                            localStorage.setItem("username", res.data.data.username);
                            localStorage.setItem("email", res.data.data.email);
                            localStorage.setItem("mobile", res.data.data.mobile);
                            // this.$message({
                            //     message: '登录成功',
                            //     type: 'success'
                            // });
                            // setTimeout(()=>{
                                this.$router.push({path:'/userCenter'});
                            // },1000)
                        } else {
                            this.$message({
                                message: res.data.msg,
                                type: 'error',
                            });
                        }
                    }).catch(function (error) {
                        console.log(error);
                    });
                } else {
                    console.log('error submit!!');
                    return false;
                }
                });
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
            this.$Axios.get('/api/v1/netWorth/list',{}).then((data)=>{
                if (data.data.code == 200) {
                    this.tableData = data.data.data.list;
                    this.listData = data.data.data.list.slice(0, 4)
                    console.log(this.listData.length)
                    if (localStorage.getItem("username") && localStorage.getItem("email") && localStorage.getItem("mobile")) {
                        this.showUser = true;
                    }
                } else {
                    this.showUser = false;
                }
            }).catch(function (error) {
                console.log(error);
            });
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
        display: flex;
        justify-content: space-between;
        min-height: 400px;
        width: 70%;
        margin: 0 auto;
        .introduce_left{
            background: #C62C2C;
            width: 25%;
            text-align: center;
            padding: 46px 0 96px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            img{
                width: 29px;
            }
            .fund_left_font{
                font-size: 41px;
                font-family: Source Han Serif CN;
                font-weight: bold;
                color: #FFFEFE;
                letter-spacing: 10px;
                width: 120px;
                margin: 0 auto;
            }
            .more{
                padding: 5px 15px;
                background: white;
                color: #B52E2E;
                font-size: 12px;
                cursor: pointer;
                display: inline-block;
            }
        }
        .introduce_right{
            flex: 1;
            background: #F1F1F1;
            display: flex;
            justify-content: space-between;
            padding: 15px 6px 20px;
            .item{
                width: 25%;
                margin: 0 6px;
                background: #ffffff;
                -moz-box-sizing: border-box;
                position: relative;
                .position_absolute{
                    position: absolute;
                    top: 5px;
                    right: 10px;
                    width: 27px;
                    img{
                        min-width: 100%;
                        min-height: 100%;
                        -o-object-fit: cover;
                        object-fit: cover;
                        object-fit: cover;
                        max-width: 100%;
                        max-height: 100%;
                    }
                }
                .item_top{
                    padding: 30px 10px 9px;
                    min-height: 158px;
                    display: flex;
                    justify-content: space-between;
                    flex-direction: column;
                    border-bottom: 1px dashed #E0CBCB;
                    margin: 0 10px 10px;
                    .fund_tite{
                        font-size: 18px;
                        font-family: Source Han Serif CN;
                        font-weight: 800;
                        color: #414141;
                        text-align: center;
                    }
                    .fund_code{
                        width: 80px;
                        height: 20px;
                        line-height: 20px;
                        background: #FFEEEB;
                        text-align: center;
                        color: #B52E2E;
                        font-size: 12px;
                        margin: 0 auto;
                        margin-top: 8px;
                    }
                    .fund_percent{
                        font-size: 21px;
                        font-family: Source Han Serif CN;
                        font-weight: 800;
                        color: #B52E2D;
                        text-align: center;

                    }
                    .fund_create{
                        font-size: 11px;
                        font-family: Source Han Serif CN;
                        font-weight: 400;
                        color: #000000;
                        text-align: center;
                    }
                }
                .item_middle{
                    background: #FAFAFA;
                    .fund_desc{
                        font-size: 11px;
                        font-family: Source Han Serif CN;
                        border-bottom: 1px dashed #E0CBCB;
                        font-weight: 600;
                        margin: 0 10px;
                        padding: 10px 0px;
                        color: #999999;
                    }

                }
                .item_bottom, .item_bottom_center{
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    padding: 5px 0 10px 10px;
                    color: #999999; 
                    min-height: 80px;
                    .fund_info{
                        font-size: 9px;
                        line-height: 15px;
                        font-family: Source Han Serif CN;
                        font-weight: 600;
                    }
                }
                .item_bottom_center{
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
                .fund_person{
                    font-weight: 600;
                    margin-top: 10px;
                    font-size: 14px;
                }
            }
        }
    }
    .risk_message{
        font-size: 12px;
        font-family: Source Han Serif CN;
        font-weight: 600;
        color: #666666;
        margin-left: 15%;
        margin-top: 43px;
    }
    .net{
        .net_content{
            padding: 10px 0 76px;
            width: 70%;
            margin-left: 15%;
        }
    }
    .login{
        width: 444px;
        height: 291px;
        margin-bottom: 44px;
        background: #F6F6F6;
        border-radius: 6px 6px 0px 0px;
        font-size: 14px;
        font-family: Source Han Serif CN;
        font-weight: 800;
        color: #FFFFFF;
        margin-left: 15%;
        .login_head{
            padding-left: 10px;
            box-sizing: border-box;
            width: 100%;
            height: 28px;
            line-height: 28px;
            background: #C80200;
            border-radius: 6px 6px 0px 0px;
        }
        .login_form{
            padding: 40px 0 72px;
            .login_form_content{
                width: 350px;
                margin: 0 auto;
                .input_box{
                    .link_style{
                        margin-left: 5px;
                        display: inline-block;
                        font-size: 12px;
                        font-family: Source Han Serif CN;
                        font-weight: 800;
                        color: #666666;
                        vertical-align: bottom;
                        display: inline-table;
                        .login_icon{
                            width: 19px;
                            display: table-cell;
                            vertical-align: bottom;
                            img{
                                width:100%;
                            }
                        }
                        span{
                            display: inline-block;
                            height: 30px;
                            line-height: 38px;
                            margin-left: 5px;
                        }
                    }
                }
                input:-internal-autofill-selected{
                    background-color: white;
                }
                /deep/.el-form-item__label{
                    font-size: 12px;
                    font-family: Source Han Serif CN;
                    font-weight: 800;
                    color: #333333;
                    padding: 0;
                }
                /deep/.el-input{
                    width: 200px;
                    height: 30px;
                    background: #F6F6F6!important;
                }
                /deep/.el-input__inner{
                    background-color: #F6F6F6!important;
                    height: 30px;
                    line-height: 30px;
                    border: none;
                    border: 1px solid #E0A944;
                }
                /deep/.el-form-item__content{
                    line-height: unset;
                }
                /deep/.el-form-item{
                    margin-bottom: 0;
                }
                .button_box{
                    width: 50px;
                    height: 30px;
                    line-height: 30px;
                    text-align: center;
                    background: #C80200;
                    color: #ffffff;
                    font-size: 12px;
                    margin-top: 20px;
                    cursor: pointer;
                    margin-bottom: 45px;
              

                }
                
            }
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