<template>
    <div class="header">
        <div class="header_box">
            <div class="header_left" @click="toLogin">
                <img src="./../assets/images/logo.png" />
            </div>
            <div class="header_right mobile">
                <i class="iconfont iconcaidan2"  @click="showTabs" style="font-size: 26px;"></i>
            </div>
            <Popup v-model="showPop" position="right" :overlay="true">
				<div v-for="(item, index) in tabList" :key="index" class="vantTabList" @click="linkToPage(item.routeName)">
					<li v-if="!item.hasChildren" class="fatherLi">
						{{ $t(item.title) }}
					</li>
					<li v-else class="vantTabList-production">
						<div class="fatherTab" :class="{'bb': showSub}" @click.stop="showSubList">
							<span class="rotate0" :class="{'rotate90': showSub}"><i class="iconfont iconshouqi_m-copy" /></span>
							<div class="vantTabList-production-title">
								{{ $t(item.title) }}
							</div>
						</div>
						<div class="subTab" :class="{'subDuration': showSub}">
							<li v-for="subItem in item.subList" :key="subItem.key" class="subLi" @click="handleSelect(subItem.key)">
								{{ subItem.name }}
							</li>
						</div>
					</li>
				</div>
			</Popup>

            <div class="header_right pc">
                <router-link to="/"><div class="header_item">首页</div></router-link>
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
import { Popup } from 'vant';
export default {
    name: 'Home',
    props: {
      msg: String
    },
    components:{
        Popup
    },
    data(){
        return{
            showUser: false,
            username: "",
            mobile: "",
            email: "",
            showPop: false,
            showSub: false,
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
        showTabs() {
            this.isShow = !this.isShow
            this.showPop = true
        },
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
                font-family: Source Han Serif CN;
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
    @media screen and (min-width: 600px){
        .pc{
            display: flex;
        }
        .mobile{
            display: none;
        }
    }
    @media screen and (min-width: 320px) and (max-width: 600px){
        .pc{
            display: none;
        }
        .mobile{
            display: flex;
        }
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
  
    .van-popup--right{
        width: 70%;
        height: 100%;
        .vantTabList{
            display: flex;
            flex-direction: column;
        }
        .fatherLi,.vantTabList-production{
            list-style: none;
            padding: 30px 45px 30px 0;
            text-align: right;
            font-family: Montserrat-Medium;
            border-bottom: 1px solid rgba(222,222,222,0.6);
            font-size: 16px;
            color: #3A3A3A;
            font-weight: bold;
        }
        .vantTabList-production{
            padding-left: 35px;
        }
        .fatherTab{
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            .vantTabList-production-title{
                text-align: right;
                float: right;
            }
            .rotate0{
                transform: rotate(0deg);
                transition: transform 0.3s linear;
            }
            .rotate90{
                transform: rotate(-90deg);
                transition: transform 0.3s linear;
            }
            .iconfont{
                font-weight: normal;
            }
        }
        
        .bb{
            border-bottom: 1px solid #dedede;
            padding-bottom: 30px;
        }
        .subTab{
            color: #3A3A3A;
            font-size: 14px;
            font-weight: normal;
            letter-spacing: 1px;
            height: 0px;
            position: relative;
            overflow: hidden;
            -webkit-transition: height ease-out .3s;
            transition: height ease-out .3s;
            .subLi{
                width: 100%;
                float: right;
                padding: 10px 20px 10px 0;
                border-radius: 6px;
                .subLilast-child{
                    margin-top: 0;
                }
            }
        }
        .subDuration{
            height: 70px;
            -webkit-transition: height ease-out .3s;
            transition: height ease-out .3s;
            position: relative;
            overflow: hidden;
        }
    }
        

</style>