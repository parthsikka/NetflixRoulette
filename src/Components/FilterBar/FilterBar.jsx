import React, {Component} from 'react';
import "./FilterBar.css";

class IMDB extends Component {
    state = {}
    onRatingClick = (e) =>{
       
        this.props.setRating(e.target.id) ;
    } ;

    onPageValueChange=(e)=>{
        
        this.props.setScanPages(e.target.value) ;
    } ;
    searchClick = (e) =>{
        this.props.searchMovies() ;
    }
    render() {
        return (
            <div class="filterBar">
                
                <div className="PagesLength">
                    <div className="headingText"> Enter the No. of Pages you would like to load in one go(less than 200) : (More Pages imply more time but more movies)</div>
                    <input onChange={this.onPageValueChange} type="text" />
                </div>
                <div className="ratings">
                    <div className="headingText"> IMDB Rating Above : </div>
                    <button className="imdb btn btn-outline-primary" id="6" onClick={this.onRatingClick}> 6 </button>
                    <button className="imdb btn btn-outline-primary" id="7" onClick={this.onRatingClick}> 7 </button>
                    <button className="imdb btn btn-outline-primary" id="8" onClick={this.onRatingClick}> 8 </button>
                    <button className="imdb btn btn-outline-primary" id="9" onClick={this.onRatingClick}> 9 </button>

                </div>
                <div className="SearchButton btn btn-outline-danger" onClick={this.searchClick}> SEARCH </div>
            </div>
        );
    }
}

export default IMDB;
