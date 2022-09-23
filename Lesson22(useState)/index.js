/*
    * useState is one of many what are called hooks in react 
    * if you do
        import React, {useState} from "react"
        ? you can use 
            useState() within your component 
    * But if You do
        import React from "react"
        ? you can use
            React.useState() within your component
*/


function App() {
    const result = React.useState("Hello")
    /*
        ? whatever I put inside of parentheses when I'm calling useState is going to be
        ? the default value for the state variable that I want to save
        ? 
    */
    console.log(result)
    return (
        <div className="state">
            <h1 className="state--title">Is state important to know?</h1>
            <div className="state--value">
                <h1>{result[0]}</h1>
            </div>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);