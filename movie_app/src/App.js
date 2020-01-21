import React from 'react';
import logo from './logo.svg';
import './App.css';
import Movie from './Movie';


class App extends React.Component {

  

  state = {

  };

  componentDidMount(){
    this._putData();
    console.log("ComponentMount :" + this.state.movieData);
  }

  _getApi = () => {
    return (
      fetch("https://yst.am/api/v2/list_movies.json?limit=20")
      .then(_result => _result.json())
      .then(jsonData => jsonData.data.movies)
      .catch(err => console.log(err))
    )
  }

  _putData = async () => {
    console.log("PutData :" + this.state.movieData)

    const movieData = await this._getApi();
    this.setState({
      movieData : movieData
    })
  }

  _renderMovies = () => {
    console.log("renderMovies :"+this.state.movieData);
    const movies = this.state.movieData.map(movie => {
      return (
        <Movie
          title={movie.title_english}
          poster={movie.medium_cover_image}
          key={movie.id}
          genres={movie.genres}
          desc={movie.synopsis}
        />
      );
    });
    return movies;
  };
  

  render(){
      console.log("Render :" + this.state.movieData)
      return (
        <div className="App">
          {this.state.movieData ? this._renderMovies() : 'LOADING ...'}
        </div>
      );
    }
  }


export default App;
