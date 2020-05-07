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
    }
    // {
    //   path: '/profil-prodi',
    //   name: 'profil-prodi',
    //   meta:{title: 'Profil Prodi'},
    // }
  ],
});
