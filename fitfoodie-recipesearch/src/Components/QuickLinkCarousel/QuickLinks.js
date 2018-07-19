import React, { Component } from 'react';
import samplepic from './QuickLinksImages/recipes.png';
import './QuickLinks.css';

class QuickLinks extends Component {
    constructor(props){
        super(props);
        this.state = {
            hits: [],
            isAQuickLinkedClicked: false,
            quickLinkClicked: ''
        }
        this.whatCircleWasHadleChange = this.whatCircleWasHadleChange.bind(this);
    }

    whatCircleWasHadleChange = (ingredient) => {
        console.log(ingredient);
        var { quickLinkClicked, isAQuickLinkedClicked } = this.state
        this.setState({
            quickLinkClicked: ingredient,
            isAQuickLinkedClicked: true
        })
        console.log(quickLinkClicked);
    }

    // quickSearchOnClick = async (event) => {
    //     //prevents page from reloading after search button is clicked since this
    //     //code is within a form tag.
    //     event.preventDefault()
    //     let { quickLinkClicked, hits, isAQuickLinkedClicked } = this.state
    //     let APPID = '4a967418'
    //     let APPKEY = 'ea1f39ad3a37a863f0efdc88e0cc30bb'
    //     let URL = `https://api.edamam.com/search?q=${quickLinkClicked}&app_id=${APPID}&app_key=${APPKEY}&from=0&to=50&count=50`
    //     let config = {
    //         method: 'GET'
    //     }
    //     //ES6 syntax
    //     try {
    //         let response = await fetch(URL, config);
    //         let responseJSON = await response.json();
    //         this.setState({
    //             isAQuickLinkedClicked: true,
    //             hits: responseJSON.hits
    //         })
    //         console.log(responseJSON);
    //     }catch(e){
    //         console.log(`We are in error`);
    //         console.log(e);
    //     }
    // }

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
                                <a href=''>
                                    <img
                                        onClick={() => this.props.quickLinkSearch('Chicken')}
                                        src={samplepic}
                                        className="pic"
                                        alt="example" /><br />
                                    <p className="category-title">Chicken</p>
                                </a>
                            </div>
                            <div className="slide-pic">
                                <a href="">
                                    <img
                                        onClick={() => this.props.quickLinkSearch('Beef')}
                                        src={samplepic}
                                        className="pic"
                                        alt="example1" /><br />
                                    <p className="category-title">Beef</p>
                                </a>
                            </div>
                            <div className="slide-pic">
                                <a href="">
                                    <img
                                        onClick={() => this.props.quickLinkSearch('Vegitarian')}
                                        src={samplepic}
                                        className="pic"
                                        alt="example2" /><br />
                                    <p className="category-title">Vegitarian</p>
                                </a>
                            </div>
                            <div className="slide-pic">
                                <a href="">
                                    <img
                                        onClick={() => this.props.quickLinkSearch('Fish')}
                                        src={samplepic}
                                        className="pic"
                                        alt="example3" /><br />
                                    <p className="category-title">Fish</p>
                                </a>
                            </div>
                            <div className="slide-pic">
                                <a href="">
                                    <img
                                        onClick={() => this.props.quickLinkSearch('Mexican')}
                                        src={samplepic}
                                        className="pic"
                                        alt="example4" /><br />
                                    <p className="category-title">Mexican</p>
                                </a>
                            </div>
                            <div className="slide-pic">
                                <a href="">
                                    <img
                                        onClick={() => this.props.quickLinkSearch('Chocolate')}
                                        src={samplepic}
                                        className="pic"
                                        alt="example5" /><br />
                                    <p className="category-title">Chocolate</p>
                                </a>
                            </div>
                            <div className="slide-pic">
                                <a href="">
                                    <img
                                        onClick={() => this.props.quickLinkSearch('Fruit')}
                                        src={samplepic}
                                        className="pic"
                                        alt="example6" /><br />
                                    <p className="category-title">Fruit</p>
                                </a>
                            </div>
                            <div className="slide-pic">
                                <a href="">
                                    <img
                                        onClick={() => this.props.quickLinkSearch('Salad')}
                                        src={samplepic}
                                        className="pic"
                                        alt="example7" /><br />
                                    <p className="category-title">Salad</p>
                                </a>
                            </div>
                            <div className="slide-pic">
                                <a href="">
                                    <img
                                        onClick={() => this.props.quickLinkSearch('Dessert')}
                                        src={samplepic}
                                        className="pic"
                                        alt="example8"
                                        id="" /><br />
                                    <p className="category-title">Low-cal Dessert</p>
                                </a>
                            </div>
                            <div className="slide-pic">
                                <a href="">
                                    <img
                                        onClick={() => this.props.quickLinkSearch('Breakfast')}
                                        src={samplepic}
                                        className="pic"
                                        alt="example9" /><br />
                                    <p className="category-title">Breakfast</p>
                                </a>
                            </div>
                            <div className="slide-pic">
                                <a href="">
                                    <img
                                        onClick={() => this.props.quickLinkSearch('Pasta')}
                                        src={samplepic}
                                        className="pic"
                                        alt="example10" /><br />
                                    <p className="category-title">Pasta</p>
                                </a>
                            </div>
                            <div className="slide-pic">
                                <a href="">
                                    <img
                                        onClick={() => this.props.quickLinkSearch('Black-bean')}
                                        src={samplepic}
                                        className="pic"
                                        alt="example11" /><br />
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
