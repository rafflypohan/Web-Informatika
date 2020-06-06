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
                  Lulusan Prodi Informatika ITK diharapkan memiliki kompetensi dalam bidang dasar informatika, memiliki keahlian dalam pemrograman komputer serta mampu mendayagunakan, mengevaluasi dan mengidentifikasi pengembangan sistem berbasis komputer.
                </p><br>
                <b-button class="button">Selengkapnya</b-button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="informasi">
        <h1 class="has-text-left is-paddingless">Informasi</h1>
        <div class="columns is-multiline is-1-mobile is-variable is-2">
          <div class="column is-one-third" v-for="i in informasi.informasi" :key="i.id">
            <router-link v-bind:to="i.link">
              <card-informasi v-bind:informasi="i" />
            </router-link>
          </div>
        </div>
      </section>
      <section class="minat">
        <h1 class="title has-text-left is-paddingless">Bidang Minat</h1>
        <div class="columns is-multiline is-1-mobil is-variable is-8">
          <div class="column is-3" v-for="m in minat.bidangMinat" :key="m.id">
            <router-link v-bind:to="m.link">
              <card-minat v-bind:minat="m"/>
            </router-link>
          </div>
        </div>
      </section>

      <div class="columns berita-agenda">
        <div class="berita column is-two-thirds is-paddingless">
          <h1 class="title has-text-left">Berita</h1>
          <div class="columns is-multiline is-1-mobile ">
            <div class="column is-half" v-for="b in berita.berita" :key="b.id">
              <card-berita v-bind:berita="b" />
            </div>
          </div>
        </div>

        <div class="rightbar column is-multiline is-paddingless ">
          <h1 class="pengumuman title has-text-left">Pengumuman</h1>
          <div class="columns is-mobile is-multiline">
            <div class="column is-full has-text-left" v-for="p in 1" :key="p">
              <p class="notification">ITK akan mengadakan roadshow</p>
              <!-- <p class="date"> <b-icon icon="calendar" size="is-small"></b-icon> 20 September 2020</p> -->
              <!-- <router-link>
                <card-pengumuman/>
              </router-link> -->
            </div>
          </div>
          <h1 class="agenda title has-text-left">Agenda</h1>
          <div class="columns is-mobile is-multiline">
            <div class="column is-full has-text-left" v-for="a in 1" :key="a">
              <p class="notification">Makrab IF</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import CardInformasi from '../components/CardInformasi.vue'
import CardBerita from '../components/CardBerita.vue'
// import CardPengumuman from '../components/CardPengumuman.vue'
import CardMinat from '../components/CardMinat.vue'
import DataBerita from '../data/berita.json'
import DataInformasi from "../data/informasi.json"
import DataMinat from "../data/bidangMinat.json"
export default {
  name: 'Beranda',
  components: {
    'card-informasi': CardInformasi,
    'card-berita': CardBerita,
    // 'card-pengumuman': CardPengumuman
    'card-minat': CardMinat
  },
  data() {
    return {
      'berita': DataBerita,
      'informasi': DataInformasi,
      'minat': DataMinat
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
      .button{
        transition: .2s ease;
        background-color: #173faa;
        box-shadow: 0 4px 16px 0 rgba(23, 63, 171, .15);
        color: #eee;
        border: none;
        &:hover{
          box-shadow: 0 10px 20px 0 rgba(23, 63, 171, .35);
          transition: .2s ease;
        }
        &:active{
          box-shadow: 0 4px 16px 0 rgba(23, 63, 171, .15);
          background-color: #12328b;
        }
      }
    }

    .informasi {
      background-image: linear-gradient(to bottom right, #17459c, #0072da);
      text-align: center;
      color: seashell;
      height: auto;
      padding: 4.5rem $padding*2;

      > h1 {
        padding: 1rem 0 !important;
        font-size: 2rem;
        margin-top: -40px;
        font-family: $font-heading;
        font-weight: 700;
      }
    }

    .minat{
      padding: 6rem $padding*2;
      >h1{
        padding: 1rem 0 0 !important;
        font-size: 2rem;
        margin-top: -40px;
        font-family: $font-heading;
        font-weight: 700;
      }
    }

    .berita-agenda {
      margin-top: 0;
      padding: 0 1rem;
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

      .rightbar{
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

        .agenda{
          padding-top: 0;
        }
      }

      
    }
  }
}
</style>
