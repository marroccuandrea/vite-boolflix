<script>
import { store } from '../../data/store'
export default {
    props: {
        title: String,
        original_title: String,
        poster_path: String,
        original_language: String,
        vote_average: Number,
        overview: String
    },
    data() {
        return {
            store
        }
    },
    methods: {
        stars(rating) {
            let star = '';
            const vote = rating / 2;
            const stelle = Math.ceil(vote);
            // let mezzaStella = vote % 1 !== 0;


            // Stelle piene
            for (let i = 0; i < stelle; i++) {
                star += `<i class="fa-solid fa-star"></i>`;
                //Mezza stella
                // if (mezzaStella) {
                //     star += `<i class="fa-regular fa-star-half-stroke"></i>`;
                //     mezzaStella = false;
                // }
            }

            // Stelle vuote
            const stellaVuota = 5 - stelle;
            for (let i = 0; i < stellaVuota; i++) {
                star += `<i class="fa-regular fa-star"></i>`;
            }
            return star;
        }
    }
}
</script>

<template>
    <div class="col">
        <div class="card card mb-5">

            <div class="card-front">
                <img class="image-null w-100 h-100" v-if="poster_path === null"
                    src="../../assets/img/cover19-650x390.jpg">
                <img v-else :src="`https://image.tmdb.org/t/p/w342${poster_path}`" class="card-img-top">
            </div>

            <div class="card-body">
                <h5 class="card-title fs-6">Titolo originale: {{ original_title }}</h5>
                <h5 class="card-title fs-6">Titolo: {{ title }}</h5>
                <img v-if="original_language == 'it'" src="../../assets/bandiere/it.png"></img>
                <img v-else-if="original_language == 'en'" src="../../assets/bandiere/en.png"></img>
                <p v-else class="card-text">{{ original_language }}</p>
                <p v-html="stars(vote_average)" class="card-star"></p>
                <div class="text-description">
                    <p class="card-text-scroll">{{ overview }}</p>
                </div>
            </div>


        </div>
    </div>
</template>




<style lang="scss" scoped>
.card {
    background-color: transparent;
    width: 300px;
    height: 450px;

    &:hover {
        transform: translateY(30px);
        transition: transform 0.8s;
    }

    .card-front {
        position: absolute;
    }



    .card-body {
        position: relative;
        color: white;
        background-color: rgba(0, 0, 0, 0.602);
        opacity: 0;



        .card-star {
            color: rgb(255, 196, 0);
        }

        .text-description {
            height: 245px;
            overflow-y: scroll;
            scrollbar-color: rgb(255, 196, 0);

            .card-text-scroll {
                font-size: 0.9rem;
            }

        }

        img {
            width: 25px;
            height: 15px;

        }

        &:hover {
            opacity: 1;
        }
    }

}
</style>