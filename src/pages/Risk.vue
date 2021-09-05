<template>
    <div id="top">
        <Head />
        <div class="right">
            <div class="line"></div>
            <SendEmail />
            <FixedLeft msg="权益须知" />
            <div class="banner"></div>
            <div class="right_content">
                <div class="bread">你当前位置：首页>风险提示</div>
                <h2 class="">风险提示</h2>
                <p class="response_p">
        尊敬的投资者：

                </p>
                <p class="response_p">
私募资产管理计划（以下统称“产品”）是一种长期投资工具，其主要功能是分散投资，降低投资单一证券所带来的个别风险。产品不同于银行储蓄、国债等能够提供固定收益预期的金融工具，其投资运作过程中可能会面临各种风险，如市场风险、信用风险、流动性风险等，因此投资运作既可能产生收益，也可能产生损失（本金亏损或超过原始本金损失）。一般来说，产品的收益预期越高，投资者承担的风险也越大。由于与产品有关的文本（如产品合同、产品说明书/招募说明书（更新）、公告等）除明确产品投资范围、投资限制等还可能存在解除合同等限制性条款或对投资者行使权力有相关要求。因此，敬请投资者投资产品前认真阅读拟投资产品的产品合同、产品说明书/招募说明书（更新）、公告等与产品有关的文本，充分了解投资者的权利、义务以及该产品的风险收益特征，根据自身投资目的、风险偏好、投资经验及风险承受能力审慎选择适合自己的产品。
                    
                </p>
                <p class="response_p">
产品投资过程中除面临上述风险外，对于开放式或定期开放式产品，其运营过程中还会面临特有的巨额赎回风险，即当单个交易日产品的净赎回申请超过产品总份额一定比例时，将无法及时满足所有投资者的赎回申请。敬请投资者根据其投资期限、资产状况等判断此类产品是否与自己的风险承受能力相适应。此外，管理人业务或财务状况的变化，也可能对投资运作产生不利影响，从而使投资者承受因此产生的投资损失。敬请投资者审慎选择管理人，避免因管理人原因而影响自身合理判断。
                    
                </p>
                <p class="response_p">
本公司坚持投资者利益优先原则，在销售产品的过程中将基于投资者的不同风险承受能力以及产品的不同风险等级等因素，提出明确的适当性匹配意见。本公司的适当性匹配意见不表明对产品的风险和收益做出实质性判断或者保证。本公司提醒投资者产品投资的“买者自负”原则，在做出投资决策后，产品运营状况与产品净值变化引致的投资风险，由投资者自行负担。
                    
                </p>
                <p class="response_p">
本风险告知函的揭示事项仅为列举性质，未能详尽列明投资者投资产品所面临的全部风险和可能导致投资者资产损失的所有因素。投资者应当认真阅读《基金合同》、《招募说明书》或《私募资产管理合同》、《私募资产管理计划说明书》等法律文件，充分了解产品情况及风险收益特征，听取本公司适当性匹配意见的基础上，请投资者根据自身风险承受能力审慎决策，独立承担投资风险。
                    
                </p>
                 <p class="response_p">
本风险告知函的揭示事项仅为列举性质，未能详尽列明投资者投资产品所面临的全部风险和可能导致投资者资产损失的所有因素。投资者应当认真阅读《基金合同》、《招募说明书》或《私募资产管理合同》、《私募资产管理计划说明书》等法律文件，充分了解产品情况及风险收益特征，听取本公司适当性匹配意见的基础上，请投资者根据自身风险承受能力审慎决策，独立承担投资风险。
                    
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
            font-family: Source Han Serif CN;
            color: #000000;
            line-height: 27px;
            margin-top: 33px;
            margin-bottom: 40px;
        }
        .response_h2{
            font-size: 27px;
            color: #000000;
            margin-top: 40px;
        }
        .response_p{
            margin-top: 40px;
            font-size: 18px;
            color: #000000;
            line-height: 56px;
        }
    }
</style>