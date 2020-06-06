<template>
  <section class="section">
    <section class="hero is-bold">
      <div class="hero-body">
        <div class="container">
          <div class="columns">
            <div class="column">
              <figure>
                <img v-bind:src="require(`../assets/img/${data.bidangMinat[id].images}`)" alt="" />
              </figure>
            </div>
            <div class="column">
              <span><h2>Bidang Minat</h2></span>
              <div class="title">{{ data.bidangMinat[id].name }}</div>
              <div class="subtitle">{{ data.bidangMinat[id].subtitle }}</div>
              <div class="has-text-justified">
                <p>
                  {{data.bidangMinat[id].desc}}
                </p>
              </div>
            </div>
          </div>
          <div class="matakuliah">
              <tb-matkul v-bind:matkul="data.bidangMinat[id].matkul" />
          </div>
        </div>
      </div>
    </section>
  </section>
</template>
<script>
import TabelMatkul from '../components/TabelMatkulMinat.vue';
import DataMinat from '../data/bidangMinat.json';
export default {
  components: {
    'tb-matkul': TabelMatkul,
  },
  data() {
    return {
      id: this.$parent.id, // buat ngambil id parent nya
      data: DataMinat,
    };
  },
  watch: {
    // ini kalo ganti path tapi komponennya sama, contohnya card di halaman beranda
    $route() {
      if (this.$route.path === '/bidang-minat/computer-network') {
        this.id = 0;
      } else if (this.$route.path === '/bidang-minat/computer-science') {
        this.id = 1;
      } else if (this.$route.path === '/bidang-minat/software-engineering') {
        this.id = 2;
      }
    },
  },
};
</script>
<style lang="scss" scoped>
@import '../assets/style/_global.scss';
h2 {
  background-color: black;
  color: aliceblue;
}
img {
  height: 70vh;
  width: 35vw;
}
</style>
