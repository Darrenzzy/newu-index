<template>
    <div class="header">
        <div class="header_box">
            <div class="header_left">
                <img src="./../assets/logo.png" />
            </div>
            <div class="header_right">
                 <router-link to="/">     <div class="header_item">{{$t("header.home")}}</div></router-link>
                 <router-link to="/test"><div class="header_item">test</div></router-link>
                 <router-link to="/zkp"> <div class="header_item">zkp </div> </router-link>
                 <div @click="handleLanguage('en')"> 英语</div>
                 <div @click="handleLanguage('zh')"> 中文</div>

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
      console.log(this.$i18n.locale)
    },
    methods:{
      handleLanguage(language){
        localStorage.setItem("locale",language)
        this.$i18n.locale = language;
      }
    }
}
</script>
<style scoped>

    .header{
        width: 100%;
        height: 70px;
        border: 1px solid skyblue;
    }
    .header_box{
        width: 70%;
        height: 100%;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border: 1px solid red;
    }
    .header_left{
        width: 30px;
        height: 30px;
    }
    .header_left img{
        width: 100%;
        height: 100%;
    }
    .header_right{
        display: flex;
        align-items: center;
    }
    .header_item{
        margin-left: 30px;
        color: black;
        height: 40px;
        line-height: 40px;
    }
    .router-link-exact-active .header_item{
        color: black;
        border-bottom: 1px solid #ff7d00;
    }
</style>