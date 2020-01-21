import React from 'react';
import LinesEllipsis from 'react-lines-ellipsis';
import PropTypes from 'prop-types';


/*class Movie extends React.Component {
    state = {

    };

    _poster = () => {
        return (
            <div className = "poster">
                {this.props.poster}
            </div>
        )
    }

    _subscript = () => {
        return (
            <div>
                <div className = "title">
                    {this.props.title}
                </div>
                <div className = "genres">
                    {this.props.genres}
                </div>
                <div className = "desc">
                    {this.props.desc}
                </div>
            </div>
        )
    }
*/


const Movie = ({poster,title,genres,desc}) => {
    return (
        <div className="Movie">
            <div className="Movie__Column">
                <MoviePoster poster={poster} alt={title} />
            </div>   
            <div className="Movie__Column">
                <h1>{title}</h1>
                <div className="Movie__Genres">
                    {genres.map((genre, index) => <MovieGenre genre={genre} key={index} />)}
                </div>
                <div className="Movie__Synopsis">
                <LinesEllipsis
                    text={desc}
                    maxLine='3'
                    ellipsis='...'
                    trimRight
                    basedOn='letters'
                    />   
                </div>
            </div>
        </div>
    )
}

function MoviePoster({poster, alt}){
    return (
        <img src={poster} alt={alt} title={alt} className="Movie__Poster" />
    )
}

const MovieGenre = ({genre,key}) => {
    return (
        <span className="Movie__Genre">{genre}</span>
    )
}

Movie.propTypes = {
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.array.isRequired,
    desc: PropTypes.string.isRequired
}

MoviePoster.propTypes = {
    poster: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired
}

MovieGenre.propTypes ={
    genre: PropTypes.string.isRequired
}

export default Movie;