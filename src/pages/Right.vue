<template>
    <div id="top">
        <Head />
        <div class="right">
            <div class="line"></div>
            <SendEmail />
            <FixedLeft msg="权益须知" />
            <div class="banner"></div>
            <div class="right_content">
                <div class="bread">你当前位置：首页>权益须知</div>
                <h2 class="response_h2">权益须知</h2>
                <p class="response_p">尊敬的基金投资人：</p>
                <p class="response_p">
                    基金投资在获取收益的同时存在投资风险。为了保护您的合法权益，请在投资基金前认真阅读以下内容：
                </p>
                <p class="small_title">一、基金的基本知识</p>

                <p class="response_p">（一）什么是基金</p>

                <p class="response_p">证券投资基金（简称基金）是指通过发售基金份额，将众多投资者的资金集中起来，形成独立财产，由基金
                    托管人托管，基金管理人管理，以投资组合的方法进行证券投资的一种利益共存、风险共担的集合投资方
                    式。
                </p>
                <p class="response_p">（二）基金与股票、债券、储蓄存款等其它金融工具的区别</p>
                <div class="table_box">
                    <el-table
                        ref="singleTable"
                        border
                        :data="tableData"
                        highlight-current-row
                        @current-change="handleCurrentChange"
                        style="width: 100%">
                        <el-table-column
                            property="rowTitle"
                            label=""
                            >
                        </el-table-column>
                        <el-table-column
                            property="fund"
                            label="基金"
                            width="300"
                            >
                        </el-table-column>
                        <el-table-column
                            property="share"
                            label="股票"
                        >
                        </el-table-column>
                        <el-table-column
                            property="bond"
                            label="债券">
                        </el-table-column>
                        <el-table-column
                            property="bank"
                            label="银行储蓄款">
                        </el-table-column>
                    </el-table>
                </div>

                <p class="response_p">（三）基金的分类</p>
                <p class="response_p">
                1、依据运作方式的不同，可分为封闭式基金与开放式基金。
                </p>
                <p class="response_p">
封闭式基金是指基金份额在基金合同期限内固定不变，基金份额可以在依法设立的证券交易所交易，但基金份额持有人不得申请赎回的一种基金运作方式。
开放式基金是指基金份额不固定，基金份额可以在基金合同约定的时间和场所进行申购和赎回的一种基金运作方式。
                </p>
                <p class="response_p">
2、依据投资对象的不同，可分为股票基金、债券基金、货币市场基金、混合基金
                </p>
                <p class="response_p">
根据《公开募集证券投资基金运作管理办法》对基金类别的分类标准,80%以上的基金资产投资于股票的为股票基金；80%以上的基金资产投资于债券的为债券基金；仅投资于货币市场工具的为货币市场基金；80%以上的基金资产投资于其他基金份额的为基金中基金；投资于股票、债券、货币市场工具或其他基金份额，并且股票投资、债券投资、基金投资的比例不符合股票基金、债券基金、基金中基金规定的为混合基金。这些基金类别按收益和风险由高到低的排列顺序为：股票基金、混合基金、债券基金、货币市场基金，即股票基金的风险和收益最高，货币市场基金的风险和收益最低。

                </p>
                <p class="response_p">
3、特殊类型基金
                </p>
                <p class="response_p">
（1）系列基金。又被称为伞型基金，是指多个基金共用一个基金合同,子基金独立运作,子基金之间可以进行相互转换的一种基金结构形式。

                </p>
                <p class="response_p">
（2）保本基金。是指通过采用投资组合保险技术,保证投资者的投资目标是在锁定下跌风险的同时力争有机会获得潜在的高回报。

                </p>
                <p class="response_p">
（3）交易型开放式指数基金(ETF)与上市开放式基金(LOF)。交易型开放式指数基金,通常又被称为交易所交易基金(Exchange Traded Funds,简称“ETF”),是一种在交易所上市交易的、基金份额可变的一种开放式基金。上市开放式基金(Listed Open-ended Funds,简称“LOF”)是一种既可以在场外市场进行基金份额申购赎回，又可以在交易所（场内市场）进行基金份额交易、申购或赎回的开放式基金。

                </p>
                <p class="response_p">
（4）QDII基金。是一种以境外证券市场为主要投资区域的证券投资基金，投资者可以用人民币或美元等外汇进行认购和申购，在承担境外市场相应投资风险的同时获取相应的投资收益。QDII基金与普通证券投资基金的最大区别在于投资范围不同。

                </p>
                <p class="response_p">
（四）基金评级

                </p>
                <p class="response_p">
