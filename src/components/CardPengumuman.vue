<template>
  <section>
    <div class="card" aria-id="contentIdForA11y3">
      <div class="card-content">
        <div class="card-image">
          <figure class="image is-4by5">
            <img src="https://bulma.io/images/placeholders/480x600.png" alt="Placeholder image" />
          </figure>
        </div>
        <div class="media">
          <div class="media-left">
            <figure class="image is-4by5">
              <img src="https://bulma.io/images/placeholders/480x600.png" alt="Placeholder image" />
            </figure>
          </div>
          <div class="media-content">
            <p class="title is-4" >{{ title }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  props:['title'],
}
</script>
<style lang="scss" scoped>
@import "../assets/style/_global.scss";
.card {
  height: 26.5rem;
  transition: .1s ease;
  &:hover {
    transition: .1s ease;
    cursor: pointer;
    p{
      color: $primary;
      transition: .1s ease;
    }
    // img {
    //   transition: 0s ease;
    // }
  }
}
</style>