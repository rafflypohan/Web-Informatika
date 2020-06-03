<template>
  <section class="section">
    <section class="hero is-bold">
      <div class="hero-body">
        <div class="container">
          <div class="columns">
            <div class="column">
              <figure>
                <img src="../assets/img/se.png" alt="">
              </figure>
            </div>
            <div class="column">
              <span><h2>Bidang Minat</h2></span>
              <div class="title">Software Engineering</div>
              <div class="subtitle">Bidang minat Software Engineering</div>
              <div class="has-text-justified"><p>Software engineering adalah proses analisis kebutuhan dan desain pengguna, konstruksi dan uji aplikasi yang akan memenuhi kebutuhan-kebutuhan tersebut melalui penggunaan bahasa pemrograman. Secara garis besar, software engineering bisa diartikan sebagai penerapan prinsip-prinsip teknik pengembangan perangkat lunak.</p></div>
            </div>
          </div>
          <div class="matakuliah">
            <div>
              <table-matkul/>
            </div>
          </div>
        </div>
      </div>
    </section>
  </section>
</template>
<script>
import TabelSe from '../components/TabelSe.vue';
export default {
  components:{
    'table-matkul' : TabelSe
  }
}
</script>
<style lang="scss" scoped>
@import "../assets/style/_global.scss";
h2 {
  background-color: black;
  color: aliceblue;
}
img {
  height: 70vh;
  width: 35vw;
}
</style>