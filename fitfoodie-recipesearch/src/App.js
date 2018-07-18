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
    render() {
        return (
            <div className="App">
                <NavBar />
                <SearchBar />
                <QuickLinks />
                <RandomSelectedRecipes />
                <SearchResultsPage />
                <FullRecipe />
                <Footer />
            </div>
        );
    }
}

export default App;
