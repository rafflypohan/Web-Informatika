<template>
  <div class="container is-marginless">
    <section class="section dosen">
      <h1 class="title">Dosen dan Tenaga Pendidik</h1>
      <div v-for="row in rows" :key="row.no">
        <table-dosen/>
      </div>
    </section>
  </div>
</template>

<script>
import TabelDosen from '../../components/TabelDosen.vue';
export default {
  components: {
    "table-dosen": TabelDosen
  },
  data() {
    return {
      rows: [
        {
          no: 1,
          nama: "Aditya Putra Pratama, S.Si, M.Si.",
          nip:"-" ,
          email: "adityapp@lecturer.itk.ac.id"
        },
        {
          no: 2,
          nama: "Ariyadi, S.ST, M.T",
          nip:"100115023" ,
          email: "ariyadi@lecturer.itk.ac.id"
        },
        {
          no: 3,
          nama: "Bima Prihasto, S.Si., M.Si.",
          nip:"100115004" ,
          email: "bima@lecturer.itk.ac.id"
        },
        {
          no: 4,
          nama: "Gusti Ahmad Fanshuri Alfarisy, S.Kom., M.Kom.",
          nip:"-" ,
          email: "gusti.alfarisy@lecturer.itk.ac.id"
        },
        {
          no: 5,
          nama: "Muchammad Chandra Cahyo Utomo, M.Kom.",
          nip:"199205202019031013" ,
          email: "ccahyo@lecturer.itk.ac.id"
        },
        {
          no: 6,
          nama: "Nisa Rizqiya Fadhliana, S.Kom., M.T.",
          nip:"-" ,
          email: "nisafadhliana@lecturer.itk.ac.id"
        },
        {
          no: 7,
          nama: "Nur Fajri Azhar, S.Kom., M.Kom.",
          nip:"199205182019031015" ,
          email: "fajri@lecturer.itk.ac.id"
        },
        {
          no: 8,
          nama: "Syamsul Mujahidin, S.Kom., M.Eng",
          nip:"199002182019031009" ,
          email: "syamsul@lecturer.itk.ac.id"
        },
        {
          no: 9,
          nama: "Tegar Palyus Fiqar, S.T., M.Kom.",
          nip:"199009072019031014" ,
          email: "tegar@lecturer.itk.ac.id"
        },
      ]
    };
  }
};
</script>

<style lang="scss" scoped>

@import "../../assets/style/_global.scss";

.container {
  max-width: 1920px;

  .section {
    text-align: center;
    margin-top: 5vh;
  }
}
</style>>
