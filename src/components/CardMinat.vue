<template>
  <section>
    <div class="card">
      <div class="card-image">
        <figure class="image is-4by3">
          <img v-bind:src="require(`../assets/img/${minat.images}`)" alt="minat.title" />
        </figure>
      </div>
      <div class="card-content">
        <div class="media">
          <div class="media-content">
            <p class="title is-capitalize">{{minat.name}}</p>
            <p class="subtitle has-text-left">{{minat.subtitle}}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  props: ["minat"],
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
  border-radius: 1px solid #eee;
  // height: 25rem !important;

  &:hover {
    transition: 0.2s all ease;
    box-shadow: 0 8px 28px 4px rgba(0, 0, 0, 0.15);
    transform: scale(1.01);
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
        .date,
        .tek {
          margin: -0.3rem 0 0.5rem 0;
          font-size: 0.8rem;
        }
      }
    }
  }
}
</style>
