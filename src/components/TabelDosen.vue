<template>
    <b-table>
        <template slot-scope="props">
            <b-table-column field="id" label="ID" width="40" numeric>
                {{ props.row.id }}
            </b-table-column>

            <b-table-column field="nama" label="Nama">
                {{ props.row.nama }}
            </b-table-column>

            <b-table-column field="nip" label="NIP" numeric>
                {{ props.row.nip }}
            </b-table-column>

            <b-table-column field="email" label="Email">
                {{ props.row.email }}
            </b-table-column>
            
        </template>
    </b-table>
</template>

<script>
export default {
    components: {
    "table-dosen": TabelDosen
  },
  data() {
    return {
      rows: [
        {
          no: 1,
          nama: "Aditya Putra Pratama, S.Si, M.Si.",
          nip:"-" ,
          email: "adityapp@lecturer.itk.ac.id"
        },
        {
          no: 2,
          nama: "Ariyadi, S.ST, M.T",
          nip:"100115023" ,
          email: "ariyadi@lecturer.itk.ac.id"
        },
        {
          no: 3,
          nama: "Bima Prihasto, S.Si., M.Si.",
          nip:"100115004" ,
          email: "bima@lecturer.itk.ac.id"
        },
        {
          no: 4,
          nama: "Gusti Ahmad Fanshuri Alfarisy, S.Kom., M.Kom.",
          nip:"-" ,
          email: "gusti.alfarisy@lecturer.itk.ac.id"
        },
        {
          no: 5,
          nama: "Muchammad Chandra Cahyo Utomo, M.Kom.",
          nip:"199205202019031013" ,
          email: "ccahyo@lecturer.itk.ac.id"
        },
        {
          no: 6,
          nama: "Nisa Rizqiya Fadhliana, S.Kom., M.T.",
          nip:"-" ,
          email: "nisafadhliana@lecturer.itk.ac.id"
        },
        {
          no: 7,
          nama: "Nur Fajri Azhar, S.Kom., M.Kom.",
          nip:"199205182019031015" ,
          email: "fajri@lecturer.itk.ac.id"
        },
        {
          no: 8,
          nama: "Syamsul Mujahidin, S.Kom., M.Eng",
          nip:"199002182019031009" ,
          email: "syamsul@lecturer.itk.ac.id"
        },
        {
          no: 9,
          nama: "Tegar Palyus Fiqar, S.T., M.Kom.",
          nip:"199009072019031014" ,
          email: "tegar@lecturer.itk.ac.id"
        },
      ]
    };
  }
};
</script>

<style>

</style>
