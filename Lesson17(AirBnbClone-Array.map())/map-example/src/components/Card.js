import React from "react";
import RedStar from "../images/red-star-2.png"

export default function Card(props){
    let badgeText
    if(props.openSpots === 0)
    {
        badgeText = "SOLD OUT"
    } else if (props.location === "Online"){
        badgeText = "ONLINE"
    } 

    return(
        <div className="card">
            {/* //* IF THE FIRST STATEMENT IS TRUE THE SECOND STATEMENT WILL RUN */}
            {badgeText !== "" && <div className="card-status">{badgeText}</div>}
            <img src={props.img} alt="" className="card-image"></img>
            <div className="details">
                <p className="rating">
                <img src={RedStar} alt="star" className="star"></img>
                    {props.rating} ({props.reviewCount}) <sup>.</sup> {props.location}
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