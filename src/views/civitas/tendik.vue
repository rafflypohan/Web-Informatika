<template>
  <div class="container is-marginless">
    <section class="section tendik">
      <h1 class="title">Tenaga Kependidikan</h1>
      <div>
        <table-tendik />
      </div>
    </section>
  </div>
</template>

<script>
import TabelTendik from "../../components/TabelTendik.vue";
export default {
  components: {
    "table-tendik": TabelTendik
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
