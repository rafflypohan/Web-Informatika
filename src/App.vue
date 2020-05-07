<template>
  <div id="app">
    <Navbar/>
    <router-view/>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'

export default {
  name: 'App',
  watch:{
    '$route' (to){
      document.title = to.meta.title
    }
  },
  components:{
    Navbar
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
  color: #2c3e50;
  
}



/* @import "~bulma";
@import "~buefy/src/scss/buefy"; */
</style>
