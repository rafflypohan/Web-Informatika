<template>
  <div id="app">
    <Navbar/>
    <router-view/>
    <Footer/>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  watch:{
    '$route' (to){
      document.title = to.meta.title
    }
  },
  components:{
    Navbar,
    Footer
  }
}
</script>

<style lang = "scss">
/* @import "~bulma/sass/utilities/_all"; */
@import 'assets/style/_global.scss';
#app {
  font-family: 'Roboto', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  
}



/* @import "~bulma";
@import "~buefy/src/scss/buefy"; */
</style>
