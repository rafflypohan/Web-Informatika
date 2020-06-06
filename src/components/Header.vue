<template>
  <section class="hero is-medium is-primary is-bold">
    <div class="hero-body">
      <div class="container">
        <h1 class="title has-text-left">{{title}}</h1>
        <!-- <h2 class="subtitle has-text-left">Primary bold subtitle</h2> -->
      </div>
    </div>
  </section>
</template>
<script>
export default {
  props:['title'],
    data(){
        return{
            x: true
        }
    }
}
</script>