<template>
    <div class="header">
        <div class="header_box">
            <div class="header_left">
                <img src="./../assets/images/logo.png" />
            </div>
            <div class="header_right">
                 <router-link to="/"><div class="header_item">首页</div></router-link>
                 <router-link to="/fund"><div class="header_item">基金产品</div></router-link>
                 <router-link to="/about_nuoyou"> <div class="header_item"> 关于诺游 </div> </router-link>
                 <router-link to="/login"> <div class="header_item"> 用户登录 </div> </router-link>
                 <!-- <div @click="handleLanguage('en')"> 英语</div>
                 <div @click="handleLanguage('zh')"> 中文</div> -->

            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Home',
    props: {
      msg: String
    },
    created(){
    //   console.log(this.$i18n.locale)
    },
    methods:{
      handleLanguage(language){
        localStorage.setItem("locale",language)
        this.$i18n.locale = language;
      }
    }
}
</script>
<style scoped lang="less">
    .header{
        width: 100%;
        height: 80px;
        background: #ffffff;
        // position: fixed;
        z-index: 4;
        box-shadow: 0 2px 4px 0 rgba(255,244,233,.07);
        // border: 1px solid skyblue;
    }
    .header_box{
        width: 70%;
        height: 100%;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        // border: 1px solid red; 
    }
    .header_left{
        width: 50px;
        height: 50px;
    }
    .header_left img{
        width: 100%;
        height: 100%;
    }
    .header_right{
        display: flex;
        align-items: center;
        a{
            margin-left: 60px;
        }
    }
    .header_item{
        color: black;
        height: 40px;
        line-height: 40px;
    }
    .router-link-exact-active {
        .header_item{
            color: #FF3F1C;
            position: relative;
            /* border-bottom: 1px solid #ff7d00; */
            &::after{
                content: "aa";
                position: absolute;
                bottom: 8px;
                background-size: 26px;
                width: 26px;
                color: transparent;
                left: calc(50% - 13px);
                background-repeat: no-repeat;
                background-image: url("./../assets/images/active_item.png");
            }
        }
    }
</style>