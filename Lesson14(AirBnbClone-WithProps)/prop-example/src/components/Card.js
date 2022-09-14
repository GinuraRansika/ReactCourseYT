import React from "react";
import RedStar from "../images/red-star-2.png"

export default function Card(props){
    return(
        <div className="card">
            <div className="card-status">SOLD OUT</div>
            <img src={props.img} alt="" className="card-image"></img>
            <div className="details">
                <p className="rating">
                <img src={RedStar} alt="star" className="star"></img>
                    {props.rating} ({props.reviewCount}) <sup>.</sup> {props.country}
                </p>
                <p className="card-title"> {props.title}</p>
                <p>
                    <span className="card-price">From ${props.price}</span>
                    <span className="card-delivered-method"> / person</span>
                </p>
            </div>
        </div>
    )
}