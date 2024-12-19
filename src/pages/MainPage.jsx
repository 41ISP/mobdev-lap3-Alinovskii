import { useEffect, useState } from "react";
import MovieForm from "../components/MovieForm";
import Feed from "../components/Feed";
import OMDBApi from "../shared/api";
import { Link, useNavigate } from "react-router-dom";

const MainPage = () => {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate()

  const onSearchMovieByName = async (movieName) => {
    const data = await OMDBApi.getMovieByName(movieName);
    setMovies(data.data.Search);
  };  

  return (
    <div className="App">
      <Link className="Liked" to="/liked">
        <img src="trash.png"></img>
      </Link>
      <MovieForm onSearchMovieByName={onSearchMovieByName}></MovieForm>
      <Feed movies={movies}></Feed>
    </div>
  );
};

export default MainPage;
