import { Component } from 'react';

import './App.css';

import Filters from './Filters';
import TVShowsContainer from './TVShowsContainer';

const tvShowsURL = 'https://api.tvmaze.com/shows';

class App extends Component {

  state = {
    tvShows: [],
    name: '',
    popularity: 'most popular'
  }

  componentDidMount() {
    fetch(tvShowsURL)
      .then(response => response.json())
      .then(tvShows => this.setState({ tvShows }));
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  byPopularity = (a, b) => {
      if (a.weight < b.weight) {
        return 1
      } else if (a.weight > b.weight) {
        return -1
      } else {
        return 0
      }
  }

  filteredShows = () => {
    const { tvShows, name, popularity } = this.state;

    return tvShows.sort(this.byPopularity())
    // return tvShows.filter(tvShow => {
    //   return tvShow.name
    //     .toLowerCase()
    //     .includes(
    //       name.toLowerCase()
    //     );
    // });
  }

  render() {
    const { name, popularity } = this.state;

    return (
      <div className="App">
        <Filters
          name={name}
          popularity={popularity}
          handleChange={this.handleChange}
        />
        <TVShowsContainer tvShows={this.filteredShows()} />
      </div>
    );
  }
}

export default App;
