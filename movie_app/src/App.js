import React from 'react';
import logo from './logo.svg';
import './App.css';
import Movie from './movie';


class App extends React.Component {

  state = {

  };

  componentDidMount(){
    this._putData();
  }

  _getApi = () => {
    return 
    fetch("https://yst.am/api/v2/list_movies.json?limit=20")
    .then(_result => console.log(_result.json()))
    .then(jsonData => jsonData.data.movies)
    .catch(err => console.log(err))
  }

  _putData = async() => {
    const movieData = this._getApi();
    this.setState({
      movieData
    })
  }

  _renderMovie = () => {
    this.state.movieData.map(movies => {
      return (
        <Movie 
        poster = {movies.medium_cover_image}
        title = {movies.title_english}
        genres = {movies.genres}
        description = {movies.description}
        />
      )
    })
  }

  render(){

      return (
        <div className="App">
          {this.state.movieData ? this._renderMovie() : 'LOADING ...'}
        </div>
      );
    }
  }

export default App;
