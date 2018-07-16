import React, { Component } from 'react';
import './SearchBar.css';

class SearchBar extends Component {
    render(){
        return(
            <div className="searchbar-container">
                <div className="row">
                    <div className="col-md-12">
                        <form className="navbar-form ">
                            <div className="form-group">
                                <div className="input-group">
                                    <input className="form-control" type="text" placeholder="Search a recipe or by ingredient" />
                                    <button className="btn btn-info input-group-addon">
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
