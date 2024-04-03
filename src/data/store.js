import { reactive } from 'vue'

export const store = reactive({
    mainTitle: 'Vite Boolix',
    moviesApi: 'https://api.themoviedb.org/3/search/movie',
    seriesApi: 'https://api.themoviedb.org/3/search/tv',
    cardsList: [],
    moviesList: [],
    seriesList: [],
    queryParams: {
        api_key: '22a1005abcd5268fa491114e2d41ca28',
        query: ''
    }
})