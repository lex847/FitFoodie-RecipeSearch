import React, { Component } from 'react';
import './FullRecipe.css';

class FullRecipe extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="FullRecipe-container">
                <div className="row">
                    <div className="col-sm-2">
                    </div>
                    <div className="col-sm-offset-2 col-sm-4">
                        <h1 className="title-box">Recipe Title</h1><hr />
                        <p>Preperation time: 60 mins</p>
                        <p>Health lables: low-carb,sugar-conscious</p><hr />
                        <button className="btn btn-random"><i className="far fa-heart"></i></button>
                    </div>
                    <div className="col-sm-4">
                        <img src="http://asvs.in/wp-content/uploads/2017/08/dummy.png" alt="sample picture Image" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-2"></div>
                    <div className="col-sm-offset-2 col-sm-4">
                        <h1 className="title-box">ingredients</h1><hr />
                    </div>
                    <div className="col-sm-4">
                        <h1 className="title-box"><b>Nutritional Facts</b></h1><hr />
                        <p>Servings: 6</p>
                        <p>Calories: 378</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-2"></div>
                    <div className="col-sm-offset-2 col-sm-4">
                        <h1 className="title-box">Directions</h1><hr />
                    </div>
                    <div className="col-sm-4"></div>
                </div>
            </div>
        )
    }
}

export default FullRecipe;
