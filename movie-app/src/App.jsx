import './App.css'
import Movie_card from './Movie_card';
import { useState } from 'react'

function App() {

  const movies = [
    {
      id: 1,
      title: "Inception",
      genre: "Sci-Fi",
      year: 2010,
      poster: "https://image.tmdb.org/t/p/w500/oYuLEt3zVCKq57qu2F8dT7NIa6f.jpg"
    },
    {
      id: 2,
      title: "Interstellar",
      genre: "Adventure",
      year: 2014,
      poster: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg"
    },
    {
      id: 3,
      title: "The Dark Knight",
      genre: "Action",
      year: 2008,
      poster: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg"
    },
    {
      id: 4,
      title: "Avatar",
      genre: "Fantasy",
      year: 2009,
      poster: "https://image.tmdb.org/t/p/w500/kyeqWdyUXW608qlYkRqosgbbJyK.jpg"
    },
    {
      id: 5,
      title: "Avengers: Endgame",
      genre: "Action",
      year: 2019,
      poster: "https://image.tmdb.org/t/p/w1280/or06FN3Dka5tukK1e9sl16pB3iy.jpg"
    }
  ]

  const [watchlist, setWatchlist] = useState([]);
  const [search, setSearch] = useState("");

  function addToWatchlist(movie) {

    if (!watchlist.some((item) => item.id === movie.id)) {
      setWatchlist([...watchlist, movie]);
    }

  }
    
  function removeFromWatchlist(movieId) {

    setWatchlist(
      watchlist.filter((movie) => movie.id !== movieId)
    );

  }

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">

      <h1>My Movie Collection</h1>
      <input
        className="search-box"
        type="text"
        placeholder="Search movies by title..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="movie-container"> {filteredMovies.map((movie) => (
          <Movie_card
            key={movie.id}
            poster={movie.poster}
            title={movie.title}
            genre={movie.genre}
            year={movie.year}
            onAdd={() => addToWatchlist(movie)}
            isAdded={watchlist.some((item) => item.id === movie.id)}
          />

        ))}

      </div>
      <h1>My Watchlist</h1>

      <div className="movie-container"> {watchlist.map((movie) => (
          <Movie_card
            key={movie.id}
            poster={movie.poster}
            title={movie.title}
            genre={movie.genre}
            year={movie.year}
            onAdd={() => removeFromWatchlist(movie.id)}
            isAdded={false}
            buttonText="Remove from Watchlist"
          />

        ))}

      </div>

    </div>
  )
}

export default App
