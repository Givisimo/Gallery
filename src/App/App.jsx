import React, { Component } from 'react';
import Searchbar from '../Searchbar/Searchbar';
import * as api from '../utils/pixabay';

const testQuery = {
  searchWord: 'car',
  page: 1,
  perPAge: 20,
};

class App extends Component {
  state = {
    photos: [],
    query: {
      searchWord: '',
      page: 1,
      perPAge: 20,
    },
  };

  componentDidMount(prevProps, prevState) {
    api.getPhotos(testQuery).then(data => this.setState({ photos: data }));
  }

  render() {
    return (
      <div className="App">
        <Searchbar />
      </div>
    );
  }
}

export default App;
