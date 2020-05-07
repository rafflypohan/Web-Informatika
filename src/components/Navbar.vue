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
            <b-navbar-item>Sejarah</b-navbar-item>
            <b-navbar-item>Visi Misi</b-navbar-item>
            <b-navbar-item>Struktur Organisasi</b-navbar-item>
            <b-navbar-item>Akreditasi</b-navbar-item>
            <b-navbar-item>Kerjasama</b-navbar-item>
          </b-navbar-dropdown>
          <b-navbar-dropdown class="navbar__dropdown" hoverable label="Civitas">
            <b-navbar-item>Dosen</b-navbar-item>
            <b-navbar-item>Tenaga Kependidikan</b-navbar-item>
            <b-navbar-item>Alumni</b-navbar-item>
            <b-navbar-item>Himpunan</b-navbar-item>
          </b-navbar-dropdown>
          <b-navbar-dropdown class="navbar__dropdown" hoverable label="Info">
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
}
</style>