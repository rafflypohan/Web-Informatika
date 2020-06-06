<template>
  <section>
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
                to="/profil-prodi/tentang-prodi"
              >Tentang Prodi</router-link>
              <router-link tag="a" class="navbar-item" to="/profil-prodi/visi-misi">Visi & Misi</router-link>
              <!-- <a class="navbar-item" >Tentang Prodi</a> -->
              <!-- <a class="navbar-item" >visi & misi</a> -->
              <router-link tag="a" class="navbar-item" to="/profil-prodi/struktur-organisasi">Struktur Organisasi</router-link>
              <a class="navbar-item">akreditasi</a>
              <a class="navbar-item">kerjasama</a>
            </div>
          </div>
          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link">Civitas</a>
            <div class="navbar-dropdown">
              <router-link tag="a" class="navbar-item" to="/civitas/dosen">Dosen</router-link>
              <router-link tag="a" class="navbar-item" to="/civitas/tenaga-kependidikan">Tenaga Kependidikan</router-link>
              <a class="navbar-item">alumni</a>
              <router-link tag="a" class="navbar-item" to="/civitas/himpunan">Himpunan</router-link>
              <!-- <a class="navbar-item">himpunan</a> -->
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
    return {};
  },
  mounted() {
    // ini buat kalo navbar burgernya di klik maka akan memunculkan menu navbarnya
    document.addEventListener("DOMContentLoaded", () => {
      const $navbarBurgers = Array.prototype.slice.call(
        document.querySelectorAll(".navbar-burger"),
        0
      );

      if ($navbarBurgers.length > 0) {
        $navbarBurgers.forEach(el => {
          el.addEventListener("click", () => {
            const target = el.dataset.target;
            const $target = document.getElementById(target);

            el.classList.toggle("is-active");
            $target.classList.toggle("is-active");
          });
        });
      }
    });

    // ini buat kalo navbarnya di scroll nanti stylenya berubah
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