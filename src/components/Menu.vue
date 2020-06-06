<template>
  <b-menu class="menu has-text-left">
    <b-menu-list label="Menu">
      <b-menu-item label="Info"></b-menu-item>
      <b-menu-item label="My Account">
      </b-menu-item>
    </b-menu-list>
    <b-menu-list>
      <b-menu-item label="Expo" tag="router-link" target="_blank" to="/expo"></b-menu-item>
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
<style lang="scss" scoped>
.menu{
  margin-left: 3.5rem;
  padding-left: 1rem;
  border-left: 3px solid #eee;
}
</style>