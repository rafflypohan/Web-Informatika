<template>
  <section>
    <div class="card" aria-id="contentIdForA11y3">
      <div class="card-content">
        <div class="media">
          <div class="media-left">
            <figure class="image is-64x64">
              <img src="https://bulma.io/images/placeholders/480x600.png" alt="Placeholder image" />
            </figure>
          </div>
          <div class="media-content">
            <p class="title" >{{ pengumuman.title }}</p>
            <p class="subtitle">{{pengumuman.info}}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  props:['pengumuman'],
  methods:{
    chgRoute(){
      this.$router.push(this.link)
    }
  }
}
</script>
<style lang="scss" scoped>
@import "../assets/style/_global.scss";
.card {
  height: 7rem;
  transition: .2s all ease;
  box-shadow: none;
  border-radius: 2px;
  .media{
    &-content{
      p.title{
        font-size: 1.2rem;
      }

      p.subtitle{
        font-size: .95rem;
      }
    }
  }
  &:hover {
    transition: .2s all ease;
    cursor: pointer;
    background-color: #ffffffeb;
    
    p.title{
      color: $primary;
    }
  }
}
</style>