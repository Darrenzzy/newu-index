<template>
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
</template>
<script>
export default {
    data(){
        return{
            fourList:[
                    {wond_name: "诺游1号", ID: 1, link: ""},
                    {wond_name: "诺游趋势精选", ID: 2, link: "https://iservice.citics.com/myfund/"},
                    {wond_name: "诺游旌旗", ID: 3, link: "https://pb.gtja.com/equerying/"},
                    {wond_name: "诺游先锋", ID: 4, link: "https://pb.htsc.com.cn/htsc-pos-is/user/login"}
            ]
        }
    }
}
</script>
<style scoped lang="less">
    .net{
        width: 100%;
        height: 100%;
        background: #F6F6F6;
        border-radius: 6px 6px 0px 0px;
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
        }
        .fund_list{
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            margin-top: 30px;
            .list{
                margin-bottom: 20px;
                display: flex;
                justify-content: space-between;
                min-width: 30%;
                .left{
                    font-size: 14px;
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
                    margin-left: 10px;
                    font-size: 12px;
                    a{
                        color: #FFFFFF;
                    }
                }
            }
        }
    }

</style>