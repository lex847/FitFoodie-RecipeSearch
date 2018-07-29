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
            quickLinkClicked: '',
            detailedRecipe: {},
            isDetailedRecipePressed: false,
            isSearchButtonPressed: false,
            isBackButtonPressed: false
        }
        this.userInputHandleChange = this.userInputHandleChange.bind(this);
        this.searchRecipesUserInput = this.searchRecipesUserInput.bind(this);
        this.backButtonPressed = this.backButtonPressed.bind(this);
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
                isBackButtonPressed: false,
                hits: responseJSON.hits
            })
            console.log(responseJSON);
        }catch(e){
            console.log(`We are in error`);
            console.log(e);
        }
    }
    //NOTE to self****you have to use async with new fetch request syntax****
    quickLinkSearch = async (event, name) => {
        event.preventDefault()
        let { recipeSearchInput, isSearchButtonPressed, hits } = this.state
        let APPID = '4a967418'
        let APPKEY = 'ea1f39ad3a37a863f0efdc88e0cc30bb'
        let URL = `https://api.edamam.com/search?q=${name}&app_id=${APPID}&app_key=${APPKEY}&from=0&to=50&count=50`
        let config = {
            method: 'GET'
        }
        //ES6 syntax
        try {
            let response = await fetch(URL, config);
            let responseJSON = await response.json();
            this.setState({
                isSearchButtonPressed: true,
                isBackButtonPressed: false,
                hits: responseJSON.hits
            })
            console.log(responseJSON);
        }catch(e){
            console.log(`We are in error`);
            console.log(e);
        }
    }

    moreDetails = (index) => {
        console.log(index);
        console.log(this.state.hits[index]);
        this.setState({
            detailedRecipe: this.state.hits[index],
            isDetailedRecipePressed: true,
            isBackButtonPressed: false
        })
    }

    backButtonPressed = () => {
        console.log('back button pressed');
        this.setState({
            isBackButtonPressed: true,
            isDetailedRecipePressed: false
        })
    }

    render() {
        return (
            <div className="App">
                <NavBar />
                <SearchBar inputField={this.userInputHandleChange} searchButton={this.searchRecipesUserInput}/>
                <div>
                    {
                        this.state.isSearchButtonPressed
                        ?
                            this.state.isDetailedRecipePressed
                            ?
                                !this.state.isBackButtonPressed
                                ?
                                <FullRecipe backButtonPressed={this.backButtonPressed} detailedRecipe={this.state.detailedRecipe} />
                            :
                            <SearchResultsPage userInput={this.state.recipeSearchInput} moreDetails={this.moreDetails} hits={this.state.hits}/>
                        :
                        <SearchResultsPage userInput={this.state.recipeSearchInput} moreDetails={this.moreDetails} hits={this.state.hits}/>
                        :
                            <div>
                                <QuickLinks quickLinkSearch={this.quickLinkSearch} />
                                <RandomSelectedRecipes />
                            </div>
                    }
                </div>
                <Footer />
            </div>
        );
    }
}

export default App;
