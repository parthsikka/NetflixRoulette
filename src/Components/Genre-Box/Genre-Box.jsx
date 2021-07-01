import React, { Component } from 'react';
import fetch from "fetch" ;

class GenreBox extends Component {
    state = { 
        genres : [
            {
              "id": 28,
              "name": "Action"
            },
            {
              "id": 12,
              "name": "Adventure"
            },
            {
              "id": 16,
              "name": "Animation"
            },
            {
              "id": 35,
              "name": "Comedy"
            },
            {
              "id": 80,
              "name": "Crime"
            },
            {
              "id": 99,
              "name": "Documentary"
            },
            {
              "id": 18,
              "name": "Drama"
            },
            {
              "id": 10751,
              "name": "Family"
            },
            {
              "id": 14,
              "name": "Fantasy"
            },
            {
              "id": 36,
              "name": "History"
            },
            {
              "id": 27,
              "name": "Horror"
            },
            {
              "id": 10402,
              "name": "Music"
            },
            {
              "id": 9648,
              "name": "Mystery"
            },
            {
              "id": 10749,
              "name": "Romance"
            },
            {
              "id": 878,
              "name": "Science Fiction"
            },
            {
              "id": 10770,
              "name": "TV Movie"
            },
            {
              "id": 53,
              "name": "Thriller"
            },
            {
              "id": 10752,
              "name": "War"
            },
            {
              "id": 37,
              "name": "Western"
            }
          ],
        currGenre : "",
        currGenreKey : ""
     }
    


     onGenreClick = (e) =>{
        console.log(e);
        this.props.setGenre(e.target.innerText,e.target.id) ;
        this.setState({
            currGenre : e.target.innerText,
            currGenreKey : e.target.id 
        })
      
     };
     


    render() { 
        return (  <div>
            <div>Select the Genre : </div>
            {this.state.genres.map((genreObject) =>{
                //<GenreElement></GenreElement>
                return (<button className="genre btn btn-primary" id={genreObject.id} key={genreObject.id} onClick={this.onGenreClick}>{genreObject.name}</button>) ;
            })}
            </div>        
            );
    }
}
 
export default GenreBox;