import React, { Component } from 'react';
import Searchbar from '../Searchbar/Searchbar';
import * as api from '../utils/pixabay';
import Gallery from '../Gallery/Gallery';

class App extends Component {
  state = {
    photos: [],
    searchWord: '',
    page: 1,
    perPage: 20,
    fullImg: '',
  };

  handleSearchField = e => {
    this.setState({ searchWord: e.target.value });
  };

  handleImgClick = e => {};

  searchPhotos = e => {
    e.preventDefault();
    const { searchWord, page, perPage, photos } = this.state;
    const result = searchWord.trim().replace(/\s/g, '+');
    const query = { searchWord: result, page, perPage };
    api.getPhotos(query).then(data => this.setState({ photos: [...data] }));
  };

  render() {
    const { photos } = this.state;
    return (
      <div className="App">
        <Searchbar
          handleInput={this.handleSearchField}
          handleSubmit={this.searchPhotos}
        />
        {photos.length > 0 && <Gallery photos={photos} />}
      </div>
    );
  }
}

export default App;
