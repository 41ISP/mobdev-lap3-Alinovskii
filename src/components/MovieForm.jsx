import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const MovieForm = ({ onSearchMovieByName }) => {
  const [movieName, setMovieName] = useState("");
  const handleText = (e) => {
    setMovieName(e.target.value);
    console.log(movieName);
  };

  const [page, setPage] = useState(1);

  useEffect(() => {console.log(page); search()}, [page])

  const navigate = useNavigate()
  
  const changePage = (listpage) => {
    setPage((page) => page + listpage)
    navigate(listpage)
  }


  const reloadPage = () => {
    const hash = movieName;
    location.replace("https://vigilant-goldfish-x5qwgp9w5p39v6p-5173.app.github.dev/#" + hash);
  };

  const search = async () => {
    await onSearchMovieByName(location.hash.substring(1))
  }

  useEffect(() => {
    setMovieName(location.hash.substring(1))
    
    search()
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    reloadPage();
    await onSearchMovieByName(movieName);
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <input
        className="input-txt"
        onChange={handleText}
        value={movieName}
      ></input>
      <button className="btn" type="submit">
        Search
      </button>
      <div>
        <button onClick={() => changePage(-1)}>Назад</button>
        <button onClick={() => changePage(1)}>Вперед</button>
      </div>
    </form>
  );
};

export default MovieForm;
