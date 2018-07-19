import React, { Component } from 'react';
import './SearchResults.css';

class SearchResults extends Component {
    constructor(props){
        super(props);
    }

    // Still working
    // <div className="row">
    //     <div className="col-sm-6">
    //         <ul className="pagination">
    //             <li className="page-link" >
    //                 <a className="page-link" href="" aria-label="Next">
    //                     <span aria-hidden="true">&laquo;</span>
    //                 </a>
    //             </li>
    //             <li className="page-link" ><a className="page-link" href="">1</a></li>
    //             <li className="page-link" ><a className="page-link" href="">2</a></li>
    //             <li className="page-link" ><a className="page-link" href="">3</a></li>
    //             <li className="page-link" ><a className="page-link" href="">4</a></li>
    //             <li className="page-link" ><a className="page-link" href="">5</a></li>
    //             <li className="page-link" ><a className="page-link" href="">6</a></li>
    //             <li className="page-link" ><a className="page-link" href="">7</a></li>
    //             <li className="page-link" ><a className="page-link" href="">8</a></li>
    //             <li className="page-link" ><a className="page-link" href="">9</a></li>
    //             <li className="page-link" >
    //                 <a className="page-link" href="" aria-label="Next">
    //                     <span aria-hidden="true">&raquo;</span>
    //                 </a>
    //             </li>
    //         </ul>
    //     </div>
    // </div>

    render(){
        const recipeSquares = this.props.hits.map((info, index) => {
            return(
                <div className="col-md-4">
                    <div className="container">
                            <img src={info.recipe.image}  />
                            <h3>{info.recipe.label}</h3>
                            <p>Servings: {info.recipe.yield}</p>
                            <button
                                onClick={() => this.props.moreDetails(index)}
                                className="btn btn-info">More details
                            </button>
                    </div>
                </div>
            )
        })
        return(
            <div className="Searchresults-container">
                <div className="row">
                    <div className="col-md-3">
                        <h1>Recipe Search Results</h1>
                    </div>
                    <div className="col-md-3">
                    </div>
                </div>
                <div className="row row-margin">
                    {recipeSquares}
                </div>
            </div>
        )
    }
}

export default SearchResults;
