import React from 'react';
import '../../node_modules/@fortawesome/fontawesome-free/js/all'

export default function Contact(props){
    console.log(props)
    return(
        <div className='contact-card'>
            <img src={props.img} alt=''/>
            <h3>{props.name}</h3>
            <div className='info-group'>
            <i className="fa-solid fa-phone"></i>
                <p>{props.phone}</p>
            </div>
            <div className='info-group'>
                <i className="fa-solid fa-envelope"></i>
                <p>{props.email}</p>
            </div>
        </div>
    )
}