import { useState } from "react";
import LikeIcon from "./LikeIcon";
import "./Movie.css";
import { useStoreMovie } from "../entities/Movies";
import { useNavigate } from "react-router-dom";

const Movie = ({ movie }) => {
  let navigate = useNavigate();

  const { movies, addMovie, removeMovie, removeAllMovies } = useStoreMovie(
    (state) => state
  );

  const [isLiked, setIsLiked] = useState(
    movies.some((m) => m.imdbID === movie.imdbID)
  );

  console.log(`${movie.Title} - ${isLiked}`);
  
  const onImgClick = () => {
    setIsLiked(!isLiked);
    if (!isLiked) {
      console.log("added");
      addMovie({ ...movie });
    } else {
      console.log("remove");
      removeMovie({ ...movie });
    }
    console.log(movies);
  };

  const onMovieClick = () => {
    console.log(movie.imdbID)
    navigate(`/movies/${movie.imdbID}`);
  }
  return (
    <div className="movie-container">
      <LikeIcon onImgClick={onImgClick} isLiked={isLiked}/>
    <div className="movie" onClick={onMovieClick} id={movie.imdbID}> 
      <h1 className="Name">{movie.Title}</h1>
      <h2 className="Type">{movie.Type}</h2>
      <h3 className="Year">{movie.Year}</h3>
      <img className="Image" src={movie.Poster}></img>   
    </div>
    </div>
  );
};

export default Movie;
