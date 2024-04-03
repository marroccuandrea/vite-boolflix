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
      }
    },
    mounted(){
      this.getMovies()
    }
  }
</script>

<template>
  <Header @startSearch="getMovies" />
  <Main />
</template>

<style lang="scss">
@use './assets/scss/main.scss';
</style>


<!-- 
params: {
  api_key: '22a1005abcd5268fa491114e2d41ca28',
  original_title: '',
  title: '',
  original_language: '',
  vote_average: ''
} -->