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
          id: "IF301",
          nama: "Jaringan Nirkabel"
        },
        {
          id: "IF302",
          nama: "Komputasi Awan"
        },
        {
          id: "IF303",
          nama: "Teknologi Antar Jaringan"
        },
        {
          id: "IF304",
          nama: "Jaringan Multimedia"
        },
        {
          id: "IF305",
          nama: "Komputasi Grid dan Parallel"
        },
        {
          id: "IF306",
          nama: "Komputasi Pervasif dan Jaringan Sensor"
        },
        {
          id: "IF307",
          nama: "Perancangan Keamanan Sistem dan Jaringan"
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
