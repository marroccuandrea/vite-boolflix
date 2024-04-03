<script>
// import { store } from '../../data/store'
export default {
    props: {
        title: String,
        original_title: String,
        poster_path: String,
        original_language: String,
        vote_average: String
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
        <div class="card mb-5" style="width: 18rem;">
            <img :src="poster_path" class="card-img-top">
            <div class="card-body">
                <h5 class="card-title">{{ original_title }}</h5>
                <h5 class="card-title">{{ title }}</h5>
                <p class="card-text">{{ original_language }}</p>
                <p class="card-text">{{ vote_average }}</p>
            </div>
        </div>
    </div>
</template>



<style lang="scss" scoped></style>