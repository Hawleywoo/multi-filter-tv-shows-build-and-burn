import { Component } from 'react';

import './App.css';

import TVShowsContainer from './TVShowsContainer';

const tvShowsURL = 'https://api.tvmaze.com/shows';

class App extends Component {

  state = {
    tvShows: []
  }

  componentDidMount() {
    fetch(tvShowsURL)
      .then(response => response.json())
      .then(tvShows => this.setState({ tvShows }));
  }
  
  render() {
    const { tvShows } = this.state;

    return (
      <div className="App">
        <TVShowsContainer tvShows={ tvShows } />
      </div>
    );
  }
}

export default App;
