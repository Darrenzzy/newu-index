<template>
  <div id="app">
    <!-- <Head /> -->
    <router-view></router-view>
    <!-- <Footer /> -->
  </div>
</template>

<script>
// import Head from './components/Head.vue'
// import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    // Head,
    // Footer
  }
}
</script>

<style lang="less">
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    padding: 0;
    margin: 0;
    height: 100%;
  }
  *:focus{
    outline: none;
  }
  html,body{
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
  }
  p{
    margin: 0;
    padding: 0;
  }
  a{
    text-decoration: none;
  }
  .line{
    position: absolute;
    left: 15%;
    top: 0;
    border-left: 1px solid #FF0000;
    height: 100%;
    z-index: 2;
  }
  
  .table_content{
    box-shadow: 4px 5px 23px 9px rgba(76, 76, 76, 0.29);
    padding-bottom: 40px;
    border-radius: 4px;
    table{
      width: 100%;
      thead{
        background: #EDEDED;
        line-height: 40px;
        color: #999999;
        font-size: 12px;
        font-family: Source Han Serif CN;
        tr{
          &::before, &::after {
            content: '';
            display: block;
          }
          &::before{
            width: 20px;
          }
          &::after{
            width: 10px;
          }
          th{
            text-align: center;
            &:nth-child(1){
              text-align: left;
            }
          }
        }
      }
      tbody{
        background: #FFFFFF;
        tr{
          line-height: 50px;
          &::before,&::after {
            content: '';
            display: block;
          }
          &::after{
            width: 10px;
          }
          &::before{
            width: 20px;
          }
          td{
            border-bottom: 1px dashed #D6D6D6;
            text-align: center;
            font-size: 12px;
              font-family: Source Han Serif CN;
              font-weight: 800;
              color: #666666;
            &:nth-child(1){
              text-align: left;
              font-size: 18px;
              color: #666666;
            }
            .red_color{
              color: #C80200;
            }
            .blur{
              position: relative;
              text-shadow: 0 10px 20px rgba(0, 0, 0, 0.5);
              &::before{
                content: "";
                position: absolute;
                backdrop-filter: blur(3px);
                left: -10px;
                top: -10px;
                right: -10px;
                bottom: -10px;
                margin: auto;
              }
            }
          }
         
        }
      }
    }
  }
  .table_title{
    height: 60px;
    line-height: 60px;
    font-weight: 800;
    font-size: 23px;
    background: #C80200;
    color: #ffffff;
    text-align: center;
    border-radius: 4px 4px 0 0;
    position: relative;
  }
</style>
