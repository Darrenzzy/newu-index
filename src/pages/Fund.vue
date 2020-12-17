<template>
    <div>
        <Head />
        <div class="fund">
            <SendEmail />
            <FixedLeft msg="基金产品"></FixedLeft>
            <div class="line"></div>
            <div class="banner">
                <div class="banner_content">
                    <p class="fund_desc">
                        坚守价值与成长相结合的投资模式，专注于挖掘企业内生增长价值和成长性；同时兼顾收益率曲线的稳定性与资产配置的流动性、灵活性，为投资者创造持续稳定的（高于指数增长？/且高于同类产品？）的业绩回报。
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
                    <div class="item" v-for="item in listData" :key="item.ID">
                        <div class="position_absolute" v-show="item.is_limit">
                            <img src="./../assets/images/fund_limit.png" />
                        </div>
                        <div class="item_top">
                            <div>
                                <div class="fund_tite">{{item.wond_name}}</div>
                                <div class="fund_code">{{item.code}}</div>
                            </div> 
                            <div>
                                <div class="fund_percent">{{item.last_year}}%</div>
                                <div class="fund_create">{{item.worth_desc || "成立以来"}}</div>
                            </div>
                        </div>
                        <div class="item_middle"> 
                            <div class="fund_desc">
                                {{item.intro}}
                            </div>
                        </div>
                        <div class="item_bottom"> 
                            <div>
                                <div class="fund_info"> 产品开放日: {{item.open_day}}</div>
                                <div class="fund_info"> 管理费: {{item.manage_fee}}</div>
                                <div class="fund_info"> 业绩报酬: {{item.results_reward}}</div>
                                <div class="fund_info"> 最低认购金: {{item.min_buy}}</div>
                            </div>
                            <div class="fund_person">基金经理 <span>{{item.manage_name}}</span></div>
                        </div>
                        <!-- <div class="item_bottom_center"> 
                            <div class="fund_person">基金经理 <span>王小静</span></div>
                        </div> -->
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
            </div>
            <div class="login_net_box">
                <div class="login">
                    <div class="pub_head">网上交易登录</div>
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
                                            <div class="button" @click="onSubmit">登录</div>
                                        </div>
                                    </el-form-item>
                                </div>
                            </div>
                        </el-form>
                    </div>
                </div>
                <div class="net">
                    <div class="pub_head"> 诺游客户净值查询 </div>
                    <div class="fund_list">
                        <div class="list"  v-for="item in fourList" :key="item.ID">
                            <div class="left">{{item.wond_name}}</div>
                            <div class="right">
                                <a :href="item.link" target="_blank" v-if="item.link"> 点击登入</a>
                                <span v-else>点击登入</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="process" id="fundProcess">
                <h3 class="fund_public_title">认购流程</h3>
                <div class="process_content">
                    <p class="process_p">
                        1.委托人签署私募基金合同及风险揭示书、投资者风险测评问卷：委托人在产品规定的有效时间范围内，跟管理人或代销机构联系，获取私募基金合同及风险揭示书、投资者风险测评问卷进行签署，并提交相关证件；
                    </p>
                    <p class="process_p">
                        2.委托人汇款：委托人在产品规定的有效时间范围内（常规情况：开放日（申购）前一日之前完成汇款操作；认购情况为产品募集期内完成汇款操作），并将认购资金及认购费用，通过银行汇款到该私募产品指定的产品募集帐户；
                    </p>
                    <p class="process_p">
                        3.委托人取得合同：在认购产品成立后，或日常开放日认购后，在合同规定的N个（一般为10个）工作日内，委托人将取得由私募基金公司签署并盖章的有效合同和份额确认函。
                    </p>
                    <p class="process_p" style="margin-top: 30px;">
                        备注
                    </p>
                    <p class="process_p">
                        一、若委托人为自然人，需提供以下资料：
                    </p>
                    <p class="process_p">
                        （1）委托人的身份证明文件（身份证或护照）复印件一式两份；
                    </p>
                    <p class="process_p">
                        （2）委托人的资金划入认购账户的银行汇款凭证复印件一式一份，并在汇款备注中注明：“XX认购诺游XX期私募基金”；
                    </p>
                    <p class="process_p">
                        （3）以上复印件上均需客户本人签字，并注明：“仅供认购诺游XX期私募基金计划”。
                    </p>
                    <p class="process_p">
                        （4）提供个人相关资产证明（若为个人收入证明请加盖在职单位公章）
                    </p>
                    <p class="process_p">
                        二、若委托人为机构投资者，需提供以下资料：
                    </p>
                    <p class="process_p">
                        （1）营业执照复印件并加盖公章
                    </p>
                    <p class="process_p">
                        （2）相关资产证明并加盖公章
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
                formInline: {
                    mobile: "",
                    password: "",
                },
                labelPosition: "left",
                rules: {
                    mobile: [
                        { required: true, message: '手机号不能为空', trigger: 'change' }
                    ],
                    password: [
                        { required: true, message: '密码不能为空', trigger: 'change' }
                    ],
                },
                listData:[] ,
                fourList:[
                    {wond_name: "诺游1号", ID: 1, link: ""},
                    {wond_name: "诺游趋势精选", ID: 2, link: "https://iservice.citics.com/myfund/"},
                    {wond_name: "诺游旌旗", ID: 3, link: "https://pb.gtja.com/equerying/"},
                    {wond_name: "诺游先锋", ID: 4, link: "https://pb.htsc.com.cn/htsc-pos-is/user/login"}
                ]
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
            onSubmit() {
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
        .fund_desc{
            font-size: 18px;
            font-family: Source Han Serif CN;
            font-weight: 500;
            color: #2F2F2F;
            line-height: 36px;
            max-width: 456px;
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
                        margin-top: 5px;
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
                        height: 50px;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        -webkit-line-clamp: 3;
                        -webkit-box-orient: vertical;
                        display: -webkit-box;
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
    .login_net_box{
        display: flex;
        justify-content: space-between;
        width: 70%;
        margin-left: 15%;
        .pub_head{
            padding-left: 30px;
            box-sizing: border-box;
            width: 100%;
            height: 28px;
            line-height: 28px;
            background-color: #C80200;
            background-image: url("./../assets/images/login_before_icon.png");
            background-repeat: no-repeat;
            background-position-y: center;
            background-position-x: 5px;
            background-size: 20px;
            border-radius: 6px 6px 0px 0px;
            color: #FFFFFF;
            font-family: Source Han Serif CN;
        }
        .login{
            // width: 444px;
            width: 40%;
            height: 290px;
            margin-bottom: 44px;
            background: #F6F6F6;
            border-radius: 6px 6px 0px 0px;
            font-size: 14px;
            font-family: Source Han Serif CN;
            font-weight: 800;
            color: #FFFFFF;
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
                                cursor: pointer;
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
        .net{
            width: 40%;
            height: 290px;
            background: #F6F6F6;
            border-radius: 6px 6px 0px 0px;
            .fund_list{
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
                margin-top: 30px;
                .list{
                    margin-bottom: 20px;
                    display: flex;
                    justify-content: center;
                    width: 80%;
                    .left{
                        font-size: 14px;
                        font-family: Source Han Serif CN;
                        font-weight: 800;
                        color: #666666;
                        min-width: 80px;
                        text-align: right;
                    }
                    .right{
                        cursor: pointer;
                        background: #C80200;
                        border-radius: 6px;
                        color: #ffffff;
                        padding: 4px 10px;
                        margin-left: 50px;
                        font-size: 12px;
                        a{
                            color: #FFFFFF;
                        }
                    }
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