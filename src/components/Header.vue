<script>
    import {store} from '../data/store'
    export default {  
    data(){
      return{
        store
      }
    }
    
  }
</script>

<template>
  <header>

    <div class="container-fluid d-flex justify-content-between align-items-center">
      <h2 class="logo">BOOLFLIX</h2>
      <div class="input-box">
        <input class="form-control mx-3" type="text">
        <button class="btn btn-danger d-flex align-items-center">Cerca</button>
      </div>
    </div>

  </header>

</template>


<style lang="scss" scoped>
.container-fluid{
  height: 100px;
  background-color: black;
  
  .input-box{
    display: flex;
    height: 25%;
  }
  .logo{
    color: red;
  }
}
</style>