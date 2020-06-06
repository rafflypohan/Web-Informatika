<template>
  <section class="section">
    <section class="hero is-bold">
      <div class="hero-body">
        <div class="container">
          <div class="judul-waktu">
            <p class="title is-1">{{data.berita[id].title}}</p>
            <p class="title is-1"> {{data.berita[id].descTitle}} </p>
            <p class="subtitle is-6"> {{data.berita[id].tag}}  -  {{data.berita[id].datetime}} </p>
          </div>
          <div class="image">
            <img v-bind:src="require(`../assets/img/${data.berita[id].images}`)" alt="data.berita[id].title" />
          </div>
          <div class="has-text-justified" >
            <p>
               <pre>{{data.berita[id].desc}}</pre>
            </p>
          </div>
        </div>
      </div>
    </section>
  </section>
</template>
<script>
import DataBerita from "../data/berita.json";
export default {
  data() {
    return {
      'id': this.$parent.id, // buat ngambil id parent nya
      'data': DataBerita
    };
  },
   methods: {
    //  ini buat ngubah \n di json jadi tag <br>
    handleNewLine(str) {
      return str.replace(/(?:\r\n|\r|\n)/g, '<br />');
    },
  },
  watch: {
    // ini kalo ganti path tapi komponennya sama, contohnya card di halaman beranda
    '$route' () {
      if (this.$route.path === "/berita/evaluasi-kurikulum-if") {
        this.id = 0;
      }
      else if (this.$route.path === '/berita/born-invest'){
          this.id = 1;
      }
      else if (this.$route.path === '/berita/kurikulum-if'){
          this.id = 2;
      }
      else if (this.$route.path === '/berita/kultam-vr-ar'){
          this.id = 3;
      }
    }
  }
};
</script>
<style lang="scss" scoped>
@import "../assets/style/_global.scss";

img {
  height: 70vh;
  width: 35vw;
}
.pembicara {
  margin-top: 3vh;
}

p pre{
  font-family: inherit;
  background: inherit;
  font-size: inherit;
  word-wrap: break-word;
  white-space: pre-wrap;
  
}

</style>