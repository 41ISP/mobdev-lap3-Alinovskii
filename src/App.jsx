
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import MainPage from './pages/MainPage'
import LikedPage from './pages/LikedPage'
import MoviePage from './pages/MoviePage'



function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainPage/>,
    },
    {
      path: "/liked",
      element : <LikedPage/>
    },
    {
      path: "/movies/:imdbID",
      element : <MoviePage/>
    }
  ])

  return <RouterProvider router={router}/>
}

export default App
  