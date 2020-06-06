<template>
  <section>
    <div class="card">
      <div class="card-image">
        <figure class="image is-4by3">
          <img v-bind:src="require(`../assets/img/${berita.images}`)" alt="berita.title" />
        </figure>
      </div>
      <div class="card-content">
        <div class="media">
          <div class="media-content">
            <p class="tek is-6 has-text-justified">
              <b-icon icon="tag" size="is-small"></b-icon>
              {{berita.tag}}
            </p>
            <p class="date is-6 has-text-justified">
              <b-icon icon="calendar" size="is-small"></b-icon>
              {{berita.datetime}}
            </p>
            
            <p class="title is-capitalize">{{berita.descTitle}}</p>

            <p class="subtitle has-text-justified">{{berita.info}}</p>
            <p class="link has-text-right">
              <router-link tag="a" v-bind:to="berita.link">
                Lihat Selengkapnya
                <b-icon icon="arrow-right" size="is-small"></b-icon>
              </router-link>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  props: ["berita"],
  methods: {
    chgRoute() {
      this.$router.push(this.link);
    }
  }
};
</script>
<style lang="scss" scoped>
@import "../assets/style/global";
$radius: 2px;
.card {
  transition: 0.2s all ease;
  box-shadow: 0 4px 16px 0px rgba(0, 0, 0, 0.15);
  border-radius: $radius;
  // height: 34.5rem !important;

  &:hover {
    transition: 0.2s all ease;
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
        .link {
          a {
            color: #0072da;
            margin-top: 20px;
            &:hover {
              color: #0265c2;
              text-decoration: underline;
            }
          }
        }
        .title {
          font-size: 1.2rem;
          font-weight: bold;
          font-family: $font-heading-two;
        }
        .subtitle {
          margin: -0.8rem 0 1.6rem 0;
          font-size: 1rem;
        }
        .date, .tek {
          margin: -0.3rem 0 0.5rem 0;
          font-size: 0.8rem;
        }
        
      }
    }
  }
}
</style>
