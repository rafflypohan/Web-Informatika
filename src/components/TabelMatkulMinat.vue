<template>
  <table class="table is-hoverable is-striped is-bordered is-fullwidth">
      <thead>
        <tr>
          <th class="has-text-centered">Kode Mata Kuliah</th>
          <th class="has-text-left">Nama Mata Kuliah</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="row in matkul" v-bind:key="row.id">
          <td class="has-text-left" v-for="col in row" v-bind:key="col.id">{{col}}</td>
        </tr>
      </tbody>
    </table>
</template>

<script>
export default {
  props: ["matkul"],
  data() {
    return {
      type: 'mk'
    };
  }
};
</script>

<style>
</style>
