function App() {
    const [starWarsData, setStarWArsData] = React.useState({})


    /*
        ! Let's start refactoring the code here to use the useEffect hook 
        * as we did with the useState with do same with the useEffect 
            ? So I can create a side effect just by using React.useEffect()
        
        ! useEffect() has one required parameter and an optional second parameter
            ? 1.) First parameter is a function (callback function)
    */

    // ! side effect 
        /* 
            ! first parameter 
                * this function acts as a place for us to be able to put our side effects code 
                    ? that fetch request is considered as a sideEffect because it's reaching outside of react's ecosystem 
                    ? but also trying to set some state in the process 
                    ? but before it was running infinitely
        */
       
    // * If you haven't give the second parameter to useEffect it will be same as before it will run infinitely but it will run after the return()
    React.useEffect(function() {
        fetch("https://swapi.dev/api/people/1")
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setStarWArsData(data)
            })
    })
    console.log("Component Rendered") 

    return (
        <main>
            <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
        </main>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);