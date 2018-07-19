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
                        <p>Saturated: {Math.floor(recipe.totalNutrients.FASAT.quantity)}{recipe.totalNutrients.FASAT.unit}</p>
                        <p>Trans: {Math.floor(recipe.totalNutrients.FATRN.quantity)}{recipe.totalNutrients.FATRN.unit}</p>
                        <p>Monounsaturated: {Math.floor(recipe.totalNutrients.FAMS.quantity)}{recipe.totalNutrients.FAMS.unit}</p>
                        <p>Polyunsaturated: {Math.floor(recipe.totalNutrients.FAPU.quantity)}{recipe.totalNutrients.FAPU.unit}</p>
                        <p>Carbs: {Math.floor(recipe.totalNutrients.CHOCDF.quantity)}{recipe.totalNutrients.CHOCDF.unit}</p>
                        <p>Fiber: {Math.floor(recipe.totalNutrients.FIBTG.quantity)}{recipe.totalNutrients.FIBTG.unit}</p>
                        <p>Sugars: {Math.floor(recipe.totalNutrients.SUGAR.quantity)}{recipe.totalNutrients.SUGAR.unit}</p>
                        <p>Protien: {Math.floor(recipe.totalNutrients.PROCNT.quantity)}{recipe.totalNutrients.PROCNT.unit}</p>
                        <p>Cholesterol: {Math.floor(recipe.totalNutrients.CHOLE.quantity)}{recipe.totalNutrients.CHOLE.unit}</p>
                        <p>Sodium: {Math.floor(recipe.totalNutrients.NA.quantity)}{recipe.totalNutrients.NA.unit}</p>
                        <p>Calcium: {Math.floor(recipe.totalNutrients.CA.quantity)}{recipe.totalNutrients.CA.unit}</p>
                        <p>Magnesium: {Math.floor(recipe.totalNutrients.MG.quantity)}{recipe.totalNutrients.MG.unit}</p>
                        <p>Potassium: {Math.floor(recipe.totalNutrients.K.quantity)}{recipe.totalNutrients.K.unit}</p>
                        <p>Iron: {Math.floor(recipe.totalNutrients.FE.quantity)}{recipe.totalNutrients.FE.unit}</p>
                        <p>Zinc: {Math.floor(recipe.totalNutrients.ZN.quantity)}{recipe.totalNutrients.ZN.unit}</p>
                        <p>Phosphorus: {Math.floor(recipe.totalNutrients.P.quantity)}{recipe.totalNutrients.P.unit}</p>

                    </div>
                </div>
            </div>
        )
    }
}

export default FullRecipe;
