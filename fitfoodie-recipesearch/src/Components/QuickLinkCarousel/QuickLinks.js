import React, { Component } from 'react';
import samplepic from './QuickLinksImages/recipes.png';
import './QuickLinks.css';

class QuickLinks extends Component {
    render(){
        return(
            <div className="quicklinks-container">
                <div className="row">
                    <div className="col-sm-12">
                        <h1 className="quick-links-h1">Quick Recipe search</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div id="carousel">
                            <div className="slide-pic">
                                <a href="#">
                                    <img src={samplepic} className="pic" alt="example" /><br />
                                    <p className="category-title">Chicken</p>
                                </a>
                            </div>
                            <div className="slide-pic">
                                <a href="#">
                                    <img src={samplepic} className="pic" alt="example" /><br />
                                    <p className="category-title">Chicken</p>
                                </a>
                            </div>
                            <div className="slide-pic">
                                <a href="#">
                                    <img src={samplepic} className="pic" alt="example" /><br />
                                    <p className="category-title">Chicken</p>
                                </a>
                            </div>
                            <div className="slide-pic">
                                <a href="#">
                                    <img src={samplepic} className="pic" alt="example" /><br />
                                    <p className="category-title">Chicken</p>
                                </a>
                            </div>
                            <div className="slide-pic">
                                <a href="#">
                                    <img src={samplepic} className="pic" alt="example" /><br />
                                    <p className="category-title">Chicken</p>
                                </a>
                            </div>
                            <div className="slide-pic">
                                <a href="#">
                                    <img src={samplepic} className="pic" alt="example" /><br />
                                    <p className="category-title">Chicken</p>
                                </a>
                            </div>
                            <div className="slide-pic">
                                <a href="#">
                                    <img src={samplepic} className="pic" alt="example" /><br />
                                    <p className="category-title">Chicken</p>
                                </a>
                            </div>
                            <div className="slide-pic">
                                <a href="#">
                                    <img src={samplepic} className="pic" alt="example" /><br />
                                    <p className="category-title">Chicken</p>
                                </a>
                            </div>
                            <div className="slide-pic">
                                <a href="#">
                                    <img src={samplepic} className="pic" alt="example" /><br />
                                    <p className="category-title">Chicken</p>
                                </a>
                            </div>
                            <div className="slide-pic">
                                <a href="#">
                                    <img src={samplepic} className="pic" alt="example" /><br />
                                    <p className="category-title">Chicken</p>
                                </a>
                            </div>
                            <div className="slide-pic">
                                <a href="#">
                                    <img src={samplepic} className="pic" alt="example" /><br />
                                    <p className="category-title">Chicken</p>
                                </a>
                            </div>
                            <div className="slide-pic">
                                <a href="#">
                                    <img src={samplepic} className="pic" alt="example" /><br />
                                    <p className="category-title">Chicken</p>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default QuickLinks;
