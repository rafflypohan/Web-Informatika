<template>
    <b-table 
      :data="data"
      :columns="columns"
      :bordered="bordered"
      :paginated="isPaginated"
      :pagination-position="paginationPos"
      :current-page.sync="currentPage"
      :pagination-simple="isPaginationSimple"
      :per-page="perPage"
      :hoverable="hoverable"
      :striped="striped">
    </b-table>
</template>

<script>
export default {
  data() {
    const data = [
      {
          id: "IF315",
          nama: "Arsitektur Perangkat Lunak"
        },
        {
          id: "IF316",
          nama: "Penjaminan Mutu Perangkat Lunak"
        },
        {
          id: "IF317",
          nama: "Sistem Enterprise"
        },
        {
          id: "IF318",
          nama: "Realitas Virtual dan Augmentasi"
        },
        {
          id: "IF319",
          nama: "Basis Data Terdisitribusi"
        },
        {
          id: "IF320",
          nama: "Pemrograman Perangkat Bergerak"
        },
        {
          id: "IF321",
          nama: "Pengembangan Permainan"
        }
    ]
    return {
      data,
      bordered: true,
      isPaginated: true,
      isPaginationSimple: false,
      paginationPos: 'bottom',
      currentPage: 1,
      perPage: 10,
      hoverable: true,
      striped: true,
      columns: [
        {
          field: 'id',
          label: 'Kode',
          centered: true
        },
        {
          field: 'nama',
          label: 'Mata Kuliah Pilihan'
        }
      ]
    };
  }
};
</script>

<style>

</style>
