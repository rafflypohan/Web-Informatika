<template>
  <section>
    <b-button id="btn" @click="toTop"><b-icon icon="arrow-up"></b-icon></b-button>
  </section>
</template>
<style lang="scss" scoped>

#btn {
  display: none;
  position: fixed;
  bottom: 20px;
  right: 30px;
  z-index: 99;
  font-size: 1.4rem;
  background: #0072da;
  color: #fff;
  box-shadow: 0 8px 16px 0 rgba(0, 114, 218,.2);

  &:active{
    background: #0067c7;
  }
}
</style>
<script>
export default {
  methods:{
      toTop(){
          window.scrollTo(0,0);
      }
  },
  mounted() {
    this.$nextTick(function() {
      window.addEventListener('scroll', function() {
        const button = document.getElementById('btn');
        let top = 1600
        if (document.body.scrollTop > top || document.documentElement.scrollTop > top) {
          button.style.display = 'block';
        } else {
          button.style.display = 'none';
        }
      });
    });
  },
};
</script>
