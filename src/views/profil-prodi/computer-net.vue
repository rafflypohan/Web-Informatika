<template>
  <section class="section">
    <section class="hero is-bold">
      <div class="hero-body">
        <div class="container">
          <div class="columns">
            <div class="column">
              <figure>
                <img src="../assets/img/cn.png" alt="">
              </figure>
            </div>
            <div class="column">
              <span><h2>Bidang Minat</h2></span>
              <div class="title">Computer Network</div>
              <div class="subtitle">Bidang minat Computer Network</div>
              <div class="has-text-justified"><p>Computer Network adalah sebuah sistem yang menyambungkan komputer antar komputer maupun dengan perangkat yang lain (salah satu contohnya adalah printer) melalui media komunikasi sehingga data dan informasi dapat saling tersalurkan antar komputer maupun dengan perangkat. Selain itu, dikenal juga istilah bandwidth, yaitu kapasitas transmisi dari suatu jaringan, biasanya dilihat dari bit per detik.</p></div>
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
import TabelCn from '../components/TabelCn.vue';
export default {
  components:{
    'table-matkul' : TabelCn
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