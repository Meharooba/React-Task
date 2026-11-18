function Movie_card({
  poster,
  title,
  genre,
  year,
  onAdd,
  isAdded,
  buttonText
}) {

  return (

    <div className="movie-card">

      <img src={poster} alt={title} />

      <div className="movie-details">

        <h3>{title}</h3>

        <p>Genre: {genre}</p>

        <p>Release Year: {year}</p>

        <button onClick={onAdd} disabled={isAdded}>
          {buttonText || (isAdded ? "Added to Watchlist" : "Add to Watchlist")}
        </button>

      </div>

    </div>

  )
}

export default Movie_card

