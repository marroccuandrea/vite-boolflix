<script>
// import { store } from '../../data/store'
export default {
    props: {
        title: String,
        original_title: String,
        poster_path: String,
        original_language: String,
        vote_average: Number
    },
    // data() {
    //     return {
    //         store
    //     }
    // }
}
</script>

<template>
    <div class="col">
        <div class="card mb-5">
            <img :src="`https://image.tmdb.org/t/p/w342${poster_path}`" class="card-img-top">
            <div class="card-body">
                <h5 class="card-title">{{ original_title }}</h5>
                <h5 class="card-title">{{ title }}</h5>
                <img v-if="original_language == 'it'" src="../../assets/bandiere/it.png"></img>
                <img v-else-if="original_language == 'en'" src="../../assets/bandiere/en.png"></img>
                <p v-else class="card-text">{{ original_language }}</p>
                <p class="card-text">{{ vote_average }}</p>
            </div>
        </div>
    </div>
</template>



<style lang="scss" scoped>
.card-body {
    img {
        width: 25px;
        height: 15px;
    }
}
</style>