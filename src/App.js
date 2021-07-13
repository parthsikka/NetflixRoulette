import GenreBox from './Components/Genre-Box/Genre-Box';
import './App.css';
import React, { Component } from 'react';
import Movies from './Components/Movies/movies';
import axios from "axios" ;
import {API_URL, API_KEY} from "../src/API/secrets" ;
import Pagination from "./Components/Pagination/pagination"
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import IMDB from './Components/IMDB/IMDB';

class App extends Component {
  state = { 
    currGenre : "",
    currGenreKey : "",
    movies: [], 
    currPage : 1 ,
    totalPages : [] ,
    imdb : 8 ,
   }

   setGenre = (genre,genreKey) => {
    this.setState({
      currGenre : genre ,
      currGenreKey : genreKey,
      imdb : 1,
    }) ;
    this.loadMovies() ;
   }

   loadMovies = async () =>{

    let data = await axios.get(API_URL + "/discover/movie",{params : {
                api_key: API_KEY,
                page: this.state.currPage,
                with_genres: this.state.currGenreKey ,
    }}) ;
    let pagesCount = data.data.total_pages;
    let pages = [];
        for (let a = 1; a <= pagesCount; a++) {
            pages.push(a);
        }
        let totalMovies = [] ;
        for (let a = 1; a <= 40; a++) {
          let data = await axios.get(API_URL + "/discover/movie",{params : {
            api_key: API_KEY,
            page: a,
            with_genres: this.state.currGenreKey ,
          }}) ;
          for(let a=0 ; a<data.data.results.length ; a++){
            let currmovie = data.data.results[a] ;
            if(currmovie.vote_average > this.state.imdb){
            totalMovies.push(data.data.results[a]) ;
            }
          }  
        } 
        console.log(totalMovies) ;
    this.setState({
      movies : totalMovies,
      // totalPages : pages , 
    }) ;
   }

   nextPage = async () => {
    let data = await axios.get(API_URL + "/discover/movie", {
        params: {
            api_key: API_KEY,
            currPage: this.state.currPage + 1,
            with_genres: this.state.currGenreKey ,
        }
    });
    let moviesData = data.data.results;
    this.setState({
        movies: moviesData,
        currPage: this.state.currPage + 1
    }) ;
    this.loadMovies() ;
}

previousPage = async () => {
    let data = await axios.get(API_URL + "/discover/movie", {
        params: {
            api_key: API_KEY,
            currPage: this.state.currPage - 1,
            with_genres: this.state.currGenreKey ,
        }
    });
    let moviesData = data.data.results;
    this.setState({
        movies: moviesData,
        currPage: this.state.currPage - 1
    }) ;
    this.loadMovies() ;
}

setPage = async (pageCount) => {
    let data = await axios.get(API_URL + "/discover/movie", {
        params: {
            api_key: API_KEY,
            currPage: pageCount,
            with_genres: this.state.currGenreKey ,
        }
    });
    let moviesData = data.data.results;
    this.setState({movies: moviesData, currPage: pageCount}) ;
    this.loadMovies() ;
}


setRating = (i) =>{
  this.setState({
    imdb : i ,
  })
  this.loadMovies() ;
}

  render() { 
    return (
      <Router>
      <div className="App">
      <GenreBox setGenre={this.setGenre}></GenreBox>
      <IMDB setRating={this.setRating}></IMDB>
        {
          this.state.movies.length ?(
            <React.Fragment>
              <Movies movies={this.state.movies}></Movies>
              <Pagination pages={
                                this.state.totalPages
                            }
                            nextPage={
                                this.nextPage
                            }
                            previousPage={
                                this.previousPage
                            }
                            setPage={
                                this.setPage
                        }></Pagination>
              </React.Fragment>
              ) : (
                <h1>
                        Sorry No movies found!</h1>
              )
        }
      </div> 
      </Router>   
    );
  }
}
 
export default App;
