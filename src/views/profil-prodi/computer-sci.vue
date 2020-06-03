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
              <div class="title">Computer Science</div>
              <div class="subtitle">Bidang minat Computer Science</div>
              <div class="has-text-justified"><p>Computer Science adalah ilmu yang mempelajari tentang komputer dan sistem komputasi. Orang yang bergelut di bidang ini biasanya melakukan proses interaksi dengan data yang kemudian disajikan ke dalam format program.</p></div>
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
import TabelCs from '../components/TabelCs.vue';
export default {
  components:{
    'table-matkul' : TabelCs
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