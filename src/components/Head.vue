<template>
    <div class="header">
        <div class="header_box">
            <div class="header_left" @click="toLogin">
                <img src="./../assets/images/logo.png" />
            </div>
            <div class="header_right">
                <router-link to="/home"><div class="header_item">首页</div></router-link>
                <router-link to="/fund"><div class="header_item">基金产品</div></router-link>
                <router-link to="/about_nuoyou"> <div class="header_item"> 关于诺游 </div> </router-link>
                <div v-if="showUser">
                    <el-popover
                        placement="top-start"
                        trigger="hover"
                        enterable="true"
                        popper-class="user_popper"
                        
                    >
                        <div class="user_box">
                            <div class="item">用户名：{{username}}</div>
                            <div class="item">手机号：{{mobile}}</div>
                            <div class="item">邮箱：{{email}}</div>
                            <div class="item" style="cursor:pointer;text-align: center;" @click="changePwd">修改密码</div>
                            <div class="item" style="border-bottom:unset; cursor:pointer;text-align: center;" @click="LogOut">退出</div>
                        </div>
                        <div class="" slot="reference" style="cursor:pointer;">
                            <!-- <img src="./../assets/images/user.png" alt=""> -->
                            <router-link to="/userCenter"> <div class="header_item"> 用户中心 </div> </router-link>
                        </div> 
                    </el-popover>
                </div>
                <router-link to="/login" target="_blank" v-else> 
                    <div class="header_item"> 用户登录 </div> 
                </router-link>
                 <!-- <div @click="handleLanguage('en')"> 英语</div>
                 <div @click="handleLanguage('zh')"> 中文</div>  -->

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
    data(){
        return{
            showUser: false,
            username: "",
            mobile: "",
            email: "",
            tabList: [
                {
                    title: '首页',
                    hasChildren: false,
                    key: 'home',
                    routeName: '/'
                },
                {
                    title: '基金产品',
                    hasChildren: false,
                    key: 'fund',
                    routeName: '/fund'
                },
                {
                    title: '关于诺游',
                    hasChildren: false,
                    key: 'about_nuoyou',
                    routeName: '/about_nuoyou'
                },
                {
                    title: '用户登录',
                    hasChildren: false,
                    key: 'login',
                    routeName: '/login'
                },
            ]
        }
    },
    created(){
    //   console.log(this.$i18n.locale)
        this.showOpacity()
    },
    methods:{
        
        linkToPage(name) {
            this.$router.push({
                path: name
            })
        },
        handleLanguage(language){
            localStorage.setItem("locale",language)
            this.$i18n.locale = language;
        },
        toLogin(){
            this.$router.push({path:'/'});
        },
        showOpacity(){
            if (localStorage.getItem("username") && localStorage.getItem("email") && localStorage.getItem("mobile")) {
                this.showUser = true;
                this.username = localStorage.getItem("username");
                this.email = localStorage.getItem("email");
                this.mobile = localStorage.getItem("mobile");
                return true;

            } else {
                this.showUser = false;
                return false;
            }
        },
        changePwd(){
            this.$router.push({path:'/forgetPwd'});

        },
        LogOut(){
            localStorage.removeItem("username");
            localStorage.removeItem("email");
            localStorage.removeItem("mobile");
            // this.$router.push({path:'/login'});
            let routeData = this.$router.resolve({ path: '/login'});
            window.open(routeData.href, '_blank');
            this.showUser = false;
        }

    }
}
</script>
<style lang="less">
    .user_popper{
        padding: 0;
        min-width: unset;
        top: 67px!important;
        border: unset;
        .popper__arrow{
            display: none;
        }
        .user_box{
            width: 146px;
            box-sizing: border-box;
            background: #ffffff;
            border: 3px solid rgba(239, 239, 239, 1);
            box-shadow: 3px 5px 22px 9px rgba(76, 76, 76, 0.06);
            border-radius: 4px;
            .item{
                height: 30px;
                line-height: 30px;
                border-bottom: 1px solid rgba(239, 239, 239, 1);
                font-size: 12px;
                padding: 0 10px;
                color: #343434;
                overflow: hidden;
            }
        }
    }
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
        cursor: pointer;
        margin-left: 10px;
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
        color: black;
        margin-left: 60px;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        img{
            width: 18px;
        }
    }
    .router-link-exact-active {
        .header_item{
            color: #FF3F1C;
            position: relative;
            /* border-bottom: 1px solid #ff7d00; */
            &::after{
                content: "aa";
                position: absolute;
                top: -15px;
                background-size: 26px;
                width: 26px;
                height: 20px;
                color: transparent;
                left: calc(50% - 13px);
                background-repeat: no-repeat;
                background-image: url("./../assets/images/active_item.png");
            }
        }
    }
   
    @media screen and (min-width: 320px) and (max-width: 414px){
        .user_popper{
            left: unset!important;
            right:0;
        }
        .header_box{
            width: 90%;
            .header_left{  
                display: flex;
                justify-content: center;
                align-items: center;
            }
            .header_right{
                width: 70%;
                justify-content: space-between;
                .header_item{
                    font-size: 0.12rem;
                    margin-left: unset;
                }
            }
            
        }
    }
        

</style>