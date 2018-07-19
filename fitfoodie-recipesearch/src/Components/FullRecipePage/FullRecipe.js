import React, { Component } from 'react';
import './FullRecipe.css';

class FullRecipe extends Component {
    render(){
        let recipe = this.props.detailedRecipe.recipe
        return(
            <div className="FullRecipe-container">
                <div className="row">
                    <div className="col-sm-2">
                        <button className="btn btn-info">Back to search results </button>
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
                        {
                            !recipe.totalNutrients.FAT
                        ?
                        null
                        :
                        <p>Fat: {Math.floor(recipe.totalNutrients.FAT.quantity)}{recipe.totalNutrients.FAT.unit}</p>
                        }
                        {
                            !recipe.totalNutrients.FASAT
                        ?
                        null
                        :
                        <p>Saturated: {Math.floor(recipe.totalNutrients.FASAT.quantity)}{recipe.totalNutrients.FASAT.unit}</p>
                        }
                        {
                            !recipe.totalNutrients.FATRN
                        ?
                        null
                        :
                        <p>Trans: {Math.floor(recipe.totalNutrients.FATRN.quantity)}{recipe.totalNutrients.FATRN.unit}</p>
                        }
                        {
                            !recipe.totalNutrients.FAMS
                        ?
                        null
                        :
                        <p>Monounsaturated: {Math.floor(recipe.totalNutrients.FAMS.quantity)}{recipe.totalNutrients.FAMS.unit}</p>
                        }
                        {
                            !recipe.totalNutrients.FAPU
                        ?
                        null
                        :
                        <p>Polyunsaturated: {Math.floor(recipe.totalNutrients.FAPU.quantity)}{recipe.totalNutrients.FAPU.unit}</p>
                        }
                        {
                            !recipe.totalNutrients.CHOCDF
                        ?
                        null
                        :
                        <p>Carbs: {Math.floor(recipe.totalNutrients.CHOCDF.quantity)}{recipe.totalNutrients.CHOCDF.unit}</p>
                        }
                        {
                            !recipe.totalNutrients.FIBTG
                        ?
                        null
                        :
                        <p>Fiber: {Math.floor(recipe.totalNutrients.FIBTG.quantity)}{recipe.totalNutrients.FIBTG.unit}</p>
                        }
                        {
                            !recipe.totalNutrients.SUGAR
                        ?
                        null
                        :
                        <p>Sugars: {Math.floor(recipe.totalNutrients.SUGAR.quantity)}{recipe.totalNutrients.SUGAR.unit}</p>
                        }
                        {
                            !recipe.totalNutrients.PROCNT
                        ?
                        null
                        :
                        <p>Protien: {Math.floor(recipe.totalNutrients.PROCNT.quantity)}{recipe.totalNutrients.PROCNT.unit}</p>
                        }
                        {
                            !recipe.totalNutrients.CHOLE
                        ?
                        null
                        :
                        <p>Cholesterol: {Math.floor(recipe.totalNutrients.CHOLE.quantity)}{recipe.totalNutrients.CHOLE.unit}</p>
                        }
                        {
                            !recipe.totalNutrients.NA
                        ?
                        null
                        :
                        <p>Sodium: {Math.floor(recipe.totalNutrients.NA.quantity)}{recipe.totalNutrients.NA.unit}</p>
                        }
                        {
                            !recipe.totalNutrients.CA
                        ?
                        null
                        :
                        <p>Calcium: {Math.floor(recipe.totalNutrients.CA.quantity)}{recipe.totalNutrients.CA.unit}</p>
                        }
                        {
                            !recipe.totalNutrients.MG
                        ?
                        null
                        :
                        <p>Magnesium: {Math.floor(recipe.totalNutrients.MG.quantity)}{recipe.totalNutrients.MG.unit}</p>
                        }
                        {
                            !recipe.totalNutrients.K
                        ?
                        null
                        :
                        <p>Potassium: {Math.floor(recipe.totalNutrients.K.quantity)}{recipe.totalNutrients.K.unit}</p>
                        }
                        {
                            !recipe.totalNutrients.FE
                        ?
                        null
                        :
                        <p>Iron: {Math.floor(recipe.totalNutrients.FE.quantity)}{recipe.totalNutrients.FE.unit}</p>
                        }
                        {
                            !recipe.totalNutrients.ZN
                        ?
                        null
                        :
                        <p>Zinc: {Math.floor(recipe.totalNutrients.ZN.quantity)}{recipe.totalNutrients.ZN.unit}</p>
                        }
                        {
                            !recipe.totalNutrients.P
                        ?
                        null
                        :
                        <p>Phosphorus: {Math.floor(recipe.totalNutrients.P.quantity)}{recipe.totalNutrients.P.unit}</p>
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default FullRecipe;
