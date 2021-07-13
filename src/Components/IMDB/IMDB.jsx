import React, {Component} from 'react';
import "./IMDB.css";

class IMDB extends Component {
    state = {
        currRating : 5 ,
    }
    onRatingClick = (e) =>{
        console.log(e) ;
        this.props.setRating(e.target.id) ;
    }
    render() {
        return (
            <div class="IMDB">
                <div className="ratings">
                    <div className="headingText"> IMDB Rating Above : </div>
                    <button className="imdb btn btn-outline-primary" id="1" onClick={this.onRatingClick}> 1 </button>
                    <button className="imdb btn btn-outline-primary" id="2" onClick={this.onRatingClick}> 2 </button>
                    <button className="imdb btn btn-outline-primary" id="3" onClick={this.onRatingClick}> 3 </button>
                    <button className="imdb btn btn-outline-primary" id="4" onClick={this.onRatingClick}> 4 </button>
                    <button className="imdb btn btn-outline-primary" id="5" onClick={this.onRatingClick}> 5 </button>
                    <button className="imdb btn btn-outline-primary" id="6" onClick={this.onRatingClick}> 6 </button>
                    <button className="imdb btn btn-outline-primary" id="7" onClick={this.onRatingClick}> 7 </button>
                    <button className="imdb btn btn-outline-primary" id="8" onClick={this.onRatingClick}> 8 </button>

                </div>
            </div>
        );
    }
}

export default IMDB;
