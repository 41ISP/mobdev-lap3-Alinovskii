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
  
  const changePage = (listpage) => {
    setPage((page) => page + listpage)
  }


  const reloadPage = () => {
    const hash = movieName;
    location.replace("https://fluffy-pancake-vxrx5qg657vcxw9r-5173.app.github.dev/#" + hash);
  };

  const search = async () => {
    await onSearchMovieByName(location.hash.substring(1), page)
  }

  useEffect(() => {
    setMovieName(location.hash.substring(1))
    
    search()
  }, []);

  const [showButtons, setShowButtons] = useState(false);

  const handleSubmit = async (e) => {
   e.preventDefault();
    reloadPage();
 await onSearchMovieByName(movieName);
 if(movieName.length != 0)
 {
     setShowButtons(true);
 }
 else if(movieName.length <= 0)
 {
  setShowButtons(false);
 }
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
      {showButtons && (
      <div className="switchPage">
        <button onClick={() => changePage(-1)}>Назад</button>
        <button onClick={() => changePage(1)}>Вперед</button>
      </div>
       )}
    </form>
  );
};

export default MovieForm;
