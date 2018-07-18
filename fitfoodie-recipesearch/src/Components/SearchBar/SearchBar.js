import React, { Component } from 'react';
import Food from './Images/food.jpg';
import './SearchBar.css';

class SearchBar extends Component {
    constructor(props){
        super(props);
        this.state = {
            recipeSearchInput: ''
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
        event.preventDefault()
        console.log('inside button search click');
        let { recipeSearchInput } = this.state
        let APPID = '4a967418'
        let APPKEY = 'ea1f39ad3a37a863f0efdc88e0cc30bb'

        let URL = `https://api.edamam.com/search?q=${recipeSearchInput}&app_id=${APPID}&app_key=${APPKEY}&count=50`
        let config = {
            method: 'GET'
        }

        //ES6 syntax
        try {
            let response = await fetch(URL, config);
            let responseJSON = await response.json();
            console.log(responseJSON);
        }catch(e){
            console.log(`We are in error`);
            console.log(e);
        }

        // fetch(URL, config)
        // .then((response) => {
        //   return response.json()
        // })
        // .then((responseJSON) => {
        //     console.log(responseJSON);
        // })
        // .catch((error) => {
        //     console.log(error);
        //     console.log("Something went wrong with first call");
        // })
        // .catch((err) => {
        //     console.log(err);
        //     console.log(`something wrong with promise`);
        // })

    }

    // searchRecipesUserInput = (event) => {
    //     event.preventDefault()
    //     console.log('inside button search click');
    //     let { recipeSearchInput } = this.state
    //     let APPID = '4a967418'
    //     let APPKEY = 'ea1f39ad3a37a863f0efdc88e0cc30bb'
    //
    //     let URL = `https://api.edamam.com/search?q=${recipeSearchInput}&app_id=${APPID}&app_key=${APPKEY}&count=50`
    //     let config = {
    //         method: 'GET'
    //     }
    //
    //     fetch(URL, config)
    //     .then((response) => {
    //       console.log(response);
    //     })
    //     .catch((error) => {
    //         console.log(error);
    //         console.log("Something went wrong");
    //     })
    //
    // }
    render(){
        return(
            <div className="searchbar-container">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="jumbotron">
                            <img  className="jumbotron-pic" src={Food} alt="food" />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <form className="navbar-form">
                            <div className="form-group">
                                <div className="input-group">
                                    <input
                                        onChange={this.userInputHandleChange}
                                        className="form-control"
                                        type="text"
                                        placeholder="Search recipes or ingredient" />
                                    <button
                                        onClick={this.searchRecipesUserInput}
                                        className="btn btn-info input-group-addon">
                                        <i className="fas fa-search"></i>
                                  </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default SearchBar;
