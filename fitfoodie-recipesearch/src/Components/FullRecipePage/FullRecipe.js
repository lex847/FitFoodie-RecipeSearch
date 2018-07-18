import React, { Component } from 'react';
import './FullRecipe.css';

class FullRecipe extends Component {
    render(){
        return(
            <div className="FullRecipe-container">
                <div className="row">
                    <div className="col-sm-2">
                    </div>
                    <div className="col-sm-offset-2 col-sm-4">
                        <h1 className="title-box">Recipe Title</h1><hr />
                        <p>Preperation Time: 60 mins</p>
                        <p>Health Lables: low-carb,sugar-conscious</p><hr />
                        <button className="btn btn-random"><i className="far fa-heart"></i></button>
                    </div>
                    <div className="col-sm-4">
                        <img src="http://asvs.in/wp-content/uploads/2017/08/dummy.png" alt="sample picture Image" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-2"></div>
                    <div className="col-sm-offset-2 col-sm-4">
                        <h1 className="title-box">Ingredients</h1><hr />
                        <h1 className="title-box">Directions</h1><hr />
                    </div>
                    <div className="col-sm-4">
                        <h1 className="title-box"><b>Nutritional Facts</b></h1><hr />
                        <p>Servings: 6</p>
                        <p>Calories: 378</p><hr />
                        <p>Fat: 6</p>
                        <p>Saturated: 6</p>
                        <p>Trans: 6</p>
                        <p>Monounsaturated: 6</p>
                        <p>polyunsaturated: 6</p>
                        <p>carbs: 6</p>
                        <p>net: 6</p>
                        <p>fiber: 6</p>
                        <p>sugars: 6</p>
                        <p>add sugar: 6</p>
                        <p>Protien: 6</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default FullRecipe;
