<script>
import { store } from '../data/store'
import Card from './partials/Card.vue'
export default {
  components: {
    Card
  },
  data() {
    return {
      store
    }
  }

}
</script>

<template>
  <main>
    <div class="container pt-5">
      <h1>Movies</h1>
      <div class="row row-cols-4">
        <Card v-for="card in this.store.moviesList" :key="card.id" :title="card.title"
          :original_title="card.original_title" :original_language="card.original_language"
          :vote_average="card.vote_average" :poster_path="card.poster_path" :overview="card.overview" />

      </div>
    </div>
    <div class="container pt-5">
      <h1>TV Series</h1>
      <div class="row row-cols-4">
        <Card v-for="serie in this.store.seriesList" :key="serie.id" :title="serie.name"
          :original_title="serie.original_name" :original_language="serie.original_language"
          :vote_average="serie.vote_average" :poster_path="serie.poster_path" :overview="serie.overview" />

      </div>
    </div>
  </main>

</template>


<style lang="scss" scoped>
main {
  height: 100%;
  background-color: gray;

  h1 {
    color: red;
    text-shadow: 1px 1px 1px black;
  }
}
</style>