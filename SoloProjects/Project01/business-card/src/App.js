import About from './components/About';
import Interests from './components/Interests';
import Info from './components/Info';
import Footer from './components/Footer';
import React from 'react';

export default function App(){
    return(
        <div className="container">
            <Info/>
            <About/>
            <Interests/>
            <Footer/>
        </div>
    )
}