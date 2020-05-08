<template>
  <section>
    <!-- <section class="hero is-light is-medium is-bold">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">Tentang Prodi</h1>
        </div>
      </div>
    </section>-->
    <section class="section if">
      <div class="columns">
        <div class="column is-one-quarter">
          <figure class="image">
            <img src="../../assets/img/unnamed.png" alt="Logo Informatika" />
          </figure>
        </div>
        <div class="column has-text-justified if">
          <h1 class="title">Informatika</h1>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor ducimus ipsam saepe voluptatum ab ullam voluptatibus quod, quam, magnam iste excepturi esse assumenda quae eveniet distinctio atque nostrum iusto? Tempora! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor ducimus ipsam saepe voluptatum ab ullam voluptatibus quod, quam, magnam iste excepturi esse assumenda quae eveniet distinctio atque nostrum iusto? Tempora!</p>

          <table class="table is-fullwidth is-center">
          <tbody>
            <tr>
              <th>Universitas</th>
              <td>ITK</td>
            </tr>
            <tr>
              <th>Alamat</th>
              <td>Jl. Soekarno-Hatta Km. 15, Karang Joang, Balikpapan, Kalimantan Timur, 76127</td>
            </tr>
            <tr>
              <th>Jurusan</th>
              <td>JMTI</td>
            </tr>
            <tr>
              <th>Akreditasi</th>
              <td>B</td>
            </tr>
            <tr>
                <th>Ketua Prodi</th>
                <td>Ariyadi, S.ST., M.T.</td>
            </tr>
          </tbody>
        </table>
        </div>
      </div>
    </section>
    <section class="section sejarah">
      <h1 class="title">Sejarah</h1>
      <p
        class="has-text-justified"
      >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor ducimus ipsam saepe voluptatum ab ullam voluptatibus quod, quam, magnam iste excepturi esse assumenda quae eveniet distinctio atque nostrum iusto? Tempora! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor ducimus ipsam saepe voluptatum ab ullam voluptatibus quod, quam, magnam iste excepturi esse assumenda quae eveniet distinctio atque nostrum iusto? Tempora! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor ducimus ipsam saepe voluptatum ab ullam voluptatibus quod, quam, magnam iste excepturi esse assumenda quae eveniet distinctio atque nostrum iusto? Tempora!Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor ducimus ipsam saepe voluptatum ab ullam voluptatibus quod, quam, magnam iste excepturi esse assumenda quae eveniet distinctio atque nostrum iusto? Tempora!Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor ducimus ipsam saepe voluptatum ab ullam voluptatibus quod, quam, magnam iste excepturi esse assumenda quae eveniet distinctio atque nostrum iusto? Tempora!</p>
    </section>
    <section></section>
  </section>
</template>
<style lang="scss" scoped>
@import "../../assets/style/_global.scss";
h1 {
  font-family: $font-heading;
}
</style>
<script>
export default {
  data() {
    const data = [
      {
        univ: "Insitut Teknologi Kalimantan",
        alamat:
          "Jl. Soekarno-Hatta Km. 15, Karang Joang, Balikpapan, Kalimantan Timur, 76127",
        jurusan: "Jurusan Matematika dan Teknologi Informasi",
        akre: "Baik",
        kepro: "Ariyadi, S.ST., M.T."
      }
    ];
    return {
      data,
      columns: [
        {
          field: "univ"
        },
        {
          field: "alamat"
        },
        {
          field: "jurusan"
        },
        {
          field: "akre"
        },
        { field: "kepro" }
      ]
    };
  }
};
</script>