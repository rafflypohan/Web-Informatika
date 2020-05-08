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
          id: 1,
          nama: "Budi, S.Si, M.Si.",
          nip:"-" ,
          email: "budi@tendik.itk.ac.id"
        },
        {
          id: 2,
          nama: "Ariyadi, S.ST, M.T",
          nip:"100115023" ,
          email: "ariyadi@lecturer.itk.ac.id"
        },
        {
          id: 3,
          nama: "Bima Prihasto, S.Si., M.Si.",
          nip:"100115004" ,
          email: "bima@lecturer.itk.ac.id"
        },
        {
          id: 4,
          nama: "Gusti Ahmad Fanshuri Alfarisy, S.Kom., M.Kom.",
          nip:"-" ,
          email: "gusti.alfarisy@lecturer.itk.ac.id"
        },
        {
          id: 5,
          nama: "Muchammad Chandra Cahyo Utomo, M.Kom.",
          nip:"199205202019031013" ,
          email: "ccahyo@lecturer.itk.ac.id"
        },
        {
          id: 6,
          nama: "Nisa Rizqiya Fadhliana, S.Kom., M.T.",
          nip:"-" ,
          email: "nisafadhliana@lecturer.itk.ac.id"
        },
        {
          id: 7,
          nama: "Nur Fajri Azhar, S.Kom., M.Kom.",
          nip:"199205182019031015" ,
          email: "fajri@lecturer.itk.ac.id"
        },
        {
          id: 8,
          nama: "Syamsul Mujahidin, S.Kom., M.Eng",
          nip:"199002182019031009" ,
          email: "syamsul@lecturer.itk.ac.id"
        },
        {
          id: 9,
          nama: "Tegar Palyus Fiqar, S.T., M.Kom.",
          nip:"199009072019031014" ,
          email: "tegar@lecturer.itk.ac.id"
        },
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
          label: 'No',
          numeric: true,
          centered: true
        },
        {
          field: 'nama',
          label: 'Nama',
        },
        {
          field: 'nip',
          label: 'NIP',
        },
        {
          field: 'email',
          label: 'Email',
        },
      ]
    };
  }
};
</script>

<style>

</style>
