import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  routes: [
    
    {
      path: '/',
      name: 'Beranda',
      meta: {title: 'Beranda'},
      component: () => import('./views/Beranda.vue')
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
      meta:{title: 'Dosen'},
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
