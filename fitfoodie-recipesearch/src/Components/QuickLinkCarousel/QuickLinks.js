import React, { Component } from 'react';
import samplepic from './QuickLinksImages/recipes.png';
import Chicken from './QuickLinksImages/chicken.jpg';
import './QuickLinks.css';

class QuickLinks extends Component {
    render(){
        return(
            <div className="quicklinks-container">
                <div className="row">
                    <div className="col-sm-12">
                        <h1 className="quick-links-h1">Quick Recipe Categories</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div id="carousel">
                            <div className="slide-pic">
                                <a href="">
                                    <img src={samplepic} className="pic" alt="example" /><br />
                                    <p className="category-title">Chicken</p>
                                </a>
                            </div>
                            <div className="slide-pic">
                                <a href="">
                                    <img src={samplepic} className="pic" alt="example1" /><br />
                                    <p className="category-title">Beef</p>
                                </a>
                            </div>
                            <div className="slide-pic">
                                <a href="">
                                    <img src={samplepic} className="pic" alt="example2" /><br />
                                    <p className="category-title">Vegitarian</p>
                                </a>
                            </div>
                            <div className="slide-pic">
                                <a href="">
                                    <img src={samplepic} className="pic" alt="example3" /><br />
                                    <p className="category-title">Fish</p>
                                </a>
                            </div>
                            <div className="slide-pic">
                                <a href="">
                                    <img src={samplepic} className="pic" alt="example4" /><br />
                                    <p className="category-title">Mexican</p>
                                </a>
                            </div>
                            <div className="slide-pic">
                                <a href="">
                                    <img src={samplepic} className="pic" alt="example5" /><br />
                                    <p className="category-title">Chocolate</p>
                                </a>
                            </div>
                            <div className="slide-pic">
                                <a href="">
                                    <img src={samplepic} className="pic" alt="example6" /><br />
                                    <p className="category-title">Fruit</p>
                                </a>
                            </div>
                            <div className="slide-pic">
                                <a href="">
                                    <img src={samplepic} className="pic" alt="example7" /><br />
                                    <p className="category-title">Salad</p>
                                </a>
                            </div>
                            <div className="slide-pic">
                                <a href="">
                                    <img src={samplepic} className="pic" alt="example8" /><br />
                                    <p className="category-title">Low-calorie Desert</p>
                                </a>
                            </div>
                            <div className="slide-pic">
                                <a href="">
                                    <img src={samplepic} className="pic" alt="example9" /><br />
                                    <p className="category-title">Breakfast</p>
                                </a>
                            </div>
                            <div className="slide-pic">
                                <a href="">
                                    <img src={samplepic} className="pic" alt="example10" /><br />
                                    <p className="category-title">Pasta</p>
                                </a>
                            </div>
                            <div className="slide-pic">
                                <a href="">
                                    <img src={samplepic} className="pic" alt="example11" /><br />
                                    <p className="category-title">Black Bean</p>
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
