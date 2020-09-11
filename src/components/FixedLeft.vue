<template>
    <div class="fixed_home">
        <div class="fixed_dot"></div>
        <div class="fixed_content">
            <div class="fixed_font" v-for="(item, index) in arr" :key="index">{{item}}</div>
        </div>
        <div class="fixed_home_img">
            <img src="./../assets/images/fixed_home.png" />
        </div>
    </div>
</template>
<script>
export default {
    props: ['msg'],
    created(){
    },
    data(){
        return{
            arr: this.msg.split("")
        }
    }
}
</script>
<style lang="less" scoped>
    .fixed_home{
        position: fixed;
        top: 256px;
        left: 15%;
        background: #C00000;
        width: 48px;
        height: 126px;
        transform: translateX(-100%);
        color: #ffffff;
        font-size: 14px;
        font-family: Source Han Serif CN;
        font-weight: 800;
        padding: 10px 0;
        box-sizing: border-box;
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        z-index: 10;
        .fixed_dot{
            width: 4px;
            height: 4px;
            background: #ffffff;
            border-radius: 50%;
            margin: 0 auto;
        }
        .fixed_content{
            display: flex;
            justify-content: space-between;
            flex-direction: column;
            align-items: center;
            margin-top: 5px;
            height: 80%;
            .fixed_font{
                width: 14px;
                height: 14px;
            }
        }
        .fixed_home_img{
            width: 30px;
            margin: 0 auto;
            margin-top: 10px;
            img{
                width: 100%;
            }
        }
    }
    .home{
        .fixed_home{
            .fixed_content{
                height: 50%;
            }
        }
    }

</style>