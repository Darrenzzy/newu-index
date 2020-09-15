<template>
    <div>
        <SendEmail />
        <Head />
        <div class="fund">
            <FixedLeft msg="用户中心"></FixedLeft>
            <div class="line"></div>
            <div class="banner">
                <div class="banner_content">
                </div>
            </div>
            <div class="table" id="userCenterFund">
                <div class="table_box">
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
                        <div class="table_list">
                            <div class="column_content" v-for="(item) in tableData" :key="item.ID">
                                <div class="content">{{item.wond_name}}</div>
                                <div class="content" style="width: 160px;">{{item.date_worth | formateTime}}</div>
                                <div class="content" >{{item.unit_worth}}</div>
                                <div class="content">{{item.net_worth}}</div>
                                <div class="content">{{item.build_before}}</div>
                                <div class="content red_color">{{item.now_year}}</div>
                                <div class="content red_color">{{item.last_year}}</div>

                                <div class="content red_color">{{item.three_muoth}}</div>
                                <div class="content red_color">{{item.six_mouth}}</div>
                                <!-- <div class="content"><span class="blur">3%</span></div>
                                <div class="content"><span class="blur">3%</span></div>
                                <div class="content"><span class="blur">3%</span></div>
                                <div class="content"><span class="blur">3%</span></div>
                                <div class="content red_color"><span class="blur">涨跌幅</span></div>
                                <div class="content red_color"><span class="blur">成立以来</span></div>
                                <div class="content"><span class="blur">风险等级</span></div> -->
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="search">
                <div class="left">
                </div>
                <div class="right"  id="vipSearch">
                    <div class="right_content">
                        <div class="search_title">尊户查询</div>
                        <div class="search_link">
                            券商入口
                        </div>
                    </div>
                </div>

            </div>
            <AppoinmentForm />
            <!-- <img src="./../assets/images/banner.png"/> -->
        </div>
        <Footer />
    </div>
</template>
<script>
    import AppoinmentForm from "./../components/AppoinmentForm"
    import Head from './../components/Head.vue';
    import Footer from './../components/Footer';
    import SendEmail from './../components/SendEmail';
    import FixedLeft from './../components/FixedLeft';

    export default {
        data() {
            return {
                fundDetail:{},
                tableData:[],
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
            Head,
            Footer,
            SendEmail,
            FixedLeft
        },
        created(){
            // if (this.showOpacity()) {
                this.$Axios.get('/api/v1/netWorth/list',{}).then((data)=>{
                    if (data.data.code == 200) {
                        this.tableData = data.data.data.list
                    }
                }).catch(function (error) {
                    console.log(error);
                });
            // }
        },
        methods:{
            handleFundClick(activeIndex){
                this.activeIndex = activeIndex;
                this.fundDetail = this.fundList.find((item,index)=>{
                    return activeIndex == index;
                })
            },
            formateTime(dateString){
                var arr = dateString.split("T");
                var d=arr[0];

                var darr = d.split('-');

                var t=arr[1];
                var tarr = t.split('.000');
                var marr = tarr[0].split(':');
                darr.map(item=>{
                    if (item < 10) {
                        item += "0";
                    }
                })
                if (parseInt(marr[2]) < 10) {
                    marr[2] = "0" + parseInt(marr[2]);
                } else {
                    marr[2] = + parseInt(marr[2]);
                }
                // var timeStamp = parseInt(darr[0])+"-"+parseInt(darr[1])+"-"+parseInt(darr[2])+" "+parseInt(marr[0])+":"+parseInt(marr[1])+":"+parseInt(marr[2]);
                var timeStamp = darr[0] +"-"+ darr[1] +"-"+ darr[2]+" "+ marr[0] +":"+ marr[1]+ ":" + marr[2];
                    
                return timeStamp
            }
        },
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
        background: url("./../assets/images/user_center_bg.png") no-repeat;
        background-size: cover;
        overflow: hidden;
    }
    .table{
        width: 70%;
        margin-left: 15%;
        margin-top: 106px;
        margin-bottom: 72px;
    }
    .search{
        height: 295px;
        width: 70%;
        margin-left: 15%;
        display: flex;
        justify-content: space-between;
        margin-bottom: 76px;
        .left{
            background: url("./../assets/images/user_center_find_bg.png") no-repeat;
            background-size: cover;
            width: 70%;
            height: 100%;
        }
        .right{
            width: 30%;
            height: 100%;
            background: #F2F2F2;
            padding: 10px;
            box-sizing: border-box;
            .right_content{
                background: #ffffff;
                display: flex;
                justify-content: center;
                align-items: center;
                height: 100%;
                flex-direction: column;
                border-radius: 8px;
                .search_title{
                    margin-bottom: 36px;
                    font-size: 27px;
                    font-family: Source Han Serif CN;
                    font-weight: 800;
                    color: #333333;
                }
                .search_link{
                    background: #C80200;
                    font-size: 18px;
                    font-family: Source Han Serif CN;
                    font-weight: 800;
                    color: #FFFFFF;
                    width: 140px;
                    height: 40px;
                    border-radius: 8px;
                    text-align: center;
                    line-height: 40px;
                    cursor: pointer;
                }
            }
        }
    }
</style>