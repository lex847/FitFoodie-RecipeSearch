import React, { Component } from 'react';
import FoodLandingPagePic from './Images/food.png';
import './HomePage.css';

class HomePage extends Component {
    render(){
        return(
            <div>
                <div class="jumbotron">
                    <img src={FoodLandingPagePic} alt={Food} />
                </div>
            </div>
        )
    }
}

export default HomePage;
