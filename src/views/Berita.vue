<template>
  <section class="section">
    <section class="hero is-bold">
      <div class="hero-body">
        <div class="container">
          <div class="judul-waktu">
            <p class="title is-1">{{data.berita[id].title}}</p>
            <p class="title is-1">EVALUASI KURIKULLUM PROGRAM STUDI INFORMATIKA - 2</p>
            <p class="subtitle is-6">FGD - 09 Desember 2019 - 12:00 AM</p>
          </div>
          <div class="image">
            <img src="../assets/img/FGD2.jpg" alt />
          </div>
          <div class="has-text-justified">
            <p>Sesuai dengan Peraturan Menteri Riset, Teknologi, dan Pendidikan Tinggi Republik Indonesia Nomor 44 tahun 2015, perguruan tinggi diwajibkan untuk menyusun, menyelenggarakan, dan mengevaluasi kurikulum. Kurikulum adalah seperangkat rencana dan pengaturan mengenai capaian pembelajaran lulusan, bahan kajian, proses, dan penilaian yang digunakan sebagai pedoman penyelenggaraan program studi yang disesuaikan dengan profil lulusan. Kegiatan pemantauan dan evaluasi kurikulum perlu dilakukan secara periodik dalam rangka menjaga dan meningkatkan mutu proses pembelajaran. Oleh karena itu, Program Studi Informatika ITK bermaksud menyelenggarakan Focus Group Discussion (FGD) Kurikulum sebagai sarana untuk sosialisasi dan penetapan kurikulum Informatika ITK 2020-2025 yang sebelumnya telah disusun oleh Tim Kurkulum Informatika ITK.</p>
            <p class="pembicara">Pembicara dan Materi:</p>
            <p>1. Prof. Ir. Zainal Arifin Hasibuan, MSc., PhD. (Ketua APTIKOM 2018-2022)</p>
            <p>2. Dr.techn. Saiful Akbar, ST., MT. (Kaprodi Program Sarjana Teknik Informatika ITB)</p>
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
      'id': this.$parent.id,
      'data': DataBerita
    };
  },
  watch: {
    '$route' () {
      if (this.$route.path === "/berita/evaluasi-kurikulum-if") {
        this.id = 0;
      }else if (this.$route.path === 'berita/born-invest'){
          this.id = 1;
      }else if (this.$route.path === 'berita/kurikulum-if'){
          this.id = 2;
      }else if (this.$route.path === 'berita/kultam-vr-ar'){
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
</style>