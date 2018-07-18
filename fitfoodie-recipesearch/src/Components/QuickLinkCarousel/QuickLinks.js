import React, { Component } from 'react';
import samplepic from './QuickLinksImages/recipes.png';
import './QuickLinks.css';

class QuickLinks extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
        this.quickSearchHandleClick = this.quickSearchHandleClick.bind(this);
    }

    quickSearchHandleClick = async (event) => {
        //prevents page from reloading after search button is clicked since this
        //code is within a form tag.
        event.preventDefault()
        let { recipeSearchInput, isSearchButtonPressed, hits } = this.state
        let APPID = '4a967418'
        let APPKEY = 'ea1f39ad3a37a863f0efdc88e0cc30bb'
        let URL = `https://api.edamam.com/search?q=${recipeSearchInput}&app_id=${APPID}&app_key=${APPKEY}&from=0&to=50&count=50`
        let config = {
            method: 'GET'
        }
        //ES6 syntax
        try {
            let response = await fetch(URL, config);
            let responseJSON = await response.json();
            this.setState({
                isSearchButtonPressed: true,
                hits: responseJSON.hits
            })
            console.log(responseJSON);
        }catch(e){
            console.log(`We are in error`);
            console.log(e);
        }
    }
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
                                <a href={this.quickSearchHandleClick}>
                                    <img src={samplepic} className="pic" alt="example" id="Chicken" /><br />
                                    <p className="category-title">Chicken</p>
                                </a>
                            </div>
                            <div className="slide-pic">
                                <a href="">
                                    <img src={samplepic} className="pic" alt="example1" id="Beef" /><br />
                                    <p className="category-title">Beef</p>
                                </a>
                            </div>
                            <div className="slide-pic">
                                <a href="">
                                    <img src={samplepic} className="pic" alt="example2" id="Vegitarian"  /><br />
                                    <p className="category-title">Vegitarian</p>
                                </a>
                            </div>
                            <div className="slide-pic">
                                <a href="">
                                    <img src={samplepic} className="pic" alt="example3" id="Fish" /><br />
                                    <p className="category-title">Fish</p>
                                </a>
                            </div>
                            <div className="slide-pic">
                                <a href="">
                                    <img src={samplepic} className="pic" alt="example4" id="Mexican" /><br />
                                    <p className="category-title">Mexican</p>
                                </a>
                            </div>
                            <div className="slide-pic">
                                <a href="">
                                    <img src={samplepic} className="pic" alt="example5" id="Chocolate" /><br />
                                    <p className="category-title">Chocolate</p>
                                </a>
                            </div>
                            <div className="slide-pic">
                                <a href="">
                                    <img src={samplepic} className="pic" alt="example6" id="Fruit" /><br />
                                    <p className="category-title">Fruit</p>
                                </a>
                            </div>
                            <div className="slide-pic">
                                <a href="">
                                    <img src={samplepic} className="pic" alt="example7" id="Salad" /><br />
                                    <p className="category-title">Salad</p>
                                </a>
                            </div>
                            <div className="slide-pic">
                                <a href="">
                                    <img src={samplepic} className="pic" alt="example8" id="Dessert" /><br />
                                    <p className="category-title">Low-cal Dessert</p>
                                </a>
                            </div>
                            <div className="slide-pic">
                                <a href="">
                                    <img src={samplepic} className="pic" alt="example9" id="Breakfast" /><br />
                                    <p className="category-title">Breakfast</p>
                                </a>
                            </div>
                            <div className="slide-pic">
                                <a href="">
                                    <img src={samplepic} className="pic" alt="example10" id="Pasta" /><br />
                                    <p className="category-title">Pasta</p>
                                </a>
                            </div>
                            <div className="slide-pic">
                                <a href="">
                                    <img src={samplepic} className="pic" alt="example11" id="Black-bean" /><br />
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
