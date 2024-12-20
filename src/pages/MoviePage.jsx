import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import OMDBApi from "../shared/api";

const MoviePage = () => {
  const params = useParams()
  const [movie, setMovie] = useState({});

  
  const [page, setPage] = useState(1);


  const navigate = useNavigate()
  const changePage = (listpage) => {
    setPage((page) => page + listpage)
    navigate(listpage)
  }

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
      <div className="switchPage">
        <button onClick={() => changePage(-1)}>Назад</button>
        <button onClick={() => changePage(1)}>Вперед</button>
      </div>
    </div>
  );
};

export default MoviePage;
