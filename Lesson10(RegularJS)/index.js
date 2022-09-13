function App() {
    const firstName = "Ginura";
    const lastName = "Ransika";
    const date = new Date();

    return(
        <div>
            {/* // * if you use (regular js) like below it won't work */}
            <h1>Hello firstName + " " +  lastName!</h1>

            {/* //* but if you want to use (regular js) you need to use curly brackets */}
            {/* // ? Anything that i put inside of my curly braces can be run as js code */}
            <h1>Hello {firstName} {lastName}!</h1>
            <p>It is currently about {date.getHours() % 12} : {new Date().getMinutes()}</p>
        </div>
    )
}

// ! Better way to use regular js in jsx
// * should put js outside of the return value
function App2(){
    const date = new Date()
    const hours = date.getHours();
    const minutes = date.getMinutes();
    let timeOfDay

    if (hours < 12)
    {
        timeOfDay = "Morning"
    } else if (hours >= 12 && hours < 17)
    {
        timeOfDay = "Afternoon"
    } else 
    {
        timeOfDay = "Night"
    }

    return(
        <div>
            <h2>Good {timeOfDay} !</h2>
            <p>It is currently about {hours} : {minutes}</p>
        </div>
    )
}


ReactDOM.render(<div><App/><App2/></div>, document.getElementById('root'));