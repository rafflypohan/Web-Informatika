<template>
  <div class="container is-marginless">
    <section>
      <b-carousel
        :indicator="indicator"
        :arrow="arrow"
        :pause-hover="pauseHover"
        :pause-info="pauseInfo"
        class="is-fullheight"
      >
        <b-carousel-item v-for="(carousel, i) in carousels" :key="i">
          <section :class="`hero is-fullheight-with-navbar is-${carousel.color} is-bold`">
            <div class="hero-body has-text-centered">
              <h1 class="title">{{carousel.text}}</h1>
            </div>
          </section>
        </b-carousel-item>
      </b-carousel>
    </section>
    <section class="container">
      <section class="section">
        <div class="columns">
          <div class="column is-one-quarter">
            <figure class="image">
              <img src="../assets/img/unnamed.png" alt="Logo Informatika" />
            </figure>
          </div>
          <div class="column has-text-justified if">
            <h1 class="title">INFORMATIKA</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor ducimus ipsam saepe voluptatum ab ullam voluptatibus quod, quam, magnam iste excepturi esse assumenda quae eveniet distinctio atque nostrum iusto? Tempora! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor ducimus ipsam saepe voluptatum ab ullam voluptatibus quod, quam, magnam iste excepturi esse assumenda quae eveniet distinctio atque nostrum iusto? Tempora!</p>
          </div>
        </div>
      </section>
      <section class="section pengumuman">
        <h1>Pengumuman</h1>
        <div class="columns is-variable is-8">
          <div class="column is-one-quarter" v-for="p in pengumuman" :key="p.id">
            <card-pengumuman v-bind="p" />
          </div>
        </div>
      </section>

      <section class="berita">
        <div class="level">
          <div class="level-left">
            <div class="level-item">
              <div class="columns is-variable is-8">
                <div class="column is-one-quarter" v-for="item in 4" :key="item">
                  <card-berita />
                </div>
              </div>
            </div>
          </div>
          <div class="level-right">
            <div class="level-item">
              <!-- <div class="columns is-variable is-8"> -->
              <!-- <div class="column is-one-quarter"> -->
              <card-agenda />
              <!-- </div> -->
              <!-- </div> -->
            </div>
          </div>
        </div>
      </section>
    </section>
  </div>
</template>

<script>
import CardPengumuman from "../components/CardPengumuman.vue";
import CardBerita from "../components/CardBerita.vue";
import CardAgenda from "../components/CardAgenda.vue";
export default {
  components: {
    "card-pengumuman": CardPengumuman,
    "card-berita": CardBerita,
    "card-agenda": CardAgenda
  },
  data() {
    return {
      indicator: false,
      arrow: false,
      pauseHover: false,
      pauseInfo: false,
      carousels: [
        { text: "Slide 1", color: "dark" },
        { text: "Slide 2", color: "info" },
        { text: "Slide 3", color: "success" },
        { text: "Slide 4", color: "warning" },
        { text: "Slide 5", color: "danger" }
      ],
      pengumuman: [
        {
          id: 1,
          title: "Pendaftaran Mahasiswa Baru"
        },
        {
          id: 2,
          title: "Pengumuman Mahasiswa Berprestasi"
        },
        {
          id: 3,
          title: "Beasiswa"
        },
        {
          id: 4,
          title: "Lomba"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/style/_global.scss";

.container {
  max-width: 1920px;

  .container {
    text-align: center;

    .if {
      padding: 1.5rem 4.5rem 0 1.5rem;
    }

    .pengumuman {
      background-image: linear-gradient(to bottom right, #00c6ff, #0072ff);
      text-align: center;
      color: seashell;
      height: auto;

      > h1 {
        padding: 3rem;
        font-size: 2.5rem;
        margin-top: -40px;
        font-family: "Raleway";
        font-weight: 700;
      }
    }
  }
}
</style>