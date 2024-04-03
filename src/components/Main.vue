<script>
    import {store} from '../data/store'
    import Card from './partials/Card.vue'
    export default {  
        components: {
            Card
        },
    data(){
      return{
        store
      }
    }
    
  }
</script>

<template>
  <main>
      <div class="container pt-5">
        <div class="row row-cols-4">
          <div class="col">
            <Card v-for="card in this.store.moviesList" :key="card.id"  :title="card.title" :original_title="card.original_title" :image="card.poster_path"/>
          </div>
          

        </div>

      </div>
    </main>

</template>


<style lang="scss" scoped>
main{
  height: 100vh;
  background-color: gray;
}
</style>