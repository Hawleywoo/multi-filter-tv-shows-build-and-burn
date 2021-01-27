import { Component } from 'react';

import './App.css';

import Filters from './Filters';
import TVShowsContainer from './TVShowsContainer';

const tvShowsURL = 'https://api.tvmaze.com/shows';

class App extends Component {

  state = {
    tvShows: [],
    name: ''
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

  filteredShows = () => {
    const { tvShows, name } = this.state;

    return tvShows.filter(tvShow => {
      return tvShow.name
        .toLowerCase()
        .includes(
          name.toLowerCase()
        );
    });
  }
  
  render() {
    const { name } = this.state;

    return (
      <div className="App">
        <Filters
          name={ name }
          handleChange={ this.handleChange }
        />
        <TVShowsContainer tvShows={ this.filteredShows() } />
      </div>
    );
  }
}

export default App;
