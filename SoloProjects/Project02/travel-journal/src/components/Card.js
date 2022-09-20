import React from "react"
import '../../node_modules/@fortawesome/fontawesome-free/js/all'


export default function Card(props){
    return(
        <div className="card-container">
            <div className="image-container">
                <img src= {props.data.imageUrl} alt="berlin"  className="card-image"></img>
            </div>
            <div className="details-container">
                <div className="location-container">
                    <i className="fa-solid fa-location-dot location-icon"></i>
                    <p className="location">{props.data.location}</p>
                    <a href={props.data.googleMapsUrl} className="location-link">View on Google Maps</a>
                </div>
                <h2 className="card-title">{props.data.title}</h2>
                <div className="card-dates"> 
                    {props.data.startDate} - {props.data.endDate}
                </div>
                <div className="card-description">
                    {props.data.description}
                </div>
            </div>
        </div>
    )
}