<template>
  <section class="section">
    <section class="hero is-bold">
      <div class="hero-body">
        <div class="container">
            <div class="title">{{data.informasi[id].title}}</div>
                <p class="has-text-justified">
                    <pre>{{data.informasi[id].desc}}</pre>
                </p>
            </div>
      </div>
    </section>
  </section>
</template>
<script>
import DataInformasi from '../data/informasi.json'
export default {
    data(){
        return{
            'id': this.$parent.id, // buat ngambil id parent nya
            'data': DataInformasi
        }
    },
    methods:{
        //  ini buat ngubah \n di json jadi tag <br>
        handleNewLine(str) {
            return str.replace(/(?:\r\n|\r|\n)/g, '<br />');
        },
        // ini buat ngubah \t di json jadi tag <span>
        handTab(str){
            return str.replace(/(?:\t)/g, '<span/>')
        }
    },
    watch:{
        // ini kalo ganti path tapi komponennya sama, contohnya card di halaman beranda
        '$route' (){
            if (this.$route.path === '/mahasiswa-baru'){
                this.id = 0
            }
            else if (this.$route.path === '/prestasi'){
                this.id = 1
            }
            else if (this.$route.path === '/akademik/beasiswa'){
                this.id = 2
            }
            else if (this.$route.path === '/akademik/lomba'){
                this.id = 3
            }
            else if (this.$route.path === '/profil-lulusan'){
                this.id = 4
            }
            else if (this.$route.path === '/civitas/himpunan'){
                this.id = 5
            }
        }
    }
}
</script>
<style lang="scss" scoped>
p pre{
  font-family: inherit;
  background: inherit;
  font-size: inherit;
  word-wrap: break-word;
  white-space: pre-wrap;
  
}
</style>