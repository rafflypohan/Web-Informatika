<template>
  <div>
    <footer class="footer has-background-dark has-text-white-ter">
      <div class="columns has-text-left">
        <div class="column is-3">
          <img src="../assets/img/if.png" alt="Logo Informatika" />
          <h1 class="is-size-4 has-text-weight-medium has-text-white-ter">Teknik Informatika</h1>
          <h1>Insitut Teknologi Kalimantan</h1>
          <!-- <h2 class=" is-4 has-text-white has-bottom-border">Social Media</h2>
          <ul>
            <li>
              <a target="_blank" href="https://www.facebook.com/ITKalimantan/" class="has-text-white">
                <b-icon pack="mdi" icon="facebook"/>
              </a>
              <a target="_blank" href="https://twitter.com/itk_official_" class="has-text-white">
                <b-icon pack="mdi" icon="twitter"/>
              </a>
              <a target="_blank" href="https://www.instagram.com/itk_official/" class="has-text-white">
                <b-icon pack="mdi" icon="instagram"/>
              </a>
            </li>
          </ul>-->
        </div>
        <div class="column is-5">
          <ul>
            <li>
              <a tag="router-link" to="/profil-prodi/tentang-prodi" class="has-text-white">Tentang Prodi</a>
            </li>
            <li>
              <a href="#" class="has-text-white">Visi Misi</a>
            </li>
            <li>
              <a href="#" class="has-text-white">Stuktur Organisasi</a>
            </li>
            <li>
              <a href="#" class="has-text-white">Akreditasi</a>
            </li>
            <li>
              <a href="#" class="has-text-white">Kerjasama</a>
            </li>
          </ul>
        </div>
        <div class="column is-4">
          <h2 class="title is-4 has-text-white has-bottom-border"></h2>
          <div style="width: 100%">
            <iframe
              width="100%"
              height="100%"
              src="https://maps.google.com/maps?width=100%&amp;height=350&amp;hl=en&amp;coord=-1.15041555, 116.8614686&amp;q=Jl.%20Soekarno-Hatta%20Km.%2015%2C%20Karang%20Joang%2C%20%20%20%20%20%20%20%20%20%20%20%20Balikpapan%2C%20Kalimantan%20Timur%2C%2076127+(Institut%20Teknologi%20Kalimantan)&amp;ie=UTF8&amp;t=&amp;z=15&amp;iwloc=B&amp;output=embed"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
            >
              <a href="https://www.maps.ie/draw-radius-circle-map/"></a>
            </iframe>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>
<style lang="scss" scoped>
.footer {
  padding: 3rem 4rem 5rem;
}
</style>