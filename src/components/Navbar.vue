<template>
  <section>
    <!-- <b-navbar id="nav" :fixed-top="fixedTop" :transparent="transparent" class="navbar">
      <template slot="brand">
        <b-navbar-item tag="router-link" :to="{ path: '/' }">
          <img src="../assets/img/iflogo.png" alt="Logo Informatika ITK" />
        </b-navbar-item>
      </template>
      <template slot="end">
        <b-navbar-dropdown class="navbar__dropdown" hoverable label="Profil Prodi">
          <b-navbar-item tag="router-link" to="/profil-prodi/tentang-prodi">Tentang Prodi</b-navbar-item>
          <b-navbar-item tag="router-link" to="/profil-prodi/visi-misi">Visi Misi</b-navbar-item>
          <b-navbar-item
            tag="router-link"
            to="/profil-prodi/struktur-organisasi"
          >Struktur Organisasi</b-navbar-item>
          <b-navbar-item class="disabled">Akreditasi</b-navbar-item>
          <b-navbar-item class="disabled">Kerjasama</b-navbar-item>
        </b-navbar-dropdown>
        <b-navbar-dropdown class="navbar__dropdown" hoverable label="Civitas">
          <b-navbar-item tag="router-link" to="/civitas/dosen">Dosen</b-navbar-item>
          <b-navbar-item tag="router-link" to="/civitas/tenaga-kependidikan">Tenaga Kependidikan</b-navbar-item>
          <b-navbar-item class="disabled">Alumni</b-navbar-item>
          <b-navbar-item class="disabled">Himpunan</b-navbar-item>
        </b-navbar-dropdown>
        <b-navbar-dropdown class="navbar__dropdown disabled" hoverable label="Info">
          <b-navbar-item href="#">About</b-navbar-item>
          <b-navbar-item href="#">Contact</b-navbar-item>
        </b-navbar-dropdown>
      </template>
    </b-navbar>-->
    <nav id="nav" class="navbar is-fixed-top" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <router-link tag="a" class="navbar-item" to="/">
          <img src="../assets/img/iflogo.png" />
        </router-link>
        <a
          role="button"
          class="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="nav-menu"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="nav-menu" class="navbar-menu">
        <div class="navbar-end">
          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link">Profile Prodi</a>
            <div class="navbar-dropdown">
              <router-link
                tag="a"
                class="navbar-item"
                exact-active-class="exact-active"
                to="/profil-prodi/tentang-prodi"
              >Tentang Prodi</router-link>
              <router-link tag="a" class="navbar-item" to="/profil-prodi/visi-misi">Visi & Misi</router-link>
              <!-- <a class="navbar-item" >Tentang Prodi</a> -->
              <!-- <a class="navbar-item" >visi & misi</a> -->
              <a class="navbar-item">struktur organisasi</a>
              <a class="navbar-item">akreditasi</a>
              <a class="navbar-item">kerjasama</a>
            </div>
          </div>
          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link">Civitas</a>
            <div class="navbar-dropdown">
              <a class="navbar-item">dosen</a>
              <a class="navbar-item">Tenaga Kependidikan</a>
              <a class="navbar-item">alumni</a>
              <a class="navbar-item">himpunan</a>
            </div>
          </div>
          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link">Akademik</a>
            <div class="navbar-dropdown">
              <a class="navbar-item">beasiswa</a>
              <a class="navbar-item">prestasi</a>
              <a class="navbar-item">kurikulum</a>
              <a class="navbar-item">laboratorium</a>
              <a class="navbar-item">biaya kuliah</a>
              <a class="navbar-item">kalender akademik</a>
            </div>
          </div>
          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link">Pengabdian & Penelitian</a>
            <div class="navbar-dropdown">
              <a class="navbar-item">penelitian</a>
              <a class="navbar-item">pengabdian pada masyarakat</a>
            </div>
          </div>
          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link">info</a>
            <div class="navbar-dropdown">
              <a class="navbar-item">berita</a>
              <a class="navbar-item">agenda</a>
              <a class="navbar-item">artikel</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </section>
</template>

<script>

export default {
  data() {
    return {
      
    };
  },
  mounted() {
    document.addEventListener('DOMContentLoaded', () => {
        const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

        if ($navbarBurgers.length > 0){
          $navbarBurgers.forEach(el => {
            el.addEventListener('click', () => {
              const target = el.dataset.target;
              const $target = document.getElementById(target);

              el.classList.toggle('is-active');
              $target.classList.toggle('is-active');
            });
          })
        }
      });
    this.$nextTick(function() {
      window.addEventListener("scroll", function() {
        const navbar = document.getElementById("nav");
        const nav_classes = navbar.classList;
        if (document.documentElement.scrollTop >= 80) {
          if (nav_classes.contains("shrink") === false) {
            nav_classes.toggle("shrink");
          }
        } else {
          if (nav_classes.contains("shrink") === true) {
            nav_classes.toggle("shrink");
          }
        }
      });
    });
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/style/_global.scss";
@import "../assets/style/_navbar.scss";
</style>