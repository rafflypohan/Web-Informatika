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
          id: "IF308",
          nama: "Visi Komputer"
        },
        {
          id: "IF309",
          nama: "Penambangan Data"
        },
        {
          id: "IF310",
          nama: "Komputasi Biomedik"
        },
        {
          id: "IF311",
          nama: "Permodelan dan Simulasi"
        },
        {
          id: "IF312",
          nama: "Sistem Temu Kembali Informasi"
        },
        {
          id: "IF313",
          nama: "Big data"
        },
        {
          id: "IF314",
          nama: "Analisis Data Multivariat"
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
