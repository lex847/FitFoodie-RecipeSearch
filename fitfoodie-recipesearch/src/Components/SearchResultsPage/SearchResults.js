import React, { Component } from 'react';
import './SearchResults.css';

class SearchResults extends Component {
    render(){
        const recipeSquares = this.props.hits.map((info, index) => {
            return(
                <div className="col-md-4">
                    <div className="container">
                            <img src={info.recipe.image}  />
                            <h3>{info.recipe.label}</h3>
                            <p>Servings: {info.recipe.yield}</p>
                            <button
                                onClick={() => this.props.moreDetails(index)}
                                className="btn btn-info">More details
                            </button>
                    </div>
                </div>
            )
        })
        return(
            <div className="Searchresults-container">
                <div className="row">
                    <div className="col-md-4">
                        <h1>Search Results for '{this.props.userInput}'</h1>
                    </div>
                    <div className="col-md-3">
                    </div>
                </div>
                <div className="row row-margin">
                    {recipeSquares}
                </div>
            </div>
        )
    }
}

export default SearchResults;
