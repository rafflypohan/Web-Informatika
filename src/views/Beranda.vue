<template>
  <div class="container is-marginless">
    <section class="hero bg-img">
      <div class="hero-body is-paddingless">
        <div class="hero-body-title has-text-left">
          <h1 class="title">Selamat Datang</h1>
          <h2 class="subtitle">
            Di Website Program Studi Informatika
            <br />Institut Teknologi Kalimantan
          </h2>
        </div>
        <figure class="image">
          <img src="../assets/img/isometric.png" alt />
        </figure>
      </div>
    </section>
    <section class="container">
      <section class="section">
        <div class="hero is-bold is-medium">
          <div class="hero-body">
            <div class="columns">
              <div class="column is-one-quarter">
                <figure class="image">
                  <img src="../assets/img/unnamed.png" alt="Logo Informatika" />
                </figure>
              </div>
              <div class="column has-text-justified if">
                <h1 class="title">Informatika</h1>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor ducimus ipsam saepe voluptatum ab ullam voluptatibus quod, quam, magnam iste excepturi esse assumenda quae eveniet distinctio atque nostrum iusto? Tempora! Lorem ipsum
                  dolor sit, amet consectetur adipisicing elit. Dolor ducimus ipsam saepe voluptatum ab ullam voluptatibus quod, quam, magnam iste excepturi esse assumenda quae eveniet distinctio atque nostrum iusto? Tempora!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="pengumuman">
        <h1>Informasi</h1>
        <div class="columns is-multiline is-1-mobile is-variable is-2">
          <div class="column is-one-third" v-for="p in pengumuman.pengumuman" :key="p.id">
            <card-pengumuman v-bind:pengumuman="p" />
          </div>
        </div>
      </section>
      <div class="columns berita-agenda">
        <div class="berita column  is-two-thirds is-paddingless">
          <h1 class="title has-text-left">Berita</h1>
          <div class="columns is-multiline is-1-mobile ">
            <div class="column is-half" v-for="b in berita.berita" :key="b.id">
              <card-berita v-bind:berita="b" />
            </div>
          </div>
        </div>
        <div class="agenda column is-paddingless ">
          <h1 class="title has-text-left">Agenda</h1>
          <div class="columns is-mobile is-multiline">
            <div class="column is-full has-text-left" v-for="a in 4" :key="a">
              <p class="notification">AOEE</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import CardPengumuman from '../components/CardPengumuman.vue'
import CardBerita from '../components/CardBerita.vue'
// import CardMinat from '../components/CardMinat.vue'
import DataBerita from '../data/berita.json'
import DataPengumuman from "../data/pengumuman.json"
export default {
  name: 'Beranda',
  components: {
    'card-pengumuman': CardPengumuman,
    'card-berita': CardBerita,
    // 'card-minat': CardMinat
  },
  data() {
    return {
      berita: DataBerita,
      pengumuman: DataPengumuman
    };
  },

};
</script>

<style lang="scss" scoped>
@import '../assets/style/_global.scss';
.container {
  max-width: 1920px;
  top: -3.4rem;

  .bg-img {
    .hero-body {
      &-title {
        $top: 19.5rem;
        $left: 1.8rem;
        $index: 10;
        $pos: absolute;
        .title {
          position: $pos;
          font-size: 2.5rem;
          top: $top;
          left: $left;
          color: #eee;
          font-weight: bolder;
          z-index: $index;
          font-family: $font-heading;
        }
        .subtitle {
          position: $pos;
          font-size: 2rem;
          left: $left;
          color: #173faa;
          top: $top + 6rem;
          z-index: $index;
          font-family: $family-primary;
          font-weight: 500;
        }
      }
    }
  }

  .container {
    $padding: 1.5rem;
    text-align: center;

    .if {
      padding: $padding 2rem 0 $padding;
      h1 {
        font-family: $font-heading;
        font-size: $padding * 2;
        font-weight: 700;
        text-transform: uppercase;
      }
      p {
        font-size: $padding - 0.3;
      }
    }

    .pengumuman {
      background-image: linear-gradient(to bottom right, #17459c, #0072da);
      text-align: center;
      color: seashell;
      height: auto;
      padding: 3rem;

      > h1 {
        padding: 3rem;
        font-size: 2.5rem;
        margin-top: -40px;
        font-family: $font-heading;
        font-weight: 700;
      }
    }

    .berita-agenda {
      margin-top: 0;
      .berita {
        // width: 100%;
        border-right: 2px solid #eee;
        h1 {
          padding: $padding $padding * 2 0;
        }
        .columns {
          padding: 0 $padding * 2 $padding;
        }
      }

      .agenda {
        h1 {
          padding: $padding $padding * 1.5 0;
        }
        .columns {
          padding: 0 $padding * 1.5 $padding;

          .notification {
            background-color: #ECF3FB;
            border-radius: 2px;
          }
        }
      }
    }
  }
}
</style>
