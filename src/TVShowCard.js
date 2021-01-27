const TVShowCard = ({ tvShow }) => {

  const displayGenres = () => {
    return tvShow.genres.map(genre => {
      return <li className="tv-show-genre">{ genre }</li>
    })
  }

  return (
    <div className="tv-show-card">
      <h2 className="tv-show-title">{ tvShow.name }</h2>
      <ul className="tv-show-genres">{ displayGenres() }</ul>
      <p className="tv-show-premiered">Premiered { tvShow.premiered }</p>
      <p className="tv-show-rating">Rating { tvShow.rating.average }</p>
      <p className="tv-show-popularity">Popularity { tvShow.weight }</p>
      <img src={ tvShow.image.medium } alt={ tvShow.name } />
    </div>
  )
}

export default TVShowCard;