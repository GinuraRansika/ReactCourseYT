import React from "react"
import reactLogo from "../images/React-icon.svg.png"

export default function Navbar() {
    return(
        <nav className="navbar">
            <div className="logo">
                <img src={reactLogo} alt="React Logo"/>
                <h3 className="logo-name">ReactFacts</h3>
            </div>
            <div className="logo-description">
                <h4 className="description">React Course - Project 2</h4>
            </div>
        </nav>
    )
}