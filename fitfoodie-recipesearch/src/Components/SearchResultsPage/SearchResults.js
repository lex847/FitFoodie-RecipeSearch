import React, { Component } from 'react';
import './SearchResults.css';

class SearchResults extends Component {
    constructor(props){
        super(props);
        this.state = {
        }
    }

    render(){
        return(
            <div className="Searchresults-container">
                <div className="row">
                    <div className="col-md-3">
                    </div>
                    <div className="col-sm-6">
                        <ul className="pagination">
                            <li className="page-link" >
                                <a className="page-link" href="" aria-label="Next">
                                    <span aria-hidden="true">&laquo;</span>
                                </a>
                            </li>
                            <li className="page-link" ><a className="page-link" href="">1</a></li>
                            <li className="page-link" ><a className="page-link" href="">2</a></li>
                            <li className="page-link" ><a className="page-link" href="">3</a></li>
                            <li className="page-link" ><a className="page-link" href="">4</a></li>
                            <li className="page-link" ><a className="page-link" href="">5</a></li>
                            <li className="page-link" ><a className="page-link" href="">6</a></li>
                            <li className="page-link" ><a className="page-link" href="">7</a></li>
                            <li className="page-link" ><a className="page-link" href="">8</a></li>
                            <li className="page-link" ><a className="page-link" href="">9</a></li>
                            <li className="page-link" >
                                <a className="page-link" href="" aria-label="Next">
                                    <span aria-hidden="true">&raquo;</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                    </div>
                </div>
                <div className="row row-margin">
                    <div className="col-sm-4">
                    </div>
                        {this.props.squareInfo}
                    <div className="col-sm-4">
                    </div>
                </div>
            </div>
        )
    }
}

export default SearchResults;
