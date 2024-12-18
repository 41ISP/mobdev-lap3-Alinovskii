import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const MovieForm = ({ onSearchMovieByName }) => {
  const [movieName, setMovieName] = useState("");
  const handleText = (e) => {
    setMovieName(e.target.value);
    console.log(movieName);
  };

  const [page, setPage] = useState(1);

  useEffect(() => {console.log(page); search()}, [page])

  const goBack = () => {
    setPage((page) => page - 1)
  }

  const goForward = () => {
    setPage((page) => page + 1) 
  }

  const reloadPage = () => {
    const hash = movieName;
    location.replace("http://localhost:5173/#" + hash);
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
        <button onClick={goBack}>Назад</button>
        <button onClick={goForward}>Вперед</button>
      </div>
    </form>
  );
};

export default MovieForm;
