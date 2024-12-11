// Replica di Netflix con funzionalità di ricerca e pagina iniziale con film/serie popolari

import { reactive } from "vue";

export const store = reactive({
  mainTitle: "Vite Boolix",
  moviesApi: "https://api.themoviedb.org/3/search/movie",
  seriesApi: "https://api.themoviedb.org/3/search/tv",
  seriesPopular: "https://api.themoviedb.org/3/tv/popular",
  moviesPopular: "https://api.themoviedb.org/3/movie/popular",
  cardsList: [],
  moviesList: [],
  seriesList: [],
  queryParams: {
    api_key: "22a1005abcd5268fa491114e2d41ca28",
    query: "",
    language: "it-IT",
  },

  // Funzione per recuperare film e serie popolari all'avvio
  async fetchPopularContent() {
    try {
      // Recupera film popolari
      const moviesResponse = await fetch(
        `${this.moviesPopular}?api_key=${this.queryParams.api_key}&language=${this.queryParams.language}`
      );
      if (!moviesResponse.ok)
        throw new Error("Errore nel caricamento dei film popolari");
      const moviesData = await moviesResponse.json();
      this.moviesList = moviesData.results;

      // Recupera serie TV popolari
      const seriesResponse = await fetch(
        `${this.seriesPopular}?api_key=${this.queryParams.api_key}&language=${this.queryParams.language}`
      );
      if (!seriesResponse.ok)
        throw new Error("Errore nel caricamento delle serie popolari");
      const seriesData = await seriesResponse.json();
      this.seriesList = seriesData.results;
    } catch (error) {
      console.error(
        "Errore durante il caricamento dei contenuti popolari:",
        error
      );
    }
  },
});
