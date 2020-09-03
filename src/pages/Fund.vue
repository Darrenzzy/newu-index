<template>
    <div class="fund">
        <div class="line">
            <div class="fixed_home">
                <div class="fixed_content">
                    <div class="fixed_dot"></div>
                    <div class="fixed_font">首</div>
                    <div class="fixed_font" style="margin-top: 13px;">页</div>
                    <div class="fixed_home_img">
                        <img src="./../assets/images/fixed_home.png" />
                    </div>
                </div>
            </div>
        </div>
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
            <h3 class="fund_public_title">产品介绍</h3>
            <div class="introduce_content">
                <div class="introduce_left"></div>
                <div class="fund_name_list">
                    <div class="fund_detail">
                        <div class="fund_detail_title">诺游A</div>
                        <div class="fund_detail_desc">
                            坚守价值与成长相结合的投资模式，专注于挖掘企业内生增长价值
                            和成长性；同时兼顾收益率曲线的稳定性与资产配置的流动性、灵
                            活性， 为投资者创造持续稳定的（高于指数增长？/且高于同类产
                            品？）的业绩回报。
                        </div>

                    </div>
                    <div class="tab">
                        <div class="tab_list focus_tab_list">诺游A</div>
                        <div class="tab_list">诺游B</div>
                        <div class="tab_list">诺游C</div>
                        <div class="tab_list">诺游D</div>


                    </div>
                </div>
            </div>
        </div>
        <div class="net">
            <h3 class="fund_public_title">产品净值</h3>
            <div class="net_content">
                <div class="table_content">
                    <div class="table_title">诺游基金</div>
                    <div class="column_title"> 
                        <div class="title">基金名称</div>
                        <div class="title">基金代码</div>
                        <div class="title">净值日期</div>
                        <div class="title">单位净值</div>
                        <div class="title">累计净值</div>
                        <div class="title">涨跌幅</div>
                        <div class="title">成立以来</div>
                        <div class="title">风险等级</div>
                    </div>
                    <div class="table_list">
                        <div class="column_content" v-for="(item, index) in 6" :key="index">
                            <div class="content">基金名称</div>
                            <div class="content"><span class="blur">3%</span></div>
                            <div class="content"><span class="blur">3%</span></div>
                            <div class="content"><span class="blur">3%</span></div>
                            <div class="content"><span class="blur">3%</span></div>
                            <div class="content red_color"><span class="blur">涨跌幅</span></div>
                            <div class="content red_color"><span class="blur">成立以来</span></div>
                            <div class="content"><span class="blur">风险等级</span></div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        <div class="process">
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
        <div class="appointment">
            <div class="appointment_left">
                <p class="title">专户预约</p>
                <p class="desc_one">专业人士提供个性化资产管理建议</p>
                <p class="desc_two">
                    尊敬的投资者，基金专户仅面向合格投资者，您需提交合格投资者相关证明材料，感谢您的关注。
                </p>
            </div>
            <div class="appointment_right">
                <el-form  :model="formInline" :rules="rules"  ref="form" class="demo-form-inline" :label-position="labelPosition">
                    <div class="appointment_content">
                        <!-- <div class="input_box">
                            <div class="label_style">姓名:</div>
                            <div class="input_style">
                                <el-input v-model="formInline.user" placeholder="审批人"></el-input>
                            </div>
                        </div> -->
                        <div class="input_box">
                            <el-form-item label="姓名:" prop="user">
                                <el-input v-model="formInline.user" placeholder=""></el-input>
                            </el-form-item>
                        </div>
                        <div class="input_box">
                            <el-form-item label="电话:">
                                <el-input v-model="formInline.mobile" placeholder="">电话</el-input>
                            </el-form-item>
                        </div>
                         <div class="input_box">
                            <el-form-item label="性别:" prop="sex">
                                <el-radio-group v-model="formInline.sex">
                                <el-radio label="0">先生</el-radio>
                                <el-radio label="1">女士</el-radio>
                                </el-radio-group>
                            </el-form-item>

                         </div>
                        <div class="input_box">
                            <el-form-item label="电子邮件:">
                                <el-input v-model="formInline.email" placeholder="">电话</el-input>
                            </el-form-item>
                        </div>
                        <div class="input_box">
                            <el-form-item label="城市:">
                                <el-select v-model="formInline.city" placeholder="">
                                <el-option label="区域一" value="shanghai"></el-option>
                                <el-option label="区域二" value="beijing"></el-option>
                                </el-select>
                            </el-form-item>
                        </div>
                        <div class="input_box">
                             <el-form-item label="投资身份" prop="aaaaa">
                                <el-radio-group v-model="formInline.aaaaa">
                                <el-radio label="0">个人</el-radio>
                                <el-radio label="1">机构</el-radio>
                                </el-radio-group>
                            </el-form-item>
                        </div>
                        <div class="input_box">
                            <el-form-item label="验证码:" prop="code">
                                <el-input v-model="formInline.code" placeholder="">电话</el-input>
                            </el-form-item>
                            
                        </div>
                        
                        <div class="button_box">
                            <div class="button" @click="onSubmit('form')">提交预约</div>
                        </div>

                    <!-- <el-form  :model="formInline" ref="form" class="demo-form-inline" :label-position="labelPosition">
                        <el-form-item label="审批人">
                            <el-input v-model="formInline.user" placeholder="审批人"></el-input>
                        </el-form-item>
                        
                        <el-form-item>
                            <el-button type="primary" @click="onSubmit('form')">查询</el-button>
                            
                        </el-form-item>
                    -->
                    </div>
                </el-form> 
            </div>

        </div>
        <!-- <img src="./../assets/images/banner.png"/> -->
    </div>
