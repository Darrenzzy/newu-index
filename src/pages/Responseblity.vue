<template>
    <div  id="top">
        <Head />
        <div class="right">
            <div class="line"></div>
            <SendEmail />
            <FixedLeft msg="权益须知" />
            <div class="banner"></div>
            <div class="right_content">
                <div class="bread">你当前位置：首页>免责声明</div>
                <h2 class="response_h2">免责声明</h2>
                <p class="response_p">
请仔细阅读以下条款与条件。您进入本网站及其任何网页，即表明您已同意接受条款与条件的约束。下列条款与条件可能会作出变更。如您不同意下列条款与条件，请勿进入、访问或使用本网站或其任何信息。

                </p>
                <p class="response_p">
1、本网站提供的所有资料和信息，仅供参考，并不构成上海诺游投资管理有限公司（以下简称“本公司”）的任何专业性意见，也不构成本公司就某具体问题为某人提供咨询服务的行为。
                    
                </p>
                <p class="response_p">
2、本网站介绍的信息、工具和资料仅供一般性参考，除非另有明确协议，不应被视为购买或销售任何金融产品的某种要约或请求，亦非对任何交易的正式确认。投资有风险，基金的过往业绩并不预示其未来表现，您在作出投资决策前应认真阅读产品说明书、产品合同、相关法律文件以及本公司在中国证监会指定信息披露媒体上发布的正式公告和有关信息，并自行承担投资风险。
                    
                </p>
                <p class="response_p">
3、本网站所载信息和资料的来源皆被本公司认为可靠，且本公司尽力严谨处理本网站所载信息和资料，但本公司对其准确性、足够性、完整性及其使用的适当性等不作任何担保。请以中国证监会指定的信息披露媒体上正式公告的相关信息及相应基金的基金管理人公开发布的信息为准。
                    
                </p>
                <p class="response_p">
4、本公司对因使用本网站的各项服务、无法使用各项服务或由于链接到第三方网页所导致的任何直接、间接、衍生损害，不承担任何法律责任。本网站可包含与由第三方发布的网站的链接，第三方网站也可能包括与本网站的链接。本公司并未对任何该等第三方网站进行核实；本公司对于第三方网站直接或间接提供的资料、内容及服务不承担任何责任；本网站提供链接至第三方网站，并不视为同意、推荐或推介任何该等网站所提供的产品和服务，亦不可视为与该等第三方及网站有任何形式的合作。通过链接进入任何第三方网站或网页的风险由您自负。
                    
                </p>
                <p class="response_p">
5、本公司提醒您对病毒及黑客攻击等风险进行预防，并对因使用、登录、下载本网站的任何资料或因第三人的非授权使用而可能导致的电脑设备或其他财产损害不承担任何责任。您自己有完全的责任对您自己的计算机系统的硬件、软件、数据和各种操作、运用进行适当的防护、备份，对计算机病毒和/或任何对于计算机系统及其相关操作可能造成的侵袭、破坏、损害进行扫描、免疫、避免和防护。本公司对于您所使用本网站的各项服务、或无法使用各项服务所导致的任何直接、间接、衍生或特别损害，不应当承担任何法律责任。
                    
                </p>
                <p class="response_p">
6、除非存在故意不当或欺诈行为，本公司及其分支机构（部门）、股东、董事、员工对于因您进入、访问或使用本网站，或无法进入、访问或使用本网站而可能对您导致的任何直接或间接损失，不承担任何责任。
                    
                </p>
                <p class="response_p">
7、本网站的内容将定期更新或修正。本公司对网站所载或所涉及的信息和资料的及时性不作任何担保或保证。本公司保留无需事先通知即可删除或修改网站信息的权利。
                    
                </p>
                <p class="response_p">
8、本公司应当具有法律法规规定的其它有关免责规定项下所有的一切权利，本公司没有主张或迟延主张该等权利并不应当被视为本公司对于该等权利的弃权。
                    
                </p>
                <p class="response_p">
9、进入、访问与使用本网站，以及本条款与条件受中华人民共和国法律管辖，并依照中华人民共和国法律解释。若因本网站产生的任何争议，将以本网站发布者所在地法院为管辖法院，除非中国法律对此有强制性规定。
                </p>
               
            </div>
        </div>
        <Footer />
    </div>

</template>
<script>
import Footer from './../components/Footer';
import Head from './../components/Head.vue';
import SendEmail from './../components/SendEmail';
import FixedLeft from './../components/FixedLeft';
export default {
    components:{
        Footer,
        Head,
        SendEmail,
        FixedLeft,
    },
}
</script>
<style lang="less" scoped>
    .right{
        position: relative;
    }
    .banner{
        background: url('./../assets/images/right_banner.png') no-repeat;
        width: 100%;
        background-size: cover;
        height: 443px;
    }
    .right_content{
        width: 60%;
        margin-left: 20%;
        padding-bottom: 140px;
        .bread{
            font-size: 18px;
            color: #000000;
            line-height: 27px;
            margin-top: 33px;
            margin-bottom: 40px;
        }
        .response_h2{
            font-size: 27px;
            color: #000000;
        }
        .response_p{
            font-size: 18px;
            color: #000000;
            line-height: 56px;
        }
    }
</style>