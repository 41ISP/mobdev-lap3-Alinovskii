import axios from "axios"

const key = import.meta.env.VITE_OMDB_APIKEY;

const BaseURL = "http://www.omdbapi.com"

const URL = {
    getById: (imdbID) => `${BaseURL}/?apikey=${key}&i=${imdbID}`,
    allMovies: `${BaseURL}/?apikey=${key}`,
    getMovieByName: (movieName) => `${BaseURL}/?apikey=${key}&s=${movieName}` && `${BaseURL}/?apikey=${key}&page=${movieName}`
   
}

/**
 * Represents Steam front API
 * https://steamapi.xpaw.me/#
 */
const OMDBApiInstance = axios.create({baseURL: BaseURL})

const OMDBApi = {

    getById: async(imdbID) => {
        return OMDBApiInstance.get("", {params: {apikey: key, i: imdbID}});
    },

    getMovieByName: async (movieName, page) => {
        return OMDBApiInstance.get("", {params: {apikey: key, s: movieName, page: page}});
    },
    
};

export default OMDBApi;