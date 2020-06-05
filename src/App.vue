<template>
  <div id="app">
    <v-navbar />
    <b-scroll />
    <transition name="fade">
      <router-view />
    </transition>
    <v-footer />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
import ScrollButton from './components/ScrollButton';

export default {
  name: 'App',
  components: {
    'v-navbar': Navbar,
    'v-footer': Footer,
    'b-scroll': ScrollButton,
  },
  data(){
    return{
      id: 0
    }
  },
  watch: {
    '$route'(to) {
      document.title = 'Informatika - '+ to.meta.title;

      if (this.$route.path === "/berita/evaluasi-kurikulum-if") {
        this.id = 0
      }else if (this.$route.path === 'berita/born-invest'){
          this.id = 1
      }else if (this.$route.path === 'berita/kurikulum-if'){
          this.id = 2
      }else if (this.$route.path === 'berita/kultam-vr-ar'){
          this.id = 3
      }
    },
  }
  
};
</script>

<style lang="scss">
/* @import "~bulma/sass/utilities/_all"; */
@import 'assets/style/_global.scss';
#app {
  font-family: $family-primary;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

/* @import "~bulma";
@import "~buefy/src/scss/buefy"; */
</style>
