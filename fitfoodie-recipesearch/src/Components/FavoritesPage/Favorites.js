import React, { Component } from 'react';
import './Favorites.css';

class Favorites extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="faves-container">
                <h1>{this.props.faves}</h1>
                <h2>Within faves !!</h2>
            </div>
        )
    }
}

export default Favorites;