基金评级是依据一定标准对基金产品进行分析从而做出优劣评价。投资人在投资基金时，可以适当参考基金评级结果，但切不可把基金评级作为选择基金的唯一依据。此外，基金评级是对基金管理人过往的业绩表现做出评价，并不代表基金未来长期业绩的表现。
本公司将根据投资者适当性管理要求，对基金管理人进行审慎调查，并对基金产品进行风险评价。
                </p>
                <p class="response_p">
（五）基金费用

                </p>
                <p class="response_p">
基金费用一般包括两大类：一类是在基金销售过程中发生的由基金投资人自己承担的费用，主要包括认购费、申购费、赎回费和基金转换费。这些费用一般直接在投资人认购、申购、赎回或转换时收取。其中申购费可在投资人购买基金时收取，即前端申购费；也可在投资人卖出基金时收取，即后端申购费，其费率一般按持有期限递减。另一类是在基金管理过程中发生的费用，主要包括基金管理费、基金托管费、信息披露费等，这些费用由基金承担。对于不收取申购、赎回费的货币市场基金和部分债券基金，还可按不高于2.5‰的比例从基金资产中计提一定的销售服务费。

                </p>

                <p class="small_title">
二、基金份额持有人的权利
                </p>
                <p class="response_p">
根据《证券投资基金法》第70条的规定，基金份额持有人享有下列权利：
                </p>
                <p class="response_p">
（一）分享基金财产收益；

                </p>
                <p class="response_p">
（二）参与分配清算后的剩余基金财产；

                </p>
                <p class="response_p">
（三）依法转让或申请赎回其持有的基金份额；

                </p>
                <p class="response_p">
（四）按照规定要求召开基金份额持有人大会；

                </p>
                <p class="response_p"> 
（五）对基金份额持有人大会审议事项行使表决权；

                </p>
                <p class="response_p"> 
（六）查阅或者复制公开披露的基金信息资料；
                    
                </p>

                <p class="response_p"> 
（七）对基金管理人、基金托管人、基金份额发售机构损害其合法权益的行为依法提起诉讼；
                    
                </p>
                <p class="response_p"> 
（八）基金合同约定的其它权利。
                    
                </p>
                <p class="small_title"> 
                    三、基金投资风险提示
                </p>
                <p class="response_p"> 
                                （一）证券投资基金是一种长期投资工具，其主要功能是分散投资，降低投资单一证券所带来的个别风险。基金不同于银行储蓄和债券等能够提供固定收益预期的金融工具，投资人购买基金，既可能按其持有份额分享基金投资所产生的收益，也可能承担基金投资所带来的损失。
                </p>
                <p class="response_p"> 
（二）基金在投资运作过程中可能面临各种风险，既包括市场风险，也包括基金自身的管理风险、技术风险和合规风险等。巨额赎回风险是开放式基金所特有的一种风险，即当单个交易日基金的净赎回申请超过基金总份额的百分之十时，投资人将可能无法及时赎回持有的全部基金份额。
                    
                </p>
                <p class="response_p"> 
（三）基金投资风险提示：基金分为股票基金、混合基金、债券基金、货币市场基金等不同类型，投资人投资不同类型的基金将获得不同的收益预期，也将承担不同程度的风险。一般来说，基金的收益预期越高，投资人承担的风险也越大。
                    
                </p>
                <p class="response_p"> 
（四）投资人应当认真阅读《基金合同》、《招募说明书》等基金法律文件，了解基金的风险收益特征，并根据自身的投资目的、投资期限、投资经验、资产状况等判断基金是否和投资人的风险承受能力相适应。
                    
                </p>
                <p class="response_p"> 
（五）基金投资人应当充分了解基金定期定额投资和零存整取等储蓄方式的区别。定期定额投资是引导投资人进行长期投资、平均投资成本的一种简单易行的投资方式，但并不能规避基金投资所固有的风险，不能保证投资人获得收益，也不是替代储蓄的等效理财方式。
                </p>
                <p class="response_p"> 
（六）基金管理人承诺以诚实守信、勤勉尽责的原则管理和运用基金资产，但不保证旗下基金一定盈利，也不保证最低收益。旗下基金的过往业绩及其净值高低并不预示其未来业绩表现。基金管理人提醒投资人基金投资的“买者自负”原则，在做出投资决策后，基金运营状况与基金净值变化引致的投资风险，由投资人自行负担。
                </p>
                <p class="response_p"> 
                    （七）本公司将对基金投资人的风险承受能力进行调查和评价，并根据基金投资人的风险承受能力推荐相应的基金品种，但本公司所做的推荐仅供投资人参考，投资人应根据自身风险承受能力选择基金产品并自行承担投资基金的风险。
