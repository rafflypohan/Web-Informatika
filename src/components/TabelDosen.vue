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

}
</script>

<style>

</style>
