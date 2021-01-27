import TVShowCard from './TVShowCard';

const TVShowsContainer = ({ tvShows }) => {
  
  const displayTVShows = () => {
    return tvShows.map(tvShow => {
      return <TVShowCard tvShow={ tvShow } />
    })
  }
  
  return (
    <section className="tv-shows-container">
      { displayTVShows() }
    </section>
  )
}

export default TVShowsContainer;