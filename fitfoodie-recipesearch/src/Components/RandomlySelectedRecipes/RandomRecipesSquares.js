import React, { Component } from 'react';
import FullRecipe from '../FullRecipePage/FullRecipe.js';
import './RandomRecipesSquares.css';

class RandomRecipesSquares extends Component {
    constructor(props){
        super(props);
        this.state = {
            hits: [],
            detailedRecipe: {},
            showDetails: false,
            isBackButtonPressed: false
        }
        this.moreDetails = this.moreDetails.bind(this);
    }

    moreDetails = (index) => {
        console.log(index);
        console.log(this.state.hits[index]);
        this.setState({
            detailedRecipe: this.state.hits[index],
            showDetails: true,
            isBackButtonPressed: false
        })
    }

    backButtonPressed = () => {
        console.log('back button pressed');
        this.setState({
            isBackButtonPressed: true,
            showDetails: false
        })
    }

    componentWillMount = async () => {
            let { hits } = this.state
            let APPID = '4a967418'
            let APPKEY = 'ea1f39ad3a37a863f0efdc88e0cc30bb'
            let URL = `https://api.edamam.com/search?q=best-food&app_id=${APPID}&app_key=${APPKEY}&from=0&to=50&count=50`
            let config = {
                method: 'GET'
            }
            //ES6 syntax
            try {
                let response = await fetch(URL, config);
                let responseJSON = await response.json();
                this.setState({
                    hits: responseJSON.hits

                })
                console.log(responseJSON);
            }catch(e){
                console.log(`We are in error`);
                console.log(e);
            }
        }

    render(){
        const randomSquareinfo = this.state.hits.map((info, index) => {
            return(
                <div className="col-md-4">
                    <div className="container">
                        <img src={info.recipe.image} />
                        <button
                            onClick={() => this.moreDetails(index)}
                            className="btn btn-info">More Details</button>
                        <h3>{info.recipe.label}</h3><br/>
                    </div>
                </div>
            )
        })
        return(
            <div className="random-recipes-container">
                <div>
                    {
                        this.state.showDetails
                        ?
                        <FullRecipe backButtonPressed={this.backButtonPressed} detailedRecipe={this.state.detailedRecipe} />
                        :
                        <div>
                            <div className="row">
                                <div className="col-md-12">
                                    <h1 className="title-random"><b>Recipes of the day</b></h1>
                                    <hr />
                                </div>
                            </div>
                            <div className="row row-margin">
                                {randomSquareinfo}
                            </div>
                        </div>
                    }
                </div>
            </div>
        )
    }
}

export default RandomRecipesSquares;
