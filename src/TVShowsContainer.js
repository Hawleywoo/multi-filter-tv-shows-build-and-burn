import TVShowCard from './TVShowCard';

const TVShowsContainer = ({ tvShows }) => {
  
  const displayTVShows = () => {
    return tvShows.map(tvShow => {
      return <TVShowCard key={ tvShow.id } tvShow={ tvShow } />
    })
  }
  
  return (
    <section className="tv-shows-container">
      { displayTVShows() }
    </section>
  )
}

export default TVShowsContainer;