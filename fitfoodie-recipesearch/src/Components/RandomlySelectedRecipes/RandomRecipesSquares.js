import React, { Component } from 'react';
import './RandomRecipesSquares.css';

class RandomRecipesSquares extends Component {
    render(){
        return(
            <div className="random-recipes-container">
                <div className="row">
                    <div className="col-md-12">
                        <h1>Recipes of the day</h1>
                    </div>
                </div>
                <div className="row row-margin">
                    <div className="col-md-4">
                        <div className="container">
                            <a href="#">
                                <img src="http://asvs.in/wp-content/uploads/2017/08/dummy.png" alt="Sample picture" />
                            </a>
                            <button className="btn btn-random"><i className="far fa-heart"></i></button>
                            <h3>Vegan Bean Taco Filling</h3><br/>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="container">
                            <a href="#">
                                <img src="http://asvs.in/wp-content/uploads/2017/08/dummy.png" alt="Sample picture" />
                            </a>
                            <button className="btn btn-random"><i className="far fa-heart"></i></button>
                            <h3>Brooklyn Penne Arrabiata</h3>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="container">
                            <a href="#">
                                <img src="http://asvs.in/wp-content/uploads/2017/08/dummy.png" alt="Sample picture" />
                            </a>
                            <button className="btn btn-random"><i className="far fa-heart"></i></button>
                            <h3>Stuffed Butternut Squash</h3>
                        </div>
                    </div>
                </div>
                <div className="row row-margin">
                    <div className="col-md-4">
                        <div className="container">
                            <a href="#">
                                <img src="http://asvs.in/wp-content/uploads/2017/08/dummy.png" alt="Sample picture" />
                            </a>
                            <button className="btn btn-random"><i className="far fa-heart"></i></button>
                            <h3>Insanely Easy Vegetarian Chili</h3>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="container">
                            <a href="#">
                                <img src="http://asvs.in/wp-content/uploads/2017/08/dummy.png" alt="Sample picture" />
                            </a>
                            <button className="btn btn-random"><i className="far fa-heart"></i></button>
                            <h3>Slow Cooker Jambalaya</h3>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="container">
                            <a href="#">
                                <img src="http://asvs.in/wp-content/uploads/2017/08/dummy.png" alt="Sample picture" />
                            </a>
                            <button className="btn btn-random"><i className="far fa-heart"></i></button>
                            <h3>Slow Cooker Roast Beef</h3>
                        </div>
                    </div>
                </div>
                <div className="row row-margin">
                    <div className="col-md-4">
                        <div className="container">
                            <a href="#">
                                <img src="http://asvs.in/wp-content/uploads/2017/08/dummy.png" alt="Sample picture" />
                            </a>
                            <button className="btn btn-random"><i className="far fa-heart"></i></button>
                            <h3>Old-Fashioned Chicken and Noodles</h3>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="container">
                            <a href="#">
                                <img src="http://asvs.in/wp-content/uploads/2017/08/dummy.png" alt="Sample picture" />
                            </a>
                            <button className="btn btn-random"><i className="far fa-heart"></i></button>
                            <h3>Chili-Lime Chicken Kabobs</h3>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="container">
                            <a href="#">
                                <img src="http://asvs.in/wp-content/uploads/2017/08/dummy.png" alt="Sample picture" />
                            </a>
                            <button className="btn btn-random"><i className="far fa-heart"></i></button>
                            <h3>Chinese Chicken Fried Rice</h3>
                        </div>
                    </div>
                </div>
                <div className="row row-margin">
                    <div className="col-md-4">
                        <div className="container">
                            <a href="#">
                                <img src="http://asvs.in/wp-content/uploads/2017/08/dummy.png" alt="Sample picture" />
                            </a>
                            <button className="btn btn-random"><i className="far fa-heart"></i></button>
                            <h3>Stuffed Peppers</h3>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="container">
                            <a href="#">
                                <img src="http://asvs.in/wp-content/uploads/2017/08/dummy.png" alt="Sample picture" />
                            </a>
                            <button className="btn btn-random"><i className="far fa-heart"></i></button>
                            <h3>Asian Beef with Snow Peas</h3>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="container">
                            <a href="#">
                                <img src="http://asvs.in/wp-content/uploads/2017/08/dummy.png" alt="Sample picture" />
                            </a>
                            <button className="btn btn-random"><i className="far fa-heart"></i></button>
                            <h3>Red Broccoli Salad</h3>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default RandomRecipesSquares;