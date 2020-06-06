<template>
  <div>
    <footer class="footer">
      <div class="columns has-text-left">
        <div class="column is-3">
          <img src="../assets/img/if.png" alt="Logo Informatika" />
          <h1 class="is-size-4 has-text-weight-medium has-text-white-ter">INFORMATIKA</h1>
          <h1 class="has-text-white-ter">Insitut Teknologi Kalimantan</h1>
          <br />

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
        <div class="column is-3">
          <h1 class="subtitle">Jurusan Matematika dan Teknologi Informasi</h1>
          <p>
            <b>Alamat:</b>
            <br />Jl. Soekarno-Hatta Km. 15, Karang Joang, Balikpapan, Kalimantan Timur, 76127
          </p>
          <br />
          <p>
            <b>Telp:</b> 0542-8530800
          </p>
          <p>
            <b>Email:</b> if@itk.ac.id
          </p>
        </div>
        <div class="column is-2">
          <ul class="footer-links">
            <ul class="footer-links">
              <h1 class="subtitle">Tentang IF</h1>
              <li>
                <router-link
                  tag="a"
                  class="has-text-white"
                  to="/profil-prodi/tentang-prodi"
                >Tentang Prodi</router-link>
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
          </ul>
        </div>
        <div class="column">
          <h2 class="title is-4 has-text-white has-bottom-border"></h2>
          <div>
            <iframe
              src="https://maps.google.com/maps?width=100%&amp;height=350&amp;hl=en&amp;coord=-1.15041555, 116.8614686&amp;q=Jl.%20Soekarno-Hatta%20Km.%2015%2C%20Karang%20Joang%2C%20%20%20%20%20%20%20%20%20%20%20%20Balikpapan%2C%20Kalimantan%20Timur%2C%2076127+(Institut%20Teknologi%20Kalimantan)&amp;ie=UTF8&amp;t=&amp;z=15&amp;iwloc=B&amp;output=embed"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
            >
              <a href="https://www.maps.ie/draw-radius-circle-map/"></a>
            </iframe>
          </div>
        </div>
      </div>
      <hr />
      <div class="container">
        <div class="columns">
          <div class="column">
            <p
              class="copyright-text has-text-left"
            >Copyright &copy; 2020 All Rights Reserved by Kelompok 5</p>
          </div>
          <div class="column">
            <ul class="social-icon">
              <li>
                <a target="_blank" href="https://www.facebook.com/ITKalimantan/" class="fb">
                  <b-icon pack="mdi" icon="facebook" />
                </a>
              </li>
              <li>
                <a target="_blank" href="https://twitter.com/itk_official_" class="tw">
                  <b-icon pack="mdi" icon="twitter" />
                </a>
              </li>
              <li>
                <a target="_blank" href="https://www.instagram.com/itk_official/" class="ig">
                  <b-icon pack="mdi" icon="instagram" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>
<style lang="scss" scoped>
h1,
p,
a {
  color: #cccaca !important;
}
.footer {
  padding: 3rem 0 5rem 4rem;

  iframe {
    border-radius: 4px;
    border: 2px solid #cccaca;
    width: 80%;
    height: 100%;
  }
  .footer-links {
    li {
      margin-top: 0.3rem;
      margin-left: 10px;
      a {
        &:hover {
          color: #17459c !important;
        }
      }
    }
  }

  hr {
    border-top-color: #cccaca;
    margin-right: 4.3rem;
    opacity: 0.5;
  }
  hr.small {
    margin: 20px 0;
  }

  .copyright-text{
    margin-left: -4rem;
  }

  .social-icon {
    padding: 0;
    margin-right: -26rem;
    li {
      display: inline-block;
      margin-bottom: 4px;
    }

    a {
      background-color: transparent;
      border: 1px solid #cccaca;
      color: #818a91;
      font-size: 16px;
      display: inline-block;
      line-height: 52px;
      width: 45px;
      height: 45px;
      text-align: center;
      margin-right: 8px;
      border-radius: 14px;
      transition: all 0.2s linear;

      &:hover,
      &:active,
      &:focus {
        color: #fff;
        background-color: #29aafe;
      }
    }
    a.fb:hover {
      background-color: #3b5998;
    }
    a.tw:hover {
      background-color: #00aced;
    }
    a.ig:hover {
      background-color: #dd2a7b;
    }
  }
}
</style>