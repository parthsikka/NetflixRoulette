import React, { Component } from 'react';
import { IMAGE_URL } from '../../API/secrets';
import "../Movie/movie.css"
class Movie extends Component {
    state = {  }
    render() { 
        let {poster_path, title, vote_average} = this.props.movie ;
        let posterPath = IMAGE_URL + poster_path ;
        return ( <div className="movie-item">
            <img src={posterPath} alt="" />
            <div className="movie-info">
            <div className="movie-name">{title}</div>
            <div className="rating">{vote_average}</div>
            </div>
        </div> );
    }
}
 
export default Movie;