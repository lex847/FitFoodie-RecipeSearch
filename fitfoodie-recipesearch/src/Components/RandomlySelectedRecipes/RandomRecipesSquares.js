import React, { Component } from 'react';

import SweetPotato from './Images/blackbeantaco.jpg';
import PenneArrabiata from './Images/PenneArrabiata.jpeg';
import ButternutSquash from './Images/ButternutSquash.jpg';
import InsanelyEasyVegetarianChili from './Images/InsanelyEasyVegetarianChili.jpg';
import SlowCookerJambalaya from './Images/SlowCookerJambalaya.jpg';
import SlowCookerRoastBeef from './Images/SlowCookerRoastBeef.jpg';
import OldFashionedChickenandNoodles from './Images/Old-FashionedChickenandNoodles.jpg';
import ChiliLimeChickenKabobs from './Images/Chili-LimeChickenKabobs.jpg';
import ChineseFriedRice from './Images/ChineseFriedRice.jpg';
import LentilStuffedPeppers from './Images/StuffedPeppers.jpg';
import AsianBeefwithSnowPeas from './Images/AsianBeefwithSnowPeas.jpg';
import BroccoliSalad from './Images/BroccoliSalad.jpg';
import './RandomRecipesSquares.css';

class RandomRecipesSquares extends Component {
    render(){
        return(
            <div className="random-recipes-container">
                <div className="row">
                    <div className="col-md-12">
                        <h1 className="title-random"><b>Recipes of the day</b></h1>
                        <hr />
                    </div>
                </div>
                <div className="row row-margin">
                    <div className="col-md-4">
                        <div className="container">
                            <a href="">
                                <img src={SweetPotato} alt="Sample picture000" />
                            </a>
                            <button className="btn btn-info">More Details</button>
                            <h3>Sweet Potato and Black Bean Tacos</h3><br/>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="container">
                            <a href="">
                                <img src={PenneArrabiata} alt="Sample picture1" />
                            </a>
                            <button className="btn btn-info">More Details</button>
                            <h3>Penne Arrabiata</h3>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="container">
                            <a href="">
                                <img src={ButternutSquash} alt="Sample picture2" />
                            </a>
                            <button className="btn btn-info">More Details</button>
                            <h3>Apple- & Fig-Stuffed Butternut Squash</h3>
                        </div>
                    </div>
                </div>
                <div className="row row-margin">
                    <div className="col-md-4">
                        <div className="container">
                            <a href="">
                                <img src={InsanelyEasyVegetarianChili} alt="Sample picture3" />
                            </a>
                            <button className="btn btn-info">More Details</button>
                            <h3>Insanely Easy Vegetarian Chili</h3>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="container">
                            <a href="">
                                <img src={SlowCookerJambalaya} alt="Sample picture4" />
                            </a>
                            <button className="btn btn-info">More Details</button>
                            <h3>Slow Cooker Jambalaya</h3>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="container">
                            <a href="">
                                <img src={SlowCookerRoastBeef} alt="Sample picture5" />
                            </a>
                            <button className="btn btn-info">More Details</button>
                            <h3>Slow Cooker Roast Beef</h3>
                        </div>
                    </div>
                </div>
                <div className="row row-margin">
                    <div className="col-md-4">
                        <div className="container">
                            <a href="">
                                <img src={OldFashionedChickenandNoodles} alt="Sample picture6" />
                            </a>
                            <button className="btn btn-info">More Details</button>
                            <h3>Old-Fashioned Chicken and Noodles</h3>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="container">
                            <a href="">
                                <img src={ChiliLimeChickenKabobs} alt="Sample picture7" />
                            </a>
                            <button className="btn btn-info">More Details</button>
                            <h3>Chili-Lime Chicken Kabobs</h3>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="container">
                            <a href="">
                                <img src={ChineseFriedRice} alt="Sample picture8" />
                            </a>
                            <button className="btn btn-info">More Details</button>
                            <h3>Chinese Fried Rice</h3>
                        </div>
                    </div>
                </div>
                <div className="row row-margin">
                    <div className="col-md-4">
                        <div className="container">
                            <a href="">
                                <img src={LentilStuffedPeppers} alt="Sample picture9" />
                            </a>
                            <button className="btn btn-info">More Details</button>
                            <h3>Lentil Stuffed Peppers</h3>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="container">
                            <a href="">
                                <img src={AsianBeefwithSnowPeas} alt="Sample picture10" />
                            </a>
                            <button className="btn btn-info">More Details</button>
                            <h3>Asian Beef with Snow Peas</h3>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="container">
                            <a href="">
                                <img src={BroccoliSalad} alt="Sample picture11" />
                            </a>
                            <button className="btn btn-info">More Details</button>
                            <h3>Broccoli Salad</h3>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default RandomRecipesSquares;
