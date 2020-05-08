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
            <h1 class="title">Informatika</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor ducimus ipsam saepe voluptatum ab ullam voluptatibus quod, quam, magnam iste excepturi esse assumenda quae eveniet distinctio atque nostrum iusto? Tempora! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor ducimus ipsam saepe voluptatum ab ullam voluptatibus quod, quam, magnam iste excepturi esse assumenda quae eveniet distinctio atque nostrum iusto? Tempora!</p>
          </div>
        </div>
      </section>
      <section class="section pengumuman has-background-light">
        <h1>Pengumuman</h1>
        <div class="columns is-variable is-8">
          <div class="column is-one-quarter" v-for="p in pengumuman" :key="p.id">
            <card-pengumuman v-bind="p" />
          </div>
        </div>
      </section>

      <section class="konten">
        <div class="tile is-ancestor">
          <div class="tile is-vertical is-8 konten__berita" >
            <div class="tile">
              <div class="tile is-parent is-vertical" v-for="item in 2" :key="item">
                <article class="tile is-child box is-white" v-for="b in berita" :key="b.id">
                  <card-berita v-bind="b" />
                </article>
              </div>
            </div>
            
          </div>
          <div class="tile is-parent konten__agenda">
            <article class="tile is-child box">
              <div class="content">
                <p class="title">Agenda</p>
                <p class="subtitle">With even more content</p>
                <div class="content">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam semper diam at erat pulvinar, at pulvinar felis blandit. Vestibulum volutpat tellus diam, consequat gravida libero rhoncus ut. Morbi maximus, leo sit amet vehicula
                    eleifend, nunc dui porta orci, quis semper odio felis ut quam.
                  </p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
    </section>
  </div>
</template>

<script>
import CardPengumuman from "../components/CardPengumuman.vue";
import CardBerita from "../components/CardBerita.vue";
// import CardAgenda from "../components/CardAgenda.vue";
export default {
  components: {
    "card-pengumuman": CardPengumuman,
    "card-berita": CardBerita
    // "card-agenda": CardAgenda
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
      ],
      berita: [
        {
          id: 1,
          title: "FGD",
          waktu: "20 Juni 2020 - 13:00 AM",
          ket:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur, quaerat?"
        },
        {
          id: 2,
          title: "oke",
          waktu: "01 Maret 2020 - 12:00 AM",
          ket:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur, quaerat?"
        },
        // {
        //   id: 3,
        //   title: "iaa",
        //   waktu: "20 Juni 2020 - 13:00 AM",
        //   ket:
        //     "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur, quaerat?"
        // },
        // {
        //   id: 4,
        //   title: "mantap",
        //   waktu: "20 April 2020 - 13:00 AM",
        //   ket:
        //     "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur, quaerat?"
        // }
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
      h1{
        font-family: $font-heading;
      }
    }

    .pengumuman {
      // background-image: linear-gradient(to bottom right, #00c6ff, #0072ff);
      text-align: center;
      // color: seashell;
      height: auto;

      > h1 {
        padding: 3rem;
        font-size: 2.5rem;
        margin-top: -40px;
        font-family: $font-heading;
        font-weight: 700;
      }
    }

    .konten{
      padding: 1.5rem;
      // &__berita{
      //   width: 20rem;
      // }
    }
  }
}
</style>