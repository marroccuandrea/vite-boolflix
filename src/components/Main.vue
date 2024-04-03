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
            <Card/>
          </div>
          <div class="col">
            <Card/>
          </div>
          <div class="col">
            <Card/>
          </div>
          <div class="col">
            <Card/>
          </div>
          <div class="col">
            <Card/>
          </div>
          <div class="col">
            <Card/>
          </div>
          <div class="col">
            <Card/>
          </div>
          <div class="col">
            <Card/>
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