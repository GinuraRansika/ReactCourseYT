import React from "react";
import gallery from '../images/photo-grid.png'

export default function Hero(){
    return(
        <div className="hero-container">
            <div className="hero-gallery">
                <img src={gallery} alt=""></img>
            </div>
            <div className="hero-text-part">
                <h1 className="hero-title">Online Experiences</h1>
                <p className="hero-description">
                    Join unique interactive activities led by one-of-a-kind-hosts-all without leaving home
                </p>
            </div>
        </div>
    )
}