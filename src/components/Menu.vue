<template>
  <b-menu class="has-text-left">
    <b-menu-list label="Menu">
      <b-menu-item label="Info"></b-menu-item>
      <b-menu-item :active="isActive" expanded>
        <template slot="label" slot-scope="props">
          Administrator
          <b-icon class="is-pulled-right" :icon="props.expanded ? 'menu-down' : 'menu-up'"></b-icon>
        </template>
        <b-menu-item label="Users"></b-menu-item>
        <b-menu-item  label="Payments" disabled></b-menu-item>
      </b-menu-item>
      <b-menu-item label="My Account">
        <b-menu-item label="Account data"></b-menu-item>
        <b-menu-item label="Addresses"></b-menu-item>
      </b-menu-item>
    </b-menu-list>
    <b-menu-list>
      <b-menu-item label="Expo" tag="router-link" target="_blank" to="/expo"></b-menu-item>
    </b-menu-list>
    <b-menu-list label="Actions">
      <b-menu-item label="Logout"></b-menu-item>
    </b-menu-list>
  </b-menu>
</template>

<script>
export default {
  data() {
    return {
      isActive: false
    }
  }
}
</script>