<template>
  <div id="app">
    <Head />
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
import Head from './components/Head.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Head,
    Footer
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
  }
  *:focus{
    outline: none;
  }
  html,body{
    width: 100%;
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
    .fixed_home{
      position: fixed;
      top: 256px;
      left: 15%;
      background: #C00000;
      width: 48px;
      height: 126px;
      transform: translateX(-100%);
      color: #ffffff;
      font-size: 15px;
      font-family: Source Han Serif CN;
      font-weight: 800;
      padding: 15px 0;
      box-sizing: border-box;
      .fixed_content{
          display: flex;
          justify-content: space-between;
          flex-direction: column;
          align-items: center;
          height: 100%;
      }
      .fixed_dot{
          width: 4px;
          height: 4px;
          background: #ffffff;
          border-radius: 50%;
      }
      .fixed_font{
          width: 14px;
      }
      .fixed_home_img{
          width: 30px;
          img{
              width: 100%;
          }
      }
    }
  }
  .table_content{
    // box-shadow: 0 0 15px rgba(0,0,0,.05);
    box-shadow: 4px 5px 23px 9px rgba(76, 76, 76, 0.29);
    padding-bottom: 40px;
    border-radius: 4px;
  }
  .table_title{
    height: 60px;
    line-height: 60px;
    background: #C80200;
    color: #ffffff;
    text-align: center;
    border-radius: 4px 4px 0 0;
    position: relative;
  }
  .column_title{
    display: flex;
    justify-content: space-between;
    background: #EDEDED;
    padding: 0 30px;
    .title{
        width: 12.5%;
        height: 38px;
        line-height: 38px;
        font-size: 12px;
        font-family: Source Han Serif CN;
        font-weight: 400;
        color: #999999;
    }
  }
  .table_list{
    padding: 0 30px;
    .column_content{
      display: flex;
      justify-content: space-between;
      border-bottom: 1px dotted #D6D6D6;
      .content{
          width: 12.5%;
          height: 50px;
          line-height: 50px;
          font-size: 12px;
          font-family: Source Han Serif CN;
          font-weight: 800;
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
          width: 70px;
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
    
</style>
