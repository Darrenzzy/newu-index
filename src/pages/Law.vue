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
                    请您确认您或您所代表的机构是符合《中华人民共和国证券投资基金法》、《中华人民共和国信托法》、《私募投资基金监督管理暂行办法》、《信托公司集合资金信托计划管理办法》、《证券公司客户资产管理业务管理办法》、《证券公司集合资产管理业务实施细则》、《基金管理公司特定客户资产管理业务试点办法》及其他相关法律法规所认定的合格投资者。
                </p>
                <p class="law_p">
                    《私募投资基金监督管理暂行办法》对于合格投资者的具体描述xxxx 
                </p>
                <p class="law_p">
                    如果确认您或您所代表的机构是合格投资者，并将遵守适用的有关法规请点击“接受”键以继续浏览本公司网站。如您不同意任何有关条款，请直接关闭本网站。
                </p>
                
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
            this.$router.push({path:'/register'});
        },
        goHistory(){
            this.$router.go(-1)
        }
    }
}
</script>
<style lang="less" scoped>
    .law{
        width: 70%;
        height: 700px;
        margin: 0 auto;
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
                padding: 20px 7px 40px;
                .law_p{
                    font-size: 12px;
                    font-family: Source Han Serif CN;
                    font-weight: 500;
                    color: #333333;
                    line-height: 27px;
                    margin-bottom: 20px;

                }
            }
            .margin_bottom{
                margin-bottom: 20px;
            }
        }
        .button{
            display: flex;
            width: 500px;
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