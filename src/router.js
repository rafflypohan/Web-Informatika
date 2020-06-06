import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

export default new VueRouter({
  scrollBehavior(){
    window.scrollTo(0,0);
  },
  mode: 'history',
  routes: [
    
    {
      path: '/',
      name: 'beranda',
      meta: {title: 'Beranda'},
      component: () => import('./views/Beranda.vue')
    },
    {
      path: '/berita/:berita',
      name: 'berita',
      props: true,
      meta: {title: 'Berita'},
      component: () => import('./views/Berita.vue')
    },
    {
      path: '/:informasi',
      name: 'informasi',
      props: true,
      meta: {title: 'Informasi'},
      component: () => import('./views/Informasi.vue')
    },
    {
      path: '/bidang-minat/:minat',
      name: 'bidang-minat',
      props: true,
      meta: {title: 'Bidang Minat'},
      component: () => import('./views/BidangMinat.vue')
    },
    {
      path: '/civitas/himpunan',
      name: 'himpunan',
      meta: {title: 'Himpunan'},
      component: () => import('./views/civitas/Himpunan.vue')
    },
    {
      path: '/akademik/lomba',
      name: 'lomba',
      meta: {title: 'Lomba'},
      component: () => import('./views/akademik/Lomba.vue')
    },
    {
      path: '/akademik/beasiswa',
      name: 'beasiswa',
      meta: {title: 'Beasiswa'},
      component: () => import('./views/akademik/Beasiswa.vue')
    },
    {
      path: '/profil-prodi/tentang-prodi',
      name: 'tentang-prodi',
      meta:{title: 'Tentang Prodi'},
      component:() => import('./views/profil-prodi/tentang-prodi.vue')
    },

    {
      path: '/profil-prodi/visi-misi',
      name: 'visi-misi',
      meta: {title: 'Visi Misi'},
      component:() => import('./views/profil-prodi/visi-misi.vue')
    },
  
    {
      path: '/profil-prodi/struktur-organisasi',
      name: 'struktur-organisasi',
      meta: {title: 'Struktur Organisasi'},
      component:() => import('./views/profil-prodi/struktur-organisasi.vue')
    },
    {
      path: '/civitas/dosen',
      name: 'dosen',
      meta:{title: 'Dosen '},
      component:()=> import('./views/civitas/dosen.vue')
    },
    {
      path: '/civitas/tenaga-kependidikan',
      name: 'tendik',
      meta:{title: 'Tenaga Kependidikan'},
      component:() => import('./views/civitas/tendik.vue')
    }
  ],
});
