<template>
  <section>
    <Header />
    <div class="columns">
      <div class="column is-3">
        <Menu />
      </div>
      <div class="column">
        <section class="hero is-bold">
          <div class="hero-body">
            <div class="container">
              <div class="title">Beasiswa</div>
              <div class="has-text-justified">
                <p>Berbagai macam program beasiswa yang dapat dimanfaatkan oleh mahasiswa(i) selama perkuliahan:</p>
              </div>
              <div class="card" aria-id="contentIdForA11y3">
                <div class="card-content">
                  <div class="media">
                    <div class="media-left">
                      <figure class="image is-64x64">
                        <img src="../../assets/img/Bidikmisi.png" alt="Placeholder image" />
                      </figure>
                    </div>
                    <div class="media-content">
                      <p class="title">Bidikmisi</p>
                      <p class="subtitle">
                        <b-icon icon="calendar" size="is-small"></b-icon>21 Juni - 30 Agustus 2020
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </section>
</template>
<script>
import Header from "../../components/Header";
import Menu from "../../components/Menu";

export default {
  components: {
    Header,
    Menu
  }
};
</script>
<style lang="scss" scoped>
@import "../../assets/style/_global.scss";
.card {
  border: 1px solid #333;
  box-shadow: none;
  border-radius: 5px;

  &:hover {
    background-color: #eee;
    cursor: pointer;
  }
}
.field {
  width: 15vw;
}
</style>