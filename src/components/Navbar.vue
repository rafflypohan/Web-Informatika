<template>
  <section>
    <b-navbar :fixed-top="fixedTop" class="navbar">
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
    </b-navbar>
  </section>
</template>

<script>
export default {
  data() {
    return {
      hoverable: true,
      fixedTop: true
    };
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/style/_global.scss";

.navbar {
  box-shadow: 0px 1px 4px 0px rgba(170, 168, 168, 0.8);
  padding: 0 5vw;
  &__dropdown {
    font-weight: 700;
    font-size: 0.9rem;
    letter-spacing: 0.04rem;
    text-transform: uppercase;

    .navbar-item {
      font-weight: 500;
      font-size: 0.88rem;
      text-transform: capitalize;
    }
  }
  .disabled {
    cursor: not-allowed;
    pointer-events: none;
    opacity: 0.4;
    
   
  }
}
</style>