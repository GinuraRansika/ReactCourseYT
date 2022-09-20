import React from "react";
import '../../node_modules/@fortawesome/fontawesome-free/js/all'

export default function Navbar(){
    return(
        <nav className="navbar">
            <i className="fa-solid fa-earth-americas logo"></i>    
            <h1 className="logo-name">My Travel Journal.</h1>          
        </nav>
    )
}