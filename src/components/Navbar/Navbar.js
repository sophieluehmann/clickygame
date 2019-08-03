import React from "react";
import "./Navbar.css";

class Navbar extends React.Component{
    render() {
        return (
            
            <nav class="navbar navbar-light bg-light" id="sticky">
                <span class="d-flex justify-content-start">Clicky Game</span>
                <span class="d-flex justify-content-center">Click an image to start!</span>
                <span class="d-flex justify-content-end">Current Score {this.props.score} | High Score {this.props.highscore}</span>
            </nav>
            
        );
    }
}


export default Navbar;