基金产品风险评价以基金产品风险等级来具体反映，基金产品风险主要包括低风险、中低风险、中风险、中高风险和高风险五个等级。
                </p>
                <p class="smaill_title"> 
                    四、服务内容和收费方式
                </p>
                <p class="response_p"> 
                    本公司向基金投资人提供以下服务：
                </p>
                <p class="response_p"> 
（一）对基金投资人的风险承受能力进行调查和评价。
                    
                </p>
                <p class="response_p"> 
（二）基金销售业务，包括基金（资金）账户开户、基金申（认）购、基金赎回、基金转换、定额定投、修改基金分红方式等。本公司根据每只基金的发行公告及基金管理公司发布的其它相关公告收取相应的申（认）购、赎回费和转换费。
                    
                </p>
                <p class="response_p"> 
（三）基金网上交易服务。
                    
                </p>
                <p class="response_p"> 
（四）基金投资咨询服务。
                    
                </p>
                <p class="response_p"> 
（五）电话咨询、电话自助交易服务。
                    
                </p>
                <p class="response_p"> 
（六）基金知识普及和风险教育。
                    
                </p>
                <p class="response_p"> 
（以上服务内容涉及收费的，以基金销售机构明示收费方式为准）
                    
                </p>

                <p class="smaill_title"> 
                    五、基金交易业务流程
                </p>
                <p class="response_p"> 
                     （一）开立基金账户
                </p>
                <p class="response_p"> 
（二）详细阅读基金招募说明书等相关基金文件
                    
                </p>
                <p class="response_p"> 
（三）评估自身风险承受能力并确认与所购买基金产品风险等级的匹配度
                    
                </p>
                <p class="response_p"> 
（四）确保账户内留有足够的认购/申购资金
                    
                </p>
                <p class="response_p"> 
（五）认/申购基金产品
                    
                </p>
                <p class="response_p"> 
（六）设置基金分红方式
                    
                </p>
                <p class="response_p"> 
（七）持有基金参与分红
                    
                </p>
                <p class="response_p"> 
（八）赎回基金
                    
                </p>
                <p class="response_p"> 
（九）赎回款到账
                    
                </p>
                <p class="response_p"> 
具体办理方法请咨询本公司客户服务中心服务热线。在此，特提请您注意，有关基金相关开户、认申购、设置分红方式、赎回等业务以注册登记机构的注册登记和确认为准。
                    
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
    data() {
      return {
        tableData: [{
            rowTitle: "反应的经济关系不同",
            fund: '信托关系，是一种受益凭证，投资者购买基金份额后成为基金所有权关系，是一种所有权债权债务关系，是一种债权凭|表现为银行的负债，是一种信用凭受益人，基金管理人只是替投资者管理资金，并不承担投资损凭证，投资者购买后成为公证，投资者购买后成为该公司证，银行对存款者负有法定的保本付失风险',
            share: '所有权关系，是一种所有权凭证，投资者购买后成为公司股东',
            bond: '债权债务关系，是一种债权凭证，投资者购买后成为该公司摘债权人',
            bank: '表现为银行的负债，是一种信用凭证，银行对存款者负有法定的保本付息责任',
        }, 
        {
            rowTitle: "所筹资金的投向不同",
            fund: '间接投资工具，主要投向股票、债券等有价证券',
            share: '直接投资工具，主要投向实业领域',
            bond: '直接投资工具，主要投向实业领域',
            bank: '间接投资工具，银行负责资金用途和投向',
        }, {
            rowTitle: "投资收益与风险大小不同",
            fund: '投资于众多有价证券，能有效分散风险，风险相对适中，收益|价格波动性大， 高风险、高价格波动较股票小， 低风险、|银行存 款利率相对固定，损失本金的相对稳健',
            share: '价格波动性大，高风险，高收益',
            bond: '价格波动较股票小，低风险，低收益',
            bank: '银行存款利率相对固定，损失本金的可能性很小，投资比较安全',
        }, {
            rowTitle: "收益来源",
            fund: '利息收入、股利收入、资本利得',
            share: '股利收入，资本利得',
            bond: '利息收入，资本利得',
            bank: '利息收入',
        },
        {
            rowTitle: "投资渠道",
            fund: '基金管理公司及银行、证券公司等代销机构',
            share: '证券公司',
            bond: '债券发行机构，证券公司及银行等代销机构',
            bank: '银行、信用社、邮政储蓄',
        }
        ],
      }
    }
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
            font-weight: bold;
        }
        .response_p{
            font-size: 18px;
            color: #000000;
            line-height: 56px;
        }
        .small_title{
            font-size: 18px;
            font-family: Source Han Serif CN;
            font-weight: bold;
            color: #000000;
            line-height: 42px;
        }
    }
</style>