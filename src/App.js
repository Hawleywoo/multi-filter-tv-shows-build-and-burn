import { Component } from 'react';

import './App.css';

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
    return (
      <div className="App">
      </div>
    );
  }
}

export default App;
