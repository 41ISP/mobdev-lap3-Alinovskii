import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export const useStoreMovie = create(persist((set) => ({
    movies: [],
    addMovie: (movie) => set((state) => ({movies: [...state.movies, movie]})),
    removeMovie: (movie) => set((state) => ({movies: [...state.movies.filter((el) => el.imdbID != movie.imdbID)]})),
    removeAllMovies: () => set({movies: []}),
}),
{
    name: 'movie-storage', // name of the item in the storage (must be unique)
    storage: createJSONStorage(() => localStorage), // (optional) by default, 'localStorage' is used
},))
