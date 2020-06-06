<template>
  <section>
    <Header v-bind:title="title" />
    
    <section class="section sejarah">
      <div class="columns">
        <div class="column is-3">
          <Menu/>
        </div>
        <div class="column">
          <h1 class="title has-text-left">Sejarah</h1>
          <p
            class="subtitle has-text-justified"
          >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor ducimus ipsam saepe voluptatum ab ullam voluptatibus quod, quam, magnam iste excepturi esse assumenda quae eveniet distinctio atque nostrum iusto? Tempora! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor ducimus ipsam saepe voluptatum ab ullam voluptatibus quod, quam, magnam iste excepturi esse assumenda quae eveniet distinctio atque nostrum iusto? Tempora! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor ducimus ipsam saepe voluptatum ab ullam voluptatibus quod, quam, magnam iste excepturi esse assumenda quae eveniet distinctio atque nostrum iusto? Tempora!Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor ducimus ipsam saepe voluptatum ab ullam voluptatibus quod, quam, magnam iste excepturi esse assumenda quae eveniet distinctio atque nostrum iusto? Tempora!Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor ducimus ipsam saepe voluptatum ab ullam voluptatibus quod, quam, magnam iste excepturi esse assumenda quae eveniet distinctio atque nostrum iusto? Tempora!</p>
        </div>
      </div>
    </section>
  </section>
</template>

<style lang="scss" scoped>
@import "../../assets/style/_global.scss";

.if, .sejarah{
  margin-right: 1rem;
}
.title {
  font-weight: bold;
  font-size: 2rem;
}
.subtitle{
  // margin-top: 8px;
  font-size: 1rem;
}
</style>

<script>
import Header from "../../components/Header";
import Menu from "../../components/Menu";
export default {
  components: {
    Header,
    Menu
  },
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
      title: "Tentang Prodi",
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