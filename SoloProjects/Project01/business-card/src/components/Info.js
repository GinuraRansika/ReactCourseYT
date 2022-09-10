import React from 'react';
import ProfilePicture from '../images/5C43B49B-EFC8-4B87-9BD7-AA643CFAC71E_1_105_c.jpeg'

export default function Info(){
    return(
        <div className='info-container'>
            <img src={ProfilePicture} alt='' className='profile-picture'></img>
            <div className='info-basic-details'>
                <h2>Ginura Ransika</h2>
                <h3>Software Engineer</h3>
                <h4>All the Way Up!</h4>
            </div>
            <div className='info-buttons'>
                <button id='email-button'>
                    <a href="https://mail.google.com/mail/u/0/#inbox" target={'_blank'}>
                        <i className="fa-solid fa-envelope icon"></i>Email
                    </a>
                </button>
                <button id='linkedin-button'>
                    <a href="https://www.linkedin.com/in/ginura-ransika/" target={'_blank'}>
                        <i className="fa-brands fa-linkedin icon"></i>LinkedIn
                    </a>
                </button>
            </div>
        </div>
    )
}