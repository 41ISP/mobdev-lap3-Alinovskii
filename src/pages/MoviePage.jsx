import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import OMDBApi from "../shared/api";

const MoviePage = () => {
  const params = useParams()
  const [movie, setMovie] = useState({});

  useEffect(() => {
    console.log("imdbID: "+ params.imdbID);
    const fetchMovie = async () => {
      const information = await OMDBApi.getById(params.imdbID);
      console.log(information?.data)
      setMovie(information?.data);
    };
    fetchMovie();
    console.log(movie);
  }, []);

  return (
    movie &&
    <div id={movie.imdbID} style={{border: '5px dashed black'}} className="Date">
      <Link className="Liked" to={-1}>
        FILMS
      </Link>
      <img className="Imagepage" src={movie.Poster}></img> 
      <div className="Info">
      <p className="Title">{movie.Title}</p>
      <p>Year: {movie.Year}</p>
      <p>Actors: {movie.Actors}</p>
      <p>Genre: {movie.Genre}</p>
      <p>Released: {movie.Released}</p>
      <p>Language: {movie.Language}</p>
      <p>Writer: {movie.Writer}</p>
      <p>Runtime: {movie.Runtime}</p>
      </div> 
    </div>
  );
};

export default MoviePage;
