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
        /*
        ? useState is an array where the 
        ?   first item is the value of the state that we are hoping to save 
        ?   second item is a function
        ? Since useState will be returned an array we can destructure that array 
        ?   immediately upon receiving it as a variable and then we can provide 
        ?   2 variable values to the value and the function

    */
    const [result,returnedFunction] = React.useState("Hello")
    console.log(result)
    return (
        <div className="state">
            <h1 className="state--title">Is state important to know?</h1>
            <div className="state--value">
                <h1>{result}</h1>
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