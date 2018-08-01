import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
    render(){
        return(
            <div className="footer-container">
                <div className="row">
                    <div className="col-sm-3">
                    </div>
                    <div className="col-md-6">
                        <p>About The Developer</p>
                        <hr />
                        <h4>Hi, I am Ashley Taylor and I really enjoy food, being healthy, coding and helping better other peoples lives.<br />
                        This application helped me to do all of the things I enjoy! I hope you enjoyed it as well.</h4>
                        <hr />
                        <h4><a href="http://ashataylor.com"><i className="fas fa-id-card"></i>Portfolio</a></h4>
                        <h4><a href="https://www.linkedin.com/in/0ashleytaylor/"><i className="fab fa-linkedin"></i>LinkedIn</a></h4>
                        <h4><a href="https://github.com/ashleynicole472"> <i className="fab fa-github"></i>GitHub</a></h4>
                    </div>
                    <div className="col-sm-3">
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer;
