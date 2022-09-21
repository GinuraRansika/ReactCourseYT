import React from "react";

export default function Header(){
    return(
        <header className="header">
            <img src={require("../images/troll-face.png")} alt="" className="header-image"/>
            <h2 className="header-title">Meme Generator</h2>
            <h4 className="header-project"> React Course - Project 4</h4>
        </header>
    )
}