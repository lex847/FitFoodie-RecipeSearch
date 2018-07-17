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
        console.log('inside user input');
        this.setState({
            recipeSearchInput: event.target.value
        })
    }

    searchRecipesUserInput = () => {
        console.log('inside button search click');
        let { recipeSearchInput } = this.state
        let APPID = '4a967418'
        let APPKEY = 'ea1f39ad3a37a863f0efdc88e0cc30bb'

        let URL = `https://api.edamam.com/search?q={recipeSearchInput}&app_id=${APPID}&app_key=${APPKEY}&count=50`
        let config = {
            method: 'GET',
        }

        fetch(URL, config)
        .then((response) => {
          console.log(response);
        .err((error) => {
            console.log("Something went wrong ");
            console.log(error);
        })

    }
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
                        <form className="navbar-form ">
                            <div className="form-group">
                                <div className="input-group">
                                    <input
                                        onChange={() => this.userInputHandleChange()}
                                        className="form-control"
                                        type="text"
                                        placeholder="Search recipes or ingredient" />
                                    <button
                                        onClick={() => this.searchRecipesUserInput()}
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
