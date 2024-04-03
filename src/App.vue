<script>
  import axios from 'axios';
  import { store } from './data/store.js'
  import Header from './components/Header.vue'
  import Main from './components/Main.vue'
  export default {
    components:{
      Header,
      Main
    },
    data(){
      return{
        store
      }
    },
    methods:{
      getMovies(){
        axios.get(this.store.moviesApi, {
          params: store.queryParams
        })
        .then(result => {
          this.store.moviesList = result.data.results
          console.log(this.store.moviesList);
        })
        .catch(error => {
          console.log(error);
        })
      },
      getSeries(){
        axios.get(this.store.seriesApi, {
          params: store.queryParams
        })
        .then(result => {
          this.store.seriesList = result.data.results
          console.log(this.store.seriesList);
        })
        .catch(error => {
          console.log(error);
        })
      }
    },
    mounted(){
      this.getMovies(),
      this.getSeries()
    }
  }
</script>

<template>
  <Header @startSearch="getMovies(), getSeries()" />
  <Main />
</template>

<style lang="scss">
@use './assets/scss/main.scss';
</style>
