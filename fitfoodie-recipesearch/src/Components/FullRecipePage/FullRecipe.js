import React, { Component } from 'react';
import './FullRecipe.css';

class FullRecipe extends Component {
    constructor(props){
        super(props);
        // this.favoriteButtonHandleClick = this.favoriteButtonHandleClick.bind(this);
    }

    // favoriteButtonHandleClick = () => {
    //     console.log("heart button clicked");
    //     let newFaves = this.props.hits
    //     console.log(this.props.hits);
    //     this.setState({
    //         usersFavRecipes: newFaves
    //     })
    // }
    render(){
        let recipe = this.props.detailedRecipe.recipe
        return(
            <div className="FullRecipe-container">
                <div className="row">
                    <div className="col-sm-2">
                        <button
                            onClick={this.props.backButtonPressed}
                            className="btn btn-info">Back to search results
                        </button>
                    </div>
                    <div className="col-sm-offset-2 col-sm-4 nutritional-facts">
                        <h1 className="title-box">{recipe.label}</h1><hr />
                        <p>Preperation Time: {recipe.totalTime} mins</p>
                        <p>Health Lables: </p>
                            <ul className="nutrition-text">
                                {
                                    recipe.healthLabels.map((label) =>
                                    <li>{label}</li>
                                    )
                                }
                            </ul>
                        <hr />
                    </div>
                    <div className="col-sm-4">
                        <img className="food-image" src={recipe.image} alt={recipe.label} />
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
                        <h1 className="title-box nutrition-text"><b>Nutritional Facts</b></h1><hr />
                        <p className="nutrition-text">Servings: {recipe.yield}</p>
                        <p className="nutrition-text">Total Calories: {Math.floor(recipe.calories)}</p><hr />
                        {
                            !recipe.totalNutrients.FAT
                        ?
                        null
                        :
                        <p className="nutrition-text">Fat: {Math.floor(recipe.totalNutrients.FAT.quantity)}{recipe.totalNutrients.FAT.unit}</p>
                        }
                        {
                            !recipe.totalNutrients.FASAT
                        ?
                        null
                        :
                        <p className="nutrition-text">Saturated: {Math.floor(recipe.totalNutrients.FASAT.quantity)}{recipe.totalNutrients.FASAT.unit}</p>
                        }
                        {
                            !recipe.totalNutrients.FATRN
                        ?
                        null
                        :
                        <p className="nutrition-text">Trans: {Math.floor(recipe.totalNutrients.FATRN.quantity)}{recipe.totalNutrients.FATRN.unit}</p>
                        }
                        {
                            !recipe.totalNutrients.FAMS
                        ?
                        null
                        :
                        <p className="nutrition-text">Monounsaturated: {Math.floor(recipe.totalNutrients.FAMS.quantity)}{recipe.totalNutrients.FAMS.unit}</p>
                        }
                        {
                            !recipe.totalNutrients.FAPU
                        ?
                        null
                        :
                        <p className="nutrition-text">Polyunsaturated: {Math.floor(recipe.totalNutrients.FAPU.quantity)}{recipe.totalNutrients.FAPU.unit}</p>
                        }
                        {
                            !recipe.totalNutrients.CHOCDF
                        ?
                        null
                        :
                        <p className="nutrition-text">Carbs: {Math.floor(recipe.totalNutrients.CHOCDF.quantity)}{recipe.totalNutrients.CHOCDF.unit}</p>
                        }
                        {
                            !recipe.totalNutrients.FIBTG
                        ?
                        null
                        :
                        <p className="nutrition-text">Fiber: {Math.floor(recipe.totalNutrients.FIBTG.quantity)}{recipe.totalNutrients.FIBTG.unit}</p>
                        }
                        {
                            !recipe.totalNutrients.SUGAR
                        ?
                        null
                        :
                        <p className="nutrition-text">Sugars: {Math.floor(recipe.totalNutrients.SUGAR.quantity)}{recipe.totalNutrients.SUGAR.unit}</p>
                        }
                        {
                            !recipe.totalNutrients.PROCNT
                        ?
                        null
                        :
                        <p className="nutrition-text">Protien: {Math.floor(recipe.totalNutrients.PROCNT.quantity)}{recipe.totalNutrients.PROCNT.unit}</p>
                        }
                        {
                            !recipe.totalNutrients.CHOLE
                        ?
                        null
                        :
                        <p className="nutrition-text">Cholesterol: {Math.floor(recipe.totalNutrients.CHOLE.quantity)}{recipe.totalNutrients.CHOLE.unit}</p>
                        }
                        {
                            !recipe.totalNutrients.NA
                        ?
                        null
                        :
                        <p className="nutrition-text">Sodium: {Math.floor(recipe.totalNutrients.NA.quantity)}{recipe.totalNutrients.NA.unit}</p>
                        }
                        {
                            !recipe.totalNutrients.CA
                        ?
                        null
                        :
                        <p className="nutrition-text">Calcium: {Math.floor(recipe.totalNutrients.CA.quantity)}{recipe.totalNutrients.CA.unit}</p>
                        }
                        {
                            !recipe.totalNutrients.MG
                        ?
                        null
                        :
                        <p className="nutrition-text">Magnesium: {Math.floor(recipe.totalNutrients.MG.quantity)}{recipe.totalNutrients.MG.unit}</p>
                        }
                        {
                            !recipe.totalNutrients.K
                        ?
                        null
                        :
                        <p className="nutrition-text">Potassium: {Math.floor(recipe.totalNutrients.K.quantity)}{recipe.totalNutrients.K.unit}</p>
                        }
                        {
                            !recipe.totalNutrients.FE
                        ?
                        null
                        :
                        <p className="nutrition-text">Iron: {Math.floor(recipe.totalNutrients.FE.quantity)}{recipe.totalNutrients.FE.unit}</p>
                        }
                        {
                            !recipe.totalNutrients.ZN
                        ?
                        null
                        :
                        <p className="nutrition-text">Zinc: {Math.floor(recipe.totalNutrients.ZN.quantity)}{recipe.totalNutrients.ZN.unit}</p>
                        }
                        {
                            !recipe.totalNutrients.P
                        ?
                        null
                        :
                        <p className="nutrition-text">Phosphorus: {Math.floor(recipe.totalNutrients.P.quantity)}{recipe.totalNutrients.P.unit}</p>
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default FullRecipe;
