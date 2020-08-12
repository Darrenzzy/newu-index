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

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    padding: 0;
    margin: 0;
    width: 70%;
    margin: 0 auto;
  }
  html,body{
    width: 100%;
    margin: 0;
    padding: 0;
  }
  a{
    text-decoration: none;
  }
</style>
