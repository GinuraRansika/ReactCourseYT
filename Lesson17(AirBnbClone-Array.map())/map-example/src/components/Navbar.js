import React from "react";
import airLogo from "../images/Airbnb-Logo.wine.png"

export default function Navbar() {
    return(
        <div className="navbar-container">
            <nav className="navbar">
                <img src={airLogo} alt="logo" className="logo"></img>                 
            </nav>
        </div>
    )
}