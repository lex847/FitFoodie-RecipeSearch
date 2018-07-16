import React, { Component } from 'react';
import './RandomRecipesSquares.css';

class RandomRecipesSquares extends Component {
    render(){
        return(
            <div className="random-recipes-container">
                <div className="row">
                    <div className="col-md-12">
                        <h1>Daily Suggestions:</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <div className="container">
                            <img src="http://asvs.in/wp-content/uploads/2017/08/dummy.png" alt="Sample picture" />
                            <button className="btn"><i className="far fa-heart"></i></button>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="container">
                            <img src="http://asvs.in/wp-content/uploads/2017/08/dummy.png" alt="Sample picture" />
                            <button className="btn"><i className="far fa-heart"></i></button>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="container">
                            <img src="http://asvs.in/wp-content/uploads/2017/08/dummy.png" alt="Sample picture" />
                            <button className="btn"><i className="far fa-heart"></i></button>
                        </div>
                    </div>
                </div>
                <div className="row row-margin">
                    <div className="col-md-4">
                        <div className="container">
                            <img src="http://asvs.in/wp-content/uploads/2017/08/dummy.png" alt="Sample picture" />
                            <button className="btn"><i className="far fa-heart"></i></button>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="container">
                            <img src="http://asvs.in/wp-content/uploads/2017/08/dummy.png" alt="Sample picture" />
                            <button className="btn"><i className="far fa-heart"></i></button>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="container">
                            <img src="http://asvs.in/wp-content/uploads/2017/08/dummy.png" alt="Sample picture" />
                            <button className="btn"><i className="far fa-heart"></i></button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default RandomRecipesSquares;
