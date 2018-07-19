import React, { Component } from 'react';
import NavBar from './Components/NavBar/NavBar.js';
import SearchBar from './Components/SearchBar/SearchBar.js';
import QuickLinks from './Components/QuickLinkCarousel/QuickLinks.js';
import RandomSelectedRecipes from './Components/RandomlySelectedRecipes/RandomRecipesSquares.js';
import Footer from './Components/Footer/Footer.js';
import SearchResultsPage from './Components/SearchResultsPage/SearchResults.js';
import FullRecipe from './Components/FullRecipePage/FullRecipe.js';
import './App.css';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            recipeSearchInput: '',
            hits: [],
            isSearchButtonPressed: false,
            isSearchSquarePressed: false,
            isQuickSearchCirclePressed: false
        }
        this.userInputHandleChange = this.userInputHandleChange.bind(this);
        this.searchRecipesUserInput = this.searchRecipesUserInput.bind(this);
    }

    userInputHandleChange = (event) => {
        this.setState({
            recipeSearchInput: event.target.value
        })
    }

    searchRecipesUserInput = async (event) => {
        //prevents page from reloading after search button is clicked since this
        //code is within a form tag.
        event.preventDefault()
        let { recipeSearchInput, isSearchButtonPressed, hits } = this.state
        let APPID = '4a967418'
        let APPKEY = 'ea1f39ad3a37a863f0efdc88e0cc30bb'
        let URL = `https://api.edamam.com/search?q=${recipeSearchInput}&app_id=${APPID}&app_key=${APPKEY}&from=0&to=50&count=50`
        let config = {
            method: 'GET'
        }
        //ES6 syntax
        try {
            let response = await fetch(URL, config);
            let responseJSON = await response.json();
            this.setState({
                isSearchButtonPressed: true,
                hits: responseJSON.hits
            })
            console.log(responseJSON);
        }catch(e){
            console.log(`We are in error`);
            console.log(e);
        }
    }
    //NOTE to self****you have to use async with new fetch request syntax****
    quickLinkSearch = async (event, searchText) => {
        event.preventDefault()
        let { recipeSearchInput, isSearchButtonPressed, hits } = this.state
        let APPID = '4a967418'
        let APPKEY = 'ea1f39ad3a37a863f0efdc88e0cc30bb'
        let URL = `https://api.edamam.com/search?q=${searchText}&app_id=${APPID}&app_key=${APPKEY}&from=0&to=50&count=50`
        let config = {
            method: 'GET'
        }
        //ES6 syntax
        try {
            let response = await fetch(URL, config);
            let responseJSON = await response.json();
            this.setState({
                isSearchButtonPressed: true,
                hits: responseJSON.hits
            })
            console.log(responseJSON);
        }catch(e){
            console.log(`We are in error`);
            console.log(e);
        }
    }

    // Still working on this
    // const FullRecipeInfo = this.state.hits.map((data) => {
    //     return(
    //     <div>
    //         <div className="row">
    //             <div className="col-sm-2">
    //             </div>
    //             <div className="col-sm-offset-2 col-sm-4">
    //                 <h1 className="title-box">{data.recipe.label}</h1><hr />
    //                 <p>Preperation Time: {data.recipe.totalTime}</p>
    //                 <p>Health Lables: {data.recipe.healthLabels}</p><hr />
    //                 <button className="btn btn-random"><i className="far fa-heart"></i></button>
    //             </div>
    //             <div className="col-sm-4">
    //                 <img src={data.recipe.image} alt="sample picture Image" />
    //             </div>
    //         </div>
    //         <div className="row">
    //             <div className="col-sm-2"></div>
    //             <div className="col-sm-offset-2 col-sm-4">
    //                 <h1 className="title-box">Ingredients</h1><hr />
    //                 <h1 className="title-box">Directions</h1><hr />
    //             </div>
    //             <div className="col-sm-4">
    //                 <h1 className="title-box"><b>Nutritional Facts</b></h1><hr />
    //                 <p>Servings: 6</p>
    //                 <p>Calories: 378</p><hr />
    //                 <p>Fat: 6</p>
    //                 <p>Saturated: 6</p>
    //                 <p>Trans: 6</p>
    //                 <p>Monounsaturated: 6</p>
    //                 <p>polyunsaturated: 6</p>
    //                 <p>carbs: 6</p>
    //                 <p>net: 6</p>
    //                 <p>fiber: 6</p>
    //                 <p>sugars: 6</p>
    //                 <p>add sugar: 6</p>
    //                 <p>Protien: 6</p>
    //             </div>
    //         </div>
    //         </div>
    //     )
    // })

    render() {
        const recipeSquares = this.state.hits.map((info) => {
            return(
                <div className="col-md-4">
                    <div className="container">
                        <a href={'/FullRecipe'}>
                            <img src={info.recipe.image}  />
                            <h3>{info.recipe.label}</h3>
                            <p>Servings: {info.recipe.yield}</p>
                        </a>
                    </div>
                </div>
            )
        })
        return (
            <div className="App">
                <NavBar />
                <SearchBar inputField={this.userInputHandleChange} searchButton={this.searchRecipesUserInput}/>
                <div>
                    {this.state.isSearchButtonPressed ?
                        <SearchResultsPage squareInfo={recipeSquares}/>
                        :   <div>
                                <QuickLinks quickLinkSearch={this.quickLinkSearch} />
                                <RandomSelectedRecipes />
                            </div>
                    }
                </div>
                <div>
                    {this.state.isQuickSearchCirclePressed ?
                        <SearchResultsPage squareInfo={recipeSquares}/>
                        :   null
                    }
                </div>
                    <FullRecipe />
                <Footer />
            </div>
        );
    }
}

export default App;
