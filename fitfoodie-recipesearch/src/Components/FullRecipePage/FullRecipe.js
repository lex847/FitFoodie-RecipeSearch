import React, { Component } from 'react';
import './FullRecipe.css';

class FullRecipe extends Component {
    render(){
        let recipe = this.props.detailedRecipe.recipe
        return(
            <div className="FullRecipe-container">
                <div className="row">
                    <div className="col-sm-2">
                    </div>
                    <div className="col-sm-offset-2 col-sm-4">
                        <h1 className="title-box">{recipe.label}</h1><hr />
                        <p>Preperation Time: {recipe.totalTime} mins</p>
                        <p>Health Lables: </p>
                            <ul>
                                {
                                    recipe.healthLabels.map((label) =>
                                    <li>{label}</li>
                                    )
                                }
                            </ul>
                        <hr />
                        <button className="btn btn-random"><i className="far fa-heart"></i></button>
                    </div>
                    <div className="col-sm-4">
                        <img src={recipe.image} alt={recipe.label} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-2"></div>
                    <div className="col-sm-offset-2 col-sm-4">
                        <h1 className="title-box">Ingredients</h1><hr />
                            <ul>
                            {
                                recipe.ingredientLines.map((ingredient) =>
                                    <li>{ingredient}</li>
                                )
                            }

                            </ul>
                        <h1 className="title-box">Directions</h1>
                            <p>Get full recipe at <a href={recipe.url} target="#">{recipe.source}</a></p>
                        <hr />
                    </div>
                    <div className="col-sm-4">
                        <h1 className="title-box"><b>Nutritional Facts</b></h1><hr />
                        <p>Servings: {recipe.yield}</p>
                        <p>Total Calories: {Math.floor(recipe.calories)}</p><hr />
                        <p>Fat: {Math.floor(recipe.totalNutrients.FAT.quantity)}{recipe.totalNutrients.FAT.unit}</p>
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
