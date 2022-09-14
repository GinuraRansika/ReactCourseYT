import React from 'react';
import '../../node_modules/@fortawesome/fontawesome-free/js/all'


// Destructuring the props
export default function Contact2({img, name, phone, email}){
    console.log(img, name, phone, email)
    return(
        <div className='contact-card'>
            <img src={img} alt=''/>
            <h3>{name}</h3>
            <div className='info-group'>
            <i className="fa-solid fa-phone"></i>
                <p>{phone}</p>
            </div>
            <div className='info-group'>
                <i className="fa-solid fa-envelope"></i>
                <p>{email}</p>
            </div>
        </div>
    )
}