</template>
<script>
    export default {
        data() {
            return {
                formInline: {
                    user: '',
                    region: '',
                    sex: "",
                    aaaaa: "",
                    city: "",
                    email: "",
                    mobile: "",
                    code: "",

                },
                labelPosition: "top",
                rules: {
                    user: [
                        { required: true, message: '请输入活动名称', trigger: 'blur' },
                        { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
                    ],
                    region: [
                        { required: true, message: '请选择活动区域', trigger: 'change' }
                    ],
                }
            };
        },
        methods:{
            onSubmit(formName) {
                this.$refs[formName].validate((valid) => {
                console.log(valid)
                if (valid) {
                    console.log(this.formInline)
                    alert('success!');
                } else {
                    console.log('error submit!!');
                    return false;
                }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            }

        },
        // props: {
        //     msg: String
        // }
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
            font-size: 51px;
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
    .appointment{
        width: 70%;
        margin-left: 15%;
        height: 255px;
        background: url("./../assets/images/appoinment_bg.png") no-repeat;
        background-size: cover;
        display: flex;
        justify-content: space-between;
        .appointment_left{
            width: 40%;
            padding-top: 34px;
            padding-left: 32px;
            .title{
                font-size: 18px;
                font-family: Source Han Serif CN;
                font-weight: 800;
                color: #414141;
                margin: 0 0 27px;
            }
            .desc_one{
                font-size: 14px;
                font-family: Source Han Serif CN;
                font-weight: 800;
                color: #666666;
                line-height: 27px;
            }
            .desc_two{
                margin-top: 20px;
                font-size: 11px;
                font-family: Source Han Serif CN;
                font-weight: 500;
                color: #414141;
                line-height: 18px;
                width: 80%;
            }
        }
        .appointment_right{
            width: 60%;
            .appointment_content{
                display: flex;
                flex-wrap: wrap;
                justify-content: space-between;
                padding-top: 10px;
                .input_box{
                    width: 30%;
                    // height: 30px;
                    // border: 1px solid;
                    .label_style{
                        font-size: 11px;
                        font-family: Source Han Serif CN;
                        font-weight: 800;
                        color: #414141;
                        height: 30px;
                        line-height: 30px;
                    }
                    /deep/.el-form-item{
                        margin-bottom: unset;
                    }
                    /deep/ .el-input__inner{
                        border: unset;
                        border-radius: unset;
                        height: 27px;
                        line-height: 27px;
                        font-size: 12px;
                        font-size: 12px;
                    }
                    /deep/ .el-form-item__label{
                        line-height: unset;
                        padding: 0;
                        font-size: 12px;
                        color: #414141;
                    }
                    /deep/.el-form-item__content{
                        line-height: 37px;
                    }
                    /deep/ .el-radio{
                        margin-right: 10px;
                        font-size: 12px;
                        color: #414141;
                        font-weight: 400;
                    }
                    /deep/.el-radio__label{
                        font-size: 12px;
                    }
                    /deep/.el-radio__input.is-checked+.el-radio__label{
                        color: #C00000;
                    }
                    /deep/.el-radio__input.is-checked .el-radio__inner{
                        border-color: #C00000;
                        background: #C00000;
                    }
                    /deep/.el-input__icon{
                        line-height: 37px;
                    }
                    .input_style{
                        width: 100%;
                        height: 27px;
                        box-shadow: 4px 5px 23px 9px rgba(76, 76, 76, 0.06);
                    }
                }
                .button_box{
                    width: 100%;
                    margin-top: 10px;
                    .button{
                        width: 137px;
                        height: 35px;
                        line-height: 35px;
                        text-align: center;
                        border-radius: 4px;
                        cursor: pointer;
                        font-size: 14px;
                        background: #C80200;
                        color: #ffffff;
                    }
                }
            }
        }
    }
</style>