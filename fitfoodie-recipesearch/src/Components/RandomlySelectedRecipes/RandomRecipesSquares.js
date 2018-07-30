import React, { Component } from 'react';
import './RandomRecipesSquares.css';

class RandomRecipesSquares extends Component {
    constructor(props){
        super(props);
        this.state = {
            dailyRecipeSquareClicked: '',
            isADailyRecipeLinkedClicked: false
        }
        this.dailyRecipeSquare = this.dailyRecipeSquare.bind(this);
    }

    dailyRecipeSquare = (ingredient) => {
        console.log(ingredient);
        var { dailyRecipeSquareClicked, isADailyRecipeLinkedClicked } = this.state
        this.setState({
            dailyRecipeSquareClicked: ingredient,
            isADailyRecipeLinkedClicked: true
        })
    }

    render(){
        let dailySquares = ['Vegan Bean Taco Filling', 'Brooklyn Penne Arrabiata', 'Stuffed Butternut Squash', 'Insanely Easy Vegetarian Chili', 'Slow Cooker Jambalaya', 'Slow Cooker Roast Beef', 'Old-Fashioned Chicken and Noodles', 'Chili-Lime Chicken Kabobs', 'Chinese Chicken Fried Rice', 'Stuffed Peppers', 'Asian Beef with Snow Peas', 'Red Broccoli Salad' ]
        const squareNames = dailySquares.map((name) => {
            return(
                <div className="col-md-4">
                    <div className="container">
                        <a href="">
                            <img
                                onClick={(event) => this.props.quickLinkSearch(event, {name})}
                                src="http://asvs.in/wp-content/uploads/2017/08/dummy.png"
                                alt="Sample picture000" />
                        </a>
                        <button className="btn btn-random"><i className="far fa-heart"></i></button>
                        <h3>{name}</h3><br/>
                    </div>
                </div>
            )
        })
        return(
            <div className="random-recipes-container">
                <div className="row">
                    <div className="col-md-12">
                        <h1>Recipes of the day</h1>
                    </div>
                </div>
                <div className="row row-margin">
                        {squareNames}
                </div>
            </div>
        )
    }
}

export default RandomRecipesSquares;
