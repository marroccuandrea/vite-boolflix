<script>
import { store } from '../data/store'
export default {
  data() {
    return {
      store,
      titleSearch: '',
      seriesTitleSearch: ''
    }
  },
  methods: {
    startSearch() {
      console.log('ricerca');
      this.store.queryParams.query = this.titleSearch, this.seriesTitleSearch
      this.$emit('startSearch');
      console.log(this.store.queryParams.query);
    }
  }

}
</script>

<template>
  <header>

    <div class="container-fluid d-flex justify-content-between align-items-center">
      <img src="../assets/img/boolflix-logo.png" class="logo"></img>
      <div class="input-box">
        <input v-model.trim="titleSearch" class="form-control mx-3" type="text" placeholder="Cerca il film"
          @keyup.enter="startSearch">
        <button class="btn btn-danger d-flex align-items-center" @click="startSearch">Cerca</button>
      </div>
    </div>

  </header>

</template>


<style lang="scss" scoped>
.container-fluid {
  height: 100px;
  background-color: black;

  .input-box {
    display: flex;
    height: 25%;
  }

  .logo {
    width: 200px;
    height: 50px;
  }
}
</style>