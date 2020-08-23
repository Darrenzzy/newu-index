<template>
    <div>
        <button @click="getref"  class="test">获取H1元素</button>
                <!-- <img src="./../assets/top-vextminer.png" /> -->

        <div class="section-product__cards__item__bg js-scroll-show" ref="test">
            <!-- <div class="section-product__cards__item__bg__inner"> -->
                <div class="section-product__cards__item__bg__image" 
                    style="background-image:url('https://www.vext.co.jp/wp-content/themes/vext-corp-2019/assets/images/top-vextminer.png');">
                </div>
                <div class="section-product__cards__item__bg__mask">
                    <i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i>           
                </div>
            <!-- </div> -->
        </div>
 
    </div>
</template>
<script>
export default {
    data(){
        return{
            isShow: false
        }
    },
    mounted(){
        // setTimeout(()=>{
        //     console.log(this.$refs.test)
        //     this.$refs.test.classList.add("is-show");
        // },5000)

    },
    methods:{
        getref(){
            if(this.isShow){
                this.$refs.test.classList.remove("is-show");
                this.isShow = false;
            } else{
                this.$refs.test.classList.add("is-show");
                this.isShow = true;
            }
        }
    }
 
    
}
</script>
<style scoped>
.test{
    color: black;
    z-index: 10;
}
.section-product__cards__item__bg{
    position: relative;
    width: 800px;
    height: 404px;
    margin: 0 auto;
    margin-top: 40px;
}
.section-product__cards__item__bg__image{
    transition: opacity 0s ease .5s;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: 50%;
}
.section-product__cards__item__bg__mask{
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    height: 100%;
    font-size: 0;
    background-color: rgba(14,25,45,1);
    transform: rotateY(90deg);
    transition: transform .6s cubic-bezier(.935,.015,.335,.92) 0s,background-color 0s linear .7s,-webkit-transform .6s cubic-bezier(.935,.015,.335,.92) 0s;
    transform-origin: left;
}
.section-product__cards__item__bg__mask i {
    display: block;
    width: 153px;
    height: 81px;
    background-color: #0e192d;
    font-size: 0;
}
.js-scroll-show .section-product__cards__item__bg__mask i:first-child{
    transition-delay: .6s;
    transform-origin: left;
}
.js-scroll-show .section-product__cards__item__bg__mask i:nth-child(2), 
.js-scroll-show .section-product__cards__item__bg__mask i:nth-child(3){
    transition-delay: .6s;
    transform-origin: right;
}
.js-scroll-show .section-product__cards__item__bg__mask i:nth-child(5), 
.js-scroll-show .section-product__cards__item__bg__mask i:nth-child(6){
    transition-delay: .6s;
    transform-origin: right;
}
.js-scroll-show .section-product__cards__item__bg__mask i:nth-child(7), 
.js-scroll-show .section-product__cards__item__bg__mask i:nth-child(8){
     transition-delay: .6s;
    transform-origin: left;
}
.js-scroll-show .section-product__cards__item__bg__mask i:nth-child(9), 
.js-scroll-show .section-product__cards__item__bg__mask i:nth-child(10){
    transition-delay: .6s;
    transform-origin: right;
}
.js-scroll-show .section-product__cards__item__bg__mask i:nth-child(11){
    transition-delay: .6s;
    transform-origin: left;
}
.js-scroll-show .section-product__cards__item__bg__mask i:nth-child(12), 
.js-scroll-show .section-product__cards__item__bg__mask i:nth-child(13) {
    -webkit-transition-delay: .6s;
    transition-delay: .6s;
    -webkit-transform-origin: right;
    transform-origin: right;
}
.js-scroll-show .section-product__cards__item__bg__mask i:nth-child(14), 
.js-scroll-show .section-product__cards__item__bg__mask i:nth-child(15){
    transition-delay: .6s;
    transform-origin: left;
}

.js-scroll-show .section-product__cards__item__bg__mask i{
    transform: rotateY(0deg);
    transition: transform .5s cubic-bezier(.935,.015,.335,.92);
    /*transition: transform .5s cubic-bezier(.935,.015,.335,.92),-webkit-transform .5s cubic-bezier(.935,.015,.335,.92); */
} 
.is-show .section-product__cards__item__bg__image{
    opacity: 1;
}

.is-show .section-product__cards__item__bg__mask{
    /* 这个是不显示的 */
    transform: rotateY(0deg);
    background-color: rgba(14,25,45,0);
}
.is-show .section-product__cards__item__bg__mask i{
    transform: rotateY(90deg);
}
   
.section-product__cards__item.js-scroll-show .section-product__cards__item__bg__mask i:nth-child(2), .section-product__cards__item.js-scroll-show .section-product__cards__item__bg__mask i:nth-child(3) {
    -webkit-transition-delay: .6s;
    transition-delay: .6s;
    -webkit-transform-origin: right;
    transform-origin: right;
}
</style>
