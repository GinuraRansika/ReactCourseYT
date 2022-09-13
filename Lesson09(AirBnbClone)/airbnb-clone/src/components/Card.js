import React from "react";
import Card01Image from "../images/card1.png"
import Card02Image from "../images/card2.png"
import Card03Image from "../images/card3.png"
import RedStar from "../images/red-star-2.png"

export default function Card(){
    return(
        <div className="cards-container">
            <div className="card">
                <div className="card-status">SOLD OUT</div>
                <img src={Card01Image} alt="" className="card-image"></img>
                <div className="details">
                    <p className="rating">
                    <img src={RedStar} alt="star" className="star"></img>
                        5.0 (6) <sup>.</sup> USA
                    </p>
                    <p className="card-title"> Life Lessons with Katie Zaferes</p>
                    <p>
                        <span className="card-price">From $136</span>
                        <span className="card-delivered-method"> / person</span>
                    </p>
                </div>
            </div>

            <div className="card">
                <div className="card-status">ONLINE</div>
                <img src={Card02Image} alt="" className="card-image"></img>
                <div className="details">
                    <p className="rating">
                        <img src={RedStar} alt="star" className="star"></img>
                        5.0 (30) <sup>.</sup> USA
                    </p>
                    <p className="card-title"> Learn wedding photography</p>
                    <p>
                        <span className="card-price">From $136</span>
                        <span className="card-delivered-method"> / person</span>
                    </p>
                </div>
            </div>        

            <div className="card">
                <img src={Card03Image} alt="" className="card-image" id="last-card"></img>
                <div className="details">
                    <p className="rating">
                        <img src={RedStar} alt="star" className="star"></img>
                        4.8 (2) <sup>.</sup> USA
                    </p>
                    <p className="card-title">Group Mountain Bike</p>
                    <p>
                        <span className="card-price">From $136</span>
                        <span className="card-delivered-method"> / person</span>
                    </p>
                </div>
            </div>
        </div>
    )
}