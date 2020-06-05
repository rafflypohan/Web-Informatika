<template>
  <section>
    <div class="card">
      <div class="card-image">
        <figure class="image is-4by3">
          <img src="../assets/img/beasiswa.jpeg" alt="eee" />
        </figure>
      </div>
      <div class="card-content">
        <div class="media">
          <div class="media-content">
            <p class="date is-6 has-text-justified"><b-icon icon="calendar" size="is-small"></b-icon> {{berita.datetime}} </p>
            <p class="title is-capitalize">eee</p>
            
            <p class="subtitle has-text-justified">eeee</p>
            <p class="has-text-right">
              <router-link tag="a">Lihat Selengkapnya <b-icon icon="arrow-right" size="is-small"></b-icon></router-link>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  props: ["minat"],
  methods:{
    chgRoute(){
      this.$router.push(this.link)
    }
  }
};
</script>
<style lang="scss" scoped>
@import '../assets/style/global';
$radius: 2px;
.card {
  transition: 0.2s all ease;
  box-shadow: 0 4px 16px 0px rgba(0, 0, 0, 0.15);
  border-radius: $radius;
  // height: 33rem !important;

  &:hover {
    transition: 0.2s all ease;
    // background: #ECF3FB;
  }

  &-image {
    img {
      border-radius: $radius $radius 0 0px;
    }
  }

  &-content {
    .media {
      &-content {
        padding: 0.5rem;
        p {
          a {
            color: #0072da;
            &:hover {
              color: #0265c2;
              text-decoration: underline;
            }
          }
        }
        .title{
          font-size: 1.2rem;
          font-weight: bold;
          font-family: $font-heading-two;
        }
        .subtitle {
          margin: -0.8rem 0 1.6rem 0;
          font-size: 1rem;
        }
        .date{
          margin: -0.5rem 0 .5rem 0;
          font-size: .8rem;
        }
      }
    }
  }
}
</style>
