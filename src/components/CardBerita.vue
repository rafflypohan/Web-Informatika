<template>
  <section>
    <!-- <div class="tile is-ancestor"> -->
      <!-- <div class="tile is-vertical is-7 konten__berita"> -->
              <figure class="image is-4by3">
                <img
                  src="https://bulma.io/images/placeholders/1280x960.png"
                  alt="Placeholder image"
                />
              </figure>
              <p class="title">{{title}}</p>
              <p class="subtitle"> {{waktu}} </p>
              <p class="subtitle"> {{ket}} </p>
          
        <!-- </div> -->
      <!-- </div> -->
      <!-- <div class="tile is-parent konten__agenda">
        <article class="tile is-child notification is-link">
          <div class="content">
            <p class="title">Agenda</p>
            <p class="subtitle">With even more content</p>
            <div class="content">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam semper diam at erat pulvinar, at pulvinar felis blandit. Vestibulum volutpat tellus diam, consequat gravida libero rhoncus ut. Morbi maximus, leo sit amet vehicula
                eleifend, nunc dui porta orci, quis semper odio felis ut quam.
              </p>
              <p>
                Suspendisse varius ligula in molestie lacinia. Maecenas varius eget ligula a sagittis. Pellentesque interdum, nisl nec interdum maximus, augue diam porttitor lorem, et sollicitudin felis neque sit amet erat. Maecenas imperdiet
                felis nisi, fringilla luctus felis hendrerit sit amet. Aenean vitae gravida diam, finibus dignissim turpis. Sed eget varius ligula, at volutpat tortor.
              </p>
              <p>
                Integer sollicitudin, tortor a mattis commodo, velit urna rhoncus erat, vitae congue lectus dolor consequat libero. Donec leo ligula, maximus et pellentesque sed, gravida a metus. Cras ullamcorper a nunc ac porta. Aliquam ut
                aliquet lacus, quis faucibus libero. Quisque non semper leo.
              </p>
            </div>
          </div>
        </article>
      </div> -->
  </section>
</template>
<script>
export default {
    props: ['title', 'waktu', 'ket']
}
</script>