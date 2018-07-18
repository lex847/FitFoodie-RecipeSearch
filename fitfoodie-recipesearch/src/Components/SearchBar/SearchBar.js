import React, { Component } from 'react';
import Food from './Images/food.jpg';
import './SearchBar.css';

class SearchBar extends Component {
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
                                        onChange={this.props.inputField}
                                        className="form-control"
                                        type="text"
                                        placeholder="Search recipes or ingredient" />
                                    <button
                                        onClick={this.props.searchButton}
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
