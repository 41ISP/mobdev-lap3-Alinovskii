import { Link } from "react-router-dom";
import Feed from "../components/Feed";
import { useStoreMovie } from "../entities/Movies";

const LikedPage = () => {
    
    const {movies,addMovie, removeMovie, removeAllMovies} = useStoreMovie((state)=> state);
    console.log(movies)
    return (
        <div className="App">
           <Link  className="Liked" to={-1}>FILMS</Link>
          <h1>SUPER COOL FILMS</h1>
          <Feed movies={movies}></Feed>
        </div>
      )
}
export default LikedPage;