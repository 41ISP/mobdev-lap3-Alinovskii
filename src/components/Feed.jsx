import './Feed.css'
import Movie from './Movie'
const Feed = ({movies}) => {
    return (
    <div className="movies">
        {movies?.map((movie) => <Movie key={movie.imdbID} movie={movie}/> )}
    </div>
    )
}

export default Feed