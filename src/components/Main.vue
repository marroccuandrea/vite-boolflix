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

    </main>

</template>


<style lang="scss" scoped>
main{
  height: 100vh;
  background-color: gray;
}
</style>