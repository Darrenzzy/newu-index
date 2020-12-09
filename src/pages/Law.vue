<template>
    <div class="law">
        <div class="logo">
            <img src="./../assets/images/font_logo.png" />
        </div>
        <div class="border_bottom"></div>
        <div class="law_content">
            <div class="title">重要声明</div>
            <div class="law_box">
                <p class="law_p">
                    在继续浏览本公司网站前，请您仔细阅读本重要提示，并将页面滚动至本页结尾“接受”或“不接受”键，根据您的具体情况选择继续浏览还是放弃。点击“接受”键，视为您已经阅读并愿意遵守本提示内容。
                </p>
                <p class="law_p">
                    证券投资具有一定风险，根据《中华人民共和国证券投资基金法》、《中华人民共和国信托法》、《私募投资基金监督管理暂行办法》、《信托公司集合资金信托计划管理办法》等相关法律法规的有关规定，投资者应为风险识别、评估、承受能力较强的合格投资者。浏览本公司网站的人士可能来自更广阔的区域，但登入本网页的人士均出于主动，因而有责任遵守适用于当地的法规。登入网站内页即表示登入者同意其已阅览本网页的所有部分，包括任何法规或法规注释。
                </p>
                <p class="law_p">
                    如果确认您或您所代表的机构是一名“合格投资者”，并将遵守适用的有关法规请点击“接受”键以继续浏览本公司网站。如您不同意任何有关条款，请按“放弃”键。
                    根据我国《私募投资基金监督管理暂行办法》的规定，私募基金合格投资者的标准如下：
                </p>
                <p class="weight_p">一、具备相应风险识别能力和风险承担能力，投资于单只私募基金的金额不低于100万元且符合下列相关标准的单位和个人：</p>
                <p class="law_p">1、净资产不低于1000万元的单位；</p>
                <p class="law_p">2、个人金融资产不低于300万元或者最近三年个人年均收入不低于50万元。(前款所称金融资产包括银行存款、股票、债券、基金份额、资产管理计划、银行理财产品、信托计划、保险产品、期货权益等。)</p>
                <p class="weight_p">二、下列投资者视为合格投资者：</p>
                <p class="law_p">1、社会保障基金、企业年金、慈善基金；</p>
                <p class="law_p">2、依法设立并受国务院金融监督管理机构监管的投资计划；</p>
                <p class="law_p">3、投资于所管理私募基金的私募基金管理人及其从业人员；</p>
                <p class="law_p">4、中国证监会规定的其他投资者。</p>
                <p class="law_p">本网站所载的各种信息和数据等仅供参考，并不构成广告或销售要约，或买入任何证券、基金或其它投资工具的建议。投资者应仔细审阅相关金融产品的合同文件等以了解其风险因素，或寻求专业的投资顾问的建议。</p>
                <p class="law_p">信托产品净值可能会有较大的波动，并可能在短时间大幅下跌，并造成投资者损失部分或全部投资金额。您应确保有关投资产品适合您的需要。如有怀疑，请咨询按中国内地法规注册的专业分析师的意见，并要求其确认有关投资产品适合并符合您的投资目标。</p>
                <p class="law_p">投资产品的价格及其收益存在涨跌变动，而过往的产品业绩数据并不预示其未来的表现，投资者不应依赖本网站所提供的数据做出投资决策，否则由投资者自行承担所有风险。</p>
                <p class="law_p">本网站所载的资料于刊载日期属恰当充分，您在阅读时资料的准确性或完整性已发生变化。本网站刊登的所有资料可予以更改或修订而毋须事前通知，尽管诺游投资并不承诺定期更新本网站内容。公司并不对第三者所提供之有关资料的准确性、充足性或完整性作出任何保证，公司或其股东及雇员概不对于本网站内第三者所提供之资料的任何错误或遗漏负任何法律责任。</p>
            </div>
        </div>
        <div class="button">
            <div class="button_style" style="margin-right: 30px;" @click="toRegister">接受</div>
            <div class="button_style" @click="goHistory">不接受</div>
        </div>
    </div>
</template>
<script>
export default {
    methods:{       
        toRegister(){
           this.$router.push({path: "/home"})
        },
        goHistory(){
            // if (navigator.userAgent.indexOf("Firefox") != -1 || navigator.userAgent.indexOf("Chrome") !=-1) {
            //     window.location.href="about:blank";
            //     window.close();
            // } else {
            //     window.opener = null;
            //     window.open("", "_self");
            //     window.close();
            // }

            window.close();

            // window.open("about:blank","_self").close() 
        }
    }
}
</script>
<style lang="less" scoped>
    .law{
        width: 70%;
        padding-top: 20px;
        margin: 0 auto;
        padding-bottom: 20px;
        .logo{
            width: 53px;
            img{
                width: 100%;
            }
        }
        .border_bottom{
            border: 2px solid #C80200;
        }
        .law_content{
            padding: 0 18px;
            .title{
                font-size: 14px;
                font-family: Source Han Serif CN;
                font-weight: 800;
                color: #000000;
                margin: 28px 0 25px;
            }
            .law_box{
                border: 1px solid rgba(169, 163, 163, .27);
                padding: 20px 7px 10px;
                height: 400px;
                overflow-y: scroll;
                .weight_p{
                    font-size: 16px;
                    font-family: Source Han Serif CN;
                    font-weight: 900;
                    color: #333333;
                    line-height: 27px;
                }
                .law_p{
                    font-size: 12px;
                    font-family: Source Han Serif CN;
                    font-weight: 500;
                    color: #333333;
                    line-height: 27px;
                    margin-bottom: 20px;
                }

                &::-webkit-scrollbar{
                    width: 5px;
                    height: 5px;
                }
                &::-webkit-scrollbar-thumb {
                    border-radius: 10px;
                    background: lightgray;
                    height: 20px;
                }
                &::-webkit-scrollbar-track {
                    border-radius: 10px;
                    background: lightgray;
                    height: 20px;
                }
                &::-webkit-scrollbar {
                    width: 0px;  
                    height: 1px;
                }
            }
            .margin_bottom{
                margin-bottom: 20px;
            }
        }
        .button{
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            margin: 50px auto 0;
            .button_style{
                width: 87px;
                height: 26px;
                line-height: 26px;
                text-align: center;
                font-size: 12px;
                font-family: Source Han Serif CN;
                font-weight: 800;
                color: #FFFFFF;
                background: #C80200;
                cursor: pointer;
            }
        }
    }
</style>