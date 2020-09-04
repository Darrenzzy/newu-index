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
               
            </div>
        </div>
        <div class="table">
            <div class="table_box">
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
        <div class="search">
            <div class="left">

            </div>
            <div class="right">
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
</template>
<script>
    import AppoinmentForm from "./../components/AppoinmentForm"
    export default {
        data() {
            return {
                fundDetail:{},
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
            AppoinmentForm
        },
        methods:{
            handleFundClick(activeIndex){
                this.activeIndex = activeIndex;
                this.fundDetail = this.fundList.find((item,index)=>{
                    return activeIndex == index;
                })
                console.log(this.fundDetail)
            },
        },
       
        created(){
            this.handleFundClick(0);
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