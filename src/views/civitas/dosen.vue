<template>
  <div class="container is-marginless">
    <section class="section dosen">
      <h1 class="title">Dosen</h1>
      <div v-for="row in rows" :key="row.no">
        <table-dosen/>
      </div>
    </section>
  </div>
</template>

<script>
import TabelDosen from '../../components/TabelDosen.vue';
export default {
  
}
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
