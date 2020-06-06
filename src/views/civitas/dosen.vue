<template>
  <section>
    <Header v-bind:title="title" />
    <div class="container is-marginless">
      <section class="section dosen">
        <h1 class="title">Dosen</h1>
        <div>
          <table-dosen />
        </div>
      </section>
    </div>
  </section>
</template>

<script>
import TabelDosen from "../../components/TabelDosen.vue";
import Header from "../../components/Header.vue";
export default {
  components: {
    "table-dosen": TabelDosen,
    Header
  },
  data() {
    return {
      title: "Dosen"
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
