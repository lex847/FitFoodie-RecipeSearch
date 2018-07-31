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
        // this.whatCircleWasHadleChange = this.whatCircleWasHadleChange.bind(this);
    }

    // whatCircleWasHadleChange = (ingredient) => {
    //     console.log(ingredient);
    //     var { quickLinkClicked, isAQuickLinkedClicked } = this.state
    //     this.setState({
    //         quickLinkClicked: ingredient,
    //         isAQuickLinkedClicked: true
    //     })
    //     console.log(quickLinkClicked);
    // }

    render(){
        let carouselNames = ['Chicken','Beef','Vegitarian','Fish','Mexican','Chocolate','Fruit','Salad','Dessert','Breakfast','Pasta','Black-bean']
        const suggestedSearch = carouselNames.map((name) => {
            return(
                <div className="slide-pic">
                    <a href=''>
                        <img
                            onClick={(event) => this.props.quickLinkSearch(event, {name})}
                            src={samplepic}
                            className="pic"
                            alt="example" /><br />
                        <p className="category-title">{name}</p>
                    </a>
                </div>
            )
        })
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
                            {suggestedSearch}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default QuickLinks;
