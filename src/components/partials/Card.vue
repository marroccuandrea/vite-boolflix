<script>
    export default {
        props: {
            title: String,
            original_title: String,
            poster_path: String,
            original_language: String,
            vote_average: String
        }
    }
</script>

<template>
    <div>
        <div class="card mb-5" style="width: 18rem; height: 18rem;">
            <img :src="poster_path" class="card-img-top">
            <div class="card-body">
                <h5 class="card-title">{{ title }}</h5>
                <p class="card-text">{{ original_language }}</p>
                <p class="card-text">{{ vote_average }}</p>
            </div>
        </div>
    </div>
</template>



<style lang="scss" scoped>

</